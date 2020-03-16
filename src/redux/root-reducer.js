import {combineReducers} from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";
import propertyUploadReducer from "./property-upload/property-upload.reducer";

const rootReducer = combineReducers({
   properties: propertiesReducer,
   user: userReducer,
   propertyUpload: propertyUploadReducer
});

export default rootReducer;
