import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVzF7lKmjPJdG6PqocIOrGtNbX-wbV5cM",
    authDomain: "clone-f9d97.firebaseapp.com",
    projectId: "clone-f9d97",
    storageBucket: "clone-f9d97.appspot.com",
    messagingSenderId: "3593167183",
    appId: "1:3593167183:web:5e7d83b55f08e32615253a",
    measurementId: "G-YML8F1B39D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };