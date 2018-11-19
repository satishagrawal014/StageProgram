/* import React, { Component } from 'react';

import {
   View, Image
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import navigation from './App/pages/Home';

import About from './App/pages/About';


const Drawer = createDrawerNavigator ({
 Home: { screen: navigation},
 About: { screen: About}
})

export default Drawer */


/* import Drawer from './App/pages/DrawNav';

export default Drawer; */


import React, { Component } from 'react';

import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation';

import Navigation from './App/screens/Navigation';

import Icon from 'react-native-vector-icons';


class HamburgerIcon extends Component {

  toggleDrawer = () => {

    /*console.log(this.props.navigationProps); */

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

          <Image
            source={require('./assets/humbger.png')}
            style={{ width: 25, height: 25, marginLeft: 20 }}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

class Custom_Side_Menu extends Component {

  render() {

    return (

      <View style={styles.sideMenuContainer}>

        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
          style={styles.sideMenuProfileIcon} />

        <View style={{ width: '100%', height: 1, backgroundColor: '#cc0000', marginTop: 20 }} />

        <View style={{ width: '100%' }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}
              style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > About Us </Text>

          </View>

          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}
              style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Second') }} > Privacy Policy </Text>

          </View>


          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
              style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Terms of service </Text>

          </View>

          <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
              style={styles.sideMenuIcon} />

            <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Contact Us </Text>

          </View>


        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />


      </View>
    );
  }
}

class StageProgram extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> Stage Program</Text>

      </View>
    );
  }
}


class AboutUs extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> About Us</Text>

      </View>
    );
  }
}

class SecondActivity extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>


        <Text style={{ fontSize: 23 }}> Privacy Policy </Text>

      </View>
    );
  }
}

class ThirdActivity extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> Terms of Service </Text>

      </View>
    );
  }
}

class FourthActivity extends Component {

  constructor(props) {

    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> Contact Us </Text>

      </View>
    );
  }
}

const StageProgram_StackNavigator = createStackNavigator({
  First: {
    screen: Navigation,
    navigationOptions: ({ navigation }) => ({
      title: 'Stage Program',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#cc0000',
        height: 40
      },
      headerTintColor: '#fff',
    })
  },
});


const AboutUs_StackNavigator = createStackNavigator({
  First: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#cc0000',
        height: 40
      },
      headerTintColor: '#fff',
    })
  },
});


const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: SecondActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'Privacy Policy',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#cc0000',
        height: 40
      },
      headerTintColor: '#fff',
    })
  },
});


const ThirdActivity_StackNavigator = createStackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'ThirdActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#cc0000',
        height: 40
      },
      headerTintColor: '#fff',
    })
  },
});

export default MyDrawerNavigator = createDrawerNavigator({
  StageProgram: {
    screen: StageProgram_StackNavigator
  },

  About: {
    screen: AboutUs_StackNavigator
  },

  SecondStack: {
    screen: SecondActivity_StackNavigator
  },

  ThirdStack: {
    screen: ThirdActivity_StackNavigator
  }
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 100,
  });


const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center'

  },

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 150 / 2
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20

  },

  menuText: {

    fontSize: 15,
    color: '#222222',

  }

}); 
