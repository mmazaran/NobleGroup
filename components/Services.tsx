import React from 'react';
import { Camera, Ruler, CheckCircle2, ArrowRight, Zap, Briefcase } from 'lucide-react';
import { CTA } from './CTA';

const ServiceCard = ({ title, description, icon, features, delay }: { title: string, description: string, icon: any, features: string[], delay: string }) => (
  <div className={`group relative rounded-3xl border border-white/10 bg-surfaceHighlight/10 backdrop-blur-md overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-500 animate-[fadeIn_0.5s_ease-out_${delay}_both]`}>
    
    {/* Hover Border Beam */}
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-noble-400/40 to-transparent translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />
    </div>

    {/* Inner Content */}
    <div className="p-8 md:p-12 relative z-10 h-full flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-noble-500/10 group-hover:border-noble-500/30 transition-colors duration-500">
        <div className="text-gray-300 group-hover:text-noble-400 transition-colors">
          {icon}
        </div>
      </div>

      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-gradient-gold transition-all">{title}</h3>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">{description}</p>

      <ul className="space-y-4 mt-auto">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300 group/item">
            <CheckCircle2 size={18} className="text-noble-500/50 group-hover/item:text-noble-400 transition-colors shrink-0" />
            <span className="group-hover/item:translate-x-1 transition-transform duration-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Subtle Glow Background */}
    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-noble-500/10 rounded-full blur-[80px] group-hover:bg-noble-500/20 transition-all duration-700" />
  </div>
);

const ModelCard = ({ title, subtitle, icon, features, highlight = false }: { title: string, subtitle: string, icon: any, features: string[], highlight?: boolean }) => (
  <div className={`relative p-8 rounded-2xl border ${highlight ? 'border-noble-500/30 bg-noble-900/10' : 'border-white/5 bg-black/20'} hover:bg-white/5 transition-all duration-300 flex flex-col h-full group`}>
    <div className="flex items-start justify-between mb-8">
      <div>
        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{subtitle}</p>
      </div>
      <div className={`p-3 rounded-xl border transition-colors ${highlight ? 'bg-noble-500/10 border-noble-500/20 text-noble-400' : 'bg-white/5 border-white/10 text-gray-500 group-hover:text-gray-300'}`}>
        {icon}
      </div>
    </div>

    <ul className="space-y-4 mt-auto mb-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 group/item">
            <CheckCircle2 size={18} className={`mt-0.5 shrink-0 transition-colors ${highlight ? 'text-noble-400' : 'text-gray-600 group-hover:text-gray-400'}`} />
            <span className="text-sm md:text-base group-hover/item:translate-x-1 transition-transform duration-300">{feature}</span>
          </li>
        ))}
    </ul>

    {highlight && (
      <div className="absolute inset-0 border border-noble-500/20 rounded-2xl animate-pulse-slow pointer-events-none" />
    )}
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      
      {/* Header Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
          <span className="text-xs font-medium text-noble-200 uppercase tracking-wider">Our Expertise</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          Precision Content for the <br />
          <span className="text-gradient-gold">Built World.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We don't just capture spaces; we engineer visual narratives that drive sales, elevate brands, and define market trends.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
        <ServiceCard 
          title="Real Estate"
          description="For agents who demand the spotlight. We build cinematic identities that separate you from the noise. Our listing content is designed not just to show a home, but to sell a lifestyle."
          icon={<Camera size={28} />}
          delay="0s"
          features={[
            "Trend-Defining Vertical Reels",
            "Cinematic 4K Listing Tours",
            "HDR Bracketed Photography",
            "AI Virtual Staging & Twilight",
            "Agent Brand Identity Packages"
          ]}
        />
        
        <ServiceCard 
          title="Builders & Developers"
          description="Documenting the art of construction. We partner with architects, builders, and developers to turn active job sites and finished masterpieces into powerful client-acquisition assets."
          icon={<Ruler size={28} />}
          delay="0.2s"
          features={[
            "Project Lifecycle Documentation",
            "Architectural Showcase Films",
            "Before & After Transformations",
            "Trend-Defining Vertical Reels",
            "Portfolio Asset Creation"
          ]}
        />
      </section>

      {/* Engagement Models */}
      <section className="px-6 max-w-5xl mx-auto mb-32 animate-[fadeIn_0.5s_ease-out_0.4s_both]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Flexible Investment Models</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the pace that fits your business growth. We prioritize long-term partnerships that yield compounding returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModelCard 
            title="Monthly Retainer"
            subtitle="The Growth Partner"
            icon={<Zap size={24} />}
            highlight={true}
            features={[
              "Consistency generates compounding business",
              "Most cost-effective (Save up to 30%)",
              "Priority scheduling & Turnaround",
              "Dedicated creative strategy sessions",
              "Monthly analytics & performance review"
            ]}
          />
          <ModelCard 
            title="Project Basis"
            subtitle="The Sprint"
            icon={<Briefcase size={24} />}
            features={[
              "Flexible pay-per-shoot structure",
              "Ideal for standalone projects",
              "Standard 72-hour delivery window",
              "Professional high-impact assets",
              "No long-term commitment required"
            ]}
          />
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-sm text-gray-500 italic border border-white/5 inline-block px-6 py-2 rounded-full bg-black/30 backdrop-blur-md">
             * Detailed pricing structures available upon consultation call.
           </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
};