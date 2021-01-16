import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAj3_KTcjBprUInJ8MNxMg4UnMDUkQo8BA",
  authDomain: "ystt-site.firebaseapp.com",
  projectId: "ystt-site",
  storageBucket: "ystt-site.appspot.com",
  messagingSenderId: "305169141913",
  appId: "1:305169141913:web:8dd829b9efe12f1c676808",
  measurementId: "G-CR9PMEZQ0G",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
