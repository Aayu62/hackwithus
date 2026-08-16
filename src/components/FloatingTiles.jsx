import React from 'react';
import { Terminal, Trophy, Lightbulb, HelpCircle, ArrowUpRight, Sparkles } from 'lucide-react';

export default function FloatingTiles({ onSelectSection }) {
  const tiles = [
    {
      id: 'hackathons',
      title: 'Hackathons',
      subtitle: 'Build solutions in 48 hours with global developer teams.',
      icon: Terminal,
      badge: '1 Upcoming',
      colSpan: 'md:col-span-2 lg:col-span-2',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'competitions',
      title: 'Competitions',
      subtitle: 'Test your algorithms & competitive programming limits.',
      icon: Trophy,
      badge: 'Coming Soon',
      colSpan: 'md:col-span-1 lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'workshops',
      title: 'Workshops',
      subtitle: 'Learn live from industry pros & principal software architects.',
      icon: Lightbulb,
      badge: 'Coming Soon',
      colSpan: 'md:col-span-1 lg:col-span-1',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'quizzes',
      title: 'Daily Quizzes & Trivia',
      subtitle: 'Fast-paced technical questions to test your JavaScript, Systems & CS core knowledge.',
      icon: HelpCircle,
      badge: 'Coming Soon',
      colSpan: 'md:col-span-2 lg:col-span-4',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-zinc-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-black font-mono text-xs uppercase font-extrabold tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-black" /> Floating Event Categories
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Select Your Event Arena
            </h2>
          </div>
          <p className="font-body text-zinc-700 text-sm max-w-md font-semibold">
            Click on any event category card below to navigate directly to its Ongoing, Upcoming, and Concluded tabs.
          </p>
        </div>

        {/* Floating Tiles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.id}
                onClick={() => onSelectSection(tile.id)}
                className={`glass-card ${tile.colSpan} rounded-xl p-5 sm:p-8 flex flex-col justify-between group cursor-pointer relative min-h-[220px] sm:min-h-[260px] overflow-hidden`}
              >
                {/* Top Badge & Link Arrow */}
                <div className="flex items-start justify-between mb-4 sm:mb-6 z-10 gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-yellow text-black border-2 border-black font-mono text-[10px] sm:text-xs font-black tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                    {tile.badge}
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-white group-hover:rotate-45 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Main Tile Details */}
                <div className="z-10 mt-auto">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-black text-white group-hover:bg-brand-yellow group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                    </div>
                    <h3 className="font-display text-lg sm:text-2xl font-black text-black group-hover:underline">
                      {tile.title}
                    </h3>
                  </div>

                  <p className="font-body text-zinc-700 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed">
                    {tile.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
