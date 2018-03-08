// export const fetchGroupCircles = () =>
//     fetch('http://localhost:3000/api/groups/5a9cf49f78bd5ac13e602eb9/circles')
//     .then(res => function(res) {
//         const { data } = res.json;
//         data.circles;
//     });


import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS == 'ios') {
    url = 'http://localhost:3000/api';
} else {
    url = 'http://10.0.3.2:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '5a9cf49f78bd5ac13e602eb9';

class CircleApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/circles`;
        this.circles = [];
    }

    async fetchGroupCircles() {
        await fetch('http://localhost:3000/api/groups/5a981b8f4554b144358742cf/circles')
            .then(res => res.json())
            .then(body => {
                const data = body.circles;
                console.log('from api', data);
                this.circles = data;
                return this.circles;
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export {
    CircleApi
};