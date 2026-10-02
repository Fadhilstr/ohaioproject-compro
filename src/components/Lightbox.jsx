import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setCurrentIndex(initialIndex || 0);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images, onClose]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[60] bg-black/98 flex flex-col justify-between p-4 md:p-8 modal-animate select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="font-mono text-xs text-[#94a3b8] tracking-widest uppercase">
          FRAME <span className="text-[#ff4d61] font-bold">{currentIndex + 1}</span> / {images.length}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#e5243b] hover:text-white text-white transition-all shadow-sm"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-black/70 hover:bg-[#e5243b] hover:text-white text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div
          className={`relative max-w-full max-h-full transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentImage.url}
            alt={currentImage.caption || `Event photo ${currentIndex + 1}`}
            className="max-h-[60vh] sm:max-h-[66vh] md:max-h-[70vh] lg:max-h-[72vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#e5243b] hover:text-white text-white border border-white/20 transition-all backdrop-blur-md shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Caption & Thumbnail Strip */}
      <div className="z-10 flex flex-col items-center gap-2 sm:gap-3">
        {currentImage.caption && (
          <p className="font-body text-[11px] sm:text-xs md:text-sm text-[#cbd5e1] text-center max-w-2xl bg-black/75 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 backdrop-blur-md line-clamp-2">
            {currentImage.caption}
          </p>
        )}

        {/* Thumbnail Navigation Strip */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-xl py-1.5 px-3 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsZoomed(false);
                setCurrentIndex(idx);
              }}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                idx === currentIndex
                  ? 'border-[#e5243b] scale-105 opacity-100 ring-2 ring-[#e5243b]/40 shadow-lg'
                  : 'border-white/15 opacity-40 hover:opacity-80'
              }`}
            >
              <img src={img.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
