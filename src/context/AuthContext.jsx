import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('hackwithus_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('hackwithus_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('hackwithus_user');
    }
  }, [currentUser]);

  // Google Sign-In with Firebase
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userProfile = {
        uid: user.uid,
        name: user.displayName || 'Google User',
        email: user.email,
        photoURL: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`,
        provider: 'Google'
      };
      setCurrentUser(userProfile);
      setLoading(false);
      return { success: true, user: userProfile };
    } catch (error) {
      setLoading(false);
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('Google login popup was closed by user.');
        return { success: false, reason: 'closed' };
      }
      console.error('Firebase Auth Error:', error.code, error.message);
      // Fallback only if credentials invalid or blocked
      alert(`Google Auth Notice: ${error.message || 'Could not complete login'}`);
      return { success: false, error };
    }
  };

  // Sign Out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log('Signout notice:', e);
    }
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loginWithGoogle,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
