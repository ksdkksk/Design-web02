import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowUpRight 
} from 'lucide-react';

// Asset imports
const smartisanT3 = '/img/Samrtisan-T3-40000 main.png';
const work1 = '/img/guerlain30000_.png';
const cup1 = '/video/cup1.mp4';
const flowerRender = '/video/3.16flower.karmarendersettings.mp4';

const SECTIONS = [
  { id: 'home', labelKey: 'index' },
  { id: 'works', labelKey: 'works' },
  { id: 'about', labelKey: 'about' },
  { id: 'contact', labelKey: 'connect' }
];

const TRANSLATIONS = {
  en: {
    nav: {
      index: 'INDEX',
      works: 'WORKS',
      about: 'ABOUT',
      connect: 'CONNECT',
    },
    hero: {
      discipline: 'DISCIPLINE',
      disciplineContent: 'Building systems with rules, letting motion emerge naturally—physics-driven, infinitely variable.',
      capabilities: 'CAPABILITIES',
      capabilitiesContent: '2D Design / 3D Topology / Kinetic Systems',
      scroll: 'SCROLL TO EXPLORE',
    },
    works: {
      title: 'Selected Works',
    },
    about: {
      label: 'IDENTITY_LOG',
      role: 'ROLE',
      artist: 'MOTION ARTIST',
      loc: 'LOC',
      shanghai: 'SHANGHAI / REMOTE',
      avail: 'AVAIL',
      q3: 'Q3 2026',
      philosophy: 'Merging Mathematical Logic with Visual Aesthetics to create high-end motion experiences.',
      p1Title: '01 / PHILOSOPHY',
      p1Content: 'I specialize in building frameworks where rules define the form. Instead of traditional keyframing, I focus on growth algorithms, physics engines, and generative systems.',
      p2Title: '02 / TOOLKIT',
      p2Content: 'Expertise across Houdini for complex simulations and C4D for direction. Always learning new ways to break the default.',
    },
    contact: {
      label: 'INITIATE CONTACT',
      title: "Let's VibratE.",
      clock: 'SYSTEM CLOCK',
    }
  },
  zh: {
    nav: {
      index: '首页',
      works: '作品',
      about: '关于我',
      connect: '联系方式',
    },
    hero: {
      discipline: '专业领域',
      disciplineContent: '建立有序规则，让动效自然涌现——物理驱动、无限变量。',
      capabilities: '核心能力',
      capabilitiesContent: '2D 动态设计 / 3D 拓扑 / 动力学系统',
      scroll: '向下探索',
    },
    works: {
      title: '作品精选',
    },
    about: {
      label: '身份档案',
      role: '职位',
      artist: '动态艺术家',
      loc: '所在地',
      shanghai: '上海 / 远程',
      avail: '档期',
      q3: '2026 年第三季度',
      philosophy: '将数学逻辑与视觉美学融合，打造高端的动态体验。',
      p1Title: '01 / 创作哲学',
      p1Content: '我专注于构建由规则定义形式的程序化框架。比起传统关键帧，我更关注增长算法、物理引擎和系统架构。',
      p2Title: '02 / 技术栈',
      p2Content: '精通 Houdini 复杂仿真以及 C4D 技术美术。不断探索打破常规的新方法。',
    },
    contact: {
      label: '发起联系',
      title: "让我们开始振动。",
      clock: '系统时钟',
    }
  }
};

