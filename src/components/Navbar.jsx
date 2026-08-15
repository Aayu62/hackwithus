import React, { useState } from 'react';
import { Terminal, Bell, Menu, X, Flame, Trophy, Lightbulb, HelpCircle, Home, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-brand-yellow text-black flex items-center justify-center font-bold border-2 border-black shadow-neo group-hover:scale-105 transition-transform">
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-extrabold tracking-tight text-black group-hover:text-brand-yellow transition-colors flex items-center gap-1.5">
              HackWithUs
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase -mt-1 font-bold">Innovate • Compete • Grow</span>
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
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-lg text-black hover:bg-zinc-100 border-2 border-black transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-yellow rounded-full ring-2 ring-black"></span>
            </button>

            {/* Notifications Dropdown Popup */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white border-2 border-black shadow-neo-lg rounded-xl p-4 z-50">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                  <span className="font-mono text-xs text-black uppercase font-extrabold tracking-wider flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-black" /> Live Updates
                  </span>
                  <span className="text-[10px] bg-brand-yellow text-black font-bold px-2 py-0.5 border border-black rounded">3 New</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
                    <p className="font-bold text-black mb-0.5">Quantum Hack Matrix 2026</p>
                    <p className="text-zinc-700 text-[11px]">Final submission deadline in 18 hours!</p>
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
                    <p className="font-bold text-black mb-0.5">AlgoSprint #42 Live</p>
                    <p className="text-zinc-700 text-[11px]">3,400 competitors actively solving DP problem set.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action CTA */}
          <button 
            onClick={() => handleNavClick('hackathons')}
            className="hidden sm:flex items-center gap-2 bg-brand-yellow text-black border-2 border-black font-mono text-xs uppercase tracking-wider font-extrabold px-4 py-2 rounded-md transition-all shadow-neo hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            Explore Live
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
    </header>
  );
}
