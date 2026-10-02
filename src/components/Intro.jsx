import React from 'react';
import { Compass, ShieldCheck, Zap } from 'lucide-react';

export default function Intro() {
  const pillars = [
    {
      icon: Compass,
      title: 'CREATIVE STRATEGY',
      desc: 'Merumuskan konsep acara yang otentik, memikat, dan selaras dengan objektif brand maupun lembaga.'
    },
    {
      icon: Zap,
      title: 'END-TO-END PRODUCTION',
      desc: 'Konstruksi panggung kokoh, multimedia audio-visual jernih, dan tata pencahayaan panggung berstandar industri.'
    },
    {
      icon: ShieldCheck,
      title: 'NATIONWIDE EXECUTION',
      desc: 'Jaringan operasional lintas kota dan pulau di Indonesia dengan kedisiplinan alur protokol serta keamanan acara.'
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24 bg-[#090a0d] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
          <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
            ABOUT OHAIO PROJECT
          </span>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08] uppercase tracking-tight">
              “WE CREATE EXPERIENCES <br />
              <span className="text-red-gradient">THAT PEOPLE REMEMBER.”</span>
            </h2>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-3.5 sm:space-y-4 text-[#94a3b8] font-body text-xs sm:text-sm md:text-base leading-relaxed font-light">
            <p>
              <strong className="text-white font-semibold">PT Ohaio Project Bersama (OHAIO Project)</strong> adalah creative event organizer dan production house yang mengkhususkan diri pada eksekusi event berskala nasional, aktivasi generasi muda, serta program kelembagaan institusi.
            </p>
            <p>
              Dari pesisir Batam hingga pusat budaya Jawa Timur, kami mengorkestrasi setiap detail — tata panggung, manajemen audiens, interaktivitas booth, hingga dokumentasi sinematik bernilai tinggi.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 border-t border-white/10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#111318]/70 border border-white/5 hover:border-[#e5243b]/40 transition-all duration-300 card-hover"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#e5243b]/10 border border-[#e5243b]/25 flex items-center justify-center text-[#ff4d61] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#e5243b] font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide mb-2 sm:mb-2.5 group-hover:text-[#ff4d61] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
