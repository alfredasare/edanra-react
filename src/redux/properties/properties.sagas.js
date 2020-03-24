import {takeLatest, call, put, all} from 'redux-saga/effects';
import PropertyActionTypes from "./properties.types";
import {convertPropertySnapshotToMap, firestore, storage} from "../../firebase/firebase.utils";
import {
    deleteFileFromServerFailure,
    deleteFileFromServerSuccess,
    fetchPropertiesFailure,
    fetchPropertiesSuccess,
    removePropertyFailure,
    removePropertySuccess
} from "./properties.actions";

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

export function* deleteProperty({payload: {property}}) {

    const {uid} = property;

    try {
        yield firestore.collection("properties").doc(uid).delete();
        yield put(removePropertySuccess(property));
    } catch (error) {
        yield put(removePropertyFailure(error));
    }
}

export function* removePropertyStart() {
    yield takeLatest(PropertyActionTypes.REMOVE_PROPERTY_START, deleteProperty);
}

export function* deleteFilesFromServer({payload}) {
    const {profile_img, main_image_url, other_images_url} = payload;
    const other_images = other_images_url.map(image => image.url);
    const images = [profile_img, main_image_url, ...other_images];

    try {
        for (let image of images) {
            const storageRef = storage.refFromURL(image);
            yield storageRef.delete();
        }
        yield put(deleteFileFromServerSuccess("Files deleted successfully"));
    } catch (error) {
        yield put(deleteFileFromServerFailure(error));
    }
}

export function* onRemovePropertySuccess() {
    yield takeLatest(PropertyActionTypes.REMOVE_PROPERTY_SUCCESS, deleteFilesFromServer);
}

export function* propertySagas() {
    yield all([
        call(fetchPropertyStart),
        call(removePropertyStart),
        call(onRemovePropertySuccess)
    ]);
}
