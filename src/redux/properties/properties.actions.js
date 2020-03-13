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
