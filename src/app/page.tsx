"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
} from "lucide-react";

// -----------------------------------------------------------------------------
// Aditya's Portfolio — "Anime-ish" single-file React app (Tailwind + Framer)
// - Removed GitHub auto-fetch + placeholders; only manualProjects are shown
// - Resume link updated to Google Drive
// - Extra flair: neon gradients, sakura petals, card tilt, microinteractions
// -----------------------------------------------------------------------------

const RESUME_URL =
  "https://drive.google.com/file/d/10KZYu2vPiT1-8_fh-L6pNlPbl9mzJnhF/view?usp=sharing";

// --------------
// BRAND + META
// --------------
const me = {
  name: "Aditya Chauhan",
  title: "ML + Full‑Stack Explorer",
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
    notes: [],
  },
];

const experience = [
  {
    role: "ML Trainee",
    org: "Amazon (ML Summer School)",
    when: "Aug 2025 – Present",
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
    bullets: [
      "Built a production AI chatbot in RASA used by ~200 site engineers across India",
      "85% reduction in query resolution time via automated responses",
      "Stack: RASA, Python, NLU pipelines, deployment",
    ],
  },
];

const skills = {
  expertise: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Competitive Programming",
    "Android Development",
    "API Design",
  ],
  languages: [
    "C++ (STL)",
    "Java",
    "Python",
    "JavaScript",
    "Kotlin",
    "C",
    "HTML/CSS",
    "SQL",
    "Angular",
    "jQuery",
    "Objective‑C",
    "Scala",
  ],
  tools: [
    "Android Studio",
    "Linux",
    "Keras",
    "PyTorch",
    "TensorFlow",
    "Colab",
    "Kaggle",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "MySQL",
    "RASA",
    "LaTeX",
    "NoSQL",
    "Apache Pig",
    "Git/GitHub",
    "Hadoop",
    "ASP.NET/C#",
    "Node.js",
    "REST APIs",
  ],
};

const achievements = [
  {
    icon: <Trophy className="w-4 h-4" />,
    text: (
      <>
        Expert on Codeforces — <a className="underline" href={me.codeforces} target="_blank" rel="noreferrer">1660 rating</a>
      </>
    ),
  },
  { icon: <Trophy className="w-4 h-4" />, text: <>JEE Main 2022 — 98.61 percentile</> },
  {
    icon: <Trophy className="w-4 h-4" />,
    text: (
      <>
        Best New‑Comer — Hack at Home 2021 (<a className="underline" target="_blank" rel="noreferrer" href="https://devpost.com/software/sprouty-the-discord-bot">project</a>)
      </>
    ),
  },
  { icon: <Trophy className="w-4 h-4" />, text: <>Rank 437/21k — Codeforces Round 859</> },
  { icon: <Trophy className="w-4 h-4" />, text: <>Solved 1000+ problems across OJs</> },
];

// ----------------- MANUAL PROJECTS ONLY (as requested) -----------------
const manualProjects = [
  {
    name: "Vault — Video Conferencing App (Android)",
    desc:
      "User‑friendly Android video conferencing with Google Sign‑In, meeting create/join, history via Firebase.",
    stack: ["Kotlin", "Jetpack Compose", "Jitsi Meet SDK", "Firebase"],
    link: "https://github.com/adityachauhan0/Vault-Video-Conferencing-App",
  },
  {
    name: "PII Detection (DeBERTa‑v3 Large)",
    desc:
      "Detects & anonymizes PII in educational text; F5 0.964 on ~22k essays.",
    stack: ["Python", "TensorFlow", "PyTorch", "DeBERTa‑v3"],
    link: "https://www.kaggle.com/code/stuffysprout/notebook8c367fca71/notebook",
  },
  {
    name: "SmileShop — Online Shopping Web App",
    desc: "Simple e‑commerce site; MySQL backend with indexes & triggers.",
    stack: ["HTML/CSS", "Bootstrap", "JavaScript", "MySQL"],
    link: "https://github.com/adityachauhan0/SmileShop---Online--Shopping-Web-App-main",
  },
  {
    name: "Tank Stars — Java Game",
    desc:
      "LibGDX clone featuring OOP patterns, Box2D/Scene2D, and telemetry via Hadoop.",
    stack: ["Java", "LibGDX", "JUnit", "Hadoop"],
    link: "https://github.com/adityachauhan0/Tank-Stars-Java",
  },
];

// -----------------
// Fun bits & helpers
// -----------------
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-2xl border px-3 py-1 text-xs font-medium bg-white/60 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10">
      {children}
    </span>
  );
}

function Section({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-xl bg-black/5 dark:bg-white/10">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
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
    <button onClick={toggle} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow-sm bg-white/60 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10">
      {mode === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span>{mode === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}

function GradientBG() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* anime-ish neon blob */}
      <div className="absolute -top-1/3 left-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-sky-400/25 to-emerald-400/25 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/20 to-cyan-400/20 blur-3xl" />
    </div>
  );
}

