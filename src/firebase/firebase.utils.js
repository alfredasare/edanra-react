import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyD5XrGQiHNAJUr-avU2QMeZe74zNjOQUJo",
    authDomain: "efiewura-db-60044.firebaseapp.com",
    databaseURL: "https://efiewura-db-60044.firebaseio.com",
    projectId: "efiewura-db-60044",
    storageBucket: "efiewura-db-60044.appspot.com",
    messagingSenderId: "250845754435",
    appId: "1:250845754435:web:4e65632462b5282f8150f6",
    measurementId: "G-0EDERWGCDQ"
};

//  Adding auth users to Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    //  Check if snapshot data does not exist in the database
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
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

    // return transformedProperties;
    return transformedProperties.reduce((accumulator, property) => {
        accumulator[property.uid] = property;
        return accumulator;
    }, {});
};

// BULK UPLOAD OF PROPERTIES
// export const addPropertyAndDocuments = async (propertyKey, objectsToAdd) => {
//     const propertyRef = firestore.collection(propertyKey);
//
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = propertyRef.doc();
//         batch.set(newDocRef, obj);
//     });
//
//     return await batch.commit();
// };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

//  Google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
