// export const fetchCircles = () =>
//     fetch('http://localhost:3000/api/circles')
//     .then(res => res.json());


import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5a9cf49f78bd5ac13e602eb9';

class CircleApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/circles`;
    }

    async fetchGroupCircles() {
        const { data } = await axios.get(this.path);

        return data.circles;
    }
}

export {
    CircleApi
};