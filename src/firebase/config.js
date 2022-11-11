import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9RaAADmgRFVlTlZ5yJyJxiDctzcjmlAk",
  authDomain: "aston-project-c2d0c.firebaseapp.com",
  projectId: "aston-project-c2d0c",
  storageBucket: "aston-project-c2d0c.appspot.com",
  messagingSenderId: "904111770737",
  appId: "1:904111770737:web:8350430fc24023c3a89fd0",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
