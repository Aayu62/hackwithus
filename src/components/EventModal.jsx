import React, { useState } from 'react';
import { X, Trophy, CheckCircle, Calendar, Flame, Award } from 'lucide-react';

export default function EventModal({ event, mode, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    github: '',
    role: 'Full-stack Developer'
  });

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-black w-full max-w-2xl rounded-2xl shadow-neo-lg overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-6 border-b-2 border-black flex items-start justify-between bg-zinc-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-brand-yellow border border-black text-black font-mono text-[10px] font-black uppercase tracking-wider">
                {mode === 'join' ? 'Live Workspace Entry' : mode === 'register' ? 'Event Registration' : 'Hall of Fame Results'}
              </span>
              <span className="text-zinc-700 font-mono text-xs font-bold">• {event.category || 'HackWithUs Event'}</span>
            </div>
            <h2 className="font-display text-2xl font-black text-black">{event.title}</h2>
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

          {/* MODE: JOIN NOW */}
          {mode === 'join' && (
            <div>
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-brand-yellow text-black rounded-full flex items-center justify-center mx-auto border-2 border-black shadow-neo">
                    <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-black">Joined Arena Successfully!</h3>
                  <p className="text-zinc-700 text-sm max-w-md mx-auto font-semibold">
                    You are officially checked in to <span className="text-black font-bold underline">{event.title}</span>. Check your email for Discord team channels and project submission tokens.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={onClose}
                      className="neo-btn-yellow px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider"
                    >
                      Enter Live Workspace
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="neo-card p-4 rounded-xl bg-zinc-50 border-2 border-black space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-600 uppercase font-bold">Prize Pool:</span>
                      <span className="text-black font-black text-sm">{event.prizePool}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-600 uppercase font-bold">Active Hackers:</span>
                      <span className="text-black font-bold">{event.participantsCount} competitors</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-600 uppercase font-bold">Time Remaining:</span>
                      <span className="text-black font-black flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-black" /> {event.endsIn}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-800 text-sm leading-relaxed font-semibold">
                    {event.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase font-extrabold text-black tracking-wider">Select Team Mode:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="p-3 rounded-lg bg-brand-yellow border-2 border-black text-black text-xs font-mono font-bold cursor-pointer flex items-center justify-between shadow-neo">
                        <span>Solo Hacker</span>
                        <input type="radio" name="teamMode" defaultChecked className="accent-black" />
                      </label>
                      <label className="p-3 rounded-lg bg-white border-2 border-black text-black text-xs font-mono font-bold cursor-pointer flex items-center justify-between hover:bg-zinc-100">
                        <span>Form / Join Team</span>
                        <input type="radio" name="teamMode" className="accent-black" />
                      </label>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full neo-btn-yellow py-3.5 rounded-lg font-mono text-sm uppercase tracking-wider font-extrabold"
                  >
                    Confirm & Join Arena Now
                  </button>
                </div>
              )}
            </div>
          )}

          {/* MODE: REGISTER NOW */}
          {mode === 'register' && (
            <div>
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-brand-yellow text-black rounded-full flex items-center justify-center mx-auto border-2 border-black shadow-neo">
                    <Calendar className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-black">Registration Confirmed!</h3>
                  <p className="text-zinc-700 text-sm max-w-md mx-auto font-semibold">
                    We've saved your slot for <span className="text-black font-bold underline">{event.title}</span>. Calendar invite and starter kit link sent to <span className="text-black font-mono font-bold">{formData.email || 'your email'}</span>.
                  </p>
                  <button
                    onClick={onClose}
                    className="neo-btn-yellow px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-black uppercase font-bold tracking-wider mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border-2 border-black rounded-lg px-3.5 py-2.5 text-black font-semibold text-sm focus:outline-none focus:bg-zinc-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-black uppercase font-bold tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@hackwithus.io"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border-2 border-black rounded-lg px-3.5 py-2.5 text-black font-semibold text-sm focus:outline-none focus:bg-zinc-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-black uppercase font-bold tracking-wider mb-1">GitHub / Portfolio</label>
                      <input
                        type="url"
                        placeholder="https://github.com/username"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="w-full bg-white border-2 border-black rounded-lg px-3.5 py-2.5 text-black font-semibold text-sm focus:outline-none focus:bg-zinc-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-black uppercase font-bold tracking-wider mb-1">Primary Role</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-white border-2 border-black rounded-lg px-3.5 py-2.5 text-black font-semibold text-sm focus:outline-none focus:bg-zinc-50"
                      >
                        <option>Full-stack Developer</option>
                        <option>Frontend Specialist</option>
                        <option>Backend / Systems Architect</option>
                        <option>AI / Machine Learning Engineer</option>
                        <option>UI/UX Product Designer</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-100 border-2 border-black text-xs text-zinc-800 space-y-1 font-medium">
                    <p className="font-extrabold text-black font-mono uppercase">Event Details:</p>
                    <p>• Starts: {event.startDate || event.startsIn}</p>
                    <p>• Registration Closes: {event.regDeadline}</p>
                    <p>• Prize Pool: {event.prizePool}</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full neo-btn-black py-3 rounded-lg font-mono text-sm uppercase tracking-wider font-extrabold mt-2"
                  >
                    Complete Free Registration
                  </button>
                </form>
              )}
            </div>
          )}

          {/* MODE: RESULTS & WINNERS */}
          {mode === 'results' && (
            <div className="space-y-6">
              <div className="neo-card p-4 rounded-xl bg-zinc-50 border-2 border-black">
                <h4 className="font-mono text-xs text-black uppercase font-extrabold tracking-widest mb-1">Summary</h4>
                <p className="text-zinc-800 text-sm font-semibold">{event.summary}</p>
              </div>

              {/* Winners Leaderboard */}
              {event.winners && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase font-extrabold text-black tracking-wider flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-black" /> Leaderboard Winners Podium:
                  </h4>

                  <div className="space-y-2">
                    {event.winners.map((winner, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border-2 border-black flex items-center justify-between ${
                          idx === 0
                            ? 'bg-brand-yellow text-black shadow-neo'
                            : 'bg-white text-black'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-sm border-2 border-black ${
                              idx === 0
                                ? 'bg-black text-white'
                                : idx === 1
                                ? 'bg-zinc-200 text-black'
                                : 'bg-amber-200 text-black'
                            }`}
                          >
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-bold text-black font-display text-sm">{winner.team}</p>
                            <p className="text-xs text-zinc-700 font-mono font-medium">Project: {winner.project}</p>
                          </div>
                        </div>

                        <span className="font-mono text-sm font-black text-black">
                          {winner.prize}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
