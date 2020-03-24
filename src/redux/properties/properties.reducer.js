import PropertyActionTypes from "./properties.types";
import {removeProperty} from "./properties.utils";

const INITIAL_STATE = {
    propertyItems: [],
    isFetching: false,
    error: undefined
};

const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PropertyActionTypes.FETCH_PROPERTIES_START:
            return {
                ...state,
                isFetching: true
            };

        case PropertyActionTypes.FETCH_PROPERTIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                propertyItems: action.payload
            };

        case PropertyActionTypes.REMOVE_PROPERTY_FAILURE:
        case PropertyActionTypes.FETCH_PROPERTIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case PropertyActionTypes.REMOVE_PROPERTY_START:
            return {
                ...state,
                propertyItems: removeProperty(action.payload)
            };

        default:
            return state;
    }
};

export default propertiesReducer;
