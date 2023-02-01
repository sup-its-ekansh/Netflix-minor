import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjs97qIJVzHE_8zuv2RsaIedYTlABJ3YI",
  authDomain: "last-ride-ea04a.firebaseapp.com",
  projectId: "last-ride-ea04a",
  storageBucket: "last-ride-ea04a.appspot.com",
  messagingSenderId: "616132258462",
  appId: "1:616132258462:web:770c8ef480e8737f84e98f",
  measurementId: "G-YZGHJ9EZP7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };