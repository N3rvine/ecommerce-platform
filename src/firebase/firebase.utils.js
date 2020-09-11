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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;