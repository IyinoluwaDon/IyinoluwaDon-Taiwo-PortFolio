import { useState, useEffect, useRef, useCallback } from 'react'
import { Github, Linkedin, Twitter, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'JavaScript', 'PHP', 'HTML / CSS'],
  },
  {
    category: 'ML & AI',
    items: ['scikit-learn', 'XGBoost', 'TensorFlow', 'NLTK', 'Transformers', 'GridSearchCV'],
  },
  {
    category: 'Cloud & Deployment',
    items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Flask', 'Streamlit'],
  },
  {
    category: 'Data & Analytics',
    items: ['Pandas', 'Power BI', 'Excel', 'SQLite', 'Matplotlib', 'Plotly'],
  },
]

const PROJECTS = [
  {
    num: '01',
    title: 'Student Grade Prediction System',
    desc: 'End-to-end ML pipeline predicting student performance using the UCI dataset. Trained 6 classifiers with GridSearchCV hyperparameter tuning, ROC curve evaluation, and deployed a 5-page interactive Streamlit app with a per-subject switcher.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit', 'GridSearchCV'],
    github: '#',
    demo: '#',
  },
  {
    num: '02',
    title: 'Serverless NLP Text Analyzer API',
    desc: 'Fully serverless NLP API on AWS Lambda + API Gateway (eu-north-1). Performs tokenization, POS tagging, sentiment analysis, and TF-IDF scoring. Resolved real IAM restrictions and API path-matching issues end to end.',
    stack: ['AWS Lambda', 'API Gateway', 'NLTK', 'Python', 'IAM'],
    github: '#',
    demo: null,
  },
  {
    num: '03',
    title: 'Shebamiles Employee Management System',
    desc: 'Full-stack HR web app with PHP backend and MySQL database. Features query-parameter-based routing, sidebar navigation, and SQL VIEW-based reporting. Debugged complex backend routing and corrupted view definitions in production.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS', 'XAMPP'],
    github: 'https://github.com/DonIyin/Shebamiles',
    demo: null,
  },
  {
    num: '04',
    title: 'Brazil Housing Market Analysis',
    desc: 'EDA on Brazilian real estate across regions — 200k+ records. Includes data cleaning, currency normalization, multi-region concatenation, and choropleth map visualizations for regional price distribution insights.',
    stack: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
    github: '#',
    demo: null,
  },
  {
    num: '05',
    title: 'Renewable Energy Output Predictor',
    desc: 'XGBoost-powered pipeline forecasting renewable energy output with feature engineering and model calibration. Deployed as a REST API via Flask with a documented prediction endpoint for dashboard integration.',
    stack: ['Python', 'XGBoost', 'Flask', 'REST API'],
    github: '#',
    demo: null,
    wip: true,
  },
]

const EXPERIENCE = [
  {
    date: '2024 — Present',
    role: 'PyClub Lead & Founding Mentor',
    org: 'PyClub McPherson · McPherson University',
    desc: 'Founded and lead a student Python and AI programming community. Deliver direct mentorship on Python fundamentals, ML engineering, and project development to undergraduates. Co-organized the Python Starters Hub webinar on memory management and data structures with DSN McPherson.',
  },
  {
    date: '2025',
    role: 'SIWES Industrial Intern',
    org: 'ipNX Nigeria · Lagos',
    desc: 'Advanced through the SIWES industrial placement pipeline at ipNX Nigeria, a leading ISP and ICT infrastructure company. Passed HR interview stage and progressed through structured technical evaluation rounds.',
  },
  {
    date: '2025',
    role: 'Data Science Researcher',
    org: 'DSA Summer School 2026 · WQU DS Labs',
    desc: 'Completed entry analysis notebook covering Uganda CPI data, NLP classification tasks, and Gaussian ML visualization. Applied to Deep Learning Indaba 2026 and AWS AI & ML Scholars Program (Udacity).',
  },
  {
    date: '2024 — Present',
    role: 'Male Representative',
    org: 'McPherson Chorale · McPherson University',
    desc: 'Serve as Male Representative in the university choir. Active keyboardist specializing in gospel and contemporary worship — chord extensions, voice layering, and praise progressions.',
  },
]

