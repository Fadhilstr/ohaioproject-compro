import React from 'react';
import { ShieldCheck, Sparkles, Award } from 'lucide-react';
import { teamData } from '../data/teamData';

export default function Team() {
  return (
    <section id="team" className="relative py-16 md:py-20 lg:py-24 bg-[#090a0d] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                CORE CREATIVE &amp; PRODUCTION CREW
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              MEET THE TEAM
            </h2>
          </div>
          <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest max-w-md leading-relaxed">
            The dedicated creative crew &amp; field team powering every OHAIO Project execution across Indonesia.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {teamData.map((member, idx) => (
            <div
              key={member.name}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#12141a] border border-white/10 hover:border-[#e5243b]/60 transition-all duration-500 overflow-hidden card-hover"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/4.6] overflow-hidden bg-gradient-to-b from-[#1a1c24] to-[#090a0d]">
                <img
                  src={`${member.photo}?v=2`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-[0.94] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-85" />

                {/* Crew ID Number */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#ff4d61] font-bold">
                  0{idx + 1}
                </div>
              </div>

              {/* Text Info: Only the Name */}
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-base sm:text-lg font-extrabold text-white group-hover:text-[#ff4d61] transition-colors leading-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Callout Card: Join the Crew / Collaborate */}
          <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#161215] to-[#111318] border border-dashed border-red-500/30 hover:border-[#e5243b] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 card-hover">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#e5243b]/10 border border-[#e5243b]/30 flex items-center justify-center text-[#ff4d61]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase leading-tight">
                WORK WITH OUR CREW
              </h3>
              <p className="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
                Membutuhkan tim pelaksana yang tangguh, teruji di berbagai kota, dan berorientasi pada kepuasan klien tertinggi?
              </p>
            </div>

            <div className="pt-4 sm:pt-5 border-t border-white/10 mt-4 sm:mt-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#ff4d61] hover:text-[#ff8090] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform"
              >
                <span>LET'S COLLABORATE &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
