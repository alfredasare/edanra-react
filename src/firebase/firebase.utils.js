import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCONwfWPtnkmaMRnj_zPWKq6nbhMlUeFtA",
    authDomain: "efiewura-db.firebaseapp.com",
    databaseURL: "https://efiewura-db.firebaseio.com",
    projectId: "efiewura-db",
    storageBucket: "efiewura-db.appspot.com",
    messagingSenderId: "877109545657",
    appId: "1:877109545657:web:7046b6acae6bc77ccba968",
    measurementId: "G-Y02W62F1RS"
};

//  Adding auth users to Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.id}`);
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



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

//  Google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
