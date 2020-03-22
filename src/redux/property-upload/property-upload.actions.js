import PropertyUploadTypes from "./property-upload.types";

export const propertyStorageUploadStart = propertyDetails => ({
    type: PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_START,
    payload: propertyDetails
});

export const propertyStorageUploadSuccess = modifiedPropertyDetails => ({
    type: PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_SUCCESS,
    payload: modifiedPropertyDetails
});

export const propertyStorageUploadError = error => ({
    type: PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_FAILURE,
    payload: error
});

export const propertyFirestoreUploadStart = modifiedPropertyDetails => ({
    type: PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_START,
    payload: modifiedPropertyDetails
});

export const propertyFireStoreUploadSuccess = successMessage => ({
    type: PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_SUCCESS,
    payload: successMessage
});

export const propertyFirestoreUploadFailure = error => ({
    type: PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_FAILURE,
    payload: error
});

export const propertyEditStart = propertyDetails => ({
    type: PropertyUploadTypes.PROPERTY_EDIT_START,
    payload: propertyDetails
});

export const propertyEditSuccess = successMessage => ({
    type: PropertyUploadTypes.PROPERTY_EDIT_SUCCESS,
    payload: successMessage
});

export const propertyEditFailure = error => ({
    type: PropertyUploadTypes.PROPERTY_EDIT_FAILURE,
    payload: error
});
