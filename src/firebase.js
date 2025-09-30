// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUS-VsFkUQTOaC0NG19-uBSngIIZg_lj0",
  authDomain: "ecommerce-4656e.firebaseapp.com",
  projectId: "ecommerce-4656e",
  storageBucket: "ecommerce-4656e.firebasestorage.app",
  messagingSenderId: "758845878425",
  appId: "1:758845878425:web:27cb5b38918c96ffc74808",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
