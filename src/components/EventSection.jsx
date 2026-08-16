import React, { useState } from 'react';
import EventCard from './EventCard';
import { Search, Filter, Flame, Calendar, Trophy, Terminal } from 'lucide-react';

export default function EventSection({ sectionMeta, events, onOpenModal }) {
  const [activeTab, setActiveTab] = useState('ongoing'); // 'ongoing' | 'upcoming' | 'concluded'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const tabList = [
    { id: 'ongoing', label: 'Ongoing', icon: Flame, count: events?.ongoing?.length || 0 },
    { id: 'upcoming', label: 'Upcoming', icon: Calendar, count: events?.upcoming?.length || 0 },
    { id: 'concluded', label: 'Concluded', icon: Trophy, count: events?.concluded?.length || 0 },
  ];

  // Current tab items
  const currentEvents = events ? events[activeTab] || [] : [];

  // Filtered by Search & Difficulty
  const filteredEvents = currentEvents.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDifficulty =
      selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b-2 border-black">
          <div>
            <div className="flex items-center gap-2 text-black font-mono text-xs uppercase font-black tracking-widest mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow border border-black"></span>
              {sectionMeta.tagline || 'HackWithUs Arena'}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-3">
              {sectionMeta.title}
            </h1>
            <p className="font-body text-zinc-700 text-sm sm:text-base max-w-2xl leading-relaxed font-semibold">
              {sectionMeta.subtitle}
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="w-full lg:w-96 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder={`Search ${sectionMeta.title.toLowerCase()}, tags...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-black rounded-xl py-3 pl-12 pr-4 text-black font-body text-sm font-semibold placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-50 shadow-neo transition-all"
            />
          </div>
        </div>

        {/* Tab Controls & Filters Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Ongoing / Upcoming / Concluded Tabs */}
          <div className="flex bg-white p-1 sm:p-1.5 rounded-xl border-2 border-black w-full sm:w-auto shadow-neo gap-1 sm:gap-1.5 overflow-x-auto">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2.5 rounded-lg font-mono text-[11px] sm:text-xs uppercase tracking-wider font-black transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-yellow text-black border-2 border-black shadow-neo'
                      : 'bg-white text-black hover:bg-zinc-100 border-2 border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black stroke-[2.5] shrink-0" />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                      isActive ? 'bg-black text-brand-yellow' : 'bg-zinc-200 text-black'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Difficulty Filter Dropdown */}
          <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-black shrink-0" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-white border-2 border-black text-black font-mono text-xs font-bold px-3 py-2.5 rounded-lg focus:outline-none shadow-neo cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="Advanced">Advanced</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Hard">Hard</option>
              <option value="All Levels">All Levels</option>
            </select>
          </div>

        </div>

        {/* Event Listings Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                activeTab={activeTab}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl border-2 border-dashed border-black">
            <Terminal className="w-12 h-12 text-black mx-auto mb-3" />
            <h3 className="font-display text-xl font-black text-black mb-1">No Events Found</h3>
            <p className="text-zinc-600 text-sm max-w-sm mx-auto mb-4 font-body font-semibold">
              There are currently no events matching your search or difficulty filter under {activeTab.toUpperCase()}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('All');
              }}
              className="neo-btn-yellow text-xs font-mono px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
