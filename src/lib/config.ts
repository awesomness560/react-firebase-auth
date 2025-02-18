import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const apiKey = import.meta.env.VITE_FIREBASE_KEY;

// Copy Paste Config Code from Firebase
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
