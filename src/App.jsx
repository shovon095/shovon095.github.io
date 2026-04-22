import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, MapPin } from "lucide-react";

import profilePic from "./assets/shouvon.jpg";

/* ============================================================
   DESIGN NOTES (keep this in mind when editing)
   ------------------------------------------------------------
   Direction: editorial / academic. Think Percy Liang's page,
   the MIT CSAIL faculty pages, or a literary journal — not a
   SaaS landing page.

   Rules:
   - Serif display type (EB Garamond) for headings; clean
     sans (Inter) for body. NO uppercase-tracking-widest labels.
   - One accent color only: a muted ink/red for links.
     Background is warm off-white. No indigo, no amber, no
     gradients, no badges with sparkles.
   - No icons inside body text. No mascots. No stickers on
     the portrait.
   - Publications are the hero of the site — they have links.
   - Prose > cards. Whitespace > decoration.
   ============================================================ */

/* --- FONT LOADING: do this once in index.html <head> instead
   if you prefer. Included here for convenience. --- */
const FontLoader = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(l);
    return () => document.head.removeChild(l);
  }, []);
  return null;
};

/* =========================
   DATA
   ========================= */

const profile = {
  name: "Shouvon Sarker",
  title: "PhD Candidate, Electrical Engineering",
  org: "Prairie View A&M University",
  location: "Prairie View, Texas",
  email: "shouvonsarker@gmail.com",
  linkedin: "https://www.linkedin.com/in/shouvon-sarker",
  github: "https://github.com/shovon095",
  photo: profilePic,
  // One-sentence pitch. Don't hide the work behind hedges.
  pitch:
    "I work on trustworthy large language models for structured generation — specifically neuro-symbolic Text-to-SQL and clinical information extraction.",
  // Longer bio, written as prose (not a list of buzzwords).
  bio: [
    "I am a PhD candidate at Prairie View A&M University, advised by Dr. Xishuang Dong and Dr. Lijun Qian. My research addresses a recurring failure mode of modern LLMs: they produce fluent outputs that are structurally or semantically wrong, and the errors are hard to localize or repair.",
    "My dissertation develops three complementary approaches to this problem — inference-time Bayesian error diagnosis and repair for Text-to-SQL; schema-grounded non-parametric attention that improves query accuracy without external knowledge; and structured Jensen–Shannon distillation for interpretable clinical named-entity recognition.",
    "I also lead the PVAMU team for the NIST GenAI Text-to-Text Challenge, and have deployed an interactive Text-to-SQL system for scientific databases.",
  ],
};

const research = [
  {
    title: "Inference-time Bayesian error diagnosis and repair for Text-to-SQL",
    body:
      "Treats SQL generation as a repairable process: at inference time, a Bayesian diagnosis step localizes the error site (clause, predicate, join), proposes counterfactual edits, and a PPO objective reinforces edits that produce executable, semantically faithful queries. Improves execution accuracy by ~12% over the base generator on our evaluation suite.",
  },
  {
    title: "Schema-grounded non-parametric attention",
    body:
      "A lightweight attention mechanism conditioned directly on schema structure rather than on retrieved external knowledge. Raises query accuracy by ~10% on benchmarks while reducing dependence on curated KBs.",
  },
  {
    title: "Structured Jensen–Shannon distillation for clinical NER",
    body:
      "Distills both token-level and transition-level structure from a teacher model using a structured JS objective, yielding compact students whose predictions remain interpretable to clinical reviewers.",
  },
  {
    title: "Generative–critic evaluation for LLMs",
    body:
      "Framework developed for the NIST GenAI T2T Challenge (2024): a generator and a critic co-evaluate outputs to surface robustness failures that single-model metrics miss.",
  },
];

const recognitions = [
  { year: "2024", text: "Top-3 placement (Top 10%), NIST GenAI Text-to-Text Challenge — Generator Track." },
  { year: "2024", text: "Invited speaker, NIST GenAI Text-to-Text Workshop." },
  { year: "2024", text: "Outstanding Student Award, PVAMU CREDIT Center." },
  { year: "2022", text: "Top 10% finish, n2c2 Clinical NLP Challenge." },
];

/* Publications: give each item a `links` slot so reviewers can
   click through. Fill in arxiv / pdf / code URLs as they exist;
   leave `links` as [] if nothing is public yet. */
/* Author strings follow a consistent convention:
   - Your own name is wrapped so the Publications page can bold it.
   - "et al." is preserved when the CV uses it. */
const ME = "Sarker, S."; // rendered bold on the page

const publications = [
  {
    section: "Under review & in submission",
    items: [
      {
        authors: [ME, "Qian, L.", "Dong, X."],
        title:
          "From Tokens to Transitions: A Structured Jensen–Shannon Knowledge Distillation Method for NER",
        venue: "IEEE Transactions on Knowledge and Data Engineering",
        status: "Under revision",
        year: "2025",
        links: [],
      },
      {
        authors: [ME, "Qian, L.", "Dong, X."],
        title:
          "Inference-Time Bayesian Error Diagnosis and Repair for Text-to-SQL",
        venue: "In submission",
        year: "2025",
        links: [],
      },
    ],
  },
  {
    section: "Conference proceedings",
    items: [
      {
        authors: [ME, "et al."],
        title:
          "Integrating Non-Parametric Attention to Enhance LLM-Based Text-to-SQL Without External Knowledge",
        venue: "IEEE International Conference on Data Mining (ICDM)",
        year: "2025",
        links: [],
      },
      {
        authors: [ME, "et al."],
        title: "Enhancing LLM Fine-tuning for Text-to-SQL by SQL Quality Measurement",
        venue: "PhD Forum, IEEE International Conference on Data Mining (ICDM)",
        year: "2025",
        links: [],
      },
      {
        authors: [ME, "Dong, X.", "Qian, L."],
        title: "Text Generator and Text Discriminator for the NIST GenAI T2T Challenge",
        venue: "AIRC",
        year: "2025",
        links: [],
      },
      {
        authors: ["Kuo, M.", ME, "Qian, L.", "et al."],
        title:
          "Enhancing Deep Knowledge Tracing via Diffusion Models for Personalized Adaptive Learning",
        venue: "ASEE Annual Conference",
        year: "2024",
        links: [],
      },
      {
        authors: [ME, "Li, X.", "Dong, X."],
        title:
          "Medical Data Augmentation via ChatGPT: A Case Study on Medication Identification and Medication Event Classification",
        venue: "IEEE Conference on Biomedical and Health Informatics (BHI)",
        year: "2023",
        links: [],
      },
      {
        authors: [ME, "Dong, X.", "Qian, L."],
        title: "Ensemble BERT for Medication Event Classification on Electronic Health Records",
        venue: "International Conference on Intelligent Biology and Medicine (ICIBM)",
        year: "2023",
        links: [],
      },
      {
        authors: ["Dong, X.", ME, "Qian, L."],
        title: "Integrating Human-in-the-Loop into Swarm Learning for Decentralized Fake News Detection",
        venue: "IDSTA",
        year: "2022",
        links: [],
      },
    ],
  },
  {
    section: "Posters",
    items: [
      {
        authors: [ME],
        title: "Improving LLM-based Text-to-SQL through Self-Discover Reasoning",
        venue: "NASA DEAP Annual Meeting",
        year: "2024",
        links: [],
      },
      {
        authors: [ME],
        title:
          "Classification of Medication Events from Electronic Health Records Using BERT Models",
        venue: "AI in Health Care (AIHC), Rice University",
        year: "2024",
        links: [],
      },
    ],
  },
];

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Prairie View A&M University",
    date: "2023 — Present",
    body:
      "PhD research on trustworthy LLMs: Bayesian Text-to-SQL debugging, schema-grounded attention, and interpretable distillation for clinical NER. Built and deployed an interactive Text-to-SQL system for scientific databases.",
  },
  {
    role: "Team Lead, NIST GenAI Text-to-Text Challenge",
    org: "PVAMU",
    date: "2024",
    body:
      "Designed a generator–critic framework for robustness evaluation. Top-3 global placement (Top 10%) in the Generator Track; invited to present at the NIST GenAI T2T Workshop.",
  },
  {
    role: "AI Assistant Developer",
    org: "AMIE 2025 Conference",
    date: "2025",
    body:
      "Built an Android conference assistant on GPT-4o with a retrieval layer over the conference knowledge base.",
  },
  {
    role: "Graduate Research Assistant",
    org: "Prairie View A&M University",
    date: "2021 — 2022",
    body:
      "Master's research on calibration-aware ensemble BERT models for medication event classification from EHRs.",
  },
  {
    role: "Instructor & Research Mentor",
    org: "PVAMU",
    date: "2023 — Present",
    body:
      "Instructor for a graduate prompt-engineering workshop (Chain-of-Thought, ReAct, applied LLM systems). Mentor to undergraduate ROTC students on research projects.",
  },
];

const education = [
  {
    degree: "Ph.D., Electrical Engineering",
    org: "Prairie View A&M University",
    date: "2023 — Present",
    note: "Dissertation (tentative): Enhancing Structured Predictions in Large Language Models. Advisors: Dr. Xishuang Dong, Dr. Lijun Qian.",
  },
  {
    degree: "M.S., Electrical Engineering",
    org: "Prairie View A&M University",
    date: "2021 — 2022",
    note: "Thesis: Medication Event Classification from Electronic Health Records Using BERT Models. Advisors: Dr. Xishuang Dong, Dr. Lijun Qian.",
  },
  {
    degree: "B.S., Electronics & Communication Engineering",
    org: "Khulna University of Engineering & Technology, Bangladesh",
    date: "2014 — 2018",
    note: "",
  },
];

/* =========================
   ROOT
   ========================= */

export default function App() {
  return (
    <Router>
      <FontLoader />
      <style>{`
        :root {
          --bg: #faf8f4;          /* warm off-white, not pure white */
          --ink: #1a1a1a;         /* near-black body text */
          --ink-soft: #4a4a4a;    /* secondary text */
          --ink-faint: #8a8a8a;   /* meta text */
          --rule: #e6e1d7;        /* hairline borders */
          --accent: #8b1e1e;      /* muted oxblood for links */
          --accent-hover: #5a1212;
        }
        html, body, #root { background: var(--bg); }
        body {
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
          font-feature-settings: "ss01", "cv11";
        }
        .font-serif { font-family: 'EB Garamond', Georgia, serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        /* inline text links inside prose */
        .prose a { color: var(--accent); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose a:hover { color: var(--accent-hover); }
      `}</style>

      <div className="min-h-screen w-full flex flex-col">
        <Nav />
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <RoutesWithKey />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function RoutesWithKey() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

/* =========================
   NAV & FOOTER
   ========================= */

function Nav() {
  const links = [
    { to: "/", label: "About" },
    { to: "/research", label: "Research" },
    { to: "/publications", label: "Publications" },
    { to: "/cv", label: "CV" },
  ];
  return (
    <nav className="w-full border-b" style={{ borderColor: "var(--rule)" }}>
      <Container>
        <div className="h-20 flex items-center justify-between">
          <NavLink to="/" className="font-serif text-xl" style={{ color: "var(--ink)" }}>
            Shouvon Sarker
          </NavLink>
          <div className="flex gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? "" : "hover:opacity-70"}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "var(--ink-soft)",
                  borderBottom: isActive ? "1px solid var(--accent)" : "1px solid transparent",
                  paddingBottom: "2px",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t mt-24" style={{ borderColor: "var(--rule)" }}>
      <Container>
        <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm" style={{ color: "var(--ink-faint)" }}>
          <div>© {new Date().getFullYear()} Shouvon Sarker</div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${profile.email}`} className="hover:opacity-70 flex items-center gap-2"><Mail size={14} />Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:opacity-70 flex items-center gap-2"><Github size={14} />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-70 flex items-center gap-2"><Linkedin size={14} />LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* =========================
   LAYOUT PRIMITIVES
   ========================= */

function Container({ children }) {
  // Narrower than typical marketing sites — reads as editorial.
  return <div className="w-full max-w-5xl mx-auto px-6 md:px-10">{children}</div>;
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="py-16 md:py-24">{children}</div>
      </Container>
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      className="font-mono text-xs mb-6"
      style={{ color: "var(--ink-faint)", letterSpacing: "0.04em" }}
    >
      {children}
    </div>
  );
}

/* =========================
   HOME / ABOUT
   ========================= */

function Home() {
  return (
    <Page>
      {/* Hero: portrait sits quietly to the side, not on a pedestal.
          The pitch sentence is the first thing you read. */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-12 items-start">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6" style={{ color: "var(--ink)" }}>
            {profile.name}
          </h1>
          <p className="text-base mb-10" style={{ color: "var(--ink-soft)" }}>
            {profile.title} &middot; {profile.org}
          </p>
          <p className="font-serif text-2xl md:text-[1.7rem] leading-[1.45] mb-10" style={{ color: "var(--ink)" }}>
            {profile.pitch}
          </p>
          <div className="prose max-w-none space-y-5 text-[15px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: "var(--ink-faint)" }}>
            <span className="flex items-center gap-2"><MapPin size={14} />{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:opacity-70">
              <Mail size={14} />{profile.email}
            </a>
          </div>
        </div>

        <div className="order-first md:order-last">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-40 md:w-full aspect-square object-cover grayscale"
            style={{ filter: "grayscale(100%) contrast(1.02)" }}
          />
        </div>
      </div>

      {/* Recognitions — a quiet list, no badges */}
      <div className="mt-24">
        <SectionLabel>Recognition</SectionLabel>
        <ul>
          {recognitions.map((r, i) => (
            <li
              key={i}
              className="flex gap-6 py-4 border-t text-[15px]"
              style={{ borderColor: "var(--rule)" }}
            >
              <span className="font-mono text-sm pt-0.5 shrink-0 w-16" style={{ color: "var(--ink-faint)" }}>
                {r.year}
              </span>
              <span style={{ color: "var(--ink-soft)" }}>{r.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
}

/* =========================
   RESEARCH
   ========================= */

function Research() {
  return (
    <Page>
      <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
        Research
      </h2>
      <p className="font-serif text-xl leading-relaxed mb-16 max-w-3xl" style={{ color: "var(--ink-soft)" }}>
        Four threads of my current work. Each addresses a distinct failure mode in modern LLMs applied to structured tasks.
      </p>

      <div className="space-y-16">
        {research.map((r, i) => (
          <article key={i} className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10">
            <div className="font-mono text-sm pt-1" style={{ color: "var(--ink-faint)" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3" style={{ color: "var(--ink)" }}>
                {r.title}
              </h3>
              <p className="text-[15px] leading-[1.75] max-w-3xl" style={{ color: "var(--ink-soft)" }}>
                {r.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

/* =========================
   PUBLICATIONS
   ========================= */

function Publications() {
  return (
    <Page>
      <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
        Publications
      </h2>
      <p className="text-sm mb-16" style={{ color: "var(--ink-faint)" }}>
        For PDFs and code not linked here, please email me directly.
      </p>

      <div className="space-y-20">
        {publications.map((group) => (
          <section key={group.section}>
            <SectionLabel>{group.section}</SectionLabel>
            <ul>
              {group.items.map((p, i) => (
                <li
                  key={i}
                  className="py-6 border-t"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-2 md:gap-8">
                    <div className="font-mono text-sm pt-1" style={{ color: "var(--ink-faint)" }}>
                      {p.year}
                    </div>
                    <div>
                      {p.authors && (
                        <p className="text-[14px] mb-1.5" style={{ color: "var(--ink-soft)" }}>
                          {p.authors.map((a, ai) => (
                            <span key={ai}>
                              {a === ME ? (
                                <span style={{ color: "var(--ink)", fontWeight: 600 }}>{a}</span>
                              ) : (
                                a
                              )}
                              {ai < p.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      )}
                      <p className="font-serif text-xl leading-snug mb-2" style={{ color: "var(--ink)" }}>
                        {p.title}
                      </p>
                      <p className="text-[15px] italic" style={{ color: "var(--ink-soft)" }}>
                        {p.venue}
                        {p.status && (
                          <span className="not-italic" style={{ color: "var(--ink-faint)" }}>
                            {" "}· {p.status}
                          </span>
                        )}
                      </p>
                      {p.links && p.links.length > 0 && (
                        <div className="mt-3 flex gap-5 text-sm">
                          {p.links.map((l, li) => (
                            <a
                              key={li}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 hover:opacity-70"
                              style={{ color: "var(--accent)" }}
                            >
                              {l.label} <ArrowUpRight size={13} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Page>
  );
}

/* =========================
   CV (combines Experience + Education)
   ========================= */

function CV() {
  return (
    <Page>
      <div className="flex items-baseline justify-between flex-wrap gap-4 mb-16">
        <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
          Curriculum Vitae
        </h2>
        {/* Drop your CV PDF into /public and link it here */}
        <a
          href="/cv.pdf"
          className="text-sm inline-flex items-center gap-1 hover:opacity-70"
          style={{ color: "var(--accent)" }}
        >
          Download PDF <ArrowUpRight size={14} />
        </a>
      </div>

      <section className="mb-20">
        <SectionLabel>Experience</SectionLabel>
        <ul>
          {experience.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-8 border-t"
              style={{ borderColor: "var(--rule)" }}
            >
              <div className="font-mono text-sm pt-1" style={{ color: "var(--ink-faint)" }}>
                {e.date}
              </div>
              <div>
                <h3 className="font-serif text-xl mb-1" style={{ color: "var(--ink)" }}>
                  {e.role}
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--ink-soft)" }}>
                  {e.org}
                </p>
                <p className="text-[15px] leading-[1.75] max-w-3xl" style={{ color: "var(--ink-soft)" }}>
                  {e.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionLabel>Education</SectionLabel>
        <ul>
          {education.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-8 border-t"
              style={{ borderColor: "var(--rule)" }}
            >
              <div className="font-mono text-sm pt-1" style={{ color: "var(--ink-faint)" }}>
                {e.date}
              </div>
              <div>
                <h3 className="font-serif text-xl mb-1" style={{ color: "var(--ink)" }}>
                  {e.degree}
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--ink-soft)" }}>
                  {e.org}
                </p>
                {e.note && (
                  <p className="text-[15px] leading-[1.75] max-w-3xl" style={{ color: "var(--ink-soft)" }}>
                    {e.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}