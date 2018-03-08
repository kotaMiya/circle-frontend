import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {

    static navigationOptions = {
        headerStyle:  { backgroundColor: Colors.$orangeColor },
        tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user-o" size={25} color={tintColor}/>
            )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

export default ProfileScreen;