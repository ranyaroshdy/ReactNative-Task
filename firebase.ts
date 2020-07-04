import * as firebase from "firebase";
import 'firebase/firestore';

/*const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyAya3Itn3QDvNHwzXmFsK2YW2kWKKVFMeQ",
  authDomain: "interview-3db7a.firebaseapp.com",
  databaseURL: "https://interview-3db7a.firebaseio.com",
  projectId: "interview-3db7a",
  storageBucket: "interview-3db7a.appspot.com",
  messagingSenderId: "88232970498",
  appId: "1:88232970498:web:e4bb1d3aee6622038b5a1b",
  measurementId: "G-F8T773S8PX",
});*/
const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyBFvOI2EAbsDnsJO_OwXbYiTd2VtVNaAeA",
  authDomain: "reactnativefirebasetask.firebaseapp.com",
  databaseURL: "https://reactnativefirebasetask.firebaseio.com",
  projectId: "reactnativefirebasetask",
  storageBucket: "reactnativefirebasetask.appspot.com",
  messagingSenderId: "659626700095",
  appId: "1:659626700095:web:8ef8e3ab2b1f164bcdb78a",
  measurementId: "G-67VKPJBPB0"
});


firebase.initializeApp(firebaseConfig);

export default firebase;
