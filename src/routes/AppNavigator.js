import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

import { LoginScreen } from '../screens';
import Navigator from './Navigator';


@connect(
    state => ({
        navigation: state.navigation,
        user: state.user
    })
)
export default class AppNavigator extends Component {
    state = {};


    render() {

        const middleware = createReactNavigationReduxMiddleware(
            "root",
            state => this.props.navigation,
          );
        const addListener = createReduxBoundAddListener("root");

        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            addListener,
        });

        console.log(navigation);

        console.log('really', this.props.user);

        
        if (this.props.user.isLoggedIn) {
            return <Navigator navigation={navigation} />;
        }

        return <LoginScreen />;
    }
}

export const router = Navigator.router;