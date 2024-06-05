// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYzw34vdL6LnkRpekUVd1Wdztuta-Oo3M",
    authDomain: "loginsignup-35f4f.firebaseapp.com",
    projectId: "loginsignup-35f4f",
    storageBucket: "loginsignup-35f4f.appspot.com",
    messagingSenderId: "260906114949",
    appId: "1:260906114949:web:ef8f800d2d71f785962eec",
    measurementId: "G-47BJZYBKR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };