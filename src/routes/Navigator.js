import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import { CreateEventScreen } from '../screens/createEvent';

export default StackNavigator({
    Home: { screen: HomeNavigator },
    CreateEvent: { screen: CreateEventScreen }
}, {
    mode: 'modal',
});