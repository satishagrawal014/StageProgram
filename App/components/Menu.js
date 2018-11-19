import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Menu extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Image
                        source={require('../images/humbger.png')}
                        style={{ width: 30, height: 30, marginLeft: 15, marginTop: 10 }}
                    />
                </TouchableOpacity>

            </View>
        );
    }
}