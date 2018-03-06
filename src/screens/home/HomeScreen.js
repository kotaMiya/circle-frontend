import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CircleApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { CircleLists } from './components/CircleLists';
import styles from './styles/HomeScreen';

const circleApi = new CircleApi();


class HomeScreen extends Component {

    static defaultProps = {
        circleApi
    }

    state = {
        loading: false,
        circles: []
    }


    async componentDidMount() {        
        this.setState({ loading: true });
        const circlesTest = await this.props.circleApi.fetchGroupCircles(); 
        const circles = circleApi.circles;
        this.setState({ loading: false, circles });
    }

    render() {
        if (this.state.loading) {
            return (
                <LoadingScreen />
            )
        }
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>Home Screen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <CircleLists circles={this.state.circles} />
                </View>
            </View>
        )
    }
}


export default HomeScreen;