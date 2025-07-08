// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-7pKIJ-1CCA8WbiRc3qD8r2c9d9vfOfI",
    authDomain: "netflix-gpt-6bb14.firebaseapp.com",
    projectId: "netflix-gpt-6bb14",
    storageBucket: "netflix-gpt-6bb14.firebasestorage.app",
    messagingSenderId: "154672516564",
    appId: "1:154672516564:web:3a59b2c15cad0c0c01da41",
    measurementId: "G-T7QDQ5X54Y",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
