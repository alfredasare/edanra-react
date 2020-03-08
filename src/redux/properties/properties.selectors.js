import { createSelector } from 'reselect';

const selectProperties = state => state.properties;

export const selectAllProperties = createSelector(
    [selectProperties],
    properties => properties.propertyItems
);

