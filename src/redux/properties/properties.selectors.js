import {createSelector} from 'reselect';
import {dateChecker} from "../../utils/date";

const selectProperties = state => state.properties;

export const selectAllProperties = createSelector(
    [selectProperties],
    properties => properties.propertyItems
);

export const selectIsDeleted = createSelector(
    [selectProperties],
    properties => properties.isDeleted
);

export const selectPropertiesForDisplay = createSelector(
    [selectAllProperties],
    properties => properties ? Object.keys(properties).map(key => properties[key]).filter((property) => {
        const renew_date = property.last_date_paid ? new Date(property.last_date_paid) : new Date('2020-10-31');
        const subscription_type = property.subscription_type ? property.subscription_type:'free_three';
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
