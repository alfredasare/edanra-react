import {all, call, put, takeLatest} from 'redux-saga/effects';
import PropertyUploadTypes from "./property-upload.types";
import {firestore, storage} from "../../firebase/firebase.utils";
import {
    propertyEditFailure, propertyEditSuccess,
    propertyFirestoreUploadFailure, propertyFireStoreUploadSuccess,
    propertyStorageUploadError,
    propertyStorageUploadSuccess
} from "./property-upload.actions";

export function* upload({payload}) {
    const {property_images} = payload;
    const images = [...property_images];
    const downloadUrls = [];
    try {

        for (let image of images) {
            const storageRef = storage.ref(`ads/${Date.now()}_${image.name}`);
            const uploadTask = yield storageRef.put(image);
            const downloadUrl = yield uploadTask.ref.getDownloadURL();
            downloadUrls.push(downloadUrl);
        }

        yield put(propertyStorageUploadSuccess({
            ...payload,
            property_images: downloadUrls
        }))
    } catch (error) {
        yield put(propertyStorageUploadError(error));
    }
}

export function* onPropertyStorageUploadStart() {
    yield takeLatest(PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_START, upload);
}


export function* uploadProperty({payload}) {
    const {property_images, ...modifiedPropertyDetails} = payload;
    const [main_image_url, ...other_images_url] = property_images;
    const transformed_images = other_images_url.map((image_url, idx) => {
        return {
            id: idx,
            url: image_url
        };
    });

    try {
        const response = yield firestore.collection("properties").add(
            {
                ...modifiedPropertyDetails,
                main_image_url,
                other_images_url: transformed_images
            }
        );
        yield put(propertyFireStoreUploadSuccess(response));
    } catch (error) {
        yield put(propertyFirestoreUploadFailure(error));
    }
}

export function* onPropertyStorageUploadSuccess() {
    yield takeLatest(PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_SUCCESS, uploadProperty);
}

export function* editProperty({payload}) {

    const {uid} = payload;

    try {
        const response = yield firestore.collection("properties").doc(uid).update({
            ...payload
        });
        yield put(propertyEditSuccess(response));
    } catch (error) {
        yield put(propertyEditFailure(error));
    }
}

export function* onPropertyEditStart() {
    yield takeLatest(PropertyUploadTypes.PROPERTY_EDIT_START, editProperty);
}



export function* propertyUploadSagas() {
    yield all([
        call(onPropertyStorageUploadStart),
        call(onPropertyStorageUploadSuccess),
        call(onPropertyEditStart),
    ]);
}
