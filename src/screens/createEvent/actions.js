import { CircleApi } from '../../../constants/api';
import { fetchMyEvents } from '../home/actions';
const circleApi = new CircleApi();

export const CREATE_EVENT = "CREATE_EVENT";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_ERROR = "CREATE_EVENT_ERROR";


export const createEvent = (args) => async dispatch => {
    dispatch({ type: CREATE_EVENT });
    
    try {
        await circleApi.createCircleEvents(args);
        dispatch({ type: CREATE_EVENT_SUCCESS });
    } catch(e) {
        return dispatch({ type: CREATE_EVENT_ERROR });
    }

    return await dispatch(fetchMyEvents());
}   

