import SearchActionTypes from "./search.types";

export const getResults = filters => ({
    type: SearchActionTypes.GET_RESULTS,
    payload: filters
});
