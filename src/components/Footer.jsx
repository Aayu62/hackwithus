import React from 'react';
import { Instagram, Youtube, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer({ onSelectSection, onOpenInfoModal }) {
  return (
    <footer className="bg-white border-t-2 border-black text-black pt-16 pb-12 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b-2 border-black">
          
          {/* Company Info Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectSection('home')}>
              <img src="/hwu_favicon.png" alt="HackWithUs Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
              <span className="font-display text-2xl font-black text-black tracking-tight">
                HackWithUs
              </span>
            </div>

            <p className="text-zinc-700 text-sm max-w-sm leading-relaxed font-semibold">
              The premier platform powering hackathons, speed coding competitions, interactive masterclasses, and daily developer trivia quizzes worldwide.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-2 flex-wrap">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="w-9 h-9 rounded-lg bg-white border-2 border-black text-black hover:bg-brand-yellow flex items-center justify-center transition-colors shadow-neo">
                <Instagram className="w-4 h-4" />
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noreferrer" title="WhatsApp" className="w-9 h-9 rounded-lg bg-white border-2 border-black text-black hover:bg-brand-yellow flex items-center justify-center transition-colors shadow-neo">
                <MessageCircle className="w-4 h-4" />
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube" className="w-9 h-9 rounded-lg bg-white border-2 border-black text-black hover:bg-brand-yellow flex items-center justify-center transition-colors shadow-neo">
                <Youtube className="w-4 h-4" />
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="w-9 h-9 rounded-lg bg-white border-2 border-black text-black hover:bg-brand-yellow flex items-center justify-center transition-colors shadow-neo">
                <Linkedin className="w-4 h-4" />
              </a>
              {/* Gmail / Mail */}
              <a href="mailto:contact@hackwithus.in" target="_blank" rel="noreferrer" title="Gmail" className="w-9 h-9 rounded-lg bg-white border-2 border-black text-black hover:bg-brand-yellow flex items-center justify-center transition-colors shadow-neo">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-black uppercase font-black tracking-widest">Event Sections</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <button onClick={() => onSelectSection('hackathons')} className="hover:underline hover:text-black">
                  Hackathons
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('competitions')} className="hover:underline hover:text-black">
                  Competitions & CTFs
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('workshops')} className="hover:underline hover:text-black">
                  Workshops & Masterclasses
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('quizzes')} className="hover:underline hover:text-black">
                  Daily CS Quizzes
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs text-black uppercase font-black tracking-widest">Stay Updated</h4>
            <p className="text-xs text-zinc-700 font-semibold">Get notified when new hackathons, prize pools, and workshops are published.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to HackWithUs updates!'); }} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="enter your email..."
                  className="w-full bg-white border-2 border-black rounded-l-lg px-3 py-2 text-xs text-black font-semibold placeholder:text-zinc-500 focus:outline-none"
                />
                <button type="submit" className="neo-btn-yellow px-4 py-2 rounded-r-lg font-mono text-xs uppercase font-black border-l-0">
                  Join
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-700 font-bold gap-4">
          <p>© 2026 HackWithUs Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenInfoModal('privacy')} className="hover:underline hover:text-black">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenInfoModal('terms')} className="hover:underline hover:text-black">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => onOpenInfoModal('about')} className="hover:underline hover:text-black">
              About Us
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
