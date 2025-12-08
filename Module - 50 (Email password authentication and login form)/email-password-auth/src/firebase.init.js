// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOgB-pKEuM195O3BrPlLOsD3n0fAml8Q",
  authDomain: "explore-email-auth-abf78.firebaseapp.com",
  projectId: "explore-email-auth-abf78",
  storageBucket: "explore-email-auth-abf78.firebasestorage.app",
  messagingSenderId: "224601622788",
  appId: "1:224601622788:web:20a25442360b9b674e2851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);