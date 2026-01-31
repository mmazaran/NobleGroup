import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ExternalLink, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AuroraText } from './magicui/AuroraText';
import { PulsatingButton } from './magicui/PulsatingButton';



export const Hero: React.FC = () => {
  const [modalType, setModalType] = useState<'social' | null>(null);
  const { scrollY } = useScroll();

  // Parallax effect: moves slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  // Fade out effect: opacity goes to 0 as user scrolls
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalType]);

  const closeModal = () => setModalType(null);

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/noblegroupny/discoverycall' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303] z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">

        {/* Badge Hook */}
        <div className="mb-8 animate-[fadeIn_0.5s_ease-out]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-default group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-noble-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-noble-500"></span>
            </span>
            <span className="text-xs font-medium text-noble-200 tracking-wide uppercase group-hover:text-noble-100 transition-colors">The New Standard in Real Estate Media</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-[fadeIn_0.7s_ease-out_0.2s_both] max-w-5xl">
          Sell properties <br className="hidden md:block" />
          <AuroraText>faster than ever.</AuroraText>
        </h1>

        {/* Subheadline Value Prop */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 animate-[fadeIn_0.9s_ease-out_0.4s_both]">
          We craft cinematic content and data-driven marketing campaigns that turn listings into closings for modern agents and builders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-[fadeIn_1.1s_ease-out_0.6s_both] z-10 mb-20">
          <PulsatingButton onClick={openCalendly} pulseColor="#cb7a32">
            <span className="relative flex items-center gap-2">
              Book a Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </PulsatingButton>

          <button
            onClick={() => setModalType('social')}
            className="group px-8 py-4 rounded-full font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-3 active:scale-95"
          >
            <Instagram className="w-5 h-5 text-noble-400 group-hover:text-noble-300 transition-colors" />
            <span>Check our Socials</span>
          </button>
        </div>

        {/* Prestige Results Strip */}
        <div className="w-full max-w-6xl animate-[fadeIn_1.3s_ease-out_0.8s_both]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10 bg-black/20 backdrop-blur-sm divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="p-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-500">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">$250M+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium text-center">Property Value Marketed</span>
            </div>

            <div className="p-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-500">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">1,000+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium text-center">Listings & Builds Captured</span>
            </div>

            <div className="p-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-500">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">7+ Years</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium text-center">Real Estate Media Expertise</span>
            </div>

            <div className="p-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-500">
              <div className="flex flex-col gap-2 items-center text-center">
                <span className="text-lg font-bold text-white">Agents</span>
                <span className="w-1 h-1 bg-noble-500 rounded-full opacity-50"></span>
                <span className="text-lg font-bold text-white">Builders</span>
                <span className="w-1 h-1 bg-noble-500 rounded-full opacity-50"></span>
                <span className="text-lg font-bold text-white">Developers</span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-3 text-center">Our Partners</span>
            </div>

          </div>
        </div>

        {/* Modal Portal - Social Only */}
        {modalType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 p-4 md:p-8">
            <div className="absolute inset-0" onClick={closeModal} />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            {modalType === 'social' && (
              <div className="relative w-full max-w-md bg-zinc-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-[105] p-8 text-center flex flex-col items-center gap-6 animate-in zoom-in-95 duration-300">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-noble-500/10 to-transparent pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Logo / Profile Pic */}
                <div className="relative w-28 h-28 rounded-full border-4 border-black/50 shadow-xl overflow-hidden bg-black flex items-center justify-center z-10 ring-1 ring-white/10">
                  <img
                    src="https://drive.google.com/thumbnail?id=1xVtSKU-HiqjhUnomQaOcfV8kY2skFO6S&sz=w200"
                    alt="Noble Group"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-3xl font-bold text-white tracking-tight">Noble Group</h3>
                  <p className="text-noble-400 font-medium text-sm tracking-wide uppercase">@noblegroupny</p>
                  <p className="text-gray-400 mt-2 text-base leading-relaxed max-w-[280px] mx-auto">
                    Next Level Real Estate Marketing.<br />
                    Cinematic Tours | Branding | Content
                  </p>
                </div>

                <div className="w-full pt-4 space-y-3 relative z-10">
                  <a
                    href="https://instagram.com/noblegroupny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-3 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-900/20"
                  >
                    <Instagram size={22} />
                    <span>Follow on Instagram</span>
                    <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <p className="text-xs text-gray-600 mt-2">
                  Join our community of top producers
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};