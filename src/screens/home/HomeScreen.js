import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CircleApi from '../../../constants/api';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}


export default HomeScreen;