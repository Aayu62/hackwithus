import React from 'react';
import { Calendar, Users, Trophy, Clock, ArrowRight, Award, Info, ExternalLink } from 'lucide-react';

export default function EventCard({ event, activeTab, onOpenModal }) {
  const isOngoing = activeTab === 'ongoing';
  const isUpcoming = activeTab === 'upcoming';
  const isConcluded = activeTab === 'concluded';

  const handleUnstopClick = (e) => {
    e.stopPropagation();
    const targetUrl = event.unstopUrl || 'https://unstop.com';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col justify-between group relative bg-white border-2 border-black">
      
      {/* Background Image / Banner Header */}
      {event.image && (
        <div className="h-44 w-full relative overflow-hidden bg-zinc-100 border-b-2 border-black">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            {isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-yellow text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-neo">
                <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
                LIVE NOW
              </span>
            )}
            {isUpcoming && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border-2 border-black text-black font-mono text-xs font-bold uppercase tracking-wider shadow-neo">
                <Calendar className="w-3.5 h-3.5" />
                Starts {event.startsIn}
              </span>
            )}
            {isConcluded && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black">
                <Trophy className="w-3.5 h-3.5 text-brand-yellow" />
                Ended
              </span>
            )}
          </div>

          {/* Top Right Tag */}
          {event.category && (
            <div className="absolute top-3 right-3 z-10 bg-white border-2 border-black text-black font-extrabold text-[11px] font-mono px-2.5 py-0.5 rounded shadow-neo">
              {event.category}
            </div>
          )}
        </div>
      )}

      {/* Main Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Organizer / Subtitle */}
          {event.organizer && (
            <p className="font-mono text-xs text-zinc-600 uppercase font-extrabold tracking-wider mb-1">
              By {event.organizer}
            </p>
          )}

          {/* Title */}
          <h3 className="font-display text-xl font-black text-black mb-2 group-hover:text-zinc-800 transition-colors">
            {event.title}
          </h3>

          {/* Description / Summary */}
          <p className="font-body text-zinc-700 text-sm mb-4 line-clamp-2 leading-relaxed font-medium">
            {event.description || event.summary}
          </p>

          {/* Tag Badges */}
          {event.tags && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {event.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-zinc-100 border border-black text-black font-mono text-[11px] font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Details Bar based on Active Tab */}
        <div className="pt-4 border-t-2 border-black space-y-4">
          
          {/* Ongoing Details */}
          {isOngoing && (
            <div className="flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-zinc-600 uppercase tracking-widest block text-[10px] font-bold">Ends In</span>
                <span className="text-black font-black flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  {event.endsIn}
                </span>
              </div>
              <div className="text-right">
                <span className="text-zinc-600 uppercase tracking-widest block text-[10px] font-bold">Prize Pool</span>
                <span className="text-black font-black text-sm">{event.prizePool}</span>
              </div>
            </div>
          )}

          {/* Upcoming Details */}
          {isUpcoming && (
            <div className="flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-zinc-600 uppercase tracking-widest block text-[10px] font-bold">Reg Deadline</span>
                <span className="text-black font-bold">{event.regDeadline}</span>
              </div>
              <div className="text-right">
                <span className="text-zinc-600 uppercase tracking-widest block text-[10px] font-bold">Prize Pool</span>
                <span className="text-black font-black text-sm">{event.prizePool}</span>
              </div>
            </div>
          )}

          {/* Concluded Details (Winners Preview) */}
          {isConcluded && event.winners && (
            <div className="bg-zinc-100 p-3 rounded-lg border-2 border-black space-y-1 text-xs font-mono">
              <div className="flex items-center justify-between text-black font-black">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-black" /> 1st: {event.winners[0].team}
                </span>
                <span>{event.winners[0].prize}</span>
              </div>
              <p className="text-zinc-700 text-[11px] font-medium truncate">Project: {event.winners[0].project}</p>
            </div>
          )}

          {/* Action Buttons: Info & Register Now (Unstop) */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenModal(event, isConcluded ? 'results' : 'info')}
              className="w-full bg-white hover:bg-zinc-100 text-black font-mono text-xs uppercase tracking-wider font-black py-2.5 px-3 rounded-lg border-2 border-black shadow-neo flex items-center justify-center gap-1.5 transition-all"
            >
              <Info className="w-4 h-4 stroke-[2.5]" />
              Info
            </button>

            <button
              onClick={handleUnstopClick}
              className="w-full neo-btn-yellow py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider font-black shadow-neo"
            >
              Register Now
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
