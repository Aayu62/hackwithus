import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingTiles from './components/FloatingTiles';
import EventSection from './components/EventSection';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import TargetCursor from './components/TargetCursor';
import InfoModal from './components/InfoModal';

import { SECTION_METADATA, EVENTS_DATA, FEATURED_EVENTS } from './data/eventsData';
import { Flame, ArrowRight, Info, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home'); // 'home' | 'hackathons' | 'competitions' | 'workshops' | 'quizzes'
  const [infoModalType, setInfoModalType] = useState(null); // 'privacy' | 'terms' | 'about' | null
  const [modalState, setModalState] = useState({
    isOpen: false,
    event: null,
    mode: 'join' // 'join' | 'register' | 'results'
  });

  const handleOpenModal = (event, mode) => {
    setModalState({
      isOpen: true,
      event,
      mode
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      event: null,
      mode: 'join'
    });
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col font-body selection:bg-brand-yellow selection:text-black">
      
      {/* Target Cursor Animation */}
      <TargetCursor
        spinDuration={3}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#ffffff"
        targetSelector=".cursor-target, button, a, select, input, .glass-card, .neo-card"
      />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeSection === 'home' ? (
          <div>
            {/* Hero Section */}
            <Hero onExploreClick={setActiveSection} />

            {/* Floating Tiles / Bento Grid */}
            <FloatingTiles onSelectSection={setActiveSection} />

            {/* Featured & Trending Events Section on Homepage */}
            <section className="py-16 bg-white border-b-2 border-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-black font-mono text-xs uppercase font-black tracking-widest mb-1">
                      <Flame className="w-4 h-4 fill-black" /> Handpicked Arenas
                    </div>
                    <h2 className="font-display text-3xl font-black text-black uppercase tracking-tight">
                      Featured & Trending Events
                    </h2>
                  </div>

                  <button
                    onClick={() => setActiveSection('hackathons')}
                    className="flex items-center gap-2 text-xs font-mono text-black hover:underline uppercase font-extrabold tracking-wider transition-all"
                  >
                    View All Hackathons <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Homepage Featured Events Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FEATURED_EVENTS.map((event) => (
                    <EventSectionCardPreview
                      key={event.id}
                      event={event}
                      onOpenModal={handleOpenModal}
                    />
                  ))}
                </div>

              </div>
            </section>
          </div>
        ) : (
          /* Render Active Event Section (Hackathons, Competitions, Workshops, Quizzes) */
          <EventSection
            sectionMeta={SECTION_METADATA[activeSection]}
            events={EVENTS_DATA[activeSection]}
            onOpenModal={handleOpenModal}
          />
        )}
      </main>

      {/* Modal Popup Component */}
      {modalState.isOpen && (
        <EventModal
          event={modalState.event}
          mode={modalState.mode}
          onClose={handleCloseModal}
        />
      )}

      {/* Info / Policy Modal Component */}
      {infoModalType && (
        <InfoModal
          type={infoModalType}
          onClose={() => setInfoModalType(null)}
        />
      )}

      {/* Footer Component */}
      <Footer onSelectSection={setActiveSection} onOpenInfoModal={setInfoModalType} />

    </div>
  );
}

// Inline Helper Preview Card for Homepage Featured Events
function EventSectionCardPreview({ event, onOpenModal }) {
  return (
    <div className="neo-card p-6 rounded-xl bg-white border-2 border-black hover:border-black transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-yellow text-black font-mono text-[10px] font-black uppercase tracking-wider border border-black shadow-neo">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
            {event.status || 'LIVE'}
          </span>
          <span className="font-mono text-xs text-zinc-700 font-extrabold">{event.category}</span>
        </div>

        <h3 className="font-display text-lg font-black text-black mb-2 group-hover:underline transition-all">
          {event.title}
        </h3>
        <p className="font-body text-zinc-700 text-xs mb-4 line-clamp-2 font-medium">
          {event.description}
        </p>
      </div>

      <div className="pt-4 border-t-2 border-black flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenModal(event, 'info')}
          className="flex-1 bg-white hover:bg-zinc-100 text-black font-mono text-xs uppercase tracking-wider font-black py-2 px-3 rounded-lg border-2 border-black shadow-neo flex items-center justify-center gap-1 transition-all"
        >
          <Info className="w-3.5 h-3.5 stroke-[2.5]" />
          Info
        </button>

        <button
          onClick={() => window.open(event.unstopUrl || 'https://unstop.com', '_blank', 'noopener,noreferrer')}
          className="flex-1 neo-btn-yellow text-xs font-mono py-2 px-3 rounded-lg font-black flex items-center justify-center gap-1 shadow-neo"
        >
          Register
          <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
