import React, { Component } from 'react';

import { Text, View, FlatList, Image, TouchableOpacity, ToastAndroid} from 'react-native';

import { createStackNavigator } from 'react-navigation';

/* import DetailsScreen from './Details'; */ 

export default class Bihar extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  renderItem = ({ item }) => {
    
   /*  console.log(item) */
    return (
        <TouchableOpacity onPress={() => ToastAndroid.show(item.VideoTitle, ToastAndroid.SHORT)}>
        <Image style={{ width: 350, height: 180, marginTop: 5, marginLeft: 5, borderRadius: 10 }}
          source={{ uri: item.MainThumbnailUrl }} />
        <View>
          <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 5 }}>
            {item.VideoTitle}
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 15, marginTop: 2, color: 'gray' }}>
            {item.VideoDescription}
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 15, flexDirection:'row'}}>{item.TotalViews} views {item.HowLong}</Text> 
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
 /* fetch('http://stageprogram.in/GetVideo', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    PageNumber: 1,
    PageSize: 10,
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });*/
    const url = 'http://stageprogram.in/GetVideo'
    fetch(url,{
      method: 'POST',
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PageNumber: 1,
        PageSize: 10,
        StateId: 5,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
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
          keyExtractor={item => item.VideoTitle}
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