const PROJECTS = [
  {
    title: "SMARTISAN T3",
    category: "PRODUCT DESIGN",
    year: "2024",
    image: smartisanT3, 
    description: "Industrial design concept for the T-series flagship."
  },
  {
    title: "GUERLAIN ROUGE",
    category: "VISUAL CRAFT",
    year: "2023",
    image: work1, 
    description: "Exploration of premium leather textures and silk dynamics."
  },
  {
    title: "COFFEE CRAFT",
    category: "MOTION FILM",
    year: "2024",
    image: cup1, 
    description: "Cinematic exploration of ceramic textures and organic fluid dynamics."
  },
  {
    title: "FLORAL DYNAMICS",
    category: "PROCEDURAL ART",
    year: "2024",
    image: flowerRender, 
    description: "Computational study of botanical growth and organic form."
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = TRANSLATIONS[lang];

  // Custom Cursor State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('group')
      ) {
        setCursorVariant('pointer');
      } else {
        setCursorVariant('default');
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simple clock effect
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-accent selection:text-white text-brand-text">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] border border-black/5"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: cursorVariant === 'pointer' ? 2 : 1,
          backgroundColor: cursorVariant === 'pointer' ? 'var(--color-brand-accent)' : 'rgba(255, 255, 255, 0.6)',
          borderColor: cursorVariant === 'pointer' ? 'transparent' : 'rgba(0, 0, 0, 0.1)',
          opacity: cursorVariant === 'pointer' ? 0.9 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
      />

      {/* Background Layers */}
      <div className="noise-overlay" />
      <div className="frosted-layer" />
      
      {/* Dynamic background accents to show through the frost */}
      <div className="fixed inset-0 z-[-3] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-accent/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 60, 0],
            y: [0, 120, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/3 blur-[100px]"
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Language Switcher */}
      <div className="fixed bottom-10 right-6 z-[60] flex gap-2 font-mono text-[10px]">
        <button 
          onClick={() => setLang('en')}
          className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-brand-accent border border-brand-accent' : 'text-brand-muted hover:text-brand-text'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('zh')}
          className={`px-2 py-1 transition-colors ${lang === 'zh' ? 'text-brand-accent border border-brand-accent' : 'text-brand-muted hover:text-brand-text'}`}
        >
          中文
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <div className="flex flex-col">
            <span className="font-mono text-sm leading-none tracking-tighter">MOTION.MTN</span>
            <span className="mono-label opacity-50">PRISM STUDIO</span>
          </div>
        </motion.div>

        <div className="flex flex-row items-center gap-8 pointer-events-auto">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(section.id);
              }}
              className="group flex flex-col items-center gap-0.5"
            >
              <span className="mono-label opacity-30 group-hover:opacity-60 transition-opacity text-[8px]">
                0{index + 1}
              </span>
              <span className={`font-mono text-[10px] tracking-widest transition-colors ${activeSection === section.id ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text'}`}>
                {t.nav[section.labelKey as keyof typeof t.nav]}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <motion.div 
            animate={{ 
              background: [
                'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                'radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
           />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-medium leading-[0.85] tracking-tighter mb-8 uppercase">
            Motion<br />Prism
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="max-w-xs">
              <span className="mono-label mb-2 block">{t.hero.discipline}</span>
              <p className="text-sm text-brand-muted uppercase leading-relaxed">
                {t.hero.disciplineContent}
              </p>
            </div>
            <div className="max-w-xs">
              <span className="mono-label mb-2 block">{t.hero.capabilities}</span>
              <p className="text-sm text-brand-muted uppercase leading-relaxed">
                {t.hero.capabilitiesContent}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-6 right-6 flex justify-between items-end"
        >
          <div className="flex gap-4">
             <div className="w-px h-12 bg-black/20" />
             <div className="mono-label self-end text-[9px]">{t.hero.scroll}</div>
          </div>
          <div className="flex gap-4 text-[10px] font-mono opacity-40">
            <span>2026 EDITION</span>
            <span>INDEX_001</span>
          </div>
        </motion.div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-32 px-6 md:px-12 border-t border-black/5">
        <div className="flex items-baseline justify-between mb-24">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase">{t.works.title}</h2>
          <span className="mono-label opacity-40">01 — 04</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-video overflow-hidden glass-panel rounded-2xl"
            >
              {project.image.toLowerCase().endsWith('.mp4') ? (
                <video 
                  src={project.image} 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget;
                    video.play().catch(err => console.log("Video play interrupted", err));
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget;
                    video.pause();
                    video.currentTime = 0;
                  }}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0 opacity-40 group-hover:opacity-100 pointer-events-auto"
                />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30">
                <div className="flex justify-between items-start">
                  <span className="mono-label text-white/70">{project.category}</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-medium tracking-tight mb-2 text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500">
                    <p className="text-[10px] text-white/90 max-w-[240px] leading-relaxed uppercase font-mono tracking-wider">
                      {project.description}
                    </p>
                    <span className="font-mono text-[10px] text-white/60">{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
             <div className="sticky top-32">
                <span className="mono-label mb-8 block text-brand-accent">{t.about.label}</span>
                <div className="aspect-[3/4] glass-panel p-2 mb-8 relative group overflow-hidden rounded-2xl">
                  <img 
                    src="https://picsum.photos/seed/designer/800/1200" 
                    alt="Profile"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-black/10 pb-2">
                    <span className="mono-label opacity-40">{t.about.role}</span>
                    <span className="mono-label">{t.about.artist}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-black/10 pb-2">
                    <span className="mono-label opacity-40">{t.about.loc}</span>
                    <span className="mono-label">{t.about.shanghai}</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight mb-16 uppercase">
              {lang === 'en' ? (
                <>Merging <span className="text-brand-accent">Mathematical Logic</span> with Visual Aesthetics to create high-end motion experiences.</>
              ) : (
                <>融合 <span className="text-brand-accent">数学逻辑</span> 与视觉美学，打造高端的动态体验。</>
              )}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <span className="mono-label mb-6 block opacity-40 italic">{t.about.p1Title}</span>
                <p className="text-sm text-brand-muted uppercase leading-loose font-light tracking-wide">
                  {t.about.p1Content}
                </p>
              </div>
              <div>
                <span className="mono-label mb-6 block opacity-40 italic">{t.about.p2Title}</span>
                <p className="text-sm text-brand-muted uppercase leading-loose font-light tracking-wide">
                  {t.about.p2Content}
                </p>
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-black/5">
               <div className="flex flex-wrap gap-4">
                 {['AFTER EFFECTS', 'MAXON C4D', 'SIDEEFX HOUDINI'].map(skill => (
                   <div key={skill} className="px-4 py-2 bg-black/5 border border-black/10 rounded-full mono-label text-[9px]">
                    {skill}
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact" className="py-32 px-6 border-t border-black/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-black h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="mono-label text-brand-accent mb-6 block tracking-[0.3em] text-[20px] leading-[20px] font-normal">{t.contact.label}</span>
          </motion.div>

          <a 
            href="mailto:2935168417@qq.com"
            className="group relative inline-block font-mono mb-24 overflow-hidden"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full text-[20px] leading-[20px]">2935168417@QQ.COM</span>
            <span className="absolute top-0 left-0 block w-full text-brand-accent transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-[20px] leading-[20px]">2935168417@QQ.COM</span>
          </a>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-black/5">
            <div className="flex gap-12">
              {['INSTAGRAM', 'TWITTER', 'BEHANCE', 'LINKEDIN'].map(social => (
                <a key={social} href="#" className="mono-label hover:text-brand-accent transition-colors tracking-widest">{social}</a>
              ))}
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <span className="mono-label opacity-30 mb-2">{t.contact.clock}</span>
              <span className="font-mono text-2xl tracking-tighter text-black/80">{time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="mono-label opacity-40 text-[9px]">CORE_SERVICES_OK</span>
        </div>
        <span className="mono-label opacity-10 text-[9px]">© 2026 MOTION PRISM STUDIO. ALL VIRTUAL ASSETS ENCRYPTED.</span>
      </footer>
    </div>
  );
}
