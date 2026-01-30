import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const openCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/noblegroupny/discoverycall' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/50 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => handleNavClick('/Home')}
        >
          {!logoError && (
            <img
              src="https://drive.google.com/thumbnail?id=1xVtSKU-HiqjhUnomQaOcfV8kY2skFO6S&sz=w200"
              alt="Noble Group"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-semibold text-lg tracking-tight">Noble Group</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('/Services')}
            className={`text-sm hover:text-white transition-colors relative group ${isActive('/Services') ? 'text-white' : 'text-gray-400'}`}
          >
            Services
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-noble-400 transition-all ${isActive('/Services') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <button
            onClick={() => handleNavClick('/CaseStudies')}
            className={`text-sm hover:text-white transition-colors relative group ${isActive('/CaseStudies') ? 'text-white' : 'text-gray-400'}`}
          >
            Case Studies
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-noble-400 transition-all ${isActive('/CaseStudies') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <button
            onClick={() => handleNavClick('/WebsiteServices')}
            className={`text-sm hover:text-white transition-colors relative group ${isActive('/WebsiteServices') ? 'text-white' : 'text-gray-400'}`}
          >
            Website/AI Services
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-noble-400 transition-all ${isActive('/WebsiteServices') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <button
            onClick={() => handleNavClick('/AboutUs')}
            className={`text-sm hover:text-white transition-colors relative group ${isActive('/AboutUs') ? 'text-white' : 'text-gray-400'}`}
          >
            About Us
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-noble-400 transition-all ${isActive('/AboutUs') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <button
            onClick={openCalendly}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-noble-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in-down h-screen">
          <button
            onClick={() => handleNavClick('/Services')}
            className={`text-lg text-left ${isActive('/Services') ? 'text-white font-bold' : 'text-gray-300'}`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('/CaseStudies')}
            className={`text-lg text-left ${isActive('/CaseStudies') ? 'text-white font-bold' : 'text-gray-300'}`}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavClick('/WebsiteServices')}
            className={`text-lg text-left ${isActive('/WebsiteServices') ? 'text-white font-bold' : 'text-gray-300'}`}
          >
            Website/AI Services
          </button>
          <button
            onClick={() => handleNavClick('/AboutUs')}
            className={`text-lg text-left ${isActive('/AboutUs') ? 'text-white font-bold' : 'text-gray-300 hover:text-noble-400'}`}
          >
            About Us
          </button>
          <button
            onClick={openCalendly}
            className="w-full bg-noble-500 text-white py-3 rounded-lg font-medium mt-4"
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};