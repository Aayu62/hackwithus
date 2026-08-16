import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Firebase Web Config (Loaded via environment variables or fallback values)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDNxVk-sBhE3GnGTDpQ2g0X1_-whc_RYf0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "hackwithus-cffd0.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "hackwithus-cffd0",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "hackwithus-cffd0.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1060909351211",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1060909351211:web:d5a724ced2e010493a856e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-P2GL3X0VW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signOut };
