// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ09PdxnU3kuAVzBlJ40uQVOwJLT4T8sw",
  authDomain: "e-commerce-app-4050b.firebaseapp.com",
  projectId: "e-commerce-app-4050b",
  storageBucket: "e-commerce-app-4050b.appspot.com",
  messagingSenderId: "941241301060",
  appId: "1:941241301060:web:d38746ca9ae23271126411",
  measurementId: "G-4MSWPD8SB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB , auth }