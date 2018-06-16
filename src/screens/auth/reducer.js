import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './actions';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    token: null,
    info: {},
    error: null
  };

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                token: action.token,
                info: action.user,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        case LOGOUT_SUCCESS:
            return {
                isLoggedIn: false,
                isLoading: false,
                token: null,
                info: {},
                error: null
            }
            
        default: 
            return state;
    }
};