import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "portafolio-cb8bd.firebaseapp.com",
    projectId: "portafolio-cb8bd",
    storageBucket: "portafolio-cb8bd.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  });

export const getFirebase = () => {return app}

export const getFirestore = () => {return firebase.firestore(app)}