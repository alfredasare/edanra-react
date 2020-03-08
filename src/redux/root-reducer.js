import { combineReducers } from "redux";

import propertiesReducer from "./properties/properties.reducer";

const rootReducer = combineReducers({
  properties: propertiesReducer
});

export default rootReducer;
