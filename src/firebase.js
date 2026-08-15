import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Firebase Web Config
// Replace these environment variables or credentials with your Firebase project config from https://console.firebase.google.com
const firebaseConfig = {
  apiKey: "AIzaSyDNxVk-sBhE3GnGTDpQ2g0X1_-whc_RYf0",
  authDomain: "hackwithus-cffd0.firebaseapp.com",
  projectId: "hackwithus-cffd0",
  storageBucket: "hackwithus-cffd0.firebasestorage.app",
  messagingSenderId: "1060909351211",
  appId: "1:1060909351211:web:d5a724ced2e010493a856e",
  measurementId: "G-P2GL3X0VW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signOut };
