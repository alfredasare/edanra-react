import {takeLatest, call, put, all} from 'redux-saga/effects';
import PropertyActionTypes from "./properties.types";
import {convertPropertySnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchPropertiesFailure, fetchPropertiesSuccess} from "./properties.actions";

export function* fetchPropertiesAsync() {
    try {
        const propertyRef = firestore.collection('properties');
        const snapshot = yield propertyRef.get();
        const propertiesMap = yield call(convertPropertySnapshotToMap, snapshot);
        yield put(fetchPropertiesSuccess(propertiesMap));
    } catch (error) {
        yield put(fetchPropertiesFailure(error.message));
    }
}

export function* fetchPropertyStart() {
    yield takeLatest(PropertyActionTypes.FETCH_PROPERTIES_START, fetchPropertiesAsync);
}

export function* propertySagas() {
    yield all([
        call(fetchPropertyStart)
    ]);
}
