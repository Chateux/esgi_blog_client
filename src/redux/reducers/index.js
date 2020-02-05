import {combineReducers} from "redux";
import securityReducer from "./security"
import userReducer from './user';

const rootReducer = combineReducers({
    security: securityReducer,
     user: userReducer
});


export default rootReducer;