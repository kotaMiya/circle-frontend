import { User } from '../../../constants/api';
import * as firebase from 'firebase';
import firebaseConfig from '../../../constants/firebaseConfig';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        user: data.user,
        token: data.token,
    }
}

function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export function login(token, provider) {
    return async (dispatch) => {
        dispatch({ type: LOGIN });

        try {   
            const data = await User.login({ token, provider });
       
            return dispatch(loginSuccess(data));
            // firebase.auth().createUserWithEmailAndPassword(email, pass)
            // .then((resp) => {
            //     console.log('check firebase', resp);
            //     return dispatch(loginSuccess(resp));
            // }) 
            // .catch((error) => disptach(loginError(error)));
        } catch(e) {
            return dispatch(loginError(e));
        }
    }
}

export function logout() {
    console.log('logout function');
    return {
        type: LOGOUT_SUCCESS,
    }
}