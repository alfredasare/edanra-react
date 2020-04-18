import {combineReducers} from "redux";

import propertiesReducer from "./properties/properties.reducer";
import userReducer from "./user/user.reducer";
import propertyUploadReducer from "./property-upload/property-upload.reducer";
import staticDataReducer from "./static-data/static-data.reducer";
import searchReducer from "./search/search.reducer";
import paymentReducer from "./payment/payment.reducer";

const rootReducer = combineReducers({
   properties: propertiesReducer,
   user: userReducer,
   propertyUpload: propertyUploadReducer,
   staticData: staticDataReducer,
   search: searchReducer,
   payment: paymentReducer
});

export default rootReducer;
