// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWWsL4IXHf6cdGYAIiShYIV-8fSvugUdg",
  authDomain: "netflixgpt-6a5cf.firebaseapp.com",
  projectId: "netflixgpt-6a5cf",
  storageBucket: "netflixgpt-6a5cf.appspot.com",
  messagingSenderId: "71757619438",
  appId: "1:71757619438:web:68b36cfe5f670d10c2d3ff",
  measurementId: "G-FJHMR2GQTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();