"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Link as LinkIcon,
  Code2,
  ExternalLink,
  Trophy,
  Briefcase,
  Sun,
  Moon,
  GraduationCap,
  Download,
  Gamepad2,
  Sparkles,
  Zap,
  Cpu,
  Database,
  Globe,
  Rocket,
  Star,
  Eye,
  Brain,
  Shield,
  Terminal,
  Layers,
  Activity,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Advanced Aditya Portfolio — Next-gen design with cutting-edge visuals
// Features: 3D effects, particle systems, advanced animations, glassmorphism
// -----------------------------------------------------------------------------

const RESUME_URL =
  "https://drive.google.com/file/d/10KZYu2vPiT1-8_fh-L6pNlPbl9mzJnhF/view?usp=sharing";

// Enhanced data with icons and colors
const me = {
  name: "Aditya Chauhan",
  title: "ML + Full‑Stack Explorer",
  subtitle: "Building the future, one algorithm at a time",
  location: "Kharghar, Navi Mumbai, IN",
  email: "aditya22605@iiitd.ac.in",
  github: "https://github.com/adityachauhan0",
  linkedin: "https://www.linkedin.com/in/adityamc/",
  codeforces: "https://codeforces.com/profile/squirt1e",
  leetcode: "https://leetcode.com/u/bountyhunter0/",
};

const education = [
  {
    school: "Indraprastha Institute of Information Technology, Delhi",
    degree: "B.Tech (Electronics and VLSI Engineering)",
    meta: "CGPA 7.29 · 2022—present",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-blue-500 to-purple-600",
    notes: [
      "10 SGPA in Summer 2024; A+ in Competitive Programming",
      "10 CGPA in Competitive Programming I, Electronics System Design",
      "Key courses: DSA, ML, OS, OOP, DBMS, IR, Algorithms, Number Theory, Linear Algebra, Probability",
    ],
  },
  {
    school: "Delhi Public School, Nerul, Navi Mumbai",
    degree: "CBSE Class XII (PCM+CS)",
    meta: "91.6% · 2020",
    icon: <Star className="w-6 h-6" />,
    color: "from-green-500 to-teal-600",
    notes: [],
  },
];

const experience = [
  {
    role: "ML Trainee",
    org: "Amazon (ML Summer School)",
    when: "Aug 2025 – Present",
    icon: <Brain className="w-6 h-6" />,
    color: "from-orange-500 to-red-600",
    bullets: [
      "Collaborated with Amazon ML scientists; exposure to large‑scale ML workflows",
      "Designed & deployed a Search Engine model recommending new products",
      "Stack: Python, NumPy, PyTorch, TensorFlow, Docker, Flask",
    ],
  },
  {
    role: "Independent Project Intern",
    org: "Applied Solar Technologies @ IIITD (Guide: Dr. Debarka Sengupta)",
    when: "Apr 2023 – Jul 2023",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-600",
    bullets: [
      "Built a production AI chatbot in RASA used by ~200 site engineers across India",
      "85% reduction in query resolution time via automated responses",
      "Stack: RASA, Python, NLU pipelines, deployment",
    ],
  },
];

const skills = {
  expertise: [
    { name: "Data Structures & Algorithms", icon: <Cpu className="w-4 h-4" />, level: 95 },
    { name: "Machine Learning", icon: <Brain className="w-4 h-4" />, level: 90 },
    { name: "Competitive Programming", icon: <Trophy className="w-4 h-4" />, level: 88 },
    { name: "Android Development", icon: <Globe className="w-4 h-4" />, level: 85 },
    { name: "API Design", icon: <Database className="w-4 h-4" />, level: 82 },
  ],
  languages: [
    "C++ (STL)", "Java", "Python", "JavaScript", "Kotlin", "C", "HTML/CSS", "SQL",
    "Angular", "jQuery", "Objective‑C", "Scala"
  ],
  tools: [
    "Android Studio", "Linux", "Keras", "PyTorch", "TensorFlow", "Colab", "Kaggle",
    "Pandas", "NumPy", "Matplotlib", "MySQL", "RASA", "LaTeX", "NoSQL", "Apache Pig",
    "Git/GitHub", "Hadoop", "ASP.NET/C#", "Node.js", "REST APIs"
  ],
};

