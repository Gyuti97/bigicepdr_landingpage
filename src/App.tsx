import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MessageSquare,
  Youtube,
  ArrowRight,
  Car,
  Hammer,
  Wrench,
  Camera,
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronDown
} from "lucide-react";
import { useRef, useState, useEffect, createContext, useContext } from "react";
import { translations } from "./translations";

type Language = "English" | "Hungarian" | "German";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.English;
}>({
  lang: "English",
  setLang: () => {},
  t: translations.English
});

const Navbar = () => {
  const { lang, setLang, t } = useContext(LanguageContext);

  const languages: { name: Language; code: string }[] = [
    { name: "Hungarian", code: "HU" },
    { name: "English", code: "EN" },
    { name: "German", code: "DE" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-brand-bg/80 backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.name)}
              className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${
                lang === l.name 
                  ? 'bg-brand-primary text-white shadow-[0_0_10px_rgba(26,102,255,0.3)]' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl font-bold tracking-tight text-white">BIG ICE PDR</span>
        </button>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#results" className="hover:text-brand-primary transition-colors">{t.nav.results}</a>
        <a href="#process" className="hover:text-brand-primary transition-colors">{t.nav.process}</a>
        <a href="#polishing" className="hover:text-brand-primary transition-colors">{t.nav.polishing}</a>
        <a href="mailto:bigicepdr@gmail.com" className="text-brand-primary font-semibold">{t.nav.estimate}</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useContext(LanguageContext);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.postimg.cc/Dybkyv99/IMG-5119.jpg",
    "https://i.postimg.cc/D0kDSL3T/IMG-4707.jpg",
    "https://i.postimg.cc/9Fbj488j/4445F191-B7B8-4065-A17D-267BD99B9A47.jpg",
    "https://i.postimg.cc/P5x6r2vw/IMG-5738.jpg",
    "https://i.postimg.cc/Kj8Trs2B/IMG-5726.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.img 
          src="https://i.postimg.cc/mDv61B4h/full-feher-est.png" 
          alt="Big Ice PDR Logo" 
          className="h-32 md:h-48 w-auto mx-auto mb-8 drop-shadow-[0_0_15px_rgba(26,102,255,0.3)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          {t.hero.title} <br />
          <span className="text-brand-primary">{t.hero.subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex justify-center">
          <a href="mailto:bigicepdr@gmail.com" className="btn-primary flex items-center justify-center gap-2">
            {t.hero.cta} <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Carousel Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-black"
      >
        <motion.img 
          key={currentImage}
          src={images[currentImage]} 
          alt={`Workshop ${currentImage + 1}`} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="flex gap-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === currentImage ? 'w-8 bg-brand-primary' : 'w-2 bg-white/20'}`} 
              />
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-brand-primary/40" />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const { t } = useContext(LanguageContext);
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.features.f1.title,
      desc: t.features.f1.desc
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.features.f2.title,
      desc: t.features.f2.desc
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: t.features.f3.title,
      desc: t.features.f3.desc
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-row-3 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="glass-card p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-white/50 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Comparison = () => {
  const { t } = useContext(LanguageContext);
  // Replace these IDs with your actual YouTube Shorts IDs
  // Example: if your URL is youtube.com/shorts/abc123xyz, the ID is abc123xyz
  const shorts = [
    { id: "NPMmWkzCSrc", title: "Restoration 1" },
    { id: "bPp_7NidbSQ", title: "Restoration 2" },
    { id: "u3seKDM9tYE", title: "Restoration 3" }
  ];

  return (
    <section id="results" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.comparison.title}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t.comparison.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {shorts.map((short, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-brand-primary shadow-lg shadow-brand-primary/20 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${short.id}`}
                title={short.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useContext(LanguageContext);
  const steps = [
    {
      num: "01",
      title: t.process.steps[0].title,
      desc: t.process.steps[0].desc
    },
    {
      num: "02",
      title: t.process.steps[1].title,
      desc: t.process.steps[1].desc
    },
    {
      num: "03",
      title: t.process.steps[2].title,
      desc: t.process.steps[2].desc
    },
    {
      num: "04",
      title: t.process.steps[3].title,
      desc: t.process.steps[3].desc
    }
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.process.title}</h2>
            <p className="text-white/50">
              {t.process.desc}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40">
              <Hammer size={20} />
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40">
              <Wrench size={20} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group p-6 rounded-2xl border border-white/5 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-500"
            >
              <div className="text-6xl font-black text-white mb-6 group-hover:text-brand-primary transition-colors duration-500 opacity-20 group-hover:opacity-100">{s.num}</div>
              <h4 className="text-xl font-bold mb-4 text-white">{s.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-white/10">
                  <ChevronRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PolishingServices = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="polishing" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.polishing.title}</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {t.polishing.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[9/16] max-w-sm mx-auto w-full rounded-2xl overflow-hidden border-2 border-brand-primary shadow-2xl shadow-brand-primary/20 bg-black">
            <iframe
              src="https://www.youtube.com/embed/rQBdVbv7P3w"
              title="Polishing Services"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-8 border-l-4 border-brand-primary">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Zap size={20} />
                </div>
                {t.polishing.p1.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t.polishing.p1.desc}
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <ShieldCheck size={20} />
                </div>
                {t.polishing.p2.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t.polishing.p2.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-secondary">9H Hardness</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-secondary">UV Protection</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-secondary">Hydrophobic</span>
              </div>
            </div>

            <a href="mailto:bigicepdr@gmail.com" className="btn-primary inline-flex items-center gap-2 mt-4">
              {t.polishing.cta} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/10 blur-[80px] rounded-full -z-10" />
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.cta.title}</h2>
        <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg">
          {t.cta.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:bigicepdr@gmail.com" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
            {t.cta.button} <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-3 text-white/40 text-sm">
            <Camera size={16} />
            <span>{t.cta.subtext}</span>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.cta.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-brand-primary">{stat.val}</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  const socialLinks = [
    { 
      name: "Instagram", 
      handle: "@bigicepdr", 
      url: "https://www.instagram.com/bigicepdr/", 
      icon: <Instagram className="w-8 h-8" /> 
    },
    { 
      name: "Facebook", 
      handle: "Big Ice PDR", 
      url: "https://www.facebook.com/profile.php?id=61571601878221", 
      icon: <Facebook className="w-8 h-8" /> 
    },
    { 
      name: "TikTok", 
      handle: "@bigicepdr", 
      url: "https://www.tiktok.com/@bigicepdr", 
      icon: <MessageSquare className="w-8 h-8" /> 
    },
    { 
      name: "YouTube", 
      handle: "Big Ice PDR", 
      url: "https://www.youtube.com/@BigIcePDR/shorts", 
      icon: <Youtube className="w-8 h-8" /> 
    }
  ];

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.footer.connect}</h2>
          <p className="text-white/40">{t.footer.connectDesc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {socialLinks.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex flex-col items-center gap-4 hover:bg-brand-primary/10 hover:border-brand-primary/50 transition-all duration-300 group"
            >
              <div className="text-brand-primary group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{link.name}</p>
                <p className="text-brand-primary font-medium">{link.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">{t.footer.locations}</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.footer.primary}</p>
                <a href="tel:+36706240200" className="text-xl font-bold hover:text-brand-primary transition-colors">+36 70 624 0200</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.footer.email}</p>
                <a href="mailto:bigicepdr@gmail.com" className="text-xl font-bold hover:text-brand-primary transition-colors">bigicepdr@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.footer.secondary}</p>
                <a href="tel:+363158895" className="text-xl font-bold hover:text-brand-primary transition-colors">+36 30 315 8895</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Shop 1: Pápa */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] relative group">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=8500%20P%C3%A1pa,%20Kom%C3%A1romi%20%C3%BAt%202&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="grayscale invert contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-brand-primary/20 rounded-2xl"></div>
            </div>
            <div className="glass-card p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.footer.papa}</p>
                  <p className="font-bold">8500 Pápa, Komáromi út 2.</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=8500+Pápa,+Komáromi+út+2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary py-3 px-6 text-sm flex items-center gap-2"
              >
                {t.footer.directions} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Shop 2: Sopron */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[300px] relative group">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=9400%20Sopron&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="grayscale invert contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-brand-primary/20 rounded-2xl"></div>
            </div>
            <div className="glass-card p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.footer.sopron}</p>
                  <p className="font-bold">9400 Sopron</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=9400+Sopron" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary py-3 px-6 text-sm flex items-center gap-2"
              >
                {t.footer.directions} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <img 
            src="https://i.postimg.cc/mDv61B4h/full-feher-est.png" 
            alt="Big Ice PDR" 
            className="h-12 w-auto"
          />
          
          <p className="text-xs text-white/20">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>("Hungarian");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen selection:bg-brand-primary/30">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Comparison />
          <Process />
          <PolishingServices />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
