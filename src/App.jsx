import React, { useMemo, useState } from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Database,
  BrainCircuit,
  School,
  User,
  Sparkles,
  Award,
  Microscope,
  ChevronRight,
  ExternalLink,
  Download,
} from "lucide-react";

// ✅ Put your photo here: src/assets/shouvon.jpg (or change filename below)
import profilePic from "./assets/shouvon.jpg";

/**
 * Comprehensive single-file App.jsx
 * - Multi-page routing (HashRouter for GitHub Pages safety)
 * - Less pink, academic palette (indigo/blue/slate/emerald)
 * - Smaller headers
 * - Reusable components
 * - Your photo in SS-style frame
 */

const profile = {
  name: "Shouvon Sarker",
  title: "PhD Candidate in Electrical Engineering",
  org: "Prairie View A&M University (PVAMU)",
  tagline: "Advancing transparent and trustworthy AI.",
  email: "shouvonsarker@gmail.com",
  linkedin: "https://www.linkedin.com/in/shouvon-sarker",
  github: "https://github.com/shovon095",
  photo: profilePic,
};

const navItems = [
  { name: "Home", to: "/", icon: <User size={18} /> },
  { name: "Research", to: "/research", icon: <BrainCircuit size={18} /> },
  { name: "Publications", to: "/publications", icon: <FileText size={18} /> },
  { name: "Projects", to: "/projects", icon: <Database size={18} /> },
  { name: "Education", to: "/education", icon: <School size={18} /> },
];

// --- Data (edit freely) ---
const researchAreas = [
  {
    title: "Explainable AI (XAI)",
    desc: "Attribution, faithfulness tests, and human-aligned interpretability for high-stakes ML.",
    accent: "from-blue-600 to-cyan-600",
  },
  {
    title: "Large Language Models",
    desc: "Structured generation, fine-tuning, prompt engineering, and reliability analysis.",
    accent: "from-indigo-600 to-blue-600",
  },
  {
    title: "Text-to-SQL Systems",
    desc: "Bridging natural language and complex scientific databases with verifiable SQL.",
    accent: "from-emerald-600 to-teal-600",
  },
  {
    title: "Clinical NLP",
    desc: "NER and event extraction for medical narratives with distillation and calibration.",
    accent: "from-slate-600 to-slate-800",
  },
  {
    title: "Probabilistic Error Modeling",
    desc: "Bayesian error localization and policy optimization for correctness.",
    accent: "from-amber-500 to-orange-500",
  },
];

