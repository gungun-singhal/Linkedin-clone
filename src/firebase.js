import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD7w6QtkSMydEDrAX9oAOFwv5cu67sXrB0",
  authDomain: "linkedin-clone-7e69a.firebaseapp.com",
  projectId: "linkedin-clone-7e69a",
  storageBucket: "linkedin-clone-7e69a.appspot.com",
  messagingSenderId: "926159849765",
  appId: "1:926159849765:web:dbc61860c774fab2bab2cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };

export default db;