const achievements = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    color: "from-yellow-400 to-orange-500",
    text: (
      <>
        Expert on Codeforces — <a className="underline hover:text-yellow-400 transition-colors" href={me.codeforces} target="_blank" rel="noreferrer">1660 rating</a>
      </>
    ),
  },
  { 
    icon: <Star className="w-5 h-5 text-blue-500" />, 
    color: "from-blue-400 to-purple-500",
    text: <>JEE Main 2022 — 98.61 percentile</> 
  },
  {
    icon: <Rocket className="w-5 h-5 text-green-500" />,
    color: "from-green-400 to-teal-500",
    text: (
      <>
        Best New‑Comer — Hack at Home 2021 (<a className="underline hover:text-green-400 transition-colors" target="_blank" rel="noreferrer" href="https://devpost.com/software/sprouty-the-discord-bot">project</a>)
      </>
    ),
  },
  { 
    icon: <Zap className="w-5 h-5 text-purple-500" />, 
    color: "from-purple-400 to-pink-500",
    text: <>Rank 437/21k — Codeforces Round 859</> 
  },
  { 
    icon: <Activity className="w-5 h-5 text-red-500" />, 
    color: "from-red-400 to-pink-500",
    text: <>Solved 1000+ problems across OJs</> 
  },
];

const manualProjects = [
  {
    name: "Vault — Video Conferencing App (Android)",
    desc: "User‑friendly Android video conferencing with Google Sign‑In, meeting create/join, history via Firebase.",
    stack: ["Kotlin", "Jetpack Compose", "Jitsi Meet SDK", "Firebase"],
    link: "https://github.com/adityachauhan0/Vault-Video-Conferencing-App",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    category: "Mobile"
  },
  {
    name: "PII Detection (DeBERTa‑v3 Large)",
    desc: "Detects & anonymizes PII in educational text; F5 0.964 on ~22k essays.",
    stack: ["Python", "TensorFlow", "PyTorch", "DeBERTa‑v3"],
    link: "https://www.kaggle.com/code/stuffysprout/notebook8c367fca71/notebook",
    icon: <Shield className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    category: "AI/ML"
  },
  {
    name: "SmileShop — Online Shopping Web App",
    desc: "Simple e‑commerce site; MySQL backend with indexes & triggers.",
    stack: ["HTML/CSS", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://github.com/adityachauhan0/SmileShop---Online--Shopping-Web-App-main",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    category: "Web"
  },
  {
    name: "Tank Stars — Java Game",
    desc: "LibGDX clone featuring OOP patterns, Box2D/Scene2D, and telemetry via Hadoop.",
    stack: ["Java", "LibGDX", "JUnit", "Hadoop"],
    link: "https://github.com/adityachauhan0/Tank-Stars-Java",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    category: "Game"
  },
];

// Advanced Components
function ParticleSystem() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 8,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MatrixRain() {
  const [drops, setDrops] = useState<Array<{id: number, x: number, delay: number}>>([]);
  
  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i * 5) % 100,
      delay: Math.random() * 5,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-green-400 to-transparent"
          style={{ left: `${drop.x}%` }}
          animate={{
            y: ["-100vh", "100vh"],
          }}
          transition={{
            duration: 10,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function AdvancedChip({ children, gradient }: { children: React.ReactNode; gradient?: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium glass-morphism border-0 ${
        gradient ? `bg-gradient-to-r ${gradient}` : ''
      } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {children}
    </motion.span>
  );
}

function NeoCard({ children, className = "", gradient }: { children: React.ReactNode; className?: string; gradient?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`neo-card ${className} relative overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill }: { skill: { name: string; icon: React.ReactNode; level: number } }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary-500">{skill.icon}</div>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs opacity-70">{skill.level}%</span>
      </div>
      <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Section({ id, title, icon, children, gradient }: { 
  id: string; 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
  gradient?: string;
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <motion.div 
          className={`p-3 rounded-2xl glass-morphism ${gradient ? `bg-gradient-to-br ${gradient}` : 'bg-primary-500'} text-white shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-3xl font-bold gradient-text">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
      </div>
      <div>{children}</div>
    </motion.section>
  );
}

function useTheme() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setMode(stored);
    document.documentElement.classList.toggle("dark", stored ? stored === "dark" : true);
  }, []);
  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  return { mode, toggle };
}

