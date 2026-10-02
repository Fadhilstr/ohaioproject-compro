import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    city: '',
    eventType: 'School Activation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = 
`Halo Tim OHAIO Project, saya ingin mengajukan konsultasi rencana event bersama PT Ohaio Project Bersama:

• Nama: ${formData.name}
• Instansi / Brand: ${formData.organization}
• No. WhatsApp / Telp: ${formData.phone}
• Target Kota: ${formData.city}
• Jenis Kebutuhan Event: ${formData.eventType}
• Rencana & Catatan: ${formData.message || '-'}`;

    const waUrl = `https://wa.me/6285155399101?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const quickWaMessage = encodeURIComponent(
    `Halo Tim OHAIO Project, saya ingin konsultasi rencana event bersama PT Ohaio Project Bersama.`
  );

  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-[#090a0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="space-y-3 sm:space-y-3.5">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-[2px] bg-[#e5243b] shadow-[0_0_8px_rgba(229,36,59,0.8)]" />
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff4d61] font-semibold">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-[1.02]">
                LET’S CREATE SOMETHING <br />
                <span className="text-red-gradient">MEMORABLE.</span>
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-[#94a3b8] font-light leading-relaxed">
                Siap mendiskusikan konsep roadshow, panggung spektakuler, atau aktivasi brand Anda berikutnya? Tim produser OHAIO Project siap memberikan solusi terbaik.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-2.5 sm:space-y-3 pt-3.5 sm:pt-4 border-t border-white/10 font-mono text-xs">
              <a
                href={`https://wa.me/6285155399101?text=${quickWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#14161c] border border-white/10 hover:border-[#e5243b] flex items-center justify-between transition-all group card-hover shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider">
                      DIRECT WHATSAPP &amp; CALL
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#ff4d61] transition-colors">
                      +62 851-5539-9101
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#ff4d61] flex-shrink-0" />
              </a>

              <a
                href="https://www.instagram.com/ohaioproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#14161c] border border-white/10 hover:border-[#e5243b] flex items-center justify-between transition-all group card-hover shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider">
                      OFFICIAL INSTAGRAM
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#ff4d61] transition-colors">
                      @ohaioproject
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#ff4d61] flex-shrink-0" />
              </a>

              <a
                href="mailto:fadhylstr1612@gmail.com"
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#14161c] border border-white/10 hover:border-[#e5243b] flex items-center justify-between transition-all group card-hover shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#e5243b]/10 border border-[#e5243b]/20 flex items-center justify-center text-[#ff4d61] group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider">
                      OFFICIAL INQUIRY EMAIL
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm group-hover:text-[#ff4d61] transition-colors truncate max-w-[200px] sm:max-w-none">
                      fadhylstr1612@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#ff4d61] flex-shrink-0" />
              </a>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#14161c] border border-white/10 flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94a3b8] flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5243b]" />
                </div>
                <div>
                  <div className="text-[#64748b] uppercase text-[9px] sm:text-[10px] tracking-wider mb-1">
                    LEGAL ENTITY &amp; HEADQUARTERS
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    PT Ohaio Project Bersama
                  </div>
                  <div className="font-body text-[11px] sm:text-xs text-[#94a3b8] mt-1 font-light leading-relaxed">
                    Jakarta &amp; Tangerang Selatan Hub &bull; Nationwide Event Operations (Jawa, Sumatera, Kepulauan Riau)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 lg:p-8 xl:p-9 rounded-2xl sm:rounded-3xl bg-[#111318] border border-white/10 shadow-2xl relative">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#ff4d61] mb-1.5 sm:mb-2 font-semibold">
                PROJECT INQUIRY
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-5 sm:mb-7">
                START A PROJECT
              </h3>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#181a22] border border-[#e5243b]/60 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white">
                    PROPOSAL DISIAPKAN!
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                    Data Anda telah otomatis diformat untuk WhatsApp resmi <strong className="text-white">PT Ohaio Project Bersama</strong>. Jika chat WhatsApp tidak terbuka otomatis, klik tombol di bawah:
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/6285155399101?text=${encodeURIComponent(
`Halo Tim OHAIO Project, saya ingin mengajukan konsultasi rencana event bersama PT Ohaio Project Bersama:

• Nama: ${formData.name}
• Instansi / Brand: ${formData.organization}
• No. WhatsApp / Telp: ${formData.phone}
• Target Kota: ${formData.city}
• Jenis Kebutuhan Event: ${formData.eventType}
• Rencana & Catatan: ${formData.message || '-'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Buka Chat WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          organization: '',
                          phone: '',
                          city: '',
                          eventType: 'School & Youth Activation',
                          message: ''
                        });
                      }}
                      className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-[#94a3b8] hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                        Instansi / Lembaga / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama perusahaan / sekolah"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                        Nomor WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                        Target Kota / Lokasi *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Jakarta / Bandung / Batam"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                      Jenis Kebutuhan Event
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                    >
                      <option value="School & Youth Activation">School &amp; Youth Activation / Roadshow</option>
                      <option value="Event Production & Rigging">Event Production &amp; Stage Rigging</option>
                      <option value="Corporate / Institutional Event">Corporate / Institutional Event</option>
                      <option value="Brand Experience & Activation">Brand Experience &amp; Activation</option>
                      <option value="Creative Pop-Up & Exhibition">Creative Pop-Up &amp; Exhibition</option>
                      <option value="Other">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] uppercase tracking-wider">
                      Rencana &amp; Pesan Tambahan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan gambaran konsep acara, perkiraan jumlah audiens, atau jadwal pelaksanaan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-[#181a22] border border-white/10 text-white font-body text-xs sm:text-sm focus:outline-none focus:border-[#e5243b] focus:ring-1 focus:ring-[#e5243b] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#e5243b] to-[#dc2626] hover:from-[#ff3b52] hover:to-[#e5243b] text-white font-mono text-xs font-extrabold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-red-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 border border-red-400/20"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
