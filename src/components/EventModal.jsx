import React from 'react';
import { X, Trophy, Calendar, ExternalLink, Award, Sparkles, Tag, ShieldCheck, Flame } from 'lucide-react';

export default function EventModal({ event, mode, onClose }) {
  if (!event) return null;

  const handleRegisterUnstop = () => {
    const targetUrl = event.unstopUrl || 'https://unstop.com';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Format description into paragraphs if it contains newlines
  const descriptionParagraphs = event.description
    ? event.description.split('\n\n').filter(Boolean)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-black w-full max-w-3xl rounded-2xl shadow-neo-lg overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-6 border-b-2 border-black flex items-start justify-between bg-zinc-50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-brand-yellow border border-black text-black font-mono text-[10px] font-black uppercase tracking-wider shadow-neo">
                {event.category || 'Hackathon Event'}
              </span>
              {event.organizer && (
                <span className="text-zinc-700 font-mono text-xs font-bold uppercase">
                  • By {event.organizer}
                </span>
              )}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-black">{event.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-black hover:bg-zinc-200 border-2 border-black rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-black">

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-zinc-50 border-2 border-black rounded-xl text-center">
              <span className="font-mono text-[10px] text-zinc-600 uppercase font-black block">Prize Pool</span>
              <span className="font-mono text-sm font-black text-black">{event.prizePool || 'Free Entry'}</span>
            </div>

            <div className="p-3 bg-zinc-50 border-2 border-black rounded-xl text-center">
              <span className="font-mono text-[10px] text-zinc-600 uppercase font-black block">Difficulty</span>
              <span className="font-mono text-xs font-black text-black">{event.difficulty || 'All Levels'}</span>
            </div>

            {event.regDeadline && (
              <div className="p-3 bg-zinc-50 border-2 border-black rounded-xl text-center">
                <span className="font-mono text-[10px] text-zinc-600 uppercase font-black block">Reg Deadline</span>
                <span className="font-mono text-xs font-black text-black">{event.regDeadline}</span>
              </div>
            )}

            {event.startsIn && (
              <div className="p-3 bg-zinc-50 border-2 border-black rounded-xl text-center">
                <span className="font-mono text-[10px] text-zinc-600 uppercase font-black block">Starts In</span>
                <span className="font-mono text-xs font-black text-black">{event.startsIn}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {event.tags && (
            <div className="flex flex-wrap gap-1.5">
              {event.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-zinc-100 border border-black text-black font-mono text-xs font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Full Description / Overview */}
          <div className="space-y-4 pt-2">
            <h3 className="font-mono text-xs uppercase font-black text-black tracking-wider flex items-center gap-1.5 border-b-2 border-black pb-2">
              <Sparkles className="w-4 h-4 text-black" /> Event Overview & Rules:
            </h3>

            {descriptionParagraphs.length > 0 ? (
              descriptionParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-zinc-800 text-sm leading-relaxed font-medium whitespace-pre-line">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-zinc-800 text-sm leading-relaxed font-semibold whitespace-pre-line">
                {event.description || event.summary}
              </p>
            )}
          </div>

          {/* Winners Section if Concluded */}
          {mode === 'results' && event.winners && (
            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase font-black text-black tracking-wider flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-black" /> Leaderboard Winners:
              </h4>

              <div className="space-y-2">
                {event.winners.map((winner, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border-2 border-black flex items-center justify-between ${
                      idx === 0
                        ? 'bg-brand-yellow text-black shadow-neo'
                        : 'bg-white text-black'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-black text-xs border-2 border-black ${
                          idx === 0
                            ? 'bg-black text-white'
                            : 'bg-zinc-200 text-black'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-bold text-black font-display text-sm">{winner.team}</p>
                        <p className="text-xs text-zinc-700 font-mono font-medium">Project: {winner.project}</p>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-black text-black">
                      {winner.prize}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-zinc-50 border-t-2 border-black flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border-2 border-black font-mono text-xs uppercase font-extrabold hover:bg-zinc-200 transition-colors"
          >
            Close
          </button>

          <button
            onClick={handleRegisterUnstop}
            className="neo-btn-yellow px-6 py-3 rounded-lg flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-black shadow-neo"
          >
            Register Now (Unstop)
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
