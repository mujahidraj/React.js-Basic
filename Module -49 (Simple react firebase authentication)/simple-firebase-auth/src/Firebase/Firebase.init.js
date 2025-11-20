// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACfM9cm348W7YbB_vnuoWF7O38oB3siwk",
  authDomain: "simple-firebase-auth-7242e.firebaseapp.com",
  projectId: "simple-firebase-auth-7242e",
  storageBucket: "simple-firebase-auth-7242e.firebasestorage.app",
  messagingSenderId: "587527644250",
  appId: "1:587527644250:web:348cc3d9b815bb3a9ca463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);