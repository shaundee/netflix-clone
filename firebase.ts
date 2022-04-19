// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPQ3kK_ZrWNNPoQYAtir6g8NK8pd-NVrw",
    authDomain: "netflix-clone-fe496.firebaseapp.com",
    projectId: "netflix-clone-fe496",
    storageBucket: "netflix-clone-fe496.appspot.com",
    messagingSenderId: "387469128865",
    appId: "1:387469128865:web:68b26d65d46e3f62be6ce0"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }