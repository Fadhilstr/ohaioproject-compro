import React from 'react';
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function InstagramSection() {
  const instagramPreviews = [
    {
      img: '/images/events/tasikmalaya/gallery-1.webp',
      city: 'Tasikmalaya',
      caption: 'Keceriaan Tour De Bank 2026 Tasikmalaya bersama ratusan murid cerdas.'
    },
    {
      img: '/images/events/madiun/gallery-4.webp',
      city: 'Madiun',
      caption: 'Sorak sorai panggung utama Madiun saat kompetisi Capt Smart berlangsung.'
    },
    {
      img: '/images/events/batam/gallery-1.webp',
      city: 'Batam',
      caption: 'Perjalanan lintas pulau di Batam mengawal edukasi perbankan masa depan.'
    },
    {
      img: '/images/events/semarang/gallery-3.webp',
      city: 'Semarang',
      caption: 'Instalasi panggung megah regional Jawa Tengah di Kota Semarang.'
    },
    {
      img: '/images/events/blitar/gallery-2.webp',
      city: 'Blitar',
      caption: 'Atmosfer penutupan festival di Blitar dengan selebrasi piala juara.'
    },
    {
      img: '/images/events/bintaro/gallery-1.webp',
      city: 'Bintaro',
      caption: 'Suasana aktivasi urban di Bintaro dengan partisipasi antusias komunitas sekolah.'
    }
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#090a0d] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <InstagramIcon className="w-4 h-4 text-[#ff4d61]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                FOLLOW OUR JOURNEY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              @OHAIOPROJECT
            </h2>
          </div>

          <a
            href="https://www.instagram.com/ohaioproject/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/5 hover:bg-[#e5243b] hover:text-white border border-white/15 hover:border-[#e5243b] font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white transition-all group hover:shadow-[0_0_20px_rgba(229,36,59,0.4)] self-start sm:self-auto"
          >
            <span>Visit Instagram Profile</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff4d61] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Instagram Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPreviews.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/ohaioproject/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-[#14161c] border border-white/10 hover:border-[#e5243b] transition-all duration-300 card-hover"
            >
              <img
                src={post.img}
                alt={post.city}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 sm:p-4">
                <div className="flex justify-end">
                  <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#ff6b7d] font-bold">
                    {post.city}
                  </div>
                  <p className="font-body text-[10px] text-white line-clamp-2 mt-1 leading-tight">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
