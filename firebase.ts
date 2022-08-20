// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps  } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbibQiwW_OibPmUWvWGiH3nDIs1h-ZkjI",
  authDomain: "netflix-3dea8.firebaseapp.com",
  projectId: "netflix-3dea8",
  storageBucket: "netflix-3dea8.appspot.com",
  messagingSenderId: "445062505371",
  appId: "1:445062505371:web:2ef9c21854d36443b7773e",
  measurementId: "G-T6YQNLW5JL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }