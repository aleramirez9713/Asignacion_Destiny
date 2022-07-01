// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj2sUOFhaG15_Bpi67_l9EBI7tD8UODag",
  authDomain: "tudestino-api.firebaseapp.com",
  projectId: "tudestino-api",
  storageBucket: "tudestino-api.appspot.com",
  messagingSenderId: "760582616563",
  appId: "1:760582616563:web:13884f975e2c2f8e970e86",
  measurementId: "G-F3EKM1F69Z"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );