import React, { useState } from 'react';
import { Play, ArrowUpRight, Instagram, TrendingUp, Users } from 'lucide-react';
import { CTA } from './CTA';

const CaseStudyCard = ({ 
  client, 
  role, 
  videoUrl, 
  thumbnail, 
  stats, 
  about, 
  impact,
  delay 
}: { 
  client: string, 
  role: string, 
  videoUrl: string, 
  thumbnail: string, 
  stats: string, 
  about: string, 
  impact: string,
  delay: string
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to construct embed URL from the provided IG link
  const getEmbedUrl = (url: string) => {
    // Basic extraction for /reel/ID or /p/ID
    const match = url.match(/\/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      // Use /p/ (post) endpoint which is often more reliable for embeds than /reel/
      // standard /embed works better than /embed/captioned for some restricted content
      return `https://www.instagram.com/p/${match[1]}/embed/`;
    }
    return url;
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center lg:items-start p-8 rounded-3xl border border-white/10 bg-surfaceHighlight/10 backdrop-blur-md hover:border-white/20 transition-all duration-500 animate-[fadeIn_0.5s_ease-out_${delay}_both] group`}>
      
      {/* Vertical Video Container (9:16 Aspect Ratio) */}
      <div className="relative w-full max-w-[300px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden border border-white/10 group/video shadow-2xl bg-black">
        {isPlaying ? (
          <iframe 
            src={getEmbedUrl(videoUrl)}
            className="w-full h-full object-cover"
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ) : (
          <div 
            onClick={() => setIsPlaying(true)}
            className="w-full h-full cursor-pointer relative"
          >
            <img src={thumbnail} alt={client} className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/video:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Instagram Tag */}
            <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              <Instagram size={16} className="text-white" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-xs font-mono text-noble-300 uppercase tracking-widest mb-1">Watch Reel</p>
            </div>
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="flex-1 flex flex-col h-full text-left pt-2">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white mb-2">{client}</h3>
          <p className="text-noble-400 font-medium tracking-wide uppercase text-sm">{role}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3 text-gray-300">
               <Users size={18} />
               <span className="text-sm font-bold uppercase tracking-wider">The Client</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {about}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-noble-900/20 border border-noble-500/20 hover:border-noble-500/30 transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-noble-500/10 rounded-full blur-xl -mr-10 -mt-10" />
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3 text-noble-300">
                  <TrendingUp size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">The Impact</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {impact}
                </p>
             </div>
          </div>
        </div>

        {/* Highlight Stat */}
        <div className="mt-auto inline-flex items-center gap-4 py-3 px-5 rounded-full border border-white/10 bg-white/5 self-start group/stat hover:bg-white/10 transition-colors">
          <span className="text-2xl font-bold text-white group-hover/stat:text-gradient-gold transition-all">{stats}</span>
          <div className="h-8 w-[1px] bg-white/10" />
          <span className="text-xs text-gray-400 uppercase tracking-wider">Key Result</span>
        </div>
        
        {/* Fallback link for mobile users if needed, or if they prefer native app */}
        <a 
          href={videoUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="lg:hidden mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span>Open in Instagram</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

export const CaseStudies: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      
      {/* Header Section */}
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
          <span className="text-xs font-medium text-noble-200 uppercase tracking-wider">Proven Results</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-[fadeIn_0.7s_ease-out_0.2s_both]">
          Real Metrics. <br />
          <span className="text-gradient-gold">Real Growth.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-[fadeIn_0.9s_ease-out_0.4s_both]">
          From viral reach to closed deals, see how we're rewriting the playbook for real estate professionals and builders.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="px-6 max-w-6xl mx-auto flex flex-col gap-12 mb-32">
        
        <CaseStudyCard 
          client="John Gandolfo"
          role="Coldwell Banker"
          videoUrl="https://www.instagram.com/reel/DOs-XfMDnW4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          thumbnail="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop"
          stats="35k+ Views"
          about="A dedicated agent at Coldwell Banker seeking to differentiate his listings in a saturated market and reach a broader digital audience."
          impact="We implemented a high-retention vertical video strategy that transformed his engagement metrics. View counts surged from an average of 200 to over 35,000 across four consecutive property campaigns."
          delay="0s"
        />

        <CaseStudyCard 
          client="Tommy & Alexis"
          role="A.R Home Construction"
          videoUrl="https://www.instagram.com/reel/DR5j74wAAHb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          thumbnail="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
          stats="175+ Monthly Estimates"
          about="A dynamic construction duo looking to showcase their craftsmanship and build a recognizable local brand identity on Long Island."
          impact="Our content strategy made them local celebrities. Beyond viral recognition in the grocery aisle, their monthly retainer now drives a consistent pipeline, generating upwards of 175 qualified estimates every month."
          delay="0.2s"
        />

        <CaseStudyCard 
          client="Joseph Sessa"
          role="Luxury Builds By Sessa"
          videoUrl="https://www.instagram.com/reel/DL83ngsMMns/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          thumbnail="https://images.unsplash.com/photo-1600596542815-27b88e39e1d7?q=80&w=1000&auto=format&fit=crop"
          stats="4 Year Partnership"
          about="A premier builder focused on high-end residential and commercial projects, requiring a media partner that matches his level of precision."
          impact="As a client for over four years, Joe has leveraged our media ecosystem to scale operations significantly. Our content has directly opened doors for major residential and commercial contracts throughout Long Island and NYC."
          delay="0.4s"
        />

      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
};