// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3sjXSKRUOgEqKIO_oxPUa_uGyxIYZQLk",
  authDomain: "fashionest2191.firebaseapp.com",
  projectId: "fashionest2191",
  storageBucket: "fashionest2191.appspot.com",
  messagingSenderId: "836029231899",
  appId: "1:836029231899:web:a1712756927d452743d9be",
  measurementId: "G-F974722KXG"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);