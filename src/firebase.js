// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN8vPJhmgQTqQk1-w63N0MtsahIj2kask",
  authDomain: "alaniavoyage.firebaseapp.com",
  projectId: "alaniavoyage",
  storageBucket: "alaniavoyage.firebasestorage.app",
  messagingSenderId: "477091885478",
  appId: "1:477091885478:web:bca10a1990857712069f67",
  measurementId: "G-0HL400JHK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);