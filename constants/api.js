
import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS == 'ios') {
    url = 'http://localhost:3000/api';
} else {
    url = 'http://10.0.3.2:3000/api';
}

axios.defaults.baseURL = url;

const fakeCircleId = '5b20cb473bcfa01189829b82';

class CircleApi {
    constructor() {
        this.circleId = fakeCircleId;
        this.path = `/circles/${this.circleId}/events`;
        this.events = [];
    }

    async fetchCircleEvents() {

        try {
            const { data } = await axios.get(this.path);
            return data.events;
        } catch (e) {
            throw e;
        }
    }

    async createCircleEvents(args) {
        try {
            const res = await axios.post(`${this.path}/new`, { ...args });
            return res;
        } catch(e) {
            throw e;
        }
    }
}

export {
    CircleApi,
};

class UserApi {
    constructor() {
        this.path = '/users';
    }

    async login(args) {
        try {
            const { data } = await axios.post(`${this.path}/auth`, args);
            return data;
        } catch(e) {
            throw e;
        }
    }
}

export const User = new UserApi();