function Petals() {
  // lightweight sakura petals loop using pure CSS
  const petals = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {petals.map((_, i) => (
        <span
          key={i}
          className="absolute text-xl select-none"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `-${10 + (i % 20)}%`,
            animation: `fall ${8 + (i % 6)}s linear ${(i % 5) * 0.8}s infinite`,
            filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.15))",
          }}
        >
          🌸
        </span>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: .8; }
          50% { transform: translateY(60vh) translateX(10px) rotate(120deg); opacity: .9; }
          100% { transform: translateY(100vh) translateX(-10px) rotate(360deg); opacity: .2; }
        }
      `}</style>
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  // simple tilt without external libs
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [0, 1], [8, -8]);
  const rotateY = useTransform(mx, [0, 1], [-8, 8]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mx.set(x);
        my.set(y);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 900 }}
      className="[transform-style:preserve-3d]"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ scale: hovered ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="rounded-2xl border p-4 bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface Project { name: string; desc?: string; stack?: string[]; link: string }
function ProjectCard({ name, desc, stack, link }: Project) {
  return (
    <TiltCard>
      <a href={link} target="_blank" rel="noreferrer" className="group block">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight flex-1">
            {name}
          </h3>
          <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
        </div>
        {desc && <p className="mt-2 text-sm opacity-80">{desc}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {stack?.map((t: string) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-3 text-[11px] opacity-70 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> built with care & caffeine
        </div>
      </a>
    </TiltCard>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold flex items-center gap-2">
          <Code2 className="w-5 h-5" />
          <span>aditya.dev</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">(⌒‿⌒)ﾉ</span>
        </a>
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#education" className="hover:opacity-80">Education</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#achievements" className="hover:opacity-80">Wins</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow-sm bg-white/60 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-10 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-6 sm:p-8 bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl bg-fuchsia-500/30" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full blur-2xl bg-sky-400/30" />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span className="absolute -bottom-2 -right-2 text-xs px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black">hi 👋</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              {me.name}
            </h1>
            <p className="mt-2 opacity-80">
              {me.title} · {me.location}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={`mailto:${me.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10"><Mail className="w-4 h-4"/> {me.email}</a>
              <a href={me.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10"><Github className="w-4 h-4"/> GitHub</a>
              <a href={me.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a href={me.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10"><LinkIcon className="w-4 h-4"/> LeetCode</a>
              <a href={me.codeforces} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10"><LinkIcon className="w-4 h-4"/> Codeforces</a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.expertise.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>

        <p className="mt-6 text-sm opacity-80">
          Built with ❤️, TypeScript, and a dash of anime vibes. I ship ML that matters and UIs that feel good.
        </p>

        {/* Fun button/easter egg */}
        <button
          onClick={() => alert("Ganbatte! Keep shipping. ✨")}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:shadow-sm bg-white/60 dark:bg-white/5 backdrop-blur border-black/10 dark:border-white/10"
        >
          <Gamepad2 className="w-4 h-4" /> bonus vibe
        </button>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div
      id="top"
      className="min-h-screen text-black dark:text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-white dark:from-[#0b0b0f] dark:via-[#0b0b0f] dark:to-[#0b0b0f]"
    >
      <GradientBG />
      <Petals />
      <Header />
      <Hero />

      <main className="max-w-5xl mx-auto px-4 pb-24 space-y-16">
        {/* Projects */}
        <Section id="projects" title="Projects" icon={<Github className="w-5 h-5" />}> 
          <div className="grid sm:grid-cols-2 gap-4">
            {manualProjects.map((p) => (
              <ProjectCard key={p.link} {...p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Briefcase className="w-5 h-5" />}> 
          <ol className="relative border-l border-black/10 dark:border-white/10 ml-2">
            {experience.map((e, i) => (
              <li key={i} className="ml-6 mb-6">
                <span className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="font-semibold">{e.role} · {e.org}</div>
                  <div className="text-xs opacity-70">{e.when}</div>
                </div>
                <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5" />}> 
          <div className="space-y-4">
            {education.map((ed, i) => (
              <div key={i} className="rounded-2xl border p-4 bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <div className="font-semibold">{ed.school}</div>
                    <div className="text-sm opacity-80">{ed.degree}</div>
                  </div>
                  <div className="text-xs opacity-70">{ed.meta}</div>
                </div>
                {ed.notes?.length ? (
                  <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
                    {ed.notes.map((n, j) => <li key={j}>{n}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={<Code2 className="w-5 h-5" />}> 
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-4 bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10">
              <div className="font-medium mb-2">Expertise</div>
              <div className="flex flex-wrap gap-2">
                {skills.expertise.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </div>
            <div className="rounded-2xl border p-4 bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10">
              <div className="font-medium mb-2">Languages</div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </div>
            <div className="rounded-2xl border p-4 bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10">
              <div className="font-medium mb-2">Tools & Tech</div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </div>
          </div>
        </Section>

        {/* Achievements */}
        <Section id="achievements" title="Highlights" icon={<Trophy className="w-5 h-5" />}> 
          <ul className="space-y-2">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="mt-0.5">{a.icon}</div>
                <div className="text-sm">{a.text}</div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in touch" icon={<Mail className="w-5 h-5" />}> 
          <div className="rounded-2xl border p-4 bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10">
            <div className="text-sm">
              Email me at <a className="underline" href={`mailto:${me.email}`}>{me.email}</a> — I’m open to internships, collabs, and cool problems.
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-10 text-sm opacity-70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {me.name} · built with <span className="inline-block animate-pulse">✨</span></div>
          <div className="flex items-center gap-4">
            <a href={me.github} target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-70 flex items-center gap-1"><Github className="w-4 h-4"/>GitHub</a>
            <a href={me.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-70 flex items-center gap-1"><Linkedin className="w-4 h-4"/>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
