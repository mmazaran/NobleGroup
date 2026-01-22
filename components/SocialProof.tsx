import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Dorothy Ginter",
    role: "Oversouth Real Estate",
    quote: "Noble Group transformed how we market our $5M+ listings. The video quality is unmatched.",
    image: "https://i.imgur.com/2Ams0o3.jpeg"
  },
  {
    name: "Joseph Picataggi",
    role: "Terra Construction Group",
    quote: "Their content strategy helped us sell out 80% of our new development before construction finished.",
    image: "https://i.imgur.com/uvGVQmm.jpeg"
  },
  {
    name: "Eric Clemente",
    role: "NSE Windows",
    quote: "Fast, professional, and incredibly stylish. They understand the luxury aesthetic perfectly.",
    image: "https://i.imgur.com/88RrglL.jpeg"
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section className="w-full px-6 py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-surfaceHighlight/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-xl">
             <h2 className="text-3xl font-bold mb-4">Trusted by Top Producers</h2>
             <p className="text-gray-400">Join elite partners who leverage our creative engine to dominate their markets.</p>
           </div>
           
           <div className="flex flex-wrap gap-8 mt-8 md:mt-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-baseline">
             {/* Brokerage Logos (Styled Text) */}
             <div className="text-xl font-black tracking-[0.2em] uppercase">SERHANT.</div>
             <div className="text-lg font-bold uppercase tracking-wide">NEST SEEKERS</div>
             <div className="text-lg font-bold tracking-tight">KELLER WILLIAMS</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 group">
              <div className="flex gap-1 text-noble-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-noble-500/0 group-hover:border-noble-500/20 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};