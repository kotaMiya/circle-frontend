import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { 
    HomeScreen,
    SearchScreen,
    CircleScreen,
    NotificationScreen, 
    ProfileScreen
} from '../screens';

import styled from 'styled-components/native';
import styles from '../../'

const AddButton = styled(TouchableOpacity)`
    marginRight: 10;
`;

const NavbarDefaultStyle = {
    backgroundColor: Colors.$whiteColor,
};

export default TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Circle',
            headerTitleStyle: {
                fontFamily: 'poiretOneRegular',
                fontSize: 35,
                fontWeight: 'bold'
            },
            headerStyle: NavbarDefaultStyle,
            headerRight: (
                <AddButton 
                    onPress={() => navigation.navigate('CreateEvent')}
                >
                    <MaterialIcons 
                        name="add"
                        style={{
                            fontSize: 30,
                            color: Colors.$deepKoamaru,
                        }}
                    />
                </AddButton>
            ),  
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={25} color={tintColor}/>
            )
        })
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            headerStyle:  NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name="search" size={25} color={tintColor}/>
            )
        }
    },
    Circle: {
        screen: CircleScreen,
        navigationOptions: {
            headerStyle:  NavbarDefaultStyle,
            tabBarIcon: <Image source={require('../../assets/images/circle2.jpg')}/>,
        }
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            headerStyle:  NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                    <MaterialIcons name="notifications-none" size={25} color={tintColor}/>
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerStyle:  NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="user-o" size={25} color={tintColor}/>
            )
        }
    }
}, {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: Colors.$orangeColor,
        inactiveTintColor: Colors.$blackBlueColor,
        indicatorStyle: { backgroundColor: Colors.$orangeColor },
        pressColor: Colors.$orangeColor,
        style: {
            backgroundColor: 'white'
        }
    }
});