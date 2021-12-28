import * as firebase from "firebase/app";
import "firebase/storage"; //firebase sdk
import "firebase/firestore"; //firestore db sdk

const firebaseConfig = {
  apiKey: "AIzaSyDXoBx3pFAluMjgK7gjF_tFHDhoC5I9H_0",
  authDomain: "instant-gallery.firebaseapp.com",
  projectId: "instant-gallery",
  storageBucket: "instant-gallery.appspot.com",
  messagingSenderId: "1071989628142",
  appId: "1:1071989628142:web:d5eda1fe75e7433b3027ff",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
