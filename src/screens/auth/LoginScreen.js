import React, { Component } from 'react';
import { Text, View, Alert, Image } from 'react-native';

import { Facebook, Google } from 'expo';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


import { login } from './actions';
import { LoadingScreen } from '../../commons';

import Fonts from '../../../constants/Fonts';
import styles from './styles/LoginScreenStyle';
import styled from 'styled-components/native';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';
import firebaseConfig from '../../../constants/firebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';


const FlexContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

const Logo = styled.Image`
    width: 180;
    height: 180;
`;


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: ''
        }
    }


    requiredMessage = input => {
        return input === '' ? <FormValidationMessage>Error message</FormValidationMessage> : <View/>
      };


    componentWilldMount() {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ isLoggedIn: true });
            } else {
              this.setState({ isLoggedIn: false });
            }
          })
    }

    _onLoginPress = name => {
        if (name === 'facebook') {
            this._loginWithFacebook();
        } else {
            this._loginWithGoogle();
        }
    }

    async _loginWithFacebook() {
        console.log('facebook login triggered');

        const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
            permissions: ['public_profile', 'email'],
        }); 
        
        if (type === 'success') {
            this.props.login(token, 'facebook');
        } else {
            throw new Error('Something wrong with Facebook auth');
        }

    }

    async _loginWithGoogle() {
        try {
            console.log('google login triggered');

            const result = await Google.logInAsync({
                iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
                iosClientId: googleConfig.IOS_CLIENT_ID,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.props.login(result.accessToken, 'google');
            } else {
                return { cancelled: true }
            }
        } catch(e) {
            throw e;
        }
    }

    render() {
        console.log(this.props.isLoading);
        if (this.props.isLoading) {
            return <LoadingScreen />;
        }

        const {name, email} = this.state;
        return (
            
            <FlexContainer>

                <FlexContainer>
                    <Logo source={require('../../../assets/images/circle.jpg')}/>
                    <Text style={Fonts.loginTitle}>Circle</Text>
                </FlexContainer>


                <View style={styles.formWrapper}>
                    <FormInput 
                        placeholder="Name" 
                        onChangeText={ (text) => this.setState({name}) } 
                        inputStyle={{
                            width: 60,
                            }}
                    />
                    {this.requiredMessage(name)}
        
                    <FormInput placeholder="Email" onChangeText={ (text) => this.setState({email}) } />
                    {this.requiredMessage(email)}

                    <Button
                        title="Login"
                        // onPress={ () => console.log('hello') }
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: Colors.$orangeColor,
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 50,
                            marginTop: 10,
                        }}
                    />

                </View>

                <Text style={styles.textOr}>or</Text>

                <View style={styles.buttonWrapper}>

                    <Button
                        title="Login with Facebook"
                        onPress={() => this._onLoginPress('facebook')}
                        textStyle={{ 
                            color: '#3b5998',
                        }}
                        buttonStyle={{
                            backgroundColor: Colors.$whiteColor,
                            height: 45,
                            borderColor: "#3b5998",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 15
                        }}
                        containerStyle={{ marginTop: 40 }}
                    />

                    <Button
                        title="Login with Google"
                        onPress={() => this._onLoginPress('google')}
                        textStyle={{ 
                            color: '#db3236',
                        }}
                        buttonStyle={{
                            backgroundColor: Colors.$whiteColor,
                            height: 45,
                            borderColor: '#db3236',
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 15
                        }}
                    />
                </View>

                <View style={styles.footerWrapper}>
                    <Text style={styles.footerText}>Term of use</Text>
                    <Text style={styles.footerText}>Sign up</Text>
                </View>

            </FlexContainer>
        );
    }
}

export default connect(
    state => ({
        isLoading: state.user.isLoading,
    }), 
    { login }
  )(LoginScreen)