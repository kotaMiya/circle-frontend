import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';

import reducers from './reducers';


const middlewares = [
    promiseMiddleware(),
    thunk,
];


if (__DEV__) {
    middlewares.push(createLogger());
}

export default createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middlewares), autoRehydrate()),
    // compose(applyMiddleware(...middlewares)),
)