function ThemeToggle() {
  const { mode, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm glass-morphism hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: mode === "dark" ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {mode === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </motion.div>
      <span>{mode === "dark" ? "Light" : "Dark"} mode</span>
    </motion.button>
  );
}

function AdvancedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-1/2 left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-[-30%] right-[-20%] h-[60vmax] w-[60vmax] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(16,185,129,0.1) 50%, transparent 100%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Floating geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border border-primary-500/30 rotate-45"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [45, 225, 45],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ProjectCard({ name, desc, stack, link, icon, color, category }: {
  name: string;
  desc?: string;
  stack?: string[];
  link: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <NeoCard gradient={color} className="p-6 h-full">
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer" 
        className="group block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`p-2 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
            <div>
              <div className="text-xs opacity-60 mb-1">{category}</div>
              <h3 className="text-lg font-bold leading-tight group-hover:gradient-text transition-all duration-300">
                {name}
              </h3>
            </div>
          </div>
          <motion.div
            animate={{ 
              x: isHovered ? 5 : 0,
              y: isHovered ? -5 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-primary-500 transition-all duration-300" />
          </motion.div>
        </div>
        
        {desc && (
          <p className="text-sm opacity-80 mb-4 leading-relaxed">{desc}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack?.map((tech) => (
            <AdvancedChip key={tech} gradient={color}>
              {tech}
            </AdvancedChip>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs opacity-70">
          <Sparkles className="w-3 h-3" />
          <span>Built with passion & precision</span>
        </div>
      </a>
    </NeoCard>
  );
}

function Header() {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        backdropFilter: useTransform(headerBlur, (blur) => `blur(${blur}px)`),
        background: useTransform(headerOpacity, (opacity) => 
          `rgba(255, 255, 255, ${opacity * 0.1})`
        ),
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#top"
            className="flex items-center gap-3 font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-5 h-5" />
            </motion.div>
            <span className="gradient-text">aditya.dev</span>
            <motion.span
              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ v2.0
            </motion.span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {["projects", "experience", "education", "skills", "achievements"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-primary-500 transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm glass-morphism bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Avatar with advanced effects */}
          <motion.div
            className="relative mx-auto w-32 h-32 mb-8"
            animate={{
              rotateY: mousePosition.x / 50,
              rotateX: -mousePosition.y / 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                AC
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-sm shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Name with holographic effect */}
          <motion.h1
            className="text-6xl md:text-8xl font-black leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="holographic">{me.name}</span>
          </motion.h1>

          {/* Animated subtitle */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl md:text-3xl font-semibold gradient-text">
              {me.title}
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              {me.subtitle}
            </p>
            <p className="text-sm opacity-60 flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              {me.location}
            </p>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { href: `mailto:${me.email}`, icon: <Mail className="w-5 h-5" />, label: "Email", color: "from-red-500 to-pink-500" },
              { href: me.github, icon: <Github className="w-5 h-5" />, label: "GitHub", color: "from-gray-700 to-gray-900" },
              { href: me.linkedin, icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "from-blue-600 to-blue-800" },
              { href: me.leetcode, icon: <Terminal className="w-5 h-5" />, label: "LeetCode", color: "from-yellow-500 to-orange-500" },
              { href: me.codeforces, icon: <Zap className="w-5 h-5" />, label: "Codeforces", color: "from-purple-500 to-indigo-500" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-sm font-medium glass-morphism bg-gradient-to-r ${link.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Expertise chips */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {skills.expertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <AdvancedChip gradient="from-primary-500 to-secondary-500">
                  {skill.icon}
                  {skill.name}
                </AdvancedChip>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold glass-morphism bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-6 h-6" />
              <span>Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div
      id="top"
      className="min-h-screen text-black dark:text-white bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 relative"
    >
      <AdvancedBackground />
      <ParticleSystem />
      <MatrixRain />
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 pb-32 space-y-32 relative z-10">
        {/* Projects */}
        <Section 
          id="projects" 
          title="Featured Projects" 
          icon={<Layers className="w-6 h-6" />}
          gradient="from-blue-500 to-purple-600"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {manualProjects.map((project, index) => (
              <motion.div
                key={project.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section 
          id="experience" 
          title="Professional Journey" 
          icon={<Briefcase className="w-6 h-6" />}
          gradient="from-green-500 to-teal-600"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} text-white flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <NeoCard className="flex-1 p-6" gradient={exp.color}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-lg opacity-80">{exp.org}</p>
                      </div>
                      <div className="text-sm opacity-60 font-medium">{exp.when}</div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </NeoCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section 
          id="education" 
          title="Academic Background" 
          icon={<GraduationCap className="w-6 h-6" />}
          gradient="from-purple-500 to-pink-600"
        >
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <NeoCard className="p-6" gradient={edu.color}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} text-white flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {edu.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold">{edu.school}</h3>
                          <p className="opacity-80">{edu.degree}</p>
                        </div>
                        <div className="text-sm opacity-60 font-medium">{edu.meta}</div>
                      </div>
                      {edu.notes.length > 0 && (
                        <ul className="space-y-2">
                          {edu.notes.map((note, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-2 flex-shrink-0" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section 
          id="skills" 
          title="Technical Arsenal" 
          icon={<Cpu className="w-6 h-6" />}
          gradient="from-orange-500 to-red-600"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Expertise with progress bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NeoCard className="p-6 h-full" gradient="from-blue-500 to-purple-600">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Core Expertise
                </h3>
                <div className="space-y-6">
                  {skills.expertise.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </NeoCard>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <NeoCard className="p-6 h-full" gradient="from-green-500 to-teal-600">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <motion.div
                      key={lang}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <AdvancedChip gradient="from-green-400 to-blue-500">
                        {lang}
                      </AdvancedChip>
                    </motion.div>
                  ))}
                </div>
              </NeoCard>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <NeoCard className="p-6 h-full" gradient="from-purple-500 to-pink-600">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <AdvancedChip gradient="from-purple-400 to-pink-500">
                        {tool}
                      </AdvancedChip>
                    </motion.div>
                  ))}
                </div>
              </NeoCard>
            </motion.div>
          </div>
        </Section>

        {/* Achievements */}
        <Section 
          id="achievements" 
          title="Achievements & Recognition" 
          icon={<Trophy className="w-6 h-6" />}
          gradient="from-yellow-500 to-orange-600"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NeoCard className="p-6 h-full" gradient={achievement.color}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} text-white flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="text-sm leading-relaxed">
                      {achievement.text}
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section 
          id="contact" 
          title="Let's Connect" 
          icon={<Mail className="w-6 h-6" />}
          gradient="from-indigo-500 to-purple-600"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NeoCard className="p-8 text-center" gradient="from-indigo-500 to-purple-600">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects and connect with fellow developers. 
                Let's build something amazing together!
              </p>
              <motion.a
                href={`mailto:${me.email}`}
                className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold glass-morphism bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>
            </NeoCard>
          </motion.div>
        </Section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 glass-morphism">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code2 className="w-5 h-5" />
              </motion.div>
              <div>
                <div className="font-semibold">© {new Date().getFullYear()} {me.name}</div>
                <div className="text-sm opacity-60">Built with ❤️ and cutting-edge tech</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { href: me.github, icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { href: me.linkedin, icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { href: `mailto:${me.email}`, icon: <Mail className="w-5 h-5" />, label: "Email" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass-morphism hover:bg-primary-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <motion.p
              className="text-sm opacity-60 flex items-center justify-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Crafted with passion, powered by innovation
              <Sparkles className="w-4 h-4" />
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}