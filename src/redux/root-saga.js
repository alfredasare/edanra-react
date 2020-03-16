import { all, call } from 'redux-saga/effects';
import {userSagas} from "./user/user.sagas";
import {propertySagas} from "./properties/properties.sagas";
import {propertyUploadSagas} from "./property-upload/property-upload.sagas";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(propertySagas),
        call(propertyUploadSagas)
    ]);
}
