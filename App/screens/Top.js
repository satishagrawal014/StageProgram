import React, { Component } from 'react';

import { Text, View, FlatList, Image, TouchableOpacity, ToastAndroid } from 'react-native';

import { createStackNavigator } from 'react-navigation';

/* import DetailsScreen from './Details'; */ 

export default class Top extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  renderItem = ({ item }) => {
    return (
    <TouchableOpacity onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
        <Image style={{ width: 350, height: 180, marginTop: 5, marginLeft: 5, borderRadius: 10 }}
          source={{ uri: item.image }} />
        <View>
          <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 5 }}>
            {item.book_title}
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 15, marginTop: 2 }}>
            {item.author}
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 15, }}>Views : 6.4 M,4 month ago </Text> 
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#cc0000',
        height: 1,
      }}
    />
  )

  componentDidMount() {
    var params = {
      PageNumber: 1,
      PageSize: 10,
      StateId: 5
  };
  var formData = new FormData();

for (var k in params) {
    formData.append(k, params[k]);
}

  var request = {
    method: 'POST',
    headers: headers,
    body: formData
};

    const url = 'http://stageprogram.in/GetVideo'
    fetch(url,request)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: responseJson.book_array
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

 /*const RootStack = createStackNavigator (
  {
    Home: Top,
    Details: DetailsScreen,
  },
  {
    initialRoutName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
} */ 