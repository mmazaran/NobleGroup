import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Cpu, Database, BarChart3, Users, ArrowRight, CheckCircle2, Loader2, Send, MessageSquare, ExternalLink, Globe } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20); // Tilt amount
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springY,
        rotateY: springX,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 w-full overflow-hidden"
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-noble-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-noble-500/30 group-hover:bg-noble-500/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gray-300 group-hover:text-noble-400 group-hover:scale-110 transition-all duration-300" />
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-noble-200 transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
        {description}
      </p>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent blur-2xl -translate-y-10 translate-x-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500" />
    </motion.div>
  );
};

const QuestionnaireForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: 'Website & CRM',
    projectDetails: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/VugSznyLfhcGlJV34DXc/webhook-trigger/a99dc801-03a1-4a78-bf15-fb11feb7cf08', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-md"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          Thank you for reaching out, {formData.name.split(' ')[0]}.<br />
          We'll analyze your requirements and get back to you shortly with a custom strategy.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Form Container */}
      <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden relative">

        <div className="absolute top-0 right-0 w-64 h-64 bg-noble-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tell us about your vision</h2>
          <p className="text-gray-400">
            Fill out the form below to discover how our digital services can generate brand identity and reliable lead flow for your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
              <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'name' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white p-4 outline-none placeholder:text-gray-600 rounded-xl"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Company Name</label>
              <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'company' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white p-4 outline-none placeholder:text-gray-600 rounded-xl"
                  placeholder="Noble Group"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
              <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'phone' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white p-4 outline-none placeholder:text-gray-600 rounded-xl"
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
              <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'email' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white p-4 outline-none placeholder:text-gray-600 rounded-xl"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Interested Services</label>
            <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'serviceType' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                onFocus={() => setFocusedField('serviceType')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent text-white p-4 outline-none rounded-xl appearance-none cursor-pointer"
              >
                <option value="Website & CRM" className="bg-zinc-900">Website & CRM</option>
                <option value="Website only" className="bg-zinc-900">Website only</option>
                <option value="Website, CRM and AI" className="bg-zinc-900">Website, CRM and AI</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
            <div className={`relative transition-all duration-300 rounded-xl bg-white/5 border ${focusedField === 'projectDetails' ? 'border-noble-500 ring-1 ring-noble-500/20' : 'border-white/10'}`}>
              <textarea
                name="projectDetails"
                rows={4}
                value={formData.projectDetails}
                onChange={handleChange}
                onFocus={() => setFocusedField('projectDetails')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent text-white p-4 outline-none placeholder:text-gray-600 rounded-xl resize-none"
                placeholder="Tell us a bit more about your goals..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full mt-4 bg-gradient-to-r from-noble-600 to-noble-500 hover:from-noble-500 hover:to-noble-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-noble-900/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Get Your Custom Strategy</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-sm text-center mt-2">
              Something went wrong. Please try again later.
            </p>
          )}

        </form>
      </div>
    </div>
  );
};



const PortfolioSection: React.FC = () => {
  const projects = [
    {
      name: "Luxe Home Framers",
      url: "https://luxehomeframers.com/",
      description: "Luxury Construction Framing"
    },
    {
      name: "Kowboy Keith",
      url: "https://kowboykeith.com/",
      description: "Personal Brand & Media"
    },
    {
      name: "Vantage Realty Partners",
      url: "https://www.vantagerealtypartners.com/",
      description: "Real Estate Brokerage"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">See our latest work</h2>
        <div className="w-24 h-1 bg-noble-500 mx-auto rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-noble-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-noble-500/30 transition-colors">
                <Globe className="w-6 h-6 text-noble-500/80 group-hover:text-noble-400 transition-colors" />
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-noble-400 transition-colors" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-noble-200 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-noble-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </a>
        ))}
      </div>
    </div>
  );
};

export const WebsiteServices: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const services = [
    {
      title: "Custom-Built Websites",
      description: "High performance, fully custom websites designed for speed, conversion, and scale. No templates.",
      icon: Code2
    },
    {
      title: "AI-Integrated APIs",
      description: "Smart AI integrations including chat assistants, automated responses, lead qualification, and workflow automation.",
      icon: Cpu
    },
    {
      title: "CRM Integration & Automation",
      description: "Seamless CRM setup and integrations to track leads, automate follow-ups, and manage your entire sales pipeline.",
      icon: Database
    },
    {
      title: "Digital Marketing Systems",
      description: "Strategic content, paid ads, and automation built to drive traffic, engagement, and measurable ROI.",
      icon: BarChart3
    },
    {
      title: "Lead Generation & Conversion",
      description: "AI-powered lead capture, funnels, and forms designed to turn visitors into booked calls and paying clients.",
      icon: Users
    },
    {
      title: "Automated SMS & iMessage",
      description: "Instant, automated SMS follow-ups with iMessage integration to engage leads immediately on their preferred channel.",
      icon: MessageSquare
    }
  ];



  return (
    <div className="relative min-h-screen w-full pt-32 pb-20 px-6">

      {/* Background Decor - Parallax Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-96 h-96 bg-noble-600/5 rounded-full blur-3xl mix-blend-screen" />
        <motion.div style={{ y: y2 }} className="absolute bottom-40 right-10 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-noble-400 animate-pulse" />
            <span className="text-xs font-medium text-noble-200 uppercase tracking-wide">Web Development & AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Digital Ecosystems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-noble-200 via-noble-400 to-noble-600">Built for Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            We don't just build websites. We build automated high-performance sales engines.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <PortfolioSection />
        </motion.div>

        {/* Pricing / Call to Action -> Replaced with Questionnaire */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-20"
        >
          <QuestionnaireForm />
        </motion.div>

      </div>
    </div>
  );
};
