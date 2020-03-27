import {createSelector} from 'reselect';

const selectProperties = state => state.properties;

export const selectAllProperties = createSelector(
    [selectProperties],
    properties => properties.propertyItems
);

export const selectPropertiesForDisplay = createSelector(
    [selectAllProperties],
    properties => properties ? Object.keys(properties).map(key => properties[key]) : []
);

export const selectProperty = propertyUrlParam => createSelector(
    [selectAllProperties],
    properties => (properties ? properties[propertyUrlParam] : null)
);

export const selectIsPropertyFetching = createSelector(
    [selectProperties],
    properties => properties.isFetching
);

export const selectIsPropertiesLoaded = createSelector(
    [selectProperties],
    properties => !!properties.propertyItems
);
