import PROPERTIES_DATA from "./properties.data";

const INITIAL_STATE = {
    propertyItems: PROPERTIES_DATA
};

const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default propertiesReducer;
