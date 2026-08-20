import React from 'react';
import { Terminal, Zap, ArrowRight, Flame } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const handleScrollToFeatured = () => {
    const featuredEl = document.getElementById('featured-events');
    if (featuredEl) {
      featuredEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14 border-b-2 border-black bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Badge */}
        <div className="cursor-target inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-black border-2 border-black font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 shadow-neo max-w-full">
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black shrink-0" />
          <span className="truncate">The Ultimate Hackathon & Event Hub</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black max-w-5xl mx-auto leading-tight sm:leading-none uppercase mb-4">
          Innovate. <span className="cursor-target cursor-pointer bg-brand-yellow px-2 sm:px-3 py-0.5 sm:py-1 border-2 border-black shadow-neo inline-block my-1">Compete.</span> Grow.
        </h1>

        {/* Hero Description */}
        <p className="font-body text-zinc-800 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed font-semibold px-2">
          Join thousands of developers, designers, and algorithmic competitors building real-world solutions in hackathons, testing skills in speed challenges, attending expert workshops, and taking daily dev trivia quizzes.
        </p>

        {/* Primary Call to Action Button */}
        <div className="flex justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={handleScrollToFeatured}
            className="flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white hover:bg-brand-yellow hover:text-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-black shadow-neo hover:shadow-neo-lg transition-all"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            Explore
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
