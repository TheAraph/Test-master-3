//Firebase Configuration Key Setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Firebase Config

const firebaseConfig = {
    apiKey: "AIzaSyAPdg-BoUZITDTk30uS_m8ToT2NkbWJB6M",
    authDomain: "healthify-2b416.firebaseapp.com",
    projectId: "healthify-2b416",
    storageBucket: "healthify-2b416.appspot.com",
    messagingSenderId: "1063739693973",
    appId: "1:1063739693973:web:708475c95dde11f57ef49c",
    measurementId: "G-R7YFGQ6R2X"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};