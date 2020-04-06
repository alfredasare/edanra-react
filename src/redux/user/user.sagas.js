import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from "./user.types";
import {
    deleteProfileImageFailure, deleteProfileImageSuccess,
    editUserFailure, editUserSuccess,
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess, updateProfileImagesFailure, updateProfileImagesStart, updateProfileImagesSuccess
} from "./user.actions";
import {
    auth,
    createUserProfileDocument,
    firestore,
    getCurrentUser,
    googleProvider,
    storage
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

// SIGN IN WITH GOOGLE

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// SIGN IN WITH EMAIL

export function* signInWithEmail({payload: {email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}



// SIGN OUT
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

//  CHECK USER SESSION
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// SIGN UP
export function* signUp({payload: {displayName, email, password, profile_img}}) {
    let downloadUrl = '';
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        const storageRef = storage.ref(`profile-images/${Date.now()}_${displayName}`);
        if (typeof profile_img === 'object') {
            const uploadTask = yield storageRef.put(profile_img);
            downloadUrl = yield uploadTask.ref.getDownloadURL();
        } else {
            const uploadTask = yield storageRef.putString(profile_img, 'base64');
            downloadUrl = yield uploadTask.ref.getDownloadURL();
        }
        yield put(signUpSuccess({user, additionalData: {displayName, profile_img: downloadUrl  }}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess () {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

// EDIT USER PROFILE
export function* editProfile ({payload: {displayName, email, profile_img, id}}) {

    let downloadUrl = '';

    try {
        if (typeof profile_img === 'object') {
            const storageRef = storage.ref(`profile-images/${Date.now()}_${profile_img.name}`);
            const uploadTask = yield storageRef.put(profile_img);
            downloadUrl = yield uploadTask.ref.getDownloadURL();
        }

        yield firestore.collection("users").doc(id).update({
            displayName,
            email,
            profile_img: downloadUrl ? downloadUrl : profile_img
        });
        yield put(editUserSuccess("Profile updated successfully"));
        if (downloadUrl) {
            yield put(updateProfileImagesStart({id, downloadUrl}));
        }
    } catch (error) {
        yield put(editUserFailure(error));
    }
}

export function* onEditUserProfileStart () {
    yield takeLatest(UserActionTypes.EDIT_USER_PROFILE_START, editProfile);
}

//  DELETE PROFILE IMAGE
export function* deleteProfileImage({payload}) {
    try {
        const storageRef = storage.refFromURL(payload);
        yield storageRef.delete();
        yield put(deleteProfileImageSuccess("Profile image deleted"));
    } catch (error) {
        yield put(deleteProfileImageFailure(error));
    }
}

export function* onUserProfileImageDeleteStart() {
    yield takeLatest(UserActionTypes.DELETE_USER_PROFILE_IMAGE_START, deleteProfileImage);
}

//  UPDATE URLS
export function* updateProfileImagesUrls({payload: {id, downloadUrl}}) {
    try {
        let batch = firestore.batch();
        const propertiesRef = firestore.collection('properties');
        const snapshot = yield propertiesRef.where("user_id", "==", id).get();
        for (let doc of snapshot.docs) {
            const propertyRef = firestore.collection('properties').doc(doc.id);
            yield batch.update(propertyRef, {profile_img: downloadUrl});
            yield batch.commit();
        }
        yield put(updateProfileImagesSuccess("Urls changed successfully"));
    } catch (error) {
        yield put(updateProfileImagesFailure(error));
    }
}

export function* onUpdateUrls() {
    yield takeLatest(UserActionTypes.UPDATE_PROPERTY_PROFILE_IMAGES_START, updateProfileImagesUrls);
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onSignOutStart),
        call(onCheckUserSession),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onEditUserProfileStart),
        call(onUserProfileImageDeleteStart),
        call(onUpdateUrls)
    ]);
}
