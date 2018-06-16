import { FETCH_EVENTS } from './actions';

const INITIAL_STATE = {
    myEvents: {
        data: [],
        isFetched: false,
        error: {
            on: false,
            message: null
        }
    }
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case `${FETCH_EVENTS}_PENDING`:
            return INITIAL_STATE;
        case `${FETCH_EVENTS}_FULFILLED`:
            return {
                ...state,
                myEvents: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            }
        case `${FETCH_EVENTS}_REJECTED`: 
            return {
                myEvents: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error when fetching events'
                    }
                }
            }
        default: 
            return state;
    }
};