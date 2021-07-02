// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
export const firebaseConfig = {
  apiKey: "AIzaSyBAwYuy_8VjOr_IRDWRxGeTip6UjJcZaDo",
  authDomain: "whatsapp-clone-fs.firebaseapp.com",
  projectId: "whatsapp-clone-fs",
  storageBucket: "whatsapp-clone-fs.appspot.com",
  messagingSenderId: "263671755570",
  appId: "1:263671755570:web:c2ff2ce2893ad74b28dd2b",
  measurementId: "G-L5BEHB4MLW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
