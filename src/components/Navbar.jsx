import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onNavigate, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EVENTS', href: '#events' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CREW & TEAM', href: '#team' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-2xl'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 sm:gap-3 text-left flex-shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#e5243b]/60 flex items-center justify-center bg-[#14161c] group-hover:border-[#e5243b] group-hover:shadow-[0_0_15px_rgba(229,36,59,0.4)] transition-all">
              <span className="font-display font-black text-white text-xs sm:text-sm tracking-wider">OP</span>
            </div>
            <div>
              <div className="font-display text-base sm:text-lg lg:text-xl font-black tracking-widest text-white group-hover:text-[#ff4d61] transition-colors leading-none">
                OHAIO PROJECT
              </div>
              <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#ff8090] mt-0.5 sm:mt-1 font-semibold">
                Creative Experience
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-[11px] lg:text-xs tracking-[0.16em] lg:tracking-[0.2em] text-[#cbd5e1] hover:text-white transition-colors relative py-1 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e5243b] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Live Season Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161820]/90 border border-red-500/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5243b]"></span>
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#cbd5e1] uppercase font-semibold">
                Season 2026 Active
              </span>
            </div>

            {/* Let's Talk CTA */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#e5243b] to-[#dc2626] hover:from-[#ff3b52] hover:to-[#e5243b] text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,36,59,0.35)] hover:shadow-[0_0_25px_rgba(229,36,59,0.6)] hover:-translate-y-0.5 border border-red-400/20 flex-shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#ff4d61] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090a0d]/98 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-8 py-20 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-5 pt-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff4d61] mb-1 font-bold">
              Navigation Menu
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-2xl sm:text-3xl font-extrabold text-white hover:text-[#ff4d61] transition-colors flex items-center justify-between border-b border-white/10 pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#e5243b]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]"></span>
              <span className="font-mono text-xs text-[#94a3b8]">PT OHAIO PROJECT BERSAMA</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e5243b] to-[#dc2626] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
