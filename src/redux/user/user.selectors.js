import {createSelector} from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectError = createSelector(
    [selectUser],
    user => !!user.error
);

export const selectLoadingUser = createSelector(
    [selectUser],
    user => user.loadingUser
);

export const selectUpdatingUser = createSelector(
    [selectUser],
    user => user.updatingUser
);
