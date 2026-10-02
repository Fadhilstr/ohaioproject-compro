import React from 'react';

export default function Stats() {
  const stats = [
    {
      value: '12',
      suffix: '',
      label: 'EVENT LOCATIONS',
      sublabel: 'Across Java, Sumatra & Riau Islands'
    },
    {
      value: '10',
      suffix: '+',
      label: 'CITIES ACROSS INDONESIA',
      sublabel: 'Nationwide Ground Execution'
    },
    {
      value: '2026',
      suffix: '',
      label: 'EVENT SEASON',
      sublabel: 'Tour De Bank & GTS OJK'
    },
    {
      value: '7.5K',
      suffix: '+',
      label: 'STUDENTS & ATTENDEES',
      sublabel: 'Engaged Through Experiences'
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#0d0e12] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-[#13151b] border border-white/5 hover:border-[#e5243b]/40 transition-colors card-hover shadow-lg"
            >
              <div className="flex items-baseline gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-silver-gradient tracking-tight">
                  {item.value}
                </span>
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#e5243b]">
                  {item.suffix}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-white font-bold leading-tight">
                {item.label}
              </div>
              <div className="font-body text-[10px] sm:text-[11px] text-[#94a3b8] mt-1 font-light leading-snug">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
