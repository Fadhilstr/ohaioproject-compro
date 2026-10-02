import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const heroSlides = [
    {
      image: '/images/events/madiun/hero.webp',
      title: 'TDB 2026 — MADIUN',
      city: 'Madiun, Jawa Timur',
      highlight: 'Spectacular Stage & Creative Pop-Up'
    },
    {
      image: '/images/events/tasikmalaya/hero.webp',
      title: 'TDB 2026 — TASIKMALAYA',
      city: 'Tasikmalaya, Jawa Barat',
      highlight: 'Interactive Edu-Zone & Youth Festival'
    },
    {
      image: '/images/events/batam/hero.webp',
      title: 'TDB 2026 — BATAM',
      city: 'Batam, Kepulauan Riau',
      highlight: 'Nationwide Island Tour & OJK Partnership'
    },
    {
      image: '/images/events/semarang/hero.webp',
      title: 'TDB 2026 — SEMARANG',
      city: 'Semarang, Jawa Tengah',
      highlight: 'Regional Hub Rigging & Multi-School Arena'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#090a0d] pt-20 sm:pt-24 lg:pt-24 pb-2 sm:pb-3">
      {/* Background Slideshow with High Clarity & Cinematic Fade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-[7000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-[0.78] sm:brightness-[0.82] contrast-[1.08] saturate-[1.12]"
            />
          </div>
        ))}

        {/* Controlled Gradients: Readability for Text while keeping photo vivid & prominent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d]/95 via-[#090a0d]/65 via-45% to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/40 via-20% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0d]/75 via-transparent to-transparent h-32" />
        
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#e5243b]/15 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center py-3 sm:py-4">
        <div className="max-w-3xl lg:max-w-4xl space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5">
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5243b]" />
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white font-semibold">
              PT OHAIO PROJECT BERSAMA
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#ff6b7d] font-bold">
              EST. 2026
            </span>
          </div>

          {/* Main Editorial Hero Typography */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[0.96] drop-shadow-2xl">
              OHAIO PROJECT
            </h1>
            <div className="font-display text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide uppercase flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
              <span className="text-white">EVENT ORGANIZER</span>
              <span className="text-[#e5243b]">&amp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d61] via-[#e5243b] to-[#b91c1c]">
                CREATIVE EXPERIENCE
              </span>
            </div>
          </div>

          {/* Tagline Quote with Red Left Accent */}
          <div className="border-l-4 border-[#e5243b] pl-3.5 sm:pl-4 py-2 sm:py-2.5 bg-black/40 backdrop-blur-md rounded-r-2xl max-w-xl lg:max-w-2xl border-y border-r border-white/5">
            <p className="font-body text-sm sm:text-base lg:text-lg font-medium italic text-white/95 leading-snug">
              “Creating moments. Executing experiences.”
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ff99a4] mt-1.5 font-medium leading-relaxed">
              Nationwide Event Production &bull; School Activations &bull; Institutional Experiences
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#events"
              className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#e5243b] to-[#dc2626] hover:from-[#ff3b52] hover:to-[#e5243b] text-white font-mono text-[11px] sm:text-xs font-black tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(229,36,59,0.45)] hover:shadow-[0_15px_35px_rgba(229,36,59,0.65)] hover:-translate-y-0.5 flex items-center gap-2.5 border border-red-400/30"
            >
              <span>VIEW OUR EVENTS</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/20 hover:border-[#e5243b] font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(229,36,59,0.2)]"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4d61]" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Floating Glass Showcase Dock */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full pt-1 sm:pt-2">
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0e0f14]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          {/* Current Showcase Moment */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ring-2 ring-[#e5243b]/60 overflow-hidden hidden sm:block flex-shrink-0 shadow-lg">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ff4d61] font-semibold">
                <MapPin className="w-3 h-3 text-[#e5243b]" />
                <span>{activeSlide.city}</span>
              </div>
              <div className="font-display text-xs sm:text-sm font-extrabold text-white">
                {activeSlide.title}
              </div>
              <div className="font-body text-[11px] sm:text-xs text-[#94a3b8] line-clamp-1">
                {activeSlide.highlight}
              </div>
            </div>
          </div>

          {/* Carousel Progress Indicators */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#64748b] uppercase tracking-wider mr-1 hidden sm:inline">
              LIVE PREVIEW:
            </span>
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.title}
                onClick={() => setCurrentSlide(idx)}
                className="group py-1.5 px-0.5 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              >
                <div
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? 'w-8 sm:w-10 bg-[#e5243b] shadow-[0_0_12px_rgba(229,36,59,0.8)]'
                      : 'w-3.5 sm:w-4 bg-white/20 group-hover:bg-white/40'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Ticker of Cities with Red Accents */}
      <div className="relative z-10 w-full mt-3 sm:mt-4 py-2 sm:py-2.5 bg-[#0a0b0f]/95 border-y border-red-500/10 overflow-hidden shadow-inner">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 sm:gap-8 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#94a3b8]">
          <span className="hover:text-white transition-colors">TASIKMALAYA</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">MADIUN</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">CIREBON</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BLITAR</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BATAM</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BOGOR</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">JAKARTA</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">TANGERANG</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">SEMARANG</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BINTARO</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="hover:text-white transition-colors">TASIKMALAYA</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">MADIUN</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">CIREBON</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BLITAR</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BATAM</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BOGOR</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">JAKARTA</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">TANGERANG</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">SEMARANG</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
          <span className="hover:text-white transition-colors">BINTARO</span>
          <span className="text-[#e5243b] font-bold">&bull;</span>
        </div>
      </div>
    </section>
  );
}
