import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD3zc5zbYAEl7Cz_8RB46qPgxddBSv846s",
  authDomain: "weditor-firebase.firebaseapp.com",
  projectId: "weditor-firebase",
  storageBucket: "weditor-firebase.appspot.com",
  messagingSenderId: "348335594401",
  appId: "1:348335594401:web:78bb23a607ec68b39809e0"
};
firebase.initializeApp(firebaseConfig);
export default firebase;