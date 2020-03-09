import {combineReducers} from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    properties: propertiesReducer,
    user: userReducer
});

export default rootReducer;
