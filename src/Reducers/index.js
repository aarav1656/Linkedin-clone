import { combineReducers } from "redux";

import userReducer from "./Userreducer";

const rootReducer = combineReducers({
    userState: userReducer,
});

export default rootReducer;