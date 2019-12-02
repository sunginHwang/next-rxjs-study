import { createStore} from 'redux';
import reducers from './reducers';


const initStore = initialState => {
    return createStore(reducers, initialState);
};

export default initStore;

