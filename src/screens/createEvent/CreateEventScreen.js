import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import styles from './styles/CreateEventScreenStyle';
import Colors from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

import { CreateCircleForm } from './components';
import { createEvent } from './actions';
import { LoadingScreen } from '../../commons';




class CreateEventScreen extends Component { 
    static navigationOptions = ({ navigation }) => {
        const params =  navigation.state.params || {};
        return {
            title: 'Create a new event',
            headerStyle: {
                backgroundColor: Colors.$whiteColor,
            },
            headerTitleStyle: {
                color: Colors.$blackRock,
            },
            headerLeft: (
                <TouchableOpacity 
                    style={styles.closeIcon}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons 
                        name="close"
                        style={{
                            fontSize: 30,
                            color: Colors.$blackRock,
                        }}
                    />
                </TouchableOpacity>
            )
        }
    }

    state = {
        isDateTimePickerVisible: false,
        date: moment(),
    }

    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    _handleDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    _handleDatePicked = date => {
        this.setState({ date });
        this._handleDateTimePicker();
    }

    _checkTitle() {
        const { date } = this.state;
        if (date > moment()) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }
        return 'Pick a event date';
    }   

    _checkIfSubmitButtonDisabled() {
        const { date } = this.state;

        if (date > moment()) {
            return false;
        }
        return true;
    }


    _createEvent = async (values) => {
        await this.props.createEvent(values);
        this.props.navigation.goBack();
    }

    render() {
       const { event } = this.props;
       if (event.isLoading) {
           return (
               <View style={styles.root}>
                   <LoadingScreen />
               </View>
           ) 
       } else if (event.error.on) {
           return (
               <View style={styles.root}>
                   <Text>{ event.error.message }</Text>
               </View>
           )
       }
        return (
            <View style={styles.root}>
                <CreateCircleForm 
                    createEvent={this._createEvent}
                    showDateTimePicker={this._showDateTimePicker}
                    checkTitle={this._checkTitle()}
                />
                <DateTimePicker 
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._handleDateTimePicker}
                    mode="datetime"
                />
            </View>
        );
    }
}

export default connect(
    state => ({
        event: state.createEvent
    }),
    { createEvent }
)(CreateEventScreen)