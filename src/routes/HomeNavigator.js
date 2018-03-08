import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import { 
    HomeScreen,
    NotificationScreen, 
    ProfileScreen
} from '../screens';


export default TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Notification: {
        screen: NotificationScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}, {
    swipeEnabled: true,
    animationEnabled: true,
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