const STATS = [
  { value: '4.55', label: 'CGPA · First Class' },
  { value: '300L', label: 'B.Sc. Comp. Sci.' },
  { value: '5+', label: 'Projects Shipped' },
  { value: 'PyClub', label: 'Community Lead' },
]

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionLabel({ number, text }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--blue)',
      marginBottom: '0.5rem',
    }}>
      {number} · {text}
    </p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
      letterSpacing: '0.03em',
      lineHeight: 1,
      marginBottom: '3rem',
    }}>
      {children}
    </h2>
  )
}

// NAV
function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.4rem clamp(1.5rem, 5vw, 4rem)',
      background: scrolled ? 'rgba(7,7,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        letterSpacing: '0.12em',
        color: 'var(--blue)',
      }}>
        IDT
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="desktop-nav">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => handleNav(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: active === link.toLowerCase() ? 'var(--blue)' : 'var(--grey)',
                transition: 'color 0.2s',
                padding: 0,
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--blue)'}
              onMouseLeave={(e) => e.target.style.color = active === link.toLowerCase() ? 'var(--blue)' : 'var(--grey)'}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--white)', padding: '4px',
        }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--bg2)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem', zIndex: 199,
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white)',
          }}>
            <X size={24} />
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                letterSpacing: '0.06em',
                color: active === link.toLowerCase() ? 'var(--blue)' : 'var(--white)',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

