import React from 'react';

import { createMaterialTopTabNavigator } from 'react-navigation';

import Top from './Top';
import Bihar from './Bihar';
import PunHari from './PunHar';
import Rajasthani from './Rajasthan';
import Other from './Other';

const RootStack = createMaterialTopTabNavigator({
    TOP: Top,
    BIHAR: Bihar,
    PUNJABHARYANA  : PunHari,
    RAJASTHAN: Rajasthani,
    OTHER: Other
}, {
        tabBarOptions: {
            scrollEnabled:true,
            style: {
                backgroundColor: '#cc0000',
            }
        }
    });

export default class Navigation extends React.Component {
    render() {
        return (
            
                <RootStack />
        );
    }
}