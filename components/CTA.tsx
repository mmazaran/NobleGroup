import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    engagementType: 'Monthly Retainer',
    profession: 'Realtor'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/VugSznyLfhcGlJV34DXc/webhook-trigger/3ad506bf-12d3-4e76-addd-404c0479be31', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
      }, 800);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="w-full px-6 py-32 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-noble-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-noble-400" />
            <span className="text-xs font-medium text-noble-200 uppercase tracking-wider">Brand Audit</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Unlock your brand's <br/> <span className="text-gradient-gold">true potential.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Find out how your business can achieve better engagement and wider market reach. Complete the brief assessment to start your transformation.
          </p>

          <div className="hidden lg:block space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
               <div className="w-8 h-[1px] bg-white/10"></div>
               <p>Free Strategy Session Included</p>
            </div>
             <div className="flex items-center gap-4 text-sm text-gray-500">
               <div className="w-8 h-[1px] bg-white/10"></div>
               <p>Custom Engagement Roadmap</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          {/* Card Container */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 bg-black/40 shadow-2xl relative overflow-hidden">
            
            {/* Border Beam Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-noble-400/50 to-transparent translate-x-[-100%] animate-[beam_3s_infinite]" />
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-gray-400 mb-6">We'll be in touch shortly to schedule your strategy session.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-sm text-noble-400 hover:text-noble-300 underline underline-offset-4"
                >
                  Send another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm mb-2">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">Company</label>
                    <input
                      required
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all"
                      placeholder="Noble Estates"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="profession" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">I am a...</label>
                  <select
                    name="profession"
                    id="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Realtor" className="bg-zinc-900">Realtor / Agent</option>
                    <option value="Builder" className="bg-zinc-900">Builder</option>
                    <option value="Developer" className="bg-zinc-900">Developer</option>
                    <option value="Contractor" className="bg-zinc-900">Contractor</option>
                    <option value="Architect" className="bg-zinc-900">Architect</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="engagementType" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">Interested in...</label>
                  <select
                    name="engagementType"
                    id="engagementType"
                    value={formData.engagementType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-noble-400/50 focus:ring-1 focus:ring-noble-400/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Monthly Retainer" className="bg-zinc-900">Monthly Retainer (Growth Partner)</option>
                    <option value="Solo Project Shoot" className="bg-zinc-900">Solo Project Shoot</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full mt-2 bg-white text-black font-bold py-4 rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Brand Analysis</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>
          
          {/* Decorative floating elements behind form */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-noble-500/20 rounded-full blur-2xl -z-10 animate-pulse-slow" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000" />
        </div>
      </div>
    </section>
  );
};