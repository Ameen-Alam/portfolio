import AuthReducer from "./authReducer"
import circleReducer from "./circleReducer"
import { combineReducers } from 'redux';

//combine reducers
let rootReducer = combineReducers({
    AuthReducer,
    circleReducer
})
export default rootReducer 