const skills = [
  { title: "Programming", items: ["Python", "C/C++", "SQL", "MATLAB"], accent: "from-blue-600 to-cyan-600" },
  { title: "Machine Learning", items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn"], accent: "from-indigo-600 to-blue-600" },
  { title: "LLM Tech", items: ["PEFT", "LoRA", "LangChain", "OpenAI API"], accent: "from-emerald-600 to-teal-600" },
  { title: "Infrastructure", items: ["Linux", "Docker", "AWS", "MySQL", "PostgreSQL"], accent: "from-slate-700 to-slate-900" },
];

const publications = {
  underReview: [
    {
      id: "1",
      title:
        "From Tokens to Transitions: A Structured Jensen–Shannon Knowledge Distillation Method for Named Entity Recognition",
      venue: "Submitted to IEEE TKDE, 2025",
      authors: "Sarker, S., Qian, L., and Dong, X.",
      accent: "from-amber-500 to-orange-500",
    },
    {
      id: "2",
      title:
        "Learning SQL Correctness: Bayesian Error Localization, Counterfactual Repair, and Policy Optimization",
      venue: "Manuscript in preparation, 2025",
      authors: "Sarker, S., Qian, L., and Dong, X.",
      accent: "from-amber-500 to-orange-500",
    },
  ],
  conferences: [
    {
      id: "3",
      title:
        "Integrating Non-Parametric Attention to Enhance LLM-Based Text-to-SQL Without External Knowledge",
      venue: "IEEE ICDM, 2025",
      authors: "Sarker, S., Qian, L., and Dong, X.",
      featured: true,
    },
    {
      id: "4",
      title: "Enhancing LLM Fine-Tuning for Text-to-SQL by SQL Quality Measurement",
      venue: "IEEE ICDM PhD Forum, 2025",
      authors: "Sarker, S., Qian, L., and Dong, X.",
      accent: "from-indigo-600 to-blue-600",
    },
    {
      id: "5",
      title: "Text Generator and Text Discriminator for the NIST GenAI Text-to-Text Challenge",
      venue: "AIRC, 2025",
      authors: "Sarker, S., Dong, X., and Qian, L.",
      accent: "from-emerald-600 to-teal-600",
    },
    {
      id: "6",
      title: "Medical Data Augmentation via ChatGPT: Medication Identification & Event Classification",
      venue: "IEEE BHI, 2023",
      authors: "Sarker, S., Li, X., and Dong, X.",
      accent: "from-slate-600 to-slate-800",
    },
  ],
};

const projects = [
  {
    title: "NASA DEAP-SQL",
    subtitle: "Self-Discovery Text-to-SQL Pipeline",
    desc:
      "Automated SQL quality refinement for NASA Earth Science databases, improving execution accuracy by ~3%.",
    tags: ["Vite", "Python", "SQL", "LLMs"],
    link: "https://github.com/shovon095/text2sql-quality-refiner",
    accent: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    title: "Attention-Enhanced Text-to-SQL",
    subtitle: "Non-Parametric Validation",
    desc:
      "Introduced non-parametric attention to improve LLM Text-to-SQL without external knowledge, gaining 10% accuracy.",
    tags: ["Attention", "Validation", "PyTorch"],
    link: "https://github.com/shovon095/nl2sql-attention-validator",
    accent: "from-indigo-600 via-blue-600 to-sky-600",
  },
];

const education = [
  { degree: "PhD in Electrical Engineering", period: "2023 – Present", org: "Prairie View A&M University, USA", gpa: "4.0 / 4.0", active: true },
  { degree: "MS in Electrical Engineering", period: "2021 – 2022", org: "Prairie View A&M University, USA", gpa: "3.9 / 4.0", active: false },
];

export default function App() {
  // Optional: lightweight theme toggle without extra deps
  const [compact, setCompact] = useState(false);

  const containerPadding = compact ? "py-8" : "py-10";
  const sectionGap = compact ? "space-y-8" : "space-y-10";

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 text-slate-900">
        <TopNav compact={compact} setCompact={setCompact} />

        <main className={`max-w-6xl mx-auto px-6 ${containerPadding}`}>
          <div className={sectionGap}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

/* =========================
   NAV + FOOTER
   ========================= */

function TopNav({ compact, setCompact }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-700 to-blue-700 text-white font-black flex items-center justify-center shadow">
            S
          </div>
          <div className="leading-tight">
            <div className="font-black text-lg text-slate-900">Shouvon</div>
            <div className="text-xs text-slate-500 hidden sm:block">{profile.title}</div>
          </div>
        </NavLink>

        {/* Always visible to avoid confusion */}
        <div className="flex flex-wrap gap-2 justify-end">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? "bg-indigo-700 text-white shadow"
                    : "text-slate-700 hover:bg-indigo-50"
                }`
              }
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setCompact((v) => !v)}
          className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-bold"
          title="Toggle compact spacing"
        >
          <Sparkles size={16} />
          {compact ? "Comfort" : "Compact"}
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-14 py-10 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-black text-base">{profile.name}</p>
          <p className="text-sm text-slate-300">{profile.tagline}</p>
        </div>

        <div className="flex gap-3">
          <IconButton href={`mailto:${profile.email}`} label="Email" icon={<Mail size={18} />} />
          <IconButton href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
          <IconButton href={profile.github} label="GitHub" icon={<Github size={18} />} />
        </div>

        <p className="text-xs text-slate-400">© 2026 • Built with React, Vite & Tailwind</p>
      </div>
    </footer>
  );
}

/* =========================
   PAGES
   ========================= */

function Home() {
  return (
    <div className="space-y-10">
      <section className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 flex flex-col lg:flex-row gap-10 items-center">
        <SSFrame photo={profile.photo} alt={profile.name} />

        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full bg-indigo-700 text-white">
            <School size={14} /> PhD Candidate @ PVAMU
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg md:text-xl font-semibold text-slate-700 max-w-2xl">
            Developing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              transparent, trustworthy, and reliable
            </span>{" "}
            AI systems for mission-critical applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <PrimaryButton href={`mailto:${profile.email}`} icon={<Mail size={18} />}>
              Email
            </PrimaryButton>
            <PrimaryButton href={profile.linkedin} icon={<Linkedin size={18} />} tone="blue">
              LinkedIn
            </PrimaryButton>
            <PrimaryButton href={profile.github} icon={<Github size={18} />} tone="slate">
              GitHub
            </PrimaryButton>

            {/* Optional: add your CV later */}
            <SecondaryButton
              href="#"
              icon={<Download size={18} />}
              title="Replace # with your CV link"
            >
              CV (PDF)
            </SecondaryButton>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <MiniStat icon={<Microscope size={18} />} label="Focus" value="XAI + LLM Reliability" />
            <MiniStat icon={<Award size={18} />} label="Standing" value="4.0/4.0 GPA" />
            <MiniStat icon={<Sparkles size={18} />} label="NIST GenAI" value="Top 10%" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard
          icon={<Microscope size={22} />}
          title="Mission"
          desc="Transparent AI for mission-critical Earth Science and Clinical NLP."
          accent="from-blue-600 to-cyan-600"
        />
        <InfoCard
          icon={<Award size={22} />}
          title="Academic"
          desc="4.0/4.0 GPA while researching Large Language Models."
          accent="from-emerald-600 to-teal-600"
        />
        <InfoCard
          icon={<Sparkles size={22} />}
          title="Track Record"
          desc="Top 10% ranking in the NIST GenAI 2024 challenge."
          accent="from-amber-500 to-orange-500"
        />
      </section>

      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-sky-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Award size={220} />
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
            <Sparkles size={22} fill="white" /> Latest News
          </h2>

          <div className="mt-6 space-y-4">
            <NewsCard
              date="Sept 2025"
              title="ICDM 2025 Acceptance"
              desc="Paper accepted at IEEE International Conference on Data Mining."
              tagColor="bg-amber-300"
            />
            <NewsCard
              date="Aug 2024"
              title="NIST GenAI Challenge Finalist"
              desc="Generator–detector framework ranked in Top 10% for trustworthiness."
              tagColor="bg-cyan-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Research() {
  return (
    <div className="space-y-10">
      <PageHeader
        icon={<BrainCircuit size={28} />}
        title="Research & Expertise"
        subtitle="Core areas and technical strengths"
        accent="from-indigo-700 to-blue-700"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CardPanel title="Core Areas" accent="border-indigo-600">
          <div className="space-y-4">
            {researchAreas.map((r) => (
              <ResearchRow key={r.title} {...r} />
            ))}
          </div>
        </CardPanel>

        <CardPanel title="Technical Arsenal" accent="border-blue-600">
          <div className="grid grid-cols-1 gap-5">
            {skills.map((s) => (
              <SkillCategory key={s.title} {...s} />
            ))}
          </div>
        </CardPanel>
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="space-y-10">
      <PageHeader
        icon={<FileText size={28} />}
        title="Publications"
        subtitle="Manuscripts and conference proceedings"
        accent="from-emerald-700 to-teal-700"
      />

      <div className="space-y-10">
        <section>
          <SectionTitle title="Manuscripts Under Review" badge="📝" />
          <div className="mt-4 space-y-4">
            {publications.underReview.map((p) => (
              <PubCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="Conference Proceedings" badge="🏆" />
          <div className="mt-4 grid grid-cols-1 gap-4">
            {publications.conferences.map((p) => (
              <PubCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="space-y-10">
      <PageHeader
        icon={<Database size={28} />}
        title="Projects"
        subtitle="Featured work and open-source activity"
        accent="from-sky-700 to-cyan-700"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Github size={20} /> Open Source Activity
          </h3>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-sky-700"
          >
            Visit GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=shovon095&show_icons=true&include_all_commits=true&theme=default&hide_border=true"
            className="w-full max-w-2xl rounded-2xl border border-slate-200"
            alt="GitHub Stats"
          />
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="space-y-10">
      <PageHeader
        icon={<School size={28} />}
        title="Education"
        subtitle="Academic background and training"
        accent="from-amber-700 to-orange-600"
      />

      <div className="max-w-3xl space-y-6">
        {education.map((e) => (
          <EducationCard key={e.degree} {...e} />
        ))}
      </div>
    </div>
  );
}

/* =========================
   REUSABLE UI
   ========================= */

function PageHeader({ icon, title, subtitle, accent }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-4 rounded-3xl text-white shadow-xl bg-gradient-to-br ${accent}`}>
        {icon}
      </div>
      <div>
        <h2 className="text-4xl md:text-[2.5rem] font-black text-slate-900">{title}</h2>
        <p className="mt-1 text-slate-600 font-medium">{subtitle}</p>
      </div>
    </div>
  );
}

