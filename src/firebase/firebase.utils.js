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
  };


  firebase.initializeApp(config);

  // UserAuth is passed when a successful signin  happens
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // if user dont exit just return
  
    // Search and retrieve the User collection for the user with docID of userAuth.uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    // Snapshot represent the object no the actuall data
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      // Async action to store the authenticated user in the user collection with .set()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    // We return the UserRef object to put in the currentUser state for further identification in the app
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;