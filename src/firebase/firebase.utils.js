import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyD5XrGQiHNAJUr-avU2QMeZe74zNjOQUJo",
    authDomain: "edanra.com",
    databaseURL: "https://efiewura-db-60044.firebaseio.com",
    projectId: "efiewura-db-60044",
    storageBucket: "efiewura-db-60044.appspot.com",
    messagingSenderId: "250845754435",
    appId: "1:250845754435:web:4e65632462b5282f8150f6",
    measurementId: "G-0EDERWGCDQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email, photoURL} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                profile_img: photoURL,
                ...additionalData
            });
        } catch (e) {
            console.log('Error creating user', e.message);
        }
    }
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const convertPropertySnapshotToMap = (properties) => {
    const transformedProperties = properties.docs.map(doc => {

        const uid = doc.id;

        return {
            routeName: encodeURI(uid),
            uid: uid,
            ...doc.data()
        };
    });

    return transformedProperties.reduce((accumulator, property) => {
        accumulator[property.uid] = property;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();

//  Google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
