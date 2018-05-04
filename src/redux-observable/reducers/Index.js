import { combineReducers, createStore } from 'redux';
import SocketsReducer from './SocketsReducer';

const combinedReducers = combineReducers({
    sockets: SocketsReducer
});

const store = createStore(combinedReducers);

export default store;