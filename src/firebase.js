import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyDUToq78Fo8Jre3_N3vMe4jSYsid9i0dxo",
  authDomain: "disneyplus-clone-f22c3.firebaseapp.com",
  projectId: "disneyplus-clone-f22c3",
  storageBucket: "disneyplus-clone-f22c3.appspot.com",
  messagingSenderId: "432997574337",
  appId: "1:432997574337:web:4885e154018e6b5746d640"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;