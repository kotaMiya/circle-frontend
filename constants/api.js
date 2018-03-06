// export const fetchGroupCircles = () =>
//     fetch('http://localhost:3000/api/groups/5a9cf49f78bd5ac13e602eb9/circles')
//     .then(res => function(res) {
//         const { data } = res.json;
//         data.circles;
//     });


import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

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