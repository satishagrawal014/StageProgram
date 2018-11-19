import React, { Component } from 'react';

import { View } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import TabNavigation from './Home';

import About from './About';


const Drawer = createDrawerNavigator({
    Home: { screen: TabNavigation },
    About: { screen: About }
})

export default class DrawerNav extends React.Component {
    render() {
        return (
                 <Drawer />
        );
    }
}