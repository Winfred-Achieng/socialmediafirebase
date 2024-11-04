// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-socialmedia-6154b.firebaseapp.com",
  projectId: "react-socialmedia-6154b",
  storageBucket: "react-socialmedia-6154b.firebasestorage.app",
  messagingSenderId: "231408014056",
  appId: "1:231408014056:web:52321f8573d40392a4af5d",
  measurementId: "G-SD0EL3GH79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();