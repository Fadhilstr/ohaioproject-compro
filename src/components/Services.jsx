import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const services = [
    {
      id: '01',
      title: 'EVENT ORGANIZATION',
      tagline: 'Perencanaan menyeluruh, perizinan, tata kelola stakeholder, dan kepatuhan timeline.',
      deliverables: ['Timeline Governance', 'Permits & Stakeholder Liaison', 'Budget Management', 'Event Rundown'],
      image: '/images/events/madiun/hero.webp',
      eventRef: 'TDB 2026 Madiun'
    },
    {
      id: '02',
      title: 'EVENT PRODUCTION',
      tagline: 'Rigging panggung berstandar tinggi, tata suara akustik prima, lighting teatrikal & visual engineering.',
      deliverables: ['Custom Stage Construction', 'Line Array Sound System', 'Intelligent Lighting', 'LED Screen Walls'],
      image: '/images/events/semarang/hero.webp',
      eventRef: 'TDB 2026 Semarang'
    },
    {
      id: '03',
      title: 'BRAND ACTIVATION',
      tagline: 'Menciptakan titik temu interaktif yang merangsang partisipasi aktif dan loyalitas audiens terhadap brand.',
      deliverables: ['Interactive Multi-Zone Booth', 'Gamification & Quizzes', 'Sampling & Trial Experience', 'Participant Journey Flow'],
      image: '/images/events/tasikmalaya/hero.webp',
      eventRef: 'TDB 2026 Tasikmalaya'
    },
    {
      id: '04',
      title: 'BRAND EXPERIENCE',
      tagline: 'Mendesain perjalanan multi-sensori yang menyentuh emosi audiens dan meninggalkan kesan mendalam.',
      deliverables: ['Atmospheric Venue Styling', 'Immersive Installation', 'Story-Driven Engagement', 'Sensory Touchpoints'],
      image: '/images/events/bintaro/hero.webp',
      eventRef: 'TDB 2026 Bintaro'
    },
    {
      id: '05',
      title: 'CORPORATE & INSTITUTIONAL EVENT',
      tagline: 'Protokoler resmi, forum institusional kementerian/lembaga negara, serta konferensi berskala formal.',
      deliverables: ['Institutional Protocol Handling', 'VIP & Regulatory Hosting', 'Ceremony Directing', 'Official Press Documentation'],
      image: '/images/events/jakarta-sdn-12-benhil/hero.webp',
      eventRef: 'GTS OJK Jakarta'
    },
    {
      id: '06',
      title: 'SCHOOL / COMMUNITY EVENT',
      tagline: 'Roadshow edukasi massal, rally pelajar antar sekolah, serta festival kebersamaan komunitas generasi muda.',
      deliverables: ['Campus & School Tours', 'Edutainment Programs', 'Talent Showcases', 'Character-Building Activities'],
      image: '/images/events/bogor-tunas-harapan/hero.webp',
      eventRef: 'TDB 2026 Bogor Tunas Harapan'
    },
    {
      id: '07',
      title: 'CREATIVE POP-UP & EXHIBITION',
      tagline: 'Fabrikasi instalasi modular unik, booth pameran tematik ramah lingkungan, dan photo-op ikonik.',
      deliverables: ['Pop-Up Booth Fabrication', 'Eco-Friendly Material Design', 'Photo Opportunity Spots', 'Exhibition Curating'],
      image: '/images/events/cirebon/hero.webp',
      eventRef: 'TDB 2026 Cirebon'
    },
    {
      id: '08',
      title: 'FIELD EVENT MANAGEMENT',
      tagline: 'Manajemen pergerakan massa besar, koordinasi kru lapangan terlatih, serta mitigasi risiko di lokasi.',
      deliverables: ['Crowd Safety & Flow Control', 'Field Crew Coordination', 'Emergency Protocol', 'Nationwide Logistics'],
      image: '/images/events/batam/hero.webp',
      eventRef: 'TDB 2026 Batam'
    }
  ];

  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-24 bg-[#111318] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                SERVICES & CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              WHAT WE DO
            </h2>
          </div>
          <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest max-w-md leading-relaxed">
            Full-Spectrum Event Organizer, Technical Rigging & Creative Production House
          </p>
        </div>

        {/* Split Interactive View: Service List (Left) & Dynamic Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Services List */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {services.map((srv, idx) => {
              const isActive = activeService === idx;
              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setActiveService(idx)}
                  onClick={() => setActiveService(idx)}
                  className={`group p-4 sm:p-5 lg:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#18151c] border-[#e5243b]/60 shadow-[0_10px_30px_rgba(229,36,59,0.15)]'
                      : 'bg-[#13151b]/80 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className={`font-mono text-xs font-bold tracking-widest ${isActive ? 'text-[#ff4d61]' : 'text-[#64748b]'}`}>
                          {srv.id}
                        </span>
                        <h3 className={`font-display text-base sm:text-lg md:text-xl font-bold tracking-wide transition-colors ${
                          isActive ? 'text-white' : 'text-[#cbd5e1] group-hover:text-white'
                        }`}>
                          {srv.title}
                        </h3>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-[#94a3b8] leading-relaxed pl-6 sm:pl-8">
                        {srv.tagline}
                      </p>
                    </div>

                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isActive ? 'bg-[#e5243b] text-white scale-110 shadow-[0_0_12px_rgba(229,36,59,0.5)]' : 'bg-white/5 text-[#64748b] group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Expanded details when active */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-white/10 pl-6 sm:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 font-mono text-[11px] text-[#ff6b7d]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#e5243b] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Showcase Preview (Optimized for Laptop Viewports) */}
          <div className="lg:col-span-5 sticky top-24 hidden lg:block">
            <div className="p-3 rounded-2xl sm:rounded-3xl bg-[#14161c] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="relative aspect-[4/4.3] xl:aspect-[4/4.8] max-h-[52vh] rounded-xl sm:rounded-2xl overflow-hidden bg-black">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Floating Meta Tag */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ff6b7d] font-semibold">
                    Case Study Reference
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[#e5243b] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {services[activeService].id} / 08
                  </div>
                </div>

                {/* Bottom Card Info */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 space-y-1.5">
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#ff4d61] font-semibold">
                    {services[activeService].eventRef}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white uppercase leading-tight">
                    {services[activeService].title}
                  </div>
                  <p className="font-body text-xs text-[#cbd5e1] line-clamp-2 leading-relaxed">
                    {services[activeService].tagline}
                  </p>
                </div>
              </div>

              {/* Consultation prompt */}
              <div className="p-3 sm:p-3.5 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#94a3b8]">
                <span className="truncate pr-2">NEED THIS SERVICE?</span>
                <button
                  onClick={onOpenContact}
                  className="text-[#ff4d61] hover:text-[#ff8090] font-bold flex-shrink-0 flex items-center gap-1 hover:underline"
                >
                  DISCUSS WITH US &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
