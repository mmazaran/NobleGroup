import React from 'react';
import { ArrowRight, CheckCircle2, Target, Users, Zap, Layers, Star, Briefcase } from 'lucide-react';

export const About: React.FC<{ onViewChange: (view: string) => void }> = ({ onViewChange }) => {
  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/noblegroupny/discoverycall' });
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section (Clear + Authority) */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Full-width cinematic still with subtle motion/parallax */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover opacity-30 animate-[pulse-slow_8s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-black/50" />
          
          {/* Grid Shimmer Overlay */}
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
            Built for the brands <br />
            building the <span className="text-gradient-gold">future of real estate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Noble Group is a modern media and marketing collective specializing in high-impact visual content for real estate agents, builders, developers, and construction brands who want to stand out in a saturated market.
          </p>
        </div>
        
        {/* Particle Drift & Light Beam for Hero */}
        <div className="absolute top-1/2 left-1/4 w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-45 blur-[2px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* 2. The Problem (Relatable Pain) */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center relative z-10">
        {/* Soft animated gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-noble-500/5 rounded-full blur-[120px] -z-10" />
        
        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
          Today’s buyers don’t respond to <br className="hidden md:block"/>
          <span className="text-gray-600 line-through decoration-noble-500/50 decoration-2">generic listing photos</span> or <span className="text-gray-600 line-through decoration-noble-500/50 decoration-2">outdated marketing</span>.
        </h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Realtors struggle to stand out online. Builders struggle to tell their story. Developers struggle to convey scale, quality, and vision.
        </p>
        <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-noble-500/30 bg-noble-500/10 backdrop-blur-md animate-[float_4s_ease-in-out_infinite]">
          <span className="text-noble-300 font-semibold tracking-wide">That’s where Noble Group comes in.</span>
        </div>
      </section>

      {/* 3. What Noble Group Actually Is (Positioning) */}
      <section className="py-32 px-6 bg-surfaceHighlight/5 border-y border-white/5 relative overflow-hidden">
        {/* Grid shimmer background */}
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 text-noble-400 px-3 py-1 bg-noble-500/10 rounded-full border border-noble-500/20">
              <Layers size={16} />
              <span className="uppercase tracking-widest text-xs font-bold">Our DNA</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              More than content. <br/>
              A <span className="text-gradient-gold">strategic media partner.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Noble Group is not a production house—and not a social media agency. We work at the intersection of strategy, storytelling, and visual execution, helping real estate professionals and construction brands:
            </p>
            
            <ul className="space-y-6">
              {[
                'Attract higher-quality buyers', 
                'Win more listings and contracts', 
                'Build long-term brand authority'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-noble-500/10 border border-noble-500/20 flex items-center justify-center group-hover:bg-noble-500/20 transition-colors duration-300">
                    <CheckCircle2 size={18} className="text-noble-400" />
                  </div>
                  <span className="text-xl text-gray-200 font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-white font-medium text-lg italic">"Every asset we create is designed with one goal: impact that converts."</p>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Strategy Session" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             {/* Hover Card Lift Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-noble-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="absolute bottom-10 left-10 right-10">
               <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-sm text-gray-300 mb-4">
                 Strategic Planning
               </div>
               <h3 className="text-3xl font-bold text-white">Precision execution starts before we ever pick up a camera.</h3>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Who You Serve (Split by Audience) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tailored for the Best</h2>
          <p className="text-xl text-gray-400">Specialized workflows for specific industry needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Realtors Card */}
          <div className="group relative p-10 md:p-12 rounded-[2rem] bg-surfaceHighlight/20 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] cursor-default">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-noble-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:text-noble-400 group-hover:bg-noble-500/10 group-hover:border-noble-500/20 transition-all duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Realtors & Brokerages</h3>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {['Listing photography & cinematic video', 'High-engagement Instagram & TikTok reels', 'Personal brand content', 'Social-first listing marketing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-noble-400/50 group-hover/item:bg-noble-400 transition-colors" />
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5 mt-auto">
                <p className="text-noble-400 font-medium tracking-wide">Helping agents sell faster, win more listings, and stay top-of-mind.</p>
              </div>
            </div>
          </div>

          {/* Builders Card */}
          <div className="group relative p-10 md:p-12 rounded-[2rem] bg-surfaceHighlight/20 border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] cursor-default">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-white group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Builders, Developers & Contractors</h3>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {['Project documentation', 'Brand films & reels', 'Job-site progress content', 'Long-term monthly retainers'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover/item:bg-blue-400 transition-colors" />
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/5 mt-auto">
                <p className="text-blue-300 font-medium tracking-wide">Helping construction brands showcase quality, scale, and craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Your Philosophy */}
      <section className="py-32 px-6 bg-black/30 border-y border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10 opacity-30" />
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Philosophy</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: 'Attention is earned, not assumed', icon: <Zap size={28} /> },
               { title: 'Quality visuals signal quality work', icon: <Star size={28} /> },
               { title: 'Consistency beats one-off content', icon: <Target size={28} /> },
               { title: 'Strategy comes before the camera', icon: <Layers size={28} /> },
             ].map((item, i) => (
               <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-6 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
                 <div className="text-gray-500 group-hover:text-noble-400 transition-all duration-300 group-hover:scale-110 transform">{item.icon}</div>
                 <h4 className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors">{item.title}</h4>
               </div>
             ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl text-gray-400 font-light italic">
              "We don’t chase trends—we translate them into results."
            </p>
          </div>
        </div>
      </section>

      {/* 6. Founders / Leadership Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-8">Led by creatives who understand the market.</h2>
         <p className="text-xl text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed">
            Founded by industry professionals with deep roots in real estate media and branding, Noble Group was built to raise the standard of how properties and projects are marketed.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center justify-center max-w-4xl mx-auto">
            <div className="group cursor-default">
               <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-2 border-white/10 mb-8 relative ring-4 ring-white/5 group-hover:ring-noble-500/20 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" alt="Matei Mazaran" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-noble-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
               </div>
               <h3 className="text-3xl font-bold text-white mb-2">Matei Mazaran</h3>
               <p className="text-noble-400 text-sm font-bold uppercase tracking-widest">Co-Founder</p>
            </div>
            
            <div className="group cursor-default">
               <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-2 border-white/10 mb-8 relative ring-4 ring-white/5 group-hover:ring-noble-500/20 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" alt="Mario Preda" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-noble-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
               </div>
               <h3 className="text-3xl font-bold text-white mb-2">Mario Preda</h3>
               <p className="text-noble-400 text-sm font-bold uppercase tracking-widest">Co-Founder</p>
            </div>
         </div>
      </section>

      {/* 7. Why Clients Choose Noble Group */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="bg-surfaceHighlight/5 rounded-3xl p-8 md:p-16 border border-white/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why top producers choose Noble Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
                'Trusted by agents, builders, and developers across New York',
                'Designed for modern platforms and buyer behavior',
                'Flexible monthly retainers or per-project pricing',
                'White-glove production experience'
            ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-green-400" />
                </div>
                <span className="text-gray-200 text-lg">{text}</span>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        {/* Intense background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-noble-500/10 blur-[120px] -z-10 pointer-events-none" />

        <div className="relative z-10 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Let’s elevate how you’re seen.</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Whether you’re selling a property or building one, Noble Group helps you show up at the level your brand deserves.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
                onClick={openCalendly}
                className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out opacity-50" />
                <span className="relative flex items-center gap-3">
                Schedule a Discovery Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
            
            <button 
                onClick={() => onViewChange('case-studies')}
                className="group px-10 py-5 bg-transparent border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/30 transition-all active:scale-95 flex items-center gap-3"
            >
                <span>View Our Work</span>
                <div className="w-2 h-2 rounded-full bg-noble-500 group-hover:shadow-[0_0_10px_currentColor] transition-shadow" />
            </button>
            </div>
        </div>
      </section>
    </div>
  );
};