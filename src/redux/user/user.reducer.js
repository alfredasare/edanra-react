import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    loadingUser: true,
    updatingUser: false,
    successMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_UP_START:
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
                loadingUser: true
            };

        case UserActionTypes.CHECK_USER_SESSION:
            return {
                ...state,
                loadingUser: false
            };

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loadingUser: false
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
                loadingUser: false
            };

        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                loadingUser: false
            };

        case UserActionTypes.EDIT_USER_PROFILE_START:
            return {
                ...state,
                updatingUser: true
            };

        case UserActionTypes.EDIT_USER_PROFILE_SUCCESS:
            return {
                ...state,
                updatingUser: false,
                successMessage: action.payload
            };

        case UserActionTypes.EDIT_USER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingUser: false
            };

        default:
            return state;
    }
};

export default userReducer;
