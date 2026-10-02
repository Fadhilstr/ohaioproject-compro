import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080a] border-t border-white/10 text-[#94a3b8] py-12 sm:py-16 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-full border border-[#e5243b]/60 flex items-center justify-center bg-[#14161c]">
                <span className="font-display font-black text-white text-xs">OP</span>
              </div>
              <span className="font-display text-lg sm:text-xl font-black text-white tracking-widest">
                OHAIO PROJECT
              </span>
            </div>
            <p className="font-body text-xs text-[#94a3b8] max-w-md font-light leading-relaxed">
              PT Ohaio Project Bersama — Professional Event Organizer, Stage Production &amp; Nationwide Experiential Activations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
            <a href="#events" className="hover:text-[#ff4d61] transition-colors">Events</a>
            <a href="#about" className="hover:text-[#ff4d61] transition-colors">About</a>
            <a href="#services" className="hover:text-[#ff4d61] transition-colors">Services</a>
            <a href="#team" className="hover:text-[#ff4d61] transition-colors">Crew</a>
            <a href="#contact" className="hover:text-[#ff4d61] transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] text-[#64748b]">
          <div>
            &copy; {new Date().getFullYear()} PT Ohaio Project Bersama. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/ohaioproject/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d61] transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#ff4d61]" />
              <span>@ohaioproject</span>
            </a>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#ff4d61] transition-colors font-semibold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#e5243b]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
