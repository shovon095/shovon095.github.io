import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Award,
  Microscope,
  Sparkles,
  Terminal,
  Users,
  Heart,
  Coffee,
  Globe,
  Database,
  BrainCircuit,
  Code2,
  FlaskConical,
  Presentation,
  MapPin,
  FileText,
  ExternalLink,
  Download,
} from "lucide-react";

// ✅ Replace with your image path
import profilePic from "./assets/shouvon.jpg";

/* =========================
   DATA - SOURCE: CV
   ========================= */

const profile = {
  name: "Shouvon Sarker",
  title: "PhD Candidate in Electrical Engineering",
  org: "Prairie View A&M University (PVAMU)",
  address: "702 Santee Street, Prairie View, TX 77445",
  email: "shouvonsarker@gmail.com",
  linkedin: "https://www.linkedin.com/in/shouvon-sarker",
  github: "https://github.com/shovon095",
  photo: profilePic,

  bio:
    "I develop trustworthy AI systems for mission-critical domains, with a focus on Large Language Models (LLMs), neuro-symbolic Text-to-SQL, and clinical NLP. My research combines probabilistic error modeling, counterfactual repair, and policy optimization to improve structured generation, and I design interpretable distillation methods for reliable clinical extraction.",
};

const highlights = [
  {
    icon: <BrainCircuit size={16} className="text-indigo-700" />,
    title: "Bayesian Text-to-SQL",
    desc:
      "Hierarchical error localization + counterfactual repair + PPO optimization; improved execution accuracy by ~12%.",
  },
  {
    icon: <Database size={16} className="text-indigo-700" />,
    title: "Schema-Grounded Attention",
    desc:
      "Non-parametric, schema-grounded attention; improved query accuracy by ~10% without external knowledge.",
  },
  {
    icon: <FlaskConical size={16} className="text-indigo-700" />,
    title: "Explainable Distillation (NER)",
    desc:
      "Structured Jensen–Shannon divergence to transfer token + transition structure for interpretable clinical extraction.",
  },
  {
    icon: <Terminal size={16} className="text-indigo-700" />,
    title: "Deployment",
    desc:
      "Built an interactive Text-to-SQL system for scientific databases; practical evaluation and iteration with real schemas.",
  },
];

const recognitions = [
  {
    icon: <Sparkles size={12} />,
    text: "Top-3 Global Placement (Generator Track), NIST GenAI Text-to-Text Challenge (2024)",
  },
  {
    icon: <Award size={12} />,
    text: "Outstanding Student Award, PVAMU CREDIT Center (2024)",
  },
  {
    icon: <Microscope size={12} />,
    text: "Top 10%, n2c2 Clinical NLP Challenge (2022)",
  },
  {
    icon: <Presentation size={12} />,
    text: "Invited Speaker, NIST GenAI T2T Workshop (2024)",
  },
];

const publicationsByCategory = {
  review: {
    title: "Manuscripts Under Review / In Preparation",
    badge: "Manuscripts",
    items: [
      {
        id: 1,
        title:
          "From Tokens to Transitions: A Structured Jensen–Shannon Knowledge Distillation Method for NER",
        venue:
          "Submitted to IEEE Transactions on Knowledge and Data Engineering (TKDE), 2025",
      },
      {
        id: 2,
        title:
          "Learning SQL Correctness: Bayesian Error Localization, Counterfactual Repair, and Policy Optimization",
        venue: "In Preparation, 2025",
      },
    ],
  },
  conf: {
    title: "Conference Proceedings (Peer-Reviewed)",
    badge: "Conference",
    items: [
      {
        id: 3,
        title:
          "Integrating Non-Parametric Attention to Enhance LLM-Based Text-to-SQL Without External Knowledge",
        venue: "ICDM 2025",
      },
      {
        id: 4,
        title:
          "Enhancing LLM Fine-tuning for Text-to-SQLs by SQL Quality Measurement",
        venue: "PhD Forum, ICDM 2025",
      },
      {
        id: 5,
        title:
          "Text Generator and Text Discriminator for NIST GenAI T2T Challenge",
        venue: "AIRC 2025",
      },
      {
        id: 6,
        title:
          "Medical Data Augmentation via ChatGPT: A Case Study on Medication Identification and Medication Event Classification",
        venue: "IEEE BHI 2023",
      },
      {
        id: 7,
        title:
          "Ensemble BERT for Medication Event Classification on Electronic Health Records",
        venue: "ICIBM 2023",
      },
      {
        id: 8,
        title:
          "Enhancing Deep Knowledge Tracing via Diffusion Models for Personalized Adaptive Learning",
        venue: "ASEE 2024",
      },
      {
        id: 9,
        title:
          "Integrating Human-in-the-loop into Swarm Learning for Decentralized Fake News Detection",
        venue: "IDSTA 2022",
      },
    ],
  },
  posters: {
    title: "Poster Presentations",
    badge: "Poster",
    items: [
      {
        id: 10,
        title:
          "Improving LLM-based Text-to-SQL Through Integrating Self-Discover Reasoning",
        venue: "NASA DEAP Annual Meeting, 2024",
      },
      {
        id: 11,
        title:
          "Classification of Medication Events from Electronic Health Records Using BERT Models",
        venue: "AIHC, Rice University, 2024",
      },
    ],
  },
};

