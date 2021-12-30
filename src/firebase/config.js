import firebase from "firebase/compat/app";
import "firebase/compat/storage"; //firebase sdk
import "firebase/compat/firestore"; //firestore db sdk

const firebaseConfig = {
  apiKey: "AIzaSyC-UQDsaGEch4HQHTUWy0-a8VL00T5B1mw",
  authDomain: "i-gallery-cda84.firebaseapp.com",
  projectId: "i-gallery-cda84",
  storageBucket: "i-gallery-cda84.appspot.com",
  messagingSenderId: "421349885465",
  appId: "1:421349885465:web:dcf556f13293377dad4c88"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
