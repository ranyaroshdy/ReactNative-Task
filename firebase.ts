import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = Object.freeze({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

firebase.initializeApp(firebaseConfig);

export default firebase;
