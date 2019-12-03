import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import {pingEpic} from './reducers/pingReducer';

const epicMiddleware = createEpicMiddleware();

const initStore = initialState => {
    const store = createStore(reducers, initialState, applyMiddleware(epicMiddleware));
    epicMiddleware.run(pingEpic);
    return store;
};


export default initStore;

