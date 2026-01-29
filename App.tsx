import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueDetailed } from './components/ValueDetailed';
import { SocialProof } from './components/SocialProof';
import { CTA } from './components/CTA';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { ClientNotifications } from './components/ClientNotifications';
import { WebsiteServices } from './components/WebsiteServices';

// Declare the custom element to satisfy TypeScript/JSX


const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-noble-500/30">
      {/* Global Mouse Glow */}
      <div
        className="glow-point fixed pointer-events-none z-50 mix-blend-screen opacity-50 hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar currentView={currentView} onViewChange={setCurrentView} />

        <main className="flex flex-col items-center w-full overflow-hidden min-h-screen">
          {currentView === 'home' && (
            <>
              <Hero />
              <ValueDetailed />
              <SocialProof />
              <ClientNotifications />
              <CTA />
            </>
          )}
          {currentView === 'website-services' && <WebsiteServices />}
          {currentView === 'services' && <Services />}
          {currentView === 'case-studies' && <CaseStudies />}
          {currentView === 'about' && <About onViewChange={setCurrentView} />}
        </main>

        <footer className="w-full py-12 px-6 border-t border-white/5 mt-auto bg-black/50 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img
                src="https://drive.google.com/thumbnail?id=1xVtSKU-HiqjhUnomQaOcfV8kY2skFO6S&sz=w200"
                alt="Noble Group"
                className="h-6 w-auto opacity-80"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-gray-300 font-medium">Noble Group</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Noble Group. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* @ts-ignore */}
      <elevenlabs-convai agent-id="agent_1801kfhexxhney4bhdyevqsrvz84"></elevenlabs-convai>
      <Analytics />
    </div>
  );
};

export default App;