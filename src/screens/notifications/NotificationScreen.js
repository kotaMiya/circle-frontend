import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';

class NotificationScreen extends Component {

    static navigationOptions = {
        headerStyle:  { backgroundColor: Colors.$orangeColor },
        tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="notifications-none" size={25} color={tintColor}/>
            )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Notification</Text>
            </View>
        )
    }
}

export default NotificationScreen;