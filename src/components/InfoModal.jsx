import React from 'react';
import { X, ShieldCheck, FileText, Info, CheckCircle, Terminal, Heart, Zap, Lock } from 'lucide-react';

export default function InfoModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-black w-full max-w-2xl rounded-2xl shadow-neo-lg overflow-hidden relative flex flex-col max-h-[85vh]">
        
        {/* Header Bar */}
        <div className="p-5 border-b-2 border-black flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-yellow text-black flex items-center justify-center font-bold border-2 border-black shadow-neo">
              {type === 'privacy' && <ShieldCheck className="w-4 h-4 stroke-[2.5]" />}
              {type === 'terms' && <FileText className="w-4 h-4 stroke-[2.5]" />}
              {type === 'about' && <Info className="w-4 h-4 stroke-[2.5]" />}
            </div>
            <h2 className="font-display font-black text-xl text-black">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Service'}
              {type === 'about' && 'About HackWithUs'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-black hover:bg-zinc-200 border-2 border-black rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-black font-body">

          {/* 1. PRIVACY POLICY CONTENT */}
          {type === 'privacy' && (
            <div className="space-y-5 text-sm leading-relaxed font-medium">
              <div className="p-4 bg-zinc-50 border-2 border-black rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-black">
                  <Lock className="w-4 h-4 text-black" /> Safe & Transparent Data Principles
                </div>
                <p className="text-zinc-700 text-xs font-semibold">
                  At HackWithUs, we prioritize user privacy. We do not sell user data, track passwords, or share private personal credentials with third parties.
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">1. Information We Collect</h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  When you sign in using Google OAuth, we strictly receive public OAuth profile fields: your Full Name, Email Address, and Avatar Photo URL. We never request or store Google passwords.
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">2. How Information Is Used</h4>
                <ul className="space-y-1.5 text-xs text-zinc-700 font-semibold list-disc pl-4">
                  <td>To maintain your active session across page reloads.</td>
                  <td>To auto-fill registration forms for hackathons, speed coding sprints, and workshops.</td>
                  <td>To send essential competition updates and submission deadline notifications.</td>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">3. Cookies & Local Storage</h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  We use browser local storage solely to remember your logged-in profile state and theme preferences locally on your device.
                </p>
              </div>
            </div>
          )}

          {/* 2. TERMS OF SERVICE CONTENT */}
          {type === 'terms' && (
            <div className="space-y-5 text-sm leading-relaxed font-medium">
              <div className="p-4 bg-brand-yellow border-2 border-black rounded-xl shadow-neo space-y-1">
                <div className="flex items-center gap-2 font-mono font-black text-xs uppercase text-black">
                  <Terminal className="w-4 h-4 text-black" /> Hacker Code of Conduct & Fair Play
                </div>
                <p className="text-black text-xs font-bold">
                  HackWithUs is built on integrity, innovation, and resourcefulness. Every competitor agrees to adhere to open sportsmanship.
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">1. Hackathon & Event Participation</h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  Participants must submit original work built during the hackathon window. Pre-existing boilerplate templates are permitted, but core project functionality must be executed live during the sprint.
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">2. AI & Tool Usage</h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  AI tools, LLMs, code generation agents, and open-source APIs are fully allowed and encouraged unless specified otherwise for a specific specialized challenge.
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5">3. Plagiarism & Disqualification</h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  Directly plagiarizing another participant's submission or submitting previously published projects will result in immediate disqualification and leaderboard removal.
                </p>
              </div>
            </div>
          )}

          {/* 3. ABOUT US CONTENT */}
          {type === 'about' && (
            <div className="space-y-5 text-sm leading-relaxed font-medium">
              <div className="p-5 bg-zinc-50 border-2 border-black rounded-xl space-y-2 text-center">
                <span className="px-3 py-1 bg-brand-yellow border border-black font-mono text-[10px] font-black uppercase tracking-wider rounded shadow-neo">
                  Innovate. Compete. Grow.
                </span>
                <h3 className="font-display text-2xl font-black text-black pt-1">Empowering Developers Worldwide</h3>
                <p className="text-zinc-700 text-xs font-semibold max-w-md mx-auto">
                  HackWithUs is the ultimate community hub designed for builders, competitive coders, designers, and tech enthusiasts.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 border-2 border-black rounded-xl bg-white shadow-neo">
                  <span className="font-mono text-lg font-black text-black block">10K+</span>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase font-bold">Active Hackers</span>
                </div>
                <div className="p-3 border-2 border-black rounded-xl bg-white shadow-neo">
                  <span className="font-mono text-lg font-black text-black block">₹50L+</span>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase font-bold">Prize Pools</span>
                </div>
                <div className="p-3 border-2 border-black rounded-xl bg-white shadow-neo">
                  <span className="font-mono text-lg font-black text-black block">100%</span>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase font-bold">Build & Ship</span>
                </div>
              </div>

              <div>
                <h4 className="font-display font-black text-base text-black mb-1.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-black" /> Our Mission
                </h4>
                <p className="text-zinc-700 text-xs leading-relaxed font-semibold">
                  We believe true engineering mastery comes from hands-on execution under real constraints. HackWithUs connects ambitious developers with real-world hackathons, speed coding arenas, expert masterclasses, and daily technical quizzes to accelerate skill growth.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-zinc-50 border-t-2 border-black flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border-2 border-black font-mono text-xs uppercase font-extrabold bg-white hover:bg-zinc-100 transition-colors shadow-neo"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
