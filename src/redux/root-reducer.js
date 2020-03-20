import {combineReducers} from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";
import propertyUploadReducer from "./property-upload/property-upload.reducer";
import staticDataReducer from "./static-data/static-data.reducer";
import searchReducer from "./search/search.reducer";

const rootReducer = combineReducers({
   properties: propertiesReducer,
   user: userReducer,
   propertyUpload: propertyUploadReducer,
   staticData: staticDataReducer,
   search: searchReducer
});

export default rootReducer;
