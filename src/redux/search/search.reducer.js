import SearchActionTypes from "./search.types";
import {getSearchResults} from "./search.utils";

const INITIAL_STATE = {
    searchResults: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SearchActionTypes.GET_RESULTS:
            return {
              ...state,
              searchResults: getSearchResults(action.payload)
            };

        default:
            return state;
    }
};

export default searchReducer;
