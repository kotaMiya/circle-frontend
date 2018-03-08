import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CircleApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { CircleLists } from './components/CircleLists';
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors';

const circleApi = new CircleApi();


class HomeScreen extends Component {

    static defaultProps = {
        circleApi
    }

    static navigationOptions = {
        headerStyle:  { backgroundColor: Colors.$orangeColor },
        tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home-outline" size={25} color={tintColor}/>
        )
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