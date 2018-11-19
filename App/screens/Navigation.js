import React from 'react';

import { createMaterialTopTabNavigator } from 'react-navigation';

import Top from './Top';
import Bihar from './Bihar';
import PunHari from './PunHar';
import Rajasthani from './Rajasthan';

const RootStack = createMaterialTopTabNavigator({
    TOP: Top,
    BIHAR: Bihar,
    PUNJAB : PunHari,
    HARYANA : Top,
    RAJASTHAN: Rajasthani,
    OTHER: Bihar
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