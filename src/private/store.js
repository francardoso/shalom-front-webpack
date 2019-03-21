import {createStore, combineReducers} from 'redux';

import loginReducer from './reducers/login';
import itemsReducer from './reducers/items';
import itemReducer from './reducers/item';

const reducer = combineReducers({
    loginReducer,
    itemsReducer,
    itemReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;