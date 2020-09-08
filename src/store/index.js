import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
//requiring all reducers
import rootReducer from './reducers';
//requiring all epics
import rootEpic from './epic';

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);
//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);
//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(() => {
    console.log(store.getState(), ' store')
});