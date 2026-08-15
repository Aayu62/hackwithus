import React from 'react';
import { X, LogOut, CheckCircle, ShieldCheck, Sparkles, Terminal, Flame } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose }) {
  const { currentUser, loginWithGoogle, logout, loading } = useAuth();

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    onClose();
  };

  const handleSignOut = () => {
    logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-black w-full max-w-md rounded-2xl shadow-neo-lg overflow-hidden relative flex flex-col">
        
        {/* Header Bar */}
        <div className="p-5 border-b-2 border-black flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-2">
            <img src="/hwu_favicon.png" alt="HackWithUs Logo" className="w-10 h-10 object-contain" />
            <span className="font-display font-black text-lg text-black">
              {currentUser ? 'Hacker Profile' : 'Sign In to HackWithUs'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-black hover:bg-zinc-200 border-2 border-black rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 text-black space-y-6">

          {currentUser ? (
            /* LOGGED IN USER PROFILE CARD */
            <div className="space-y-6">
              <div className="neo-card p-5 rounded-xl bg-zinc-50 border-2 border-black text-center relative overflow-hidden">
                
                {/* Google Avatar Photo */}
                <div className="w-20 h-20 rounded-full border-2 border-black overflow-hidden mx-auto mb-3 shadow-neo bg-brand-yellow">
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-yellow border border-black font-mono text-[10px] font-black uppercase mb-2 shadow-neo">
                  <ShieldCheck className="w-3.5 h-3.5 text-black" />
                  Verified Google Account
                </div>

                <h3 className="font-display text-xl font-black text-black mb-0.5">
                  {currentUser.name}
                </h3>
                <p className="font-mono text-xs text-zinc-600 font-bold mb-4">
                  {currentUser.email}
                </p>

                {/* User Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t-2 border-black text-xs font-mono">
                  <div className="bg-white p-2.5 rounded-lg border border-black text-center">
                    <span className="text-[10px] text-zinc-500 uppercase block font-extrabold">Registered</span>
                    <span className="font-black text-black">1 Event</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-black text-center">
                    <span className="text-[10px] text-zinc-500 uppercase block font-extrabold">Status</span>
                    <span className="font-black text-black">Active Hacker</span>
                  </div>
                </div>

              </div>

              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="w-full bg-white hover:bg-zinc-100 text-black font-mono text-xs uppercase tracking-wider font-black py-3 rounded-lg border-2 border-black shadow-neo flex items-center justify-center gap-2 transition-all"
              >
                <LogOut className="w-4 h-4 stroke-[2.5]" />
                Sign Out of Account
              </button>
            </div>
          ) : (
            /* LOGGED OUT SIGN-IN VIEW */
            <div className="space-y-6 text-center">
              
              <div>
                <h3 className="font-display text-2xl font-black text-black uppercase tracking-tight mb-2">
                  Sign in to HackWithUs
                </h3>
                <p className="font-body text-zinc-700 text-xs font-semibold leading-relaxed">
                  Sign in to save your progress and get latest notifications about competitions, hackathons.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="bg-zinc-50 p-4 rounded-xl border-2 border-black text-left space-y-2.5 text-xs font-mono font-bold">
                <div className="flex items-center gap-2 text-black">
                  <CheckCircle className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>Instant access to live hackathons & coding sprints</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <CheckCircle className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>Receive deadline reminders & live rank updates</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <CheckCircle className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>Track quiz badges & hacker leaderboard rank</span>
                </div>
              </div>

              {/* Official Google Sign-In Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full neo-btn-yellow py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider font-black shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {/* Official Google 'G' Logo SVG */}
                <svg className="w-5 h-5 bg-white p-0.5 rounded-full border border-black" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                {loading ? 'Authenticating...' : 'Continue with Google'}
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