// HERO
function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(6rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem) 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 10%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 10%, transparent 100%)',
      }} />
      {/* Blue glow */}
      <div style={{
        position: 'absolute', top: '25%', right: '20%',
        width: 520, height: 520,
        background: 'radial-gradient(circle, var(--blue-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'clamp(1fr, 1.1fr, 1fr) clamp(1fr, 0.9fr, 1fr)',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'center',
        maxWidth: 1200, margin: '0 auto', width: '100%',
      }} className="hero-grid-layout">

        {/* Text */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--blue)',
            border: '1px solid rgba(61,158,255,0.35)',
            padding: '0.35rem 0.9rem',
            marginBottom: '1.6rem',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--blue)',
              animation: 'blink 2s infinite',
            }} />
            Open to Opportunities
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.8rem, 7vw, 6.5rem)',
            lineHeight: 0.93, letterSpacing: '0.02em',
            marginBottom: '1rem',
            animation: 'fadeUp 0.6s 0.08s ease both',
          }}>
            IYINOLUWA<br />
            <span style={{ color: 'var(--blue)' }}>DON-TAIWO</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem', letterSpacing: '0.15em',
            color: 'var(--grey)', marginBottom: '1.6rem',
            animation: 'fadeUp 0.6s 0.16s ease both',
          }}>
            ML Engineer &nbsp;·&nbsp; NLP &amp; Computer Vision
          </p>

          <p style={{
            fontSize: '1.02rem', lineHeight: 1.85,
            color: '#9999cc', maxWidth: 500,
            marginBottom: '2.4rem',
            animation: 'fadeUp 0.6s 0.24s ease both',
          }}>
            300-Level CS student at McPherson University building intelligent systems across language and vision. I train models, ship cloud pipelines, and lead the next generation of ML engineers through PyClub McPherson.
          </p>

          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.32s ease both',
          }}>
            <a href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: 'var(--blue)', color: '#000',
                padding: '0.85rem 2.2rem',
                fontFamily: 'var(--font-body)', fontWeight: 800,
                fontSize: '0.8rem', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none', display: 'inline-block',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
            >
              View Projects
            </a>
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                background: 'transparent', color: 'var(--white)',
                padding: '0.85rem 2.2rem',
                fontFamily: 'var(--font-body)', fontWeight: 800,
                fontSize: '0.8rem', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid var(--border)',
                textDecoration: 'none', display: 'inline-block',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--white)' }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.6s 0.18s ease both' }} className="hero-photo-col">
          <div style={{
            width: 300, height: 370,
            border: '1px solid var(--border)',
            position: 'relative',
            background: 'var(--bg3)', overflow: 'hidden',
          }}>
            {/* Corner accents */}
            {[
              { top: -1, left: -1, borderTop: '2px solid var(--blue)', borderLeft: '2px solid var(--blue)' },
              { bottom: -1, right: -1, borderBottom: '2px solid var(--blue)', borderRight: '2px solid var(--blue)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: 54, height: 54, zIndex: 2, ...s }} />
            ))}
            {/* Replace this with your actual photo: <img src="/photo.jpg" alt="Iyinoluwa Don-Taiwo" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '1rem', color: 'var(--grey)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem', letterSpacing: '0.1em',
            }}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span>your photo here</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0.25; }
        }
        @media (max-width: 768px) {
          .hero-grid-layout { grid-template-columns: 1fr !important; }
          .hero-photo-col { order: -1; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </section>
  )
}

// ABOUT
function About() {
  const [ref, inView] = useInView()
  return (
    <section id="about" style={{ padding: '6rem clamp(1.5rem,5vw,4rem)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel number="01" text="Who I Am" />
          <SectionTitle>ABOUT ME</SectionTitle>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(1fr, 1.4fr, 1fr) 1fr',
          gap: 'clamp(2rem,5vw,5rem)',
          alignItems: 'start',
        }} className="about-inner">
          <div className={`reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
            {[
              "I'm a Computer Science student specializing in Machine Learning Engineering, with a focus on Natural Language Processing and Computer Vision. I work across the full ML lifecycle — from raw data and feature engineering through model training, evaluation, and cloud deployment.",
              "Beyond code, I lead PyClub McPherson, a student-driven Python and AI programming community at McPherson University, where I directly mentor undergraduates and organize technical workshops. I believe the best way to solidify knowledge is to teach it.",
              "Currently pursuing my B.Sc. with a 4.55 CGPA (First Class Standing), building toward a professional ML Engineering career in NLP and Computer Vision.",
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: '1rem', lineHeight: 1.9,
                color: '#9999cc', marginBottom: '1.2rem',
              }}>{p}</p>
            ))}
          </div>

          <div className={`reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 1, background: 'var(--border)',
              border: '1px solid var(--border)',
            }}>
              {STATS.map(({ value, label }) => (
                <div key={label} style={{ background: 'var(--bg2)', padding: '1.8rem 1.4rem', textAlign: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem', color: 'var(--blue)',
                    display: 'block', lineHeight: 1, marginBottom: '0.4rem',
                  }}>{value}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem', letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--grey)',
                  }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-inner{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

// SKILLS
function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="skills" style={{ padding: '6rem clamp(1.5rem,5vw,4rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel number="02" text="What I Work With" />
          <SectionTitle>SKILLS</SectionTitle>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {SKILLS.map(({ category, items }, i) => (
            <div
              key={category}
              className={`reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}
              style={{
                border: '1px solid var(--border)',
                padding: '2rem', background: 'var(--bg2)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, var(--blue), transparent)',
              }} />
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'var(--blue)',
                marginBottom: '1.3rem',
              }}>{category}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {items.map((skill) => (
                  <span key={skill} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    padding: '0.3rem 0.8rem',
                    background: 'var(--blue-dim)',
                    color: '#a8d4ff',
                    border: '1px solid rgba(61,158,255,0.18)',
                    letterSpacing: '0.04em',
                    cursor: 'default',
                    transition: 'background 0.2s',
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// PROJECTS
function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg)',
        border: `1px solid ${hovered ? 'rgba(61,158,255,0.5)' : 'var(--border)'}`,
        padding: '2rem', position: 'relative',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 18px 44px rgba(0,0,0,0.45)' : 'none',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '3.8rem', lineHeight: 1,
        color: hovered ? 'rgba(61,158,255,0.22)' : 'rgba(61,158,255,0.1)',
        marginBottom: '0.3rem',
        transition: 'color 0.3s',
      }}>{project.num}</div>

      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', gap: '1rem',
        marginBottom: '0.8rem',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-body)', fontWeight: 700,
          fontSize: '1.05rem', color: 'var(--white)',
        }}>{project.title}</h3>
        {project.wip && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--blue)', border: '1px solid rgba(61,158,255,0.3)',
            padding: '0.15rem 0.5rem', whiteSpace: 'nowrap',
          }}>In Progress</span>
        )}
      </div>

      <p style={{
        fontSize: '0.87rem', lineHeight: 1.75,
        color: 'var(--grey)', marginBottom: '1.5rem',
      }}>{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.6rem' }}>
        {project.stack.map((t) => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            padding: '0.2rem 0.6rem',
            color: 'var(--blue)',
            border: '1px solid rgba(61,158,255,0.28)',
            letterSpacing: '0.05em',
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1.2rem' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--grey)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blue)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--grey)'}
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--grey)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blue)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--grey)'}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const [ref, inView] = useInView()
  return (
    <section id="projects" style={{ padding: '6rem clamp(1.5rem,5vw,4rem)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel number="03" text="What I've Built" />
          <SectionTitle>PROJECTS</SectionTitle>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((p, i) => (
            <div key={p.num} className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// EXPERIENCE
function Experience() {
  const [ref, inView] = useInView()
  return (
    <section id="experience" style={{ padding: '6rem clamp(1.5rem,5vw,4rem)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel number="04" text="Where I've Contributed" />
          <SectionTitle>EXPERIENCE</SectionTitle>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: 1, background: 'var(--border)',
          }} />

          {EXPERIENCE.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''}`}
              style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '3rem' }}
            >
              <div style={{
                position: 'absolute', left: '-2.5rem', top: '0.45rem',
                width: 9, height: 9, background: 'var(--blue)',
              }} />
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--blue)',
                marginBottom: '0.4rem',
              }}>{item.date}</p>
              <h3 style={{
                fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '1.08rem', marginBottom: '0.2rem',
              }}>{item.role}</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--grey)', marginBottom: '0.9rem',
              }}>{item.org}</p>
              <p style={{
                fontSize: '0.9rem', lineHeight: 1.78,
                color: '#8888aa', maxWidth: 620,
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CONTACT
function Contact() {
  const [ref, inView] = useInView()
  // TODO: Replace with your real email, GitHub, LinkedIn, Twitter
  const EMAIL = 'your@email.com'
  const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/DonIyin', icon: Github },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter / X', href: '#', icon: Twitter },
  ]

  return (
    <section id="contact" style={{
      padding: '6rem clamp(1.5rem,5vw,4rem)',
      background: 'var(--bg2)', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel number="05" text="Let's Talk" />
          <SectionTitle>GET IN TOUCH</SectionTitle>
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }} className={`reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          <p style={{
            fontSize: '1.02rem', lineHeight: 1.85,
            color: '#9999cc', marginBottom: '2.5rem',
          }}>
            Open to ML internships, research collaborations, and freelance ML engineering work. If you're building something serious with AI — models, pipelines, APIs — I'd love to be in that conversation.
          </p>

          <a href={`mailto:${EMAIL}`} style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem', letterSpacing: '0.06em',
            color: 'var(--blue)', textDecoration: 'none',
            marginBottom: '3rem',
            transition: 'opacity 0.2s, letter-spacing 0.3s',
          }}
            onMouseEnter={(e) => { e.target.style.opacity = '0.7'; e.target.style.letterSpacing = '0.1em' }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.letterSpacing = '0.06em' }}
          >
            {EMAIL.toUpperCase()}
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--grey)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blue)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--grey)'}
              >
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FOOTER
function Footer() {
  return (
    <footer style={{
      padding: '1.8rem clamp(1.5rem,5vw,4rem)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '0.8rem',
    }}>
      {['© 2025 Iyinoluwa Don-Taiwo', 'Built with intention · Lagos, Nigeria'].map((t) => (
        <p key={t} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          letterSpacing: '0.1em', color: 'var(--grey)',
        }}>{t}</p>
      ))}
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const active = useActiveSection()

  return (
    <>
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