function SectionTitle({ badge, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{badge}</span>
      <h3 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-widest">
        {title}
      </h3>
    </div>
  );
}

function CardPanel({ title, accent, children }) {
  return (
    <div className={`bg-white p-8 rounded-3xl shadow-xl border border-slate-200`}>
      <div className={`border-l-4 ${accent} pl-4`}>
        <p className="text-sm font-black text-slate-500 uppercase tracking-widest">{title}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SSFrame({ photo, alt }) {
  return (
    <div className="relative">
      <div className="w-60 h-60 md:w-64 md:h-64 rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 p-1">
        <img src={photo} alt={alt} className="w-full h-full object-cover object-top rounded-2xl" />
      </div>
      <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-3xl shadow-xl border-4 border-white">
        <Sparkles className="text-white" size={22} fill="white" />
      </div>
    </div>
  );
}

function PrimaryButton({ href, icon, tone = "indigo", children }) {
  const cls = useMemo(() => {
    if (tone === "blue") return "bg-blue-700 hover:bg-blue-800";
    if (tone === "slate") return "bg-slate-800 hover:bg-slate-900";
    return "bg-indigo-700 hover:bg-indigo-800";
  }, [tone]);

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black text-white shadow ${cls} transition`}
    >
      {icon}
      {children}
    </a>
  );
}

function SecondaryButton({ href, icon, children, title }) {
  return (
    <a
      href={href}
      title={title}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black border border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
    >
      {icon}
      {children}
    </a>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-2 text-slate-700 font-black text-sm">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-slate-900 font-bold">{value}</div>
    </div>
  );
}

function InfoCard({ icon, title, desc, accent }) {
  return (
    <div className={`bg-gradient-to-br ${accent} p-7 rounded-3xl shadow-xl text-white`}>
      <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-white/90">{desc}</p>
    </div>
  );
}

function NewsCard({ date, title, desc, tagColor }) {
  return (
    <div className="flex gap-4 items-start bg-white/10 border border-white/15 backdrop-blur p-5 rounded-3xl">
      <div className={`${tagColor} text-slate-900 px-3 py-2 rounded-2xl text-sm font-black whitespace-nowrap shadow`}>
        {date}
      </div>
      <div>
        <p className="font-black text-lg md:text-xl">{title}</p>
        <p className="mt-1 text-white/85">{desc}</p>
      </div>
    </div>
  );
}

function ResearchRow({ title, desc, accent }) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
      <div className={`w-2 rounded-full bg-gradient-to-b ${accent}`} />
      <div>
        <p className="font-black text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function SkillCategory({ title, items, accent }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md">
      <p className="text-xs font-black text-slate-500 uppercase tracking-wider">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className={`px-3 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r ${accent} shadow`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function PubCard({ id, title, venue, authors, featured, accent = "from-slate-700 to-slate-900" }) {
  if (featured) {
    return (
      <div className="p-7 rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-600 text-white shadow-2xl">
        <div className="flex gap-5">
          <span className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center font-black">
            {id}
          </span>
          <div>
            <h4 className="text-lg md:text-xl font-black">{title}</h4>
            <p className="mt-2 text-white/90 text-sm font-medium">{authors}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/15">
                {venue}
              </span>
              <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-amber-200/20 text-amber-100 uppercase">
                ⭐ Featured
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-7 rounded-3xl bg-white shadow-lg border border-slate-200 hover:shadow-xl transition">
      <div className="flex gap-5">
        <span className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${accent} text-white flex items-center justify-center font-black shadow`}>
          {id}
        </span>
        <div>
          <h4 className="text-lg font-black text-slate-900">{title}</h4>
          <p className="mt-2 text-sm text-slate-600 font-medium">{authors}</p>
          <div className="mt-3">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700">
              {venue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, subtitle, desc, tags, link, accent }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition group">
      <div className={`h-3 bg-gradient-to-r ${accent}`} />
      <div className="p-7">
        <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-800 transition">{title}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">{subtitle}</p>
        <p className="mt-4 text-slate-600">{desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className={`px-3 py-1.5 rounded-xl text-xs font-black text-white bg-gradient-to-r ${accent} shadow`}>
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-black text-indigo-700 hover:text-sky-700"
        >
          View Repository <ChevronRight size={18} />
        </a>
      </div>
    </div>
  );
}

function EducationCard({ degree, period, org, gpa, active }) {
  return (
    <div className="relative pl-10 py-2">
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-indigo-700" />
      <div className="absolute left-[5px] top-10 bottom-2 w-px bg-slate-300" />

      <div className="bg-white p-7 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <h3 className="text-xl font-black text-slate-900">{degree}</h3>
          <span className={`text-xs font-black px-3 py-1.5 rounded-full text-white ${active ? "bg-sky-600" : "bg-slate-600"}`}>
            {period}
          </span>
        </div>
        <p className="mt-2 text-slate-600 font-bold">{org}</p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-black ${active ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-800 border border-slate-200"}`}>
          <Sparkles size={16} /> GPA: {gpa}
        </div>
      </div>
    </div>
  );
}

function IconButton({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="p-3 rounded-xl bg-white/10 hover:bg-white/15 transition"
    >
      {icon}
    </a>
  );
}

