// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8IsB_yMwln0nUhFWcY_fLQ0B-8gHTvUE",
  authDomain: "igarden-4376e.firebaseapp.com",
  projectId: "igarden-4376e",
  storageBucket: "igarden-4376e.appspot.com",
  messagingSenderId: "498473604200",
  appId: "1:498473604200:web:e62eae0949b78ab50fd7dd",
  measurementId: "G-ZH80GRLBYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);