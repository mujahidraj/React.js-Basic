// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNroigKfPFSN1cxq6obMTTheCyvOhDSFk",
  authDomain: "auth-integration-6f82f.firebaseapp.com",
  projectId: "auth-integration-6f82f",
  storageBucket: "auth-integration-6f82f.firebasestorage.app",
  messagingSenderId: "906373218752",
  appId: "1:906373218752:web:a4ec4dec8dd1c95d7b0825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
