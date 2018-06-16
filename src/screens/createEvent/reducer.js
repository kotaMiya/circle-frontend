import { CREATE_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR } from './actions';

const INITIAL_STATE = {
    error: {
        on: false,
        message: null
    },
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_EVENT:
            return {
                ...INITIAL_STATE,
                isLoading: true
            };
        case CREATE_EVENT_SUCCESS: 
            return {
                ...INITIAL_STATE,
                isLoading: false
            };
        case CREATE_EVENT_ERROR:
            return { 
                error: {
                    on: true,
                    message: 'Error happens'
                },
                isLoading: false
            }
        default:
            return state;
    }
}