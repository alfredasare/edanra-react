import {createSelector} from "reselect";

const selectResults = state => state.search;

export const selectFilteredProperties = createSelector(
    [selectResults],
    search => search.searchResults
);
