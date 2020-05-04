import PropertyActionTypes from "./properties.types";

const INITIAL_STATE = {
    propertyItems: [],
    isFetching: true,
    error: undefined,
    isDeleted: false
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
                propertyItems: Object.keys(state.propertyItems).map(key => state.propertyItems[key]).filter(property => property.uid !== action.payload.property.uid),
            };

        case PropertyActionTypes.REMOVE_PROPERTY_SUCCESS:
            return {
                ...state,
            };


        default:
            return state;
    }
};

export default propertiesReducer;
