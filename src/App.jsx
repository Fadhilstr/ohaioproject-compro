import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Team from './components/Team';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventDetailModal from './components/EventDetailModal';
import Lightbox from './components/Lightbox';
import { eventsData } from './data/eventsData';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    index: 0
  });

  // URL Hash / Path Sync for /events/:slug
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path.startsWith('/events/')) {
        const targetSlug = path.replace('/events/', '').replace(/\/$/, '');
        const found = eventsData.find((e) => e.slug === targetSlug);
        if (found) {
          setSelectedEvent(found);
          return;
        }
      } else if (hash.startsWith('#/events/')) {
        const targetSlug = hash.replace('#/events/', '');
        const found = eventsData.find((e) => e.slug === targetSlug);
        if (found) {
          setSelectedEvent(found);
          return;
        }
      } else if (hash && hash.startsWith('#')) {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }

      const searchParams = new URLSearchParams(window.location.search);
      const scrollPos = searchParams.get('scroll');
      if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos, 10));
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    if (event) {
      window.history.pushState(null, '', `/events/${event.slug}`);
    } else {
      window.history.pushState(null, '', '/');
    }
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    window.history.pushState(null, '', '/');
  };

  const handleOpenLightbox = (images, index = 0) => {
    setLightboxState({
      isOpen: true,
      images: images || [],
      index: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      images: [],
      index: 0
    });
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-[#f1f5f9] relative selection:bg-[#e5243b] selection:text-white">
      {/* Global Navbar */}
      <Navbar
        onOpenContact={scrollToContact}
      />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenContact={scrollToContact} />
        <Intro />
        <Stats />
        <Portfolio onSelectEvent={handleSelectEvent} />
        <Services onOpenContact={scrollToContact} />
        <AboutSection />
        <Team />
        <InstagramSection />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Event Case Study Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={handleCloseModal}
          onSelectEvent={handleSelectEvent}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Fullscreen High-Performance Lightbox */}
      {lightboxState.isOpen && (
        <Lightbox
          images={lightboxState.images}
          initialIndex={lightboxState.index}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
