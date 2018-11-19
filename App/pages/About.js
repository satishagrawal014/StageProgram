import React, { Component } from 'react';

import { 
    View,
    Text
} from 'react-native';

import { Icon, Container, Header, Content, Left } from 'native-base';

export default class About extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'red'}}>
                <Text style={{justifyContent: 'center', alignItems: 'center'}}> This is Home Page </Text>
                </Header>
            </Container>   
        );
    }
}