import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

export {db};
