import PropertyActionTypes from "./properties.types";

export const fetchPropertiesStart = () => ({
    type: PropertyActionTypes.FETCH_PROPERTIES_START,
});

export const fetchPropertiesSuccess = propertiesMap => ({
    type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS,
    payload: propertiesMap
});

export const fetchPropertiesFailure = error => ({
    type: PropertyActionTypes.FETCH_PROPERTIES_FAILURE,
    payload: error
});

export const removePropertyStart = property => ({
    type: PropertyActionTypes.REMOVE_PROPERTY_START,
    payload: property
});

export const removePropertySuccess = property => ({
    type: PropertyActionTypes.REMOVE_PROPERTY_SUCCESS,
    payload: property
});

export const removePropertyFailure = error => ({
    type: PropertyActionTypes.REMOVE_PROPERTY_FAILURE,
    payload: error
});

export const deleteFileFromServerSuccess = property => ({
    type: PropertyActionTypes.DELETE_FILE_FROM_SERVER_SUCCESS,
    payload: property
});

export const deleteFileFromServerFailure = error => ({
    type: PropertyActionTypes.DELETE_FILE_FROM_SERVER_FAILURE,
    payload: error
});
