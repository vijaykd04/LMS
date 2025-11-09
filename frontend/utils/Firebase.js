import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "learning-managment-syste-6071c.firebaseapp.com",
  projectId: "learning-managment-syste-6071c",
  storageBucket: "learning-managment-syste-6071c.firebasestorage.app",
  messagingSenderId:"222929393029",
  appId:"1:222929393029:web:bef78101c64e299868e0ec" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
