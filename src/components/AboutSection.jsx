import React from 'react';
import { Target, Lightbulb, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      num: '01',
      title: 'CREATIVE BLUEPRINT',
      desc: 'Menganalisis profil target audiens, merancang tema visual, flow acara menit-ke-menit, serta narasi storytelling yang kuat.'
    },
    {
      num: '02',
      title: 'RIGGING & FABRICATION',
      desc: 'Produksi modular panggung, sistem tata suara line-array, pencahayaan panggung cerdas, dan booth edukasi ramah anak.'
    },
    {
      num: '03',
      title: 'FIELD PRECISION CONTROL',
      desc: 'Pengawalan protokol kesehatan, alur pergerakan ratusan peserta, koordinasi kru lapangan FOH, dan mitigasi kendala di lokasi.'
    },
    {
      num: '04',
      title: 'CINEMATIC ARCHIVE & AFTER-MOVIE',
      desc: 'Dokumentasi multikamera 4K, video recap sosial media, rilis pers, serta arsip visual berkualitas tinggi untuk kebutuhan klien.'
    }
  ];

  return (
    <section id="about-details" className="relative py-16 md:py-20 lg:py-24 bg-[#111318] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Visual Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/4.5] lg:aspect-[4/4.8] bg-black group max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/events/semarang/hero.webp"
                alt="OHAIO Project Production Rigging"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Floating Commitment Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#181a22]/85 backdrop-blur-xl border border-white/10 space-y-1.5">
                <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ff4d61] font-bold">
                  OUR CORE COMMITMENT
                </div>
                <div className="font-display text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                  Zero Compromise on Stage Safety, Audio Precision &amp; Audience Delight.
                </div>
              </div>
            </div>

            {/* Small Floating Accent Card */}
            <div className="absolute -top-4 -right-2 sm:-right-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#090a0d]/90 backdrop-blur-md border border-[#e5243b]/40 shadow-xl hidden sm:block max-w-[280px]">
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#ff6b7d] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#e5243b] flex-shrink-0" />
                <span>NATIONWIDE OPERATIONAL READINESS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Work Flow */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="space-y-3 sm:space-y-3.5">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                  THE PRODUCTION PHILOSOPHY
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                DEDIKASI TOTAL DALAM SETIAP DETIK PERTUNJUKAN
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-[#94a3b8] font-light leading-relaxed">
                Kami percaya bahwa sebuah event yang sukses bukan hanya tentang dekorasi yang indah, melainkan tentang harmoni antara ketelitian teknis di belakang panggung dan emosi yang dirasakan audiens di depan panggung.
              </p>
            </div>

            {/* Step-by-Step Workflow */}
            <div className="space-y-3.5 pt-4 border-t border-white/10">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#ff4d61] mb-2 font-semibold">
                HOW WE EXECUTE OUR EVENTS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {steps.map((st) => (
                  <div
                    key={st.num}
                    className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#14161c] border border-white/5 space-y-1.5 hover:border-[#e5243b]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#e5243b]">
                        PHASE {st.num}
                      </span>
                    </div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wider">
                      {st.title}
                    </h3>
                    <p className="font-body text-xs text-[#94a3b8] leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
