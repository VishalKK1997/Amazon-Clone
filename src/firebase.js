import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl-TUHMDpyAupA6mnX6dop6IX3wnJJGZQ",
  authDomain: "clone-63c8c.firebaseapp.com",
  databaseURL: "https://clone-63c8c.firebaseio.com",
  projectId: "clone-63c8c",
  storageBucket: "clone-63c8c.appspot.com",
  messagingSenderId: "626182462",
  appId: "1:626182462:web:61e99648cbe7632fee046f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
