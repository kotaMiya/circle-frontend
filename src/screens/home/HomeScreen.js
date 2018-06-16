import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { LoadingScreen } from '../../commons';
import { EventLists } from './components/EventLists';
import { HomeCalendar } from './components/HomeCalendar';
import { fetchMyEvents } from './actions';

import styles from './styles/HomeScreen';



class HomeScreen extends Component {    
    componentDidMount() {          
        this.props.fetchMyEvents();
    }

    render() {
        console.log('from home screen', this.props);
        const {
            myEvents: {
                isFetched,
                data,
                error,
            },
        } = this.props;
        
        if (!isFetched) {
            return (
                <LoadingScreen />
            )
        } else if (error.on) {
            return (
                <View>
                    <Text>{ error.message }</Text>
                </View>
            )
        }
     
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <EventLists events={data} />
                </View>
                <View style={styles.bottomContainer}>
                    <HomeCalendar />
                </View>
            </View>
        )
    }
}


export default connect(
    state => ({
        myEvents: state.home.myEvents,
      }),
      { fetchMyEvents }
)(HomeScreen) 