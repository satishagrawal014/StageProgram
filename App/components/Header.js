import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Humbger from './Menu';


export default class Header extends React.Component {
    render() {
        return (
            /* Header View */ 
            <View style={styles.Container}>

                <View style={styles.statusbar}></View>

                <View style={styles.header}>
                    < Humbger />
                    <Text style={styles.headertext}>Stage Program</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    /* Status Bar Color */ 
    statusbar: {
        backgroundColor: '#b80000',
        height: 24
    },
    /* Header */ 
    header: {
        backgroundColor: '#e70020',
        height: 56,
        flexDirection: 'row'
    },
    /* Header Text */ 
    headertext: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        paddingLeft: 10
    },
});