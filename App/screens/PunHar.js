import React, { Component } from 'react';

import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default class Top extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
    }
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image style={{ width: 350, height: 180, marginTop: 5, marginLeft: 5 }}
          source={{ uri: item.image }} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>
            {item.book_title}
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 5 }}>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'grey',
        height: 0.5,
      }}
    />
  )

  componentDidMount() {
    const url = 'https://www.json-generator.com/api/json/get/ccLAsEcOSq?indexnt=1'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={item => item.book_title}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}