/* =========================
   ANIMATIONS & MASCOT
   ========================= */

const RobotMascot = () => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="w-16 h-16"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="20" y="30" width="60" height="50" rx="15" fill="#4F46E5" />
      <rect x="32" y="44" width="36" height="14" rx="4" fill="white" />
      <motion.circle
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        cx="42"
        cy="51"
        r="3"
        fill="#4F46E5"
      />
      <motion.circle
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        cx="58"
        cy="51"
        r="3"
        fill="#4F46E5"
      />
      <circle cx="50" cy="20" r="5" fill="#F43F5E" />
      <path d="M50 20 L50 30" stroke="#4F46E5" strokeWidth="3" />
    </svg>
  </motion.div>
);

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

/* =========================
   MAIN APP
   ========================= */

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDFEFF] text-slate-800 font-sans selection:bg-indigo-100">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black">
                S
              </div>
              <span className="font-black text-slate-900 tracking-tight text-base uppercase">
                Shouvon
              </span>
            </NavLink>

            <div className="hidden md:flex gap-2">
              {["/", "/research", "/publications", "/experience", "/education"].map(
                (path) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-slate-400 hover:text-indigo-600"
                      }`
                    }
                  >
                    {path === "/" ? "Home" : path.substring(1)}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-white border-t border-slate-100 py-12">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-black text-slate-900">{profile.name}</h3>
              <p className="text-[10px] text-slate-400 font-black uppercase">
                PhD Candidate @ PVAMU
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] text-slate-500 font-medium">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400" /> {profile.address}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialBtn href={profile.github} icon={<Github />} />
              <SocialBtn href={profile.linkedin} icon={<Linkedin />} />
              <SocialBtn href={`mailto:${profile.email}`} icon={<Mail />} />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

/* =========================
   PAGES
   ========================= */

function Home() {
  return (
    <PageWrapper>
      <section className="flex flex-col lg:flex-row gap-12 items-center mb-16 py-6">
        <div className="relative shrink-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-56 h-56 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl relative z-10"
          >
            <img
              src={profile.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-3 -right-3 bg-amber-400 p-3 rounded-2xl shadow-lg border-4 border-white z-20">
            <Heart className="text-white" size={20} fill="white" />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100">
            {profile.title}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            {profile.name}
          </h1>

          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-4">
            {profile.org}
          </p>

          <p className="text-base text-slate-600 font-medium leading-relaxed max-w-xl mb-7">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <IconTag icon={<Globe size={14} />} label="Texas, USA" />
            <IconTag icon={<Coffee size={14} />} label="LLMs & Text-to-SQL" />
            <IconTag icon={<Users size={14} />} label="Teaching & Mentorship" />
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 text-[11px] text-slate-600 font-medium">
            <span className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Mail size={14} className="text-slate-400" />
              {profile.email}
            </span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal size={16} className="text-indigo-600" /> What I Build
          </h3>

          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-3 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="mt-0.5">{h.icon}</div>
                <div>
                  <p className="text-xs font-black text-slate-900">{h.title}</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                    {h.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-indigo-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
          <h3 className="text-sm font-black text-indigo-300 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Award size={16} /> Recognitions
          </h3>
          <ul className="space-y-3">
            {recognitions.map((r, idx) => (
              <li key={idx} className="text-xs font-bold flex items-start gap-2">
                <span className="mt-0.5">{r.icon}</span>
                <span className="leading-relaxed">{r.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">
              Current Research Themes
            </p>
            <p className="text-xs text-indigo-50/90 font-medium leading-relaxed">
              Trustworthy AI (XAI) • Neuro-Symbolic Text-to-SQL • Bayesian Deep Learning • Knowledge Distillation • Clinical NLP • Counterfactual Reasoning
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function Research() {
  const areas = [
    {
      title: "Trustworthy AI (XAI)",
      desc:
        "Designing interpretable models and evaluation signals so experts can audit structured predictions and failure modes.",
      metric: "Interpretability-first evaluation",
      icon: <Microscope size={16} className="text-indigo-600" />,
    },
    {
      title: "LLMs for Structured Generation",
      desc:
        "Developing reliable generation pipelines for SQL and clinical extraction, emphasizing correctness, calibration, and robustness.",
      metric: "Reliability + calibration",
      icon: <BrainCircuit size={16} className="text-indigo-600" />,
    },
    {
      title: "Bayesian Text-to-SQL Debugging",
      desc:
        "Hierarchical error localization and counterfactual repair combined with policy optimization; improved execution accuracy by ~12%.",
      metric: "~12% execution accuracy ↑",
      icon: <Database size={16} className="text-indigo-600" />,
    },
    {
      title: "Schema-Grounded Attention (No External KB)",
      desc:
        "Non-parametric, schema-grounded attention mechanisms that improve Text-to-SQL accuracy without relying on external knowledge sources.",
      metric: "~10% query accuracy ↑",
      icon: <Code2 size={16} className="text-indigo-600" />,
    },
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col items-center mb-14 text-center">
        <RobotMascot />
        <h2 className="text-3xl font-black text-slate-900 mt-4">
          Expertise & Focus
        </h2>
        <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-2">
          Research directions + measurable outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <SectionTitle
            icon={<BrainCircuit size={16} className="text-indigo-600" />}
          >
            Core Focus Areas
          </SectionTitle>

          {areas.map((a, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-200 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {a.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {a.desc}
                  </p>
                </div>

                <div className="shrink-0 mt-0.5">{a.icon}</div>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center gap-2 text-[10px] font-black text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-indigo-100">
                  <Sparkles size={12} /> {a.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <SectionTitle icon={<Terminal size={16} className="text-indigo-600" />}>
            Technical Tools
          </SectionTitle>

          <div className="grid grid-cols-2 gap-4">
            <SkillBox
              cat="Languages"
              items={["Python (Advanced)", "C/C++", "SQL", "MATLAB", "PHP", "HTML/CSS"]}
            />
            <SkillBox
              cat="Deep Learning"
              items={["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers"]}
            />
            <SkillBox
              cat="LLM Tools"
              items={["LoRA", "Adapters", "PEFT", "OpenAI API", "LangChain"]}
            />
            <SkillBox
              cat="Data Science"
              items={["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]}
            />
            <SkillBox cat="Databases" items={["MySQL", "PostgreSQL", "SQLite"]} />
            <SkillBox cat="Deployment" items={["Git", "Docker", "Linux", "AWS"]} />
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Users size={14} className="text-indigo-600" /> Teaching & Mentorship
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <ChevronDot /> Instructor, Prompt Engineering Workshop (Graduate level): Chain-of-Thought, ReAct, and applied LLM systems
              </li>
              <li className="flex items-start gap-2">
                <ChevronDot /> Research Mentor (2023–Present): supervised undergraduate ROTC students
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

function PublicationsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center mb-14 text-center">
        <h2 className="text-3xl font-black text-slate-900">Publications</h2>
        <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-2">
          Manuscripts • Conferences • Posters
        </p>
      </div>

      <div className="space-y-10">
        {Object.entries(publicationsByCategory).map(([key, cat]) => (
          <section key={key}>
            <div className="flex items-end justify-between gap-6 mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-px bg-slate-200" />
                {cat.title}
              </h3>
              <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-100">
                {cat.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((p) => (
                <div
                  key={p.id}
                  className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between"
                >
                  <h4 className="text-xs font-black text-slate-900 leading-relaxed mb-4">
                    {p.title}
                  </h4>
                  <span className="text-[10px] font-black text-slate-700 bg-slate-50 px-2 py-1 rounded self-start uppercase tracking-tighter border border-slate-100">
                    {p.venue}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
}

function Experience() {
  const jobs = [
    {
      title: "Graduate Research Assistant",
      org: "Prairie View A&M University (PVAMU)",
      date: "Jan 2023 – Present",
      bullets: [
        "Bayesian Text-to-SQL: hierarchical error localization + counterfactual repair + PPO optimization; improved execution accuracy by ~12%.",
        "Non-Parametric Attention: schema-grounded attention improved query accuracy by ~10% without external knowledge.",
        "Explainable Distillation: structured Jensen–Shannon divergence for interpretable clinical NER.",
        "Deployment: implemented an interactive Text-to-SQL system for scientific databases.",
      ],
    },
    {
      title: "Team Lead (NIST GenAI Text-to-Text Challenge)",
      org: "PVAMU Team",
      date: "2024",
      bullets: [
        "Designed a generative–critic framework for robustness evaluation.",
        "Achieved Top-3 global placement (Generator Track).",
        "Invited speaker at the NIST GenAI T2T Workshop (2024).",
      ],
    },
    {
      title: "AI Assistant Developer",
      org: "AMIE 2025 Conference",
      date: "2025",
      bullets: [
        "Developed an Android AI assistant using OpenAI GPT-4o with a domain-specific knowledge base.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      org: "Prairie View A&M University (PVAMU)",
      date: "Aug 2021 – Dec 2022",
      bullets: [
        "Built ensemble BERT models for clinical NLP with calibration-aware prediction.",
      ],
    },
    {
      title: "Instructor & Research Mentor",
      org: "PVAMU",
      date: "2023 – Present",
      bullets: [
        "Instructor (Prompt Engineering Workshop, 2024): Chain-of-Thought, ReAct, applied LLM systems.",
        "Mentored undergraduate ROTC students on research projects and experimental workflows.",
      ],
    },
  ];

  return (
    <PageWrapper className="space-y-6">
      <div className="flex items-center justify-between gap-6 mb-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Experience</h2>
          <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-2">
            Research • Leadership • Development • Teaching
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-2xl bg-indigo-50 border border-indigo-100">
          <Award size={16} className="text-indigo-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700">
            Outcome-driven work
          </span>
        </div>
      </div>

      {jobs.map((j, i) => (
        <div
          key={i}
          className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg flex flex-col md:flex-row gap-6 justify-between items-start"
        >
          <div className="flex-1">
            <h3 className="text-lg font-black text-slate-900">{j.title}</h3>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">
              {j.org}
            </p>

            <ul className="mt-4 space-y-2">
              {j.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-600 font-medium leading-relaxed"
                >
                  <ChevronDot /> {b}
                </li>
              ))}
            </ul>
          </div>

          <span className="text-[10px] font-black bg-slate-50 text-slate-400 px-3 py-1.5 rounded-full uppercase tracking-widest">
            {j.date}
          </span>
        </div>
      ))}
    </PageWrapper>
  );
}

function Education() {
  const edu = [
    {
      degree: "Ph.D. in Electrical Engineering",
      date: "Jan 2023 – Present",
      org: "Prairie View A&M University, Texas, USA",
      focus:
        "Dissertation (Tentative): Enhancing Structured Predictions in Large Language Models",
      extra: "Advisors: Dr. Xishuang Dong, Dr. Lijun Qian",
    },
    {
      degree: "M.S. in Electrical Engineering",
      date: "Aug 2021 – Dec 2022",
      org: "Prairie View A&M University, Texas, USA",
      focus:
        "Dissertation: Medication Events Classification from Electronic Health Records Using BERT Models",
      extra: "Advisors: Dr. Xishuang Dong, Dr. Lijun Qian",
    },
    {
      degree: "B.S. in Electronics & Communication Engineering",
      date: "Apr 2014 – Mar 2018",
      org: "Khulna University of Engineering & Technology, Bangladesh",
      focus: "",
      extra: "",
    },
  ];

  const coursework = [
    "Selected Topics in Deep Learning: Bayesian Networks, Variable Elimination, GANs",
    "Modern Artificial Intelligence: CSPs, Optimal Decisions in Games, Hidden Markov Models",
  ];

  return (
    <PageWrapper className="max-w-3xl mx-auto space-y-4">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-slate-900">Education</h2>
        <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-2">
          Degrees • Advisors • Selected coursework
        </p>
      </div>

      {edu.map((e, i) => (
        <div
          key={i}
          className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between md:items-center gap-4"
        >
          <div>
            <h3 className="text-base font-black text-slate-900">{e.degree}</h3>
            <p className="text-xs font-bold text-indigo-600">{e.org}</p>
            {e.focus && (
              <p className="text-[11px] text-slate-500 font-medium mt-2">
                <span className="font-black text-slate-700">Focus:</span>{" "}
                {e.focus}
              </p>
            )}
            {e.extra && (
              <p className="text-[11px] text-slate-400 font-medium mt-1 italic">
                {e.extra}
              </p>
            )}
          </div>

          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">
            {e.date}
          </span>
        </div>
      ))}

      <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm mt-6">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <FileText size={14} className="text-indigo-600" /> Selected Coursework
        </h3>
        <ul className="space-y-2 text-sm text-slate-600 font-medium leading-relaxed">
          {coursework.map((c, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronDot /> {c}
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}

/* =========================
   UI HELPERS
   ========================= */

function SectionTitle({ icon, children }) {
  return (
    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-l-4 border-indigo-600 pl-4 mb-6 flex items-center gap-2">
      {icon} {children}
    </h3>
  );
}

function ChevronDot() {
  return (
    <span className="mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-indigo-50 border border-indigo-100">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
    </span>
  );
}

function IconTag({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-500 border border-slate-100">
      {icon} {label}
    </div>
  );
}

function SkillBox({ cat, items }) {
  return (
    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
      <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2">
        {cat}
      </h4>
      <div className="flex flex-wrap gap-1">
        {items.map((it) => (
          <span key={it} className="text-[10px] font-bold text-slate-500">
            {it} •
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialBtn({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all shadow-sm"
    >
      {React.cloneElement(icon, { size: 18 })}
    </a>
  );
}

