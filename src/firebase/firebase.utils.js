import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyD-lVBRF8Ukp9AyTg0vrMEwuzsK3a_YWSI",
    authDomain: "moclothing-db.firebaseapp.com",
    databaseURL: "https://moclothing-db.firebaseio.com",
    projectId: "moclothing-db",
    storageBucket: "moclothing-db.appspot.com",
    messagingSenderId: "116907425927",
    appId: "1:116907425927:web:e5f34ace9cf08c75d6b822",
    measurementId: "G-4D5ZXZGC7P"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Access to google auth provider class fron the authentication library
  const provider = new firebase.auth.GoogleAuthProvider();
  // We want trigger the goole pop up when ever we click sign in with Google
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
