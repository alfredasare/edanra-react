import {createSelector} from 'reselect';
import {dateChecker} from "../../utils/date";

const selectProperties = state => state.properties;

// subscription_type of either: free_three, month or annual
let subscription_type = 'free_three';
let renew_date = new Date('2020-07-31');

export const selectAllProperties = createSelector(
    [selectProperties],
    properties => properties.propertyItems
);

export const selectPropertiesForDisplay = createSelector(
    [selectAllProperties],
    properties => properties ? Object.keys(properties).map(key => properties[key]).filter((property) => {
        const {daysLeft} = dateChecker(new Date(property.date_uploaded),subscription_type, renew_date);
        return daysLeft > 0;
    }) : []
);

export const selectAllPropertiesLength = createSelector(
    [selectPropertiesForDisplay],
    properties => properties.length
);

export const selectPropertiesForDashboard = createSelector(
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
