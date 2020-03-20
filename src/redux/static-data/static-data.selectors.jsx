import {createSelector} from 'reselect';

const selectStaticData = state => state.staticData;

export const selectDistricts = createSelector(
    [selectStaticData],
    staticData => staticData.districts
);

export const selectRegions = createSelector(
    [selectStaticData],
    staticData => staticData.regions
);
