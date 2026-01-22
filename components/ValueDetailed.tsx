import React from 'react';
import { Camera, TrendingUp, Sparkles, Share2, Layers, MonitorPlay, ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
  bgImage?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, colSpan = "col-span-1", bgImage }) => {
  return (
    <div className={`group relative ${colSpan} min-h-[320px] rounded-3xl overflow-hidden border border-white/5 bg-surfaceHighlight/20 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`}>
      
      {/* Background Image if exists */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="bg" className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      )}

      {/* Inner Glow Gradient (Vercel Style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-noble-500/10 group-hover:border-noble-500/20 transition-all duration-300">
            <div className="text-gray-400 group-hover:text-noble-400 group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gray-500">
            <ArrowUpRight size={18} />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">{description}</p>
        </div>
      </div>
      
      {/* Mouse Follow Glow (Simplified for CSS) */}
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
    </div>
  );
};

export const ValueDetailed: React.FC = () => {
  return (
    <section className="w-full px-6 py-32 max-w-7xl mx-auto">
      <div className="mb-20 md:text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Built for the <span className="text-gradient-gold">Modern Deal</span></h2>
        <p className="text-gray-400 text-lg">
          We don't just take photos. We create a comprehensive digital ecosystem for every property, ensuring maximum visibility and engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <FeatureCard 
          title="Cinematic Production"
          description="High-end video tours, aerial drone footage, and 4K photography that capture the soul of the property."
          icon={<Camera size={24} />}
          colSpan="md:col-span-2"
          bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
        />

        <FeatureCard 
          title="Viral Content Strategy"
          description="Short-form vertical video optimized for Instagram Reels and TikTok to drive organic reach."
          icon={<Share2 size={24} />}
        />

        <FeatureCard 
          title="Brand Architecture"
          description="Cohesive visual identity and style guides for your agency or development."
          icon={<Layers size={24} />}
        />

        <FeatureCard 
          title="AI-Enhanced Editing"
          description="Virtual staging, decluttering, and twilight conversions delivered in 24 hours."
          icon={<Sparkles size={24} />}
        />

        <FeatureCard 
          title="Performance Analytics"
          description="Real-time dashboards tracking engagement, leads, and conversion metrics across all platforms."
          icon={<TrendingUp size={24} />}
        />

      </div>
    </section>
  );
};