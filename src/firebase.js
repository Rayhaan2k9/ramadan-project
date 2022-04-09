// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEe1TmQJB1zeeS-sGeW4FPVrQMnFnLjPg",
  authDomain: "prayer-times-6d236.firebaseapp.com",
  projectId: "prayer-times-6d236",
  storageBucket: "prayer-times-6d236.appspot.com",
  messagingSenderId: "304283327459",
  appId: "1:304283327459:web:0fe70cec6a700f39cc5ed6",
  measurementId: "G-YLBFJ0FXRG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
