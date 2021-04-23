import firebase from 'firebase/app';
import firebases from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBwePnkxzyuSXnUosyOAa4mgvkUROgiCBo",
    authDomain: "bd-muro.firebaseapp.com",
    projectId: "bd-muro",
    storageBucket: "bd-muro.appspot.com",
    messagingSenderId: "896154919260",
    appId: "1:896154919260:web:383aa8f450d34e36182199"
  };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

export const BD = firebase.firestore();



firebases.analytics();


export default firebase;
