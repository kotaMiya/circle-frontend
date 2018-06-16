import { CircleApi } from '../../../constants/api';

const circleApi = new CircleApi();

export const FETCH_EVENTS = 'FETCH_EVENTS';

export const fetchMyEvents = () => ({
    type: FETCH_EVENTS,
    payload: circleApi.fetchCircleEvents(),
});

