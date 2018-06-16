import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { HomeReducer, CreateEventReducer, UserReducer } from '../screens';
import navigation from '../routes/navigationReducer';


export default combineReducers({
    home: HomeReducer,
    createEvent: CreateEventReducer,
    user: UserReducer,
    form,
    navigation
});