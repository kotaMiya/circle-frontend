import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/LoadingScreen';

export default class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.root}>
                <ActivityIndicator size="large" />
            </View>
        )
    };
}

