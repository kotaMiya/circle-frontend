// import { FETCH_MY_CIRCLES } from './actions';

// const INITIAL_STATE = {
//     myCircles: {
//         data: [],
//         isFetched: false,
//         error: {
//             on: false,
//             message: null
//         }
//     }
// }

// export default (state = INITIAL_STATE, action) => {
//     console.log(action.type);
//     switch (action.type) {
//         case `${FETCH_MY_CIRCLES}_PENDING`:
//             return INITIAL_STATE;
//         case `${FETCH_MY_CIRCLES}_FULFILLED`:
//             return {
//                 ...state,
//                 myCircles: {
//                     data: action.payload,
//                     isFetched: true,
//                     error: {
//                         on: false,
//                         message: null
//                     }
//                 }
//             }
//         case `${FETCH_MY_CIRCLES}_REJECTED`: 
//             return {
//                 myCircles: {
//                     data: [],
//                     isFetched: true,
//                     error: {
//                         on: true,
//                         message: 'Error when fetching circles'
//                     }
//                 }
//             }
//         default: 
//             return state;
//     }
// };