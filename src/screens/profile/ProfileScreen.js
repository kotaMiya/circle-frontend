import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../auth/actions';


class ProfileScreen extends Component {

    // state = {
    //     isLoggedIn: this.props.isLoggedIn
    // }

    onPressEvent = () => {
        logout();
        console.log(this.props.user.isLoggedIn);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Profile Screen</Text>
                <TouchableOpacity onPress={ () => this.onPressEvent() }>
                    <Text>hello</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(
    state => ({
        user: {
            isLoggedIn: state.user.isLoggedIn
        }
    })
)(ProfileScreen);