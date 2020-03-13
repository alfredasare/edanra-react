import PROPERTIES_DATA from "./properties.data";
import PropertyActionTypes from "./properties.types";

const INITIAL_STATE = {
    propertyItems: null,
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

        case PropertyActionTypes.FETCH_PROPERTIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default propertiesReducer;
