import {combineReducers} from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";
import propertyUploadReducer from "./property-upload/property-upload.reducer";
import staticDataReducer from "./static-data/static-data.reducer";

const rootReducer = combineReducers({
   properties: propertiesReducer,
   user: userReducer,
   propertyUpload: propertyUploadReducer,
   staticData: staticDataReducer
});

export default rootReducer;
