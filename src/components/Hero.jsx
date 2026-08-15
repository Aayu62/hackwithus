import React from 'react';
import { Terminal, Zap, ArrowRight, Flame } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14 border-b-2 border-black bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow text-black border-2 border-black font-mono text-xs font-black uppercase tracking-widest mb-4 shadow-neo">
          <Flame className="w-4 h-4 fill-black" />
          The Ultimate Hackathon & Event Hub
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black max-w-5xl mx-auto leading-none uppercase mb-4">
          Innovate. <span className="bg-brand-yellow px-3 py-1 border-2 border-black shadow-neo inline-block my-1">Compete.</span> Grow.
        </h1>

        {/* Hero Description */}
        <p className="font-body text-zinc-800 text-base sm:text-lg max-w-3xl mx-auto mb-6 leading-relaxed font-semibold">
          Join thousands of developers, designers, and algorithmic competitors building real-world solutions in hackathons, testing skills in speed challenges, attending expert workshops, and taking daily dev trivia quizzes.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onExploreClick('hackathons')}
            className="flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-brand-yellow hover:text-black font-mono font-black text-sm uppercase tracking-wider rounded-full border-2 border-black shadow-neo hover:shadow-neo-lg transition-all hover:-translate-y-1"
          >
            <Terminal className="w-5 h-5 stroke-[2.5]" />
            Register Now
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onExploreClick('quizzes')}
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-mono font-black text-sm uppercase tracking-wider rounded-full border-2 border-black hover:bg-zinc-100 transition-all shadow-neo"
          >
            <Zap className="w-5 h-5 text-black" />
            Try Daily Quizzes
          </button>
        </div>

      </div>
    </section>
  );
}
