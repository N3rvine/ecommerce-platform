import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBl2SwmTIczkO2l5uB1_z6wl4mvCxjTy_o",
    authDomain: "ecommerce-platform-fd6bc.firebaseapp.com",
    databaseURL: "https://ecommerce-platform-fd6bc.firebaseio.com",
    projectId: "ecommerce-platform-fd6bc",
    storageBucket: "ecommerce-platform-fd6bc.appspot.com",
    messagingSenderId: "531059631524",
    appId: "1:531059631524:web:f43cd02e0b215708a38d31"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData          
        })
      } catch(error){
          console.log('error creating user', error.message);
      }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;