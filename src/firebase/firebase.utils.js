import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEbCVZ9WmQFmAnZ5eqRlBVOD-Z3YNquL4",
    authDomain: "crown-clothing-8ea6b.firebaseapp.com",
    databaseURL: "https://crown-clothing-8ea6b.firebaseio.com",
    projectId: "crown-clothing-8ea6b",
    storageBucket: "crown-clothing-8ea6b.appspot.com",
    messagingSenderId: "474613771827",
    appId: "1:474613771827:web:f28dec84f5ee9138db3d46",
    measurementId: "G-6DP0YF7T35"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;