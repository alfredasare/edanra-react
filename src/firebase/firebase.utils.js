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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
