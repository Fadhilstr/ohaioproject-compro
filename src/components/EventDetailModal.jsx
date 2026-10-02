import React, { useEffect } from 'react';
import {
  X,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function EventDetailModal({ event, onClose, onSelectEvent, onOpenLightbox }) {
  useEffect(() => {
    // Disable background body scroll when modal is open
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event]);

  if (!event) return null;

  // Find currentIndex for Next / Previous event navigation
  const currentIndex = eventsData.findIndex((e) => e.slug === event.slug);
  const prevEvent = eventsData[(currentIndex - 1 + eventsData.length) % eventsData.length];
  const nextEvent = eventsData[(currentIndex + 1) % eventsData.length];

  const handleNext = () => onSelectEvent(nextEvent);
  const handlePrev = () => onSelectEvent(prevEvent);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#090a0d]/95 backdrop-blur-2xl text-white modal-animate">
      {/* Top Floating Sticky Header */}
      <div className="sticky top-0 z-30 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3.5 bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#94a3b8] hover:text-[#ff4d61] transition-colors py-1.5 px-3 sm:px-3.5 rounded-full bg-white/5 border border-white/10 hover:border-[#e5243b]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">BACK TO ALL EVENTS</span>
            <span className="sm:hidden">BACK</span>
          </button>

          <span className="hidden sm:inline font-mono text-xs text-white/30">|</span>

          <span className="hidden sm:inline font-mono text-xs text-[#ff4d61] tracking-widest uppercase font-semibold truncate max-w-[200px] md:max-w-none">
            {event.id} &bull; {event.city}
          </span>
        </div>

        {/* Prev / Next Quick Controls & Close */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrev}
              title={`Previous: ${prevEvent.city}`}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#e5243b] hover:text-[#ff4d61] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              title={`Next: ${nextEvent.city}`}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#e5243b] hover:text-[#ff4d61] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-[#181a22] border border-white/15 hover:bg-[#e5243b] hover:text-white transition-all shadow-sm"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Project Header Meta */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#ff4d61] font-semibold">
            <span>{event.series}</span>
            <span>&bull;</span>
            <span>{event.type}</span>
            <span>&bull;</span>
            <span className="text-[#94a3b8]">PRODUCED BY OHAIO PROJECT</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.98]">
            {event.title}
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg text-[#cbd5e1] font-light max-w-3xl italic">
            “{event.tagline}”
          </p>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-3 sm:p-4 rounded-xl bg-[#14161c] border border-white/5">
              <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3 h-3 text-[#e5243b]" /> Location
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">{event.city}</div>
              <div className="text-[10px] sm:text-[11px] text-[#94a3b8]">{event.province}</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#14161c] border border-white/5">
              <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                <Briefcase className="w-3 h-3 text-[#e5243b]" /> Client / Event
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">{event.client}</div>
              <div className="text-[10px] sm:text-[11px] text-[#94a3b8]">{event.year} Season</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#14161c] border border-white/5">
              <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                <Users className="w-3 h-3 text-[#e5243b]" /> Engagement
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">{event.attendees}</div>
              <div className="text-[10px] sm:text-[11px] text-[#94a3b8]">Verified Audience</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#14161c] border border-white/5">
              <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                <Calendar className="w-3 h-3 text-[#e5243b]" /> Execution Date
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">{event.date}</div>
              <div className="text-[10px] sm:text-[11px] text-[#94a3b8]">Full Day Schedule</div>
            </div>
          </div>
        </div>

        {/* Big Hero Image (Letterbox Widescreen on Laptops) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-black aspect-[16/9] md:aspect-[21/10] max-h-[50vh] shadow-2xl group">
          <img
            src={event.heroImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          <button
            onClick={() => onOpenLightbox(event.gallery, 0)}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#e5243b] hover:border-[#e5243b] transition-all shadow-lg"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Fullscreen</span>
          </button>
        </div>

        {/* About The Event & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#ff4d61] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#e5243b]" />
              <span>ABOUT THE EVENT</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Eksekusi Dinamis & Dokumentasi Otentik di {event.city}
            </h2>
            <p className="font-body text-base text-[#cbd5e1] font-light leading-relaxed">
              {event.description}
            </p>
            <div className="p-5 rounded-2xl bg-[#14161c] border border-white/10 space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#94a3b8]">
                PRODUCTION SCOPE:
              </div>
              <div className="font-body text-sm text-white font-medium">
                {event.scope}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#ff4d61] font-semibold">
              <span>EVENT KEY HIGHLIGHTS</span>
            </div>
            <div className="space-y-3">
              {event.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#14161c]/80 border border-white/5 hover:border-red-500/30 transition-colors space-y-1"
                >
                  <div className="font-mono text-[10px] text-[#ff6b7d] tracking-widest uppercase font-semibold">
                    Highlight 0{idx + 1}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-[#e5e5eb] leading-relaxed">
                    {hl}
                  </div>
                </div>
              ))}
            </div>

            {/* Official Google Drive Link CTA */}
            {event.gdriveUrl && (
              <a
                href={event.gdriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-[#e5243b]/10 border border-white/15 hover:border-[#e5243b] font-mono text-xs text-[#ff4d61] hover:text-[#ff8090] uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-semibold"
              >
                <span>Buka Folder Google Drive Dokumentasi Asli</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Featured Highlights (3-4 Large Cards) */}
        {event.featuredImages && event.featuredImages.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff4d61] mb-1 font-semibold">
                  CURATED MOMENTS
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  EVENT HIGHLIGHTS
                </h3>
              </div>
              <span className="font-mono text-xs text-[#64748b]">
                {event.featuredImages.length} Featured Frames
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {event.featuredImages.map((feat, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenLightbox(event.gallery, idx)}
                  className="group rounded-2xl overflow-hidden bg-[#14161c] border border-white/10 hover:border-[#e5243b] transition-all duration-300 cursor-pointer card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black relative">
                    <img
                      src={feat.url}
                      alt={feat.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-4 font-body text-xs text-[#94a3b8] group-hover:text-white transition-colors line-clamp-2">
                    {feat.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event Gallery Grid (Full 12 Images with Lightbox Trigger) */}
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff4d61] mb-1 font-semibold">
                DOCUMENTATION ARCHIVE
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                EVENT GALLERY
              </h3>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider">
              Klik gambar untuk melihat dalam Lightbox layar penuh
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {event.gallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(event.gallery, idx)}
                className="group relative rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[#e5243b] cursor-pointer aspect-square card-hover"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="font-mono text-[10px] text-[#ff4d61] uppercase tracking-wider mb-1 font-semibold">
                    Frame #{idx + 1}
                  </span>
                  <p className="font-body text-[11px] text-white line-clamp-2 leading-tight">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dock: Next & Prev Project */}
        <div className="pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={handlePrev}
            className="group p-6 rounded-2xl bg-[#14161c] border border-white/10 hover:border-[#e5243b] text-left transition-all card-hover"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#64748b] group-hover:text-[#ff4d61] uppercase tracking-widest mb-2 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS EVENT</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-black uppercase text-white group-hover:text-[#ff4d61] transition-colors">
              {prevEvent.title}
            </div>
            <div className="font-body text-xs text-[#94a3b8] mt-1">
              {prevEvent.city}, {prevEvent.province}
            </div>
          </button>

          <button
            onClick={handleNext}
            className="group p-6 rounded-2xl bg-[#14161c] border border-white/10 hover:border-[#e5243b] text-right transition-all card-hover"
          >
            <div className="flex items-center justify-end gap-2 font-mono text-xs text-[#64748b] group-hover:text-[#ff4d61] uppercase tracking-widest mb-2 transition-colors">
              <span>NEXT EVENT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-display text-xl sm:text-2xl font-black uppercase text-white group-hover:text-[#ff4d61] transition-colors">
              {nextEvent.title}
            </div>
            <div className="font-body text-xs text-[#94a3b8] mt-1">
              {nextEvent.city}, {nextEvent.province}
            </div>
          </button>
        </div>

        {/* Back to top / Close button at bottom */}
        <div className="text-center pt-8 pb-12">
          <button
            onClick={onClose}
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#e5243b] hover:text-white border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            BACK TO ALL EVENTS &uarr;
          </button>
        </div>
      </div>
    </div>
  );
}
