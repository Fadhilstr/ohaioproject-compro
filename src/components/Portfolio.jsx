import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Users, Eye } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function Portfolio({ onSelectEvent }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { label: 'ALL', count: 12 },
    { label: 'TDB 2026', count: 10 },
    { label: 'GTS OJK', count: 2 },
    { label: 'JABODETABEK', count: 5 },
    { label: 'OUTSIDE JABODETABEK', count: 7 }
  ];

  const filteredEvents = eventsData.filter((ev) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'TDB 2026') return ev.filterCategory === 'TDB 2026';
    if (activeFilter === 'GTS OJK') return ev.filterCategory === 'GTS OJK';
    if (activeFilter === 'JABODETABEK') return ev.regionFilter === 'JABODETABEK';
    if (activeFilter === 'OUTSIDE JABODETABEK') return ev.regionFilter === 'OUTSIDE JABODETABEK';
    return true;
  });

  return (
    <section id="events" className="relative py-16 md:py-20 lg:py-24 bg-[#090a0d] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                PORTFOLIO CASE STUDIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight">
              OUR EVENTS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest max-w-sm leading-relaxed">
            Curated documentation of nationwide roadshows, youth activations & institutional productions across Indonesia.
          </p>
        </div>

        {/* Filter Navigation Bar: Horizontal Scrollable on Mobile, Wrapped on Tablet/Desktop */}
        <div className="flex items-center gap-2 sm:gap-3 pb-4 sm:pb-6 mb-8 sm:mb-10 border-b border-white/10 overflow-x-auto no-scrollbar sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
          <span className="font-mono text-xs text-[#64748b] uppercase tracking-wider mr-1 hidden sm:inline flex-shrink-0">
            FILTER:
          </span>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.label)}
                className={`tag-pill font-mono text-[11px] sm:text-xs flex-shrink-0 whitespace-nowrap transition-all ${
                  isActive
                    ? '!bg-[#e5243b] !text-white !border-[#e5243b] shadow-[0_4px_16px_rgba(229,36,59,0.4)] font-bold'
                    : ''
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 opacity-70">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-10">
          {filteredEvents.map((ev, index) => {
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-7' : index % 3 === 1 ? 'md:col-span-5' : 'md:col-span-12';
            const aspect = isWide ? 'aspect-[16/10]' : index % 3 === 1 ? 'aspect-[4/3] md:aspect-[16/13]' : 'aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9]';

            return (
              <article
                key={ev.slug}
                onClick={() => onSelectEvent(ev)}
                className={`${colSpan} group cursor-pointer`}
              >
                <div className="relative rounded-2xl sm:rounded-3xl bg-[#12141a] border border-white/10 hover:border-[#e5243b]/60 transition-all duration-500 overflow-hidden card-hover">
                  {/* Photo Container */}
                  <div className={`relative ${aspect} w-full overflow-hidden bg-black`}>
                    <img
                      src={ev.heroImage}
                      alt={ev.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.92] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d]/90 via-[#090a0d]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between pointer-events-none">
                      <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-red-500/25 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ff6b7d] font-semibold">
                        {ev.series}
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-white/80">
                        {ev.id}
                      </span>
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#e5243b] to-[#dc2626] text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xl shadow-red-500/40 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>EXPLORE CASE STUDY</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Footer Area */}
                  <div className="p-5 sm:p-6 lg:p-7 space-y-3 sm:space-y-4">
                    <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div>
                        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-[#ff4d61] uppercase tracking-widest font-semibold">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e5243b] flex-shrink-0" />
                          <span>{ev.city}, {ev.province}</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mt-1 group-hover:text-[#ff4d61] transition-colors leading-snug">
                          {ev.shortTitle}
                        </h3>
                      </div>

                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-[#e5243b] group-hover:border-[#e5243b] transition-all flex-shrink-0 shadow-sm mt-1 sm:mt-0">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-[#94a3b8] line-clamp-2 leading-relaxed font-light">
                      {ev.tagline || ev.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] text-[#94a3b8]">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e5243b]" />
                        <span>{ev.attendees}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e5243b]" />
                        <span>{ev.date}</span>
                      </div>
                      <div className="text-[#ff4d61] uppercase font-bold tracking-wider">
                        {ev.type}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
