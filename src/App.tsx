import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  FileText, 
  GraduationCap, 
  Linkedin, 
  Briefcase, 
  BarChart, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-cyan/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          {!logoError ? (
            <img 
              src="/logo.png" 
              alt="KASI TECH HUB Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-10 h-10 bg-cyan flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
              <Monitor className="text-navy" size={24} />
            </div>
          )}
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            KASI <span className="text-cyan">TECH HUB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/27799491794" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow text-navy px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-b border-cyan/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/27799491794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow text-navy px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const AnimatedCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center p-6 border border-cyan/10 rounded-2xl bg-white/5 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-display font-bold text-cyan mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

// --- Main Page ---

export default function App() {
  return (
    <div className="relative overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy to-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 px-4 py-1.5 rounded-full text-cyan text-sm font-semibold mb-6">
              <Zap size={16} /> Skills That Open Doors
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Build Digital Skills That <span className="text-cyan text-glow">Open Doors</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Beginner-friendly computer training, CV support, job applications, education applications, and business digital tools for the Refilwe and Cullinan community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-yellow text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:-translate-y-1">
                Register Today
              </a>
              <a 
                href="https://wa.me/27799491794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <MessageCircle className="text-cyan" /> Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: CheckCircle2, text: 'Beginner Friendly' },
                { icon: ShieldCheck, text: 'Affordable Training' },
                { icon: Monitor, text: 'Hands-On Support' },
                { icon: Zap, text: 'No Experience Needed' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <item.icon size={18} className="text-cyan" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-cyan/20 blur-[120px] rounded-full animate-pulse" />
            <div className="relative bg-navy/80 border border-cyan/30 p-8 rounded-[40px] backdrop-blur-xl">
               <div className="aspect-square bg-navy flex items-center justify-center rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                    alt="Digital skills training" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-navy/20 flex flex-col justify-end p-8">
                    <div className="bg-cyan p-4 rounded-2xl w-fit mb-4">
                      <Monitor className="text-navy" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">Practical Learning</h3>
                    <p className="text-gray-300 text-sm italic">"Learning by doing is the fastest way to master technology."</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8">
                Struggling with the <br /> <span className="text-cyan">Digital World?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Many people in Refilwe and Cullinan struggle to apply for jobs or grow businesses because they lack basic computer skills and online application support.
              </p>
              <div className="space-y-4">
                {[
                  "No computer confidence",
                  "Difficulty applying for jobs online",
                  "Rejected because of poor CVs",
                  "Confusing Z83 forms for government jobs",
                  "Limited skills to promote your business"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X size={14} className="text-red-500" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Stuck CV', desc: 'Outdated formats get ignored.', icon: FileText, color: 'text-red-400' },
                { title: 'Job Apps', desc: 'Complex portals are frustrating.', icon: Briefcase, color: 'text-orange-400' },
                { title: 'Confidence', desc: 'Fear of typing or using internet.', icon: Zap, color: 'text-yellow-400' },
                { title: 'NSFAS Help', desc: 'Missing out on education.', icon: GraduationCap, color: 'text-blue-400' }
              ].map((card, idx) => (
                <div key={idx} className="p-6 bg-navy/50 border border-white/5 rounded-2xl">
                  <card.icon className={`${card.color} mb-4`} size={32} />
                  <h4 className="font-bold mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="about" className="py-24 bg-cyan relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-6xl font-display font-bold text-navy mb-8">
              We are the Bridge to Your Success.
            </h2>
            <p className="text-xl lg:text-2xl text-navy/80 leading-relaxed font-medium">
              “KASI TECH HUB provides <span className="underline decoration-navy decoration-4 underline-offset-4">simple, step-by-step training</span> and real support so learners can complete actual applications, create professional CVs, and build unshakeable confidence.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 px-6">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Practical Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">High-value skills and administrative support designed for immediate impact.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Skills Training",
                icon: Monitor,
                desc: "Master Word, Excel, PowerPoint, and basics like Email and Internet use. Practical and easy for beginners.",
                benefit: "Boost your office readiness."
              },
              {
                title: "CV Writing & Job Apps",
                icon: FileText,
                desc: "Professional CVs and support for online applications that actually get you noticed by employers.",
                benefit: "Higher interview chances."
              },
              {
                title: "Z83 Government Support",
                icon: Briefcase,
                desc: "Specialized help with government Z83 forms to ensure your application is perfect and compliant.",
                benefit: "Flawless official submissions."
              },
              {
                title: "Universal Apps & NSFAS",
                icon: GraduationCap,
                desc: "Expert assistance with University, College, Bursary, and NSFAS applications to secure your future.",
                benefit: "Education made accessible."
              },
              {
                title: "LinkedIn Profile Setup",
                icon: Linkedin,
                desc: "Build a professional online presence to attract recruiters and network with potential employers.",
                benefit: "Get seen by top companies."
              },
              {
                title: "Small Business Digital Support",
                icon: TrendingUp,
                desc: "Posters, social media promotion, and business profiles to help your local business grow and prosper.",
                benefit: "Attract more local customers."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan/50 hover:bg-cyan/5 transition-all"
              >
                <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan group-hover:text-navy transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-cyan font-semibold text-sm">
                  <CheckCircle2 size={16} />
                  {service.benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-white/2 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow/20 blur-[100px] group-hover:blur-[150px] transition-all" />
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Team working together" 
               className="rounded-3xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow text-navy p-6 rounded-2xl z-20 shadow-xl hidden md:block">
              <Award size={40} className="mb-2" />
              <div className="font-bold text-lg">Trusted Support</div>
              <div className="text-sm opacity-80">Serving our community</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-12">Why the Community <span className="text-yellow">Trusts Us</span></h2>
            <div className="grid gap-8">
              {[
                { title: "100% Beginner-Friendly", desc: "We start from zero. No question is too simple." },
                { title: "Affordable Local Support", desc: "Quality training that doesn't break the bank." },
                { title: "Small Classes & Personal Guidance", desc: "You won't get lost in a crowd. We focus on YOU." },
                { title: "Practical Hands-On Training", desc: "No boring theory. We use actual computers." },
                { title: "Real Application Support", desc: "We don't just show you; we do the apps WITH you." },
                { title: "Founded in Refilwe", desc: "We understand your needs because we are one of you." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan text-navy flex items-center justify-center font-bold">
                     {idx + 1}
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                     <p className="text-gray-400">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Affordable Packages</h2>
            <p className="text-xl text-gray-400">Quality education shouldn't be a luxury.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Support",
                usage: "For quick career needs",
                price: "From R80",
                features: ["CV Writing", "One Job Application", "Standard Template", "Email Delivery"],
                cta: "Book This Package",
                popular: false
              },
              {
                name: "Digital Skills Starter",
                usage: "Most Popular for Beginners",
                price: "From R250",
                features: ["Basic Computer Literacy", "Microsoft Word Training", "Email & Internet Setup", "Typing Practice", "Certificate of Attendance"],
                cta: "Book This Package",
                popular: true
              },
              {
                name: "Career Growth",
                usage: "Complete Package",
                price: "From R350",
                features: ["Expert CV Writing", "LinkedIn Profile Setup", "3 Job Applications", "Z83 Form Assistance", "Application Success Tips"],
                cta: "Book This Package",
                popular: false
              }
            ].map((p, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 rounded-3xl border transition-all ${p.popular ? 'bg-cyan/5 border-cyan shadow-[0_0_40px_rgba(0,240,255,0.1)] scale-105' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-navy text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{p.name}</h3>
                <div className="text-gray-400 text-sm mb-6 uppercase tracking-wider">{p.usage}</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">{p.price}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-4 rounded-xl font-bold transition-all ${p.popular ? 'bg-cyan text-navy hover:bg-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-navy tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 italic">Stories of <span className="text-cyan">Progress</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Before KASI TECH HUB, I struggled to apply for jobs online. Now I can use email, update my CV, and submit applications with confidence.",
                author: "Local Job Seeker",
                role: "Unemployed Youth"
              },
              {
                text: "The training was simple and easy to understand. I learned Word, Excel, and how to apply online. Highly recommended for beginners!",
                author: "Mpho S.",
                role: "Student"
              },
              {
                text: "KASI TECH HUB helped me create posters and promote my small business online. My customer base in Cullinan has grown significantly.",
                author: "Business Owner",
                role: "Entrepreneur"
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-navy border border-cyan/20 rounded-t-[40px] rounded-bl-[40px] relative">
                <MessageCircle size={40} className="text-cyan/20 absolute top-4 right-8" />
                <p className="text-lg italic text-gray-300 mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-cyan">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-cyan/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter value={95} label="Confidence Score" suffix="%" />
            <AnimatedCounter value={500} label="CVs Written" suffix="+" />
            <AnimatedCounter value={120} label="Successful Job Apps" />
            <AnimatedCounter value={50} label="Local Businesses Helped" />
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto bg-navy/80 p-10 rounded-3xl border border-cyan/20 backdrop-blur-xl">
             <h3 className="text-3xl font-display font-bold mb-4">Our Real Social Impact</h3>
             <p className="text-gray-400">
                Supporting youth with career readiness, assisting small businesses with online promotion, and bridging the township digital skills gap in Refilwe and Cullinan.
             </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Let's Open Your <br /><span className="text-cyan">Next Door</span></h2>
              <p className="text-xl text-gray-400 mb-12">Have a question? Ready to register? Send us a message and we'll get back to you within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center text-cyan">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Location</div>
                    <div className="text-gray-400">1609 Zwane Street, Refilwe, Cullinan, Gauteng</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center text-cyan">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Phone / WhatsApp</div>
                    <a href="tel:0799491794" className="text-gray-400 hover:text-cyan transition-colors">079 949 1794</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center text-cyan">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email</div>
                    <a href="mailto:thabangseloane97@gmail.com" className="text-gray-400 hover:text-cyan transition-colors">thabangseloane97@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://wa.me/27799491794" 
                  className="inline-flex items-center gap-3 bg-yellow text-navy px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle size={24} /> Message on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-md">
              <form action="contact.php" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-widest text-gray-500">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Enter your name" 
                      className="w-full bg-navy border border-white/10 p-4 rounded-xl focus:border-cyan outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="079 000 0000" 
                      className="w-full bg-navy border border-white/10 p-4 rounded-xl focus:border-cyan outline-none transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-widest text-gray-500">Service Interested In</label>
                  <select 
                    name="service"
                    className="w-full bg-navy border border-white/10 p-4 rounded-xl focus:border-cyan outline-none transition-all appearance-none"
                  >
                    <option>Computer Skills Training</option>
                    <option>CV Writing & Job Apps</option>
                    <option>Government Application Support</option>
                    <option>NSFAS / Uni Applications</option>
                    <option>Small Business Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-widest text-gray-500">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    placeholder="How can we help you?" 
                    className="w-full bg-navy border border-white/10 p-4 rounded-xl focus:border-cyan outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <button type="submit" className="w-full bg-cyan text-navy py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all shadow-lg active:scale-95">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <a href="#home" className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="KASI TECH HUB Logo" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-8 h-8 bg-cyan flex items-center justify-center rounded-lg';
                      fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor text-navy"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>';
                      parent.prepend(fallback);
                    }
                  }}
                />
                <span className="font-display font-bold text-lg uppercase tracking-tight">
                  KASI <span className="text-cyan">TECH HUB</span>
                </span>
              </a>
              <p className="text-gray-500 mb-6 italic">Skills That Open Doors</p>
              <div className="flex gap-4">
                {/* Social Placeholder Icons */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan hover:text-cyan transition-all cursor-pointer"><Linkedin size={18} /></div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan hover:text-cyan transition-all cursor-pointer"><MessageCircle size={18} /></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-cyan transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-cyan transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-cyan transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Our Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#why-us" className="hover:text-cyan transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-cyan transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-cyan transition-colors">Impact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Visit Us</h4>
              <p className="text-gray-400 mb-2 leading-relaxed">
                1609 Zwane Street, Refilwe<br />
                Cullinan, Gauteng, South Africa
              </p>
              <p className="text-gray-400">
                <a href="tel:0799491794" className="hover:text-cyan transition-colors">079 949 1794</a>
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600">
            <div>&copy; 2026 KASI TECH HUB (PTY) LTD. All rights reserved.</div>
            <div className="flex gap-8 italic">
              <span>Empowering Refilwe & Cullinan</span>
              <span>Registration No: 2026282929/07</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile) */}
      <div className="fixed bottom-6 right-6 z-[60] lg:hidden">
        <a 
          href="https://wa.me/27799491794" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-yellow text-navy shadow-2xl rounded-full flex items-center justify-center animate-bounce"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
