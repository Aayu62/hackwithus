import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Bell, Menu, X, Flame, Trophy, Lightbulb, HelpCircle, Home, Sparkles, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const notificationRef = useRef(null);
  const { currentUser } = useAuth();

  // Close notification dropdown automatically when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }
    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'hackathons', label: 'Hackathons', icon: Terminal },
    { id: 'competitions', label: 'Competitions', icon: Trophy },
    { id: 'workshops', label: 'Workshops', icon: Lightbulb },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
        >
          <img src="/hwu_favicon.png" alt="HackWithUs Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-black group-hover:text-brand-yellow transition-colors flex items-center gap-1.5">
              HackWithUs
            </span>
            <span className="hidden sm:block text-[10px] font-mono tracking-widest text-zinc-600 uppercase -mt-1 font-bold">Innovate • Compete • Grow</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-yellow text-black border-2 border-black shadow-neo'
                    : 'text-black hover:bg-zinc-100 border-2 border-transparent'
                }`}
              >
                <Icon className="w-4 h-4 text-black" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Notifications */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-lg text-black hover:bg-zinc-100 border-2 border-black transition-colors flex items-center justify-center"
              title="Notifications"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="14 17 28 22">
                <path
                  d="M 28 38 c 1.105 0 2 -0.895 2 -2 h -4 c 0 1.105 0.895 2 2 2 Z m 0 -20 c 3.441 0 6.882 3.529 7 6.697 v 3.636 s 2 1.167 2 2.672 c 0 2.043 -1.34 2.995 -2.993 2.995 h -12.015 c -1.64 0 -2.993 -1 -2.993 -2.995 v -0.509 c 0 -0.552 0.385 -1.22 0.86 -1.497 l 1.14 -0.665 v -3.636 c 0.118 -3.168 3.559 -6.697 7 -6.697 Z"
                />
              </svg>
            </button>

            {/* Notifications Dropdown Popup */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] sm:w-80 max-w-xs bg-white border-2 border-black shadow-neo-lg rounded-xl p-4 z-50">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                  <span className="font-mono text-xs text-black uppercase font-extrabold tracking-wider flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-black" /> Live Updates
                  </span>
                  <span className="text-[10px] bg-brand-yellow text-black font-bold px-2 py-0.5 border border-black rounded">1 New</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
                    <p className="font-bold text-black mb-0.5">NO LIMITS. constraints//ZERO Hackathon 2026</p>
                    <p className="text-zinc-700 text-[11px]">Don't miss out. Registration Ends - 29th Sep!</p>
                  </div>
                  {/*<div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
                    <p className="font-bold text-black mb-0.5">AlgoSprint #42 Live</p>
                    <p className="text-zinc-700 text-[11px]">3,400 competitors actively solving DP problem set.</p>
                  </div>*/}
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon Button */}
          <button 
            onClick={() => setAuthModalOpen(true)}
            className="flex items-center gap-2 bg-white hover:bg-zinc-100 text-black border-2 border-black font-mono text-xs uppercase tracking-wider font-black p-1.5 sm:px-3 sm:py-2 rounded-lg transition-all shadow-neo"
            title={currentUser ? currentUser.name : 'Sign In'}
          >
            {currentUser ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.name}
                className="w-6 h-6 rounded-full border border-black object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-brand-yellow border border-black flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              </div>
            )}
            <span className="hidden sm:inline font-bold">
              {currentUser ? currentUser.name.split(' ')[0] : 'Profile'}
            </span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black rounded-lg hover:bg-zinc-100 border-2 border-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-black px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm uppercase tracking-wider text-left transition-all ${
                  isActive
                    ? 'bg-brand-yellow text-black font-extrabold border-2 border-black shadow-neo'
                    : 'text-black hover:bg-zinc-100 border-2 border-zinc-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Google Auth & User Profile Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </header>
  );
}
