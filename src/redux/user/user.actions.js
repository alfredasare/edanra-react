import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const editUserStart = (userDetails) => ({
    type: UserActionTypes.EDIT_USER_PROFILE_START,
    payload: userDetails
});

export const editUserSuccess = (userDetails) => ({
    type: UserActionTypes.EDIT_USER_PROFILE_SUCCESS,
    payload: userDetails
});

export const editUserFailure = error => ({
    type: UserActionTypes.EDIT_USER_PROFILE_FAILURE,
    payload: error
});

export const deleteProfileImageStart = (profileUrl) => ({
    type: UserActionTypes.DELETE_USER_PROFILE_IMAGE_START,
    payload: profileUrl
});

export const deleteProfileImageSuccess = successMessage => ({
    type: UserActionTypes.DELETE_USER_PROFILE_IMAGE_SUCCESS,
    payload: successMessage
});

export const deleteProfileImageFailure = error => ({
    type: UserActionTypes.DELETE_USER_PROFILE_IMAGE_FAILURE,
    payload: error
});
