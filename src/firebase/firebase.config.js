// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8jn2g0xlkkSQefvRpyx1NnUw-uEeG-84",
  authDomain: "email-password-auth-1d309.firebaseapp.com",
  projectId: "email-password-auth-1d309",
  storageBucket: "email-password-auth-1d309.appspot.com",
  messagingSenderId: "320507862729",
  appId: "1:320507862729:web:e280927d86de7bcd26f718",
  measurementId: "G-RN9WK6P5XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;