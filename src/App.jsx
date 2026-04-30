import { useState, useEffect, useRef } from 'react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LINKS = {
  email: 'iyinoluwadontaiwo@gmail.com',
  github: 'https://github.com/IyinoluwaDon',
  linkedin: 'https://www.linkedin.com/in/iyinoluwa-don-taiwo',
}

const SKILLS = [
  { label: 'Languages',        items: ['Python', 'SQL', 'JavaScript', 'PHP', 'HTML / CSS'] },
  { label: 'ML & AI',          items: ['scikit-learn', 'XGBoost', 'PyTorch', 'NLTK', 'Transformers', 'GridSearchCV'] },
  { label: 'Cloud & Deploy',   items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Flask', 'Streamlit'] },
  { label: 'Data & Analytics', items: ['Pandas', 'Power BI', 'Excel', 'SQLite', 'Matplotlib', 'Plotly'] },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// To add a GitHub repo link: replace '#' with your repo URL.
//   Example: github: 'https://github.com/IyinoluwaDon/your-repo-name'
// To add a live demo link:  replace null with the URL string.
//   Example: demo: 'https://your-demo.streamlit.app'
// To hide a link entirely:  set it to null.

const PROJECTS = [
  {
    title: 'Student Grade Prediction System',
    year: '2025',
    desc: 'End-to-end ML pipeline on the UCI Student Performance dataset. Trained six classifiers — Logistic Regression, Random Forest, XGBoost, SVM, KNN, Decision Tree — with GridSearchCV tuning, ROC curve evaluation, and pickle serialisation. Shipped as a five-page Streamlit app with a subject switcher.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit'],
    github: '#',   // ← ADD GITHUB LINK HERE
    demo: null,    // ← ADD DEMO LINK HERE (or leave null to hide)
  },
  {
    title: 'Serverless NLP Text Analyzer API',
    year: '2025',
    desc: 'Fully serverless NLP API deployed on AWS Lambda and API Gateway (eu-north-1). Handles tokenization, POS tagging, sentiment analysis, and TF-IDF scoring. Resolved real IAM permission issues and API path-matching bugs end to end.',
    stack: ['AWS Lambda', 'API Gateway', 'NLTK', 'Python'],
    github: '#',   // ← ADD GITHUB LINK HERE
    demo: null,    // ← ADD DEMO LINK HERE (or leave null to hide)
  },
  {
    title: 'Shebamiles Employee Management System',
    year: '2024',
    desc: 'Full-stack HR web app with PHP backend and MySQL database. Features query-parameter routing, sidebar navigation, and SQL VIEW-based reporting. Debugged complex backend routing issues and corrupted view definitions in production.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS'],
    github: 'https://github.com/IyinoluwaDon/Shebamiles',  // ← already filled
    demo: null,
  },
  {
    title: 'Brazil Housing Market EDA',
    year: '2025',
    desc: 'Exploratory data analysis on Brazilian real estate across all regions — 200k+ records. Covers data cleaning, currency normalisation, multi-region concatenation, and choropleth maps for regional price distribution insights.',
    stack: ['Python', 'Pandas', 'Plotly', 'Jupyter'],
    github: '#',   // ← ADD GITHUB LINK HERE
    demo: null,    // ← ADD DEMO LINK HERE (or leave null to hide)
  },
  {
    title: 'Renewable Energy Output Predictor',
    year: '2025',
    desc: 'XGBoost pipeline forecasting renewable energy output from meteorological features. Deployed as a documented REST API via Flask for dashboard integration.',
    stack: ['Python', 'XGBoost', 'Flask'],
    github: '#',   // ← ADD GITHUB LINK HERE
    demo: null,    // ← ADD DEMO LINK HERE (or leave null to hide)
    wip: true,
  },
]

const EXPERIENCE = [
  {
    period: '2024 — Present',
    role: 'PyClub Lead',
    org: 'McPherson University',
    desc: 'Founded and lead a student Python and AI programming community. Mentor undergraduates on Python, ML engineering, and project development. Co-organised the Python Starters Hub webinar on memory and data management with DSN McPherson.',
  },
  {
    period: '2025',
    role: 'SIWES Industrial Intern',
    org: 'ipNX Nigeria · Lagos',
    desc: 'Industrial training placement at ipNX, a leading Nigerian internet service provider and systems integrator. Gaining hands-on exposure to real-world technology infrastructure and operations.',
  },
  {
    period: '2025',
    role: 'Data Science Practitioner',
    org: 'WorldQuant University DS Labs',
    desc: 'Working through applied data science project notebooks covering statistical analysis, NLP tasks, and ML visualisation. Applied to Deep Learning Indaba 2026 and the AWS AI & ML Scholars Program.',
  },
]

const ROLES = ['ML Engineer', 'Data Scientist', 'AI Developer']

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el) }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function useScrolled() {
  const [s, setS] = useState(false)
  useEffect(() => {
    const fn = () => setS(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return s
}

// ─── PRIMITIVES ───────────────────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <span style={{
      fontSize: 12, fontWeight: 500,
      color: 'var(--muted)',
      border: '1px solid var(--border)',
      borderRadius: 4,
      padding: '2px 8px',
      letterSpacing: '0.01em',
    }}>
      {children}
    </span>
  )
}

function Divider() {
  return <div style={{ borderTop: '1px solid var(--border)', margin: '0' }} />
}

// ─── NAV ──────────────────────────────────────────────────────────────────────

const NAV = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function Nav() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 64px)',
        height: 60,
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.25s, border-color 0.25s',
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text)' }}>
          Iyinoluwa Don-Taiwo
        </span>

        <div style={{ display: 'flex', gap: 32 }} className="desk-nav">
          {NAV.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: 'var(--muted)', fontFamily: 'inherit',
              transition: 'color 0.15s', padding: 0,
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="mob-toggle" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', fontSize: 13, fontFamily: 'inherit',
          display: 'none',
        }}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: 40,
          paddingTop: 60,
        }}>
          {NAV.map(l => (
            <button key={l} onClick={() => go(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 28, fontWeight: 300, color: 'var(--text)',
              fontFamily: 'inherit', letterSpacing: '-0.02em',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desk-nav { display: none !important; }
          .mob-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(80px,14vh,120px) clamp(20px,5vw,64px) 80px',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.35,
        maskImage: 'radial-gradient(ellipse 70% 70% at 40% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 40% 50%, black 20%, transparent 100%)',
      }} />

      {/* Blue radial glow */}
      <div style={{
        position: 'absolute', top: '25%', left: '-5%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,142,247,0.055) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 760, position: 'relative' }}>

        {/* Available pill */}
        <p style={{
          fontSize: 13, color: 'var(--blue)',
          fontWeight: 500, marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 8,
          animation: 'fadeUp 0.5s ease both',
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6,
            borderRadius: '50%', background: 'var(--blue)',
            animation: 'pulse 2.5s ease infinite',
          }} />
          Available for opportunities
        </p>

        {/* Role chips */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
          animation: 'fadeUp 0.5s 0.04s ease both',
        }}>
          {ROLES.map((r, i) => (
            <span key={r} style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: i === 0 ? 'var(--blue)' : 'var(--muted)',
              border: `1px solid ${i === 0 ? 'rgba(79,142,247,0.35)' : 'var(--border)'}`,
              borderRadius: 4, padding: '3px 10px',
              background: i === 0 ? 'rgba(79,142,247,0.06)' : 'transparent',
            }}>{r}</span>
          ))}
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 68px)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 1.08,
          color: 'var(--text)',
          marginBottom: 28,
          animation: 'fadeUp 0.5s 0.08s ease both',
        }}>
          Building ML systems<br />
          <span style={{ color: 'var(--blue)' }}>that learn from data.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 16, fontWeight: 300,
          color: 'var(--muted)', lineHeight: 1.75,
          maxWidth: 520, marginBottom: 48,
          animation: 'fadeUp 0.5s 0.14s ease both',
        }}>
          I work across the full ML stack — data wrangling, model training,
          evaluation, and cloud deployment. Computer Science student
          based in Lagos, Nigeria.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
          animation: 'fadeUp 0.5s 0.20s ease both',
        }}>
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              background: 'var(--text)', color: 'var(--bg)',
              padding: '10px 22px', borderRadius: 6,
              fontSize: 13, fontWeight: 500,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View work
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            style={{
              background: 'transparent', color: 'var(--text)',
              padding: '10px 22px', borderRadius: 6,
              fontSize: 13, fontWeight: 400,
              border: '1px solid var(--border)',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--subtle)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            Get in touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

const FOCUS_AREAS = [
  'Machine Learning Engineering',
  'Data Science & Analytics',
  'Cloud-Native ML Deployment',
  'Predictive Modelling',
]

function About() {
  const [ref, vis] = useInView()
  return (
    <section id="about" style={{ padding: 'clamp(64px,8vh,96px) clamp(20px,5vw,64px)' }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 64 }}>

        <div className={`fade-up ${vis ? 'in' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 'clamp(32px,6vw,96px)',
          alignItems: 'start',
        }}>
          {/* Left: text */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>About</p>
            <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.35, marginBottom: 24, color: 'var(--text)' }}>
              Student, builder,<br />perpetual learner.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                "I'm a Computer Science student building toward a career in ML Engineering and Data Science. I work across the full stack — data cleaning, modelling, evaluation, and cloud deployment.",
                "I've shipped end-to-end projects across predictive modelling, serverless APIs, data analysis pipelines, and full-stack web applications.",
                "Expected graduation July 2027. Based in Lagos, Nigeria.",
              ].map((t, i) => (
                <p key={i} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>{t}</p>
              ))}
            </div>
          </div>

          {/* Right: focus areas */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden',
            alignSelf: 'start',
          }}>
            <p style={{
              fontSize: 10, fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--muted)',
              padding: '14px 24px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>Focus Areas</p>
            {FOCUS_AREAS.map((area, i) => (
              <div key={area} style={{
                background: 'var(--bg-card)',
                padding: '18px 24px',
                borderBottom: i < FOCUS_AREAS.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', alignItems: 'center', gap: 14,
                transition: 'background 0.15s',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
              >
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'var(--blue)', flexShrink: 0, opacity: 0.7,
                }} />
                <p style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 400 }}>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){#about .fade-up > div{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

function Skills() {
  const [ref, vis] = useInView()
  return (
    <section id="skills" style={{ padding: 'clamp(64px,8vh,96px) clamp(20px,5vw,64px)' }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 64 }}>
        <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 40 }}>Skills</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          {SKILLS.map(({ label, items }, i) => (
            <div
              key={label}
              className={`fade-up delay-${i + 1} ${vis ? 'in' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 24,
                padding: '20px 24px',
                borderBottom: i < SKILLS.length - 1 ? '1px solid var(--border)' : 'none',
                background: 'var(--bg-card)',
                alignItems: 'center',
              }}
            >
              <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>{label}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {items.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function ProjectRow({ project, last }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '32px 0',
        borderBottom: last ? 'none' : '1px solid var(--border)',
        transition: 'opacity 0.15s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>
          {project.wip && (
            <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--blue)', border: '1px solid rgba(79,142,247,0.3)', borderRadius: 4, padding: '1px 7px', letterSpacing: '0.06em' }}>
              WIP
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{project.year}</span>
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: hov ? 'var(--text)' : 'var(--muted)', transition: 'color 0.15s' }}>
              GitHub ↗
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: hov ? 'var(--blue)' : 'var(--muted)', transition: 'color 0.15s' }}>
              Demo ↗
            </a>
          )}
        </div>
      </div>

      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 680, marginBottom: 16 }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.stack.map(s => <Tag key={s}>{s}</Tag>)}
      </div>
    </div>
  )
}

function Projects() {
  const [ref, vis] = useInView()
  return (
    <section id="projects" style={{ padding: 'clamp(64px,8vh,96px) clamp(20px,5vw,64px)' }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Projects</p>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: 'var(--muted)', transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            View all on GitHub ↗
          </a>
        </div>
        <div className={`fade-up ${vis ? 'in' : ''}`}>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.title} project={p} last={i === PROJECTS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

function Experience() {
  const [ref, vis] = useInView()
  return (
    <section id="experience" style={{ padding: 'clamp(64px,8vh,96px) clamp(20px,5vw,64px)' }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 64 }}>
        <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 40 }}>Experience</p>
        <div className={`fade-up ${vis ? 'in' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '24px 40px',
              padding: '28px 0',
              borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none',
            }} className="exp-row">
              <div>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{e.period}</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{e.role}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)' }}>{e.org}</p>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:600px){.exp-row{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  const [ref, vis] = useInView()
  return (
    <section id="contact" style={{ padding: 'clamp(64px,8vh,96px) clamp(20px,5vw,64px) clamp(80px,10vh,120px)' }}>
      <Divider />
      <div ref={ref} style={{ maxWidth: 1080, margin: '0 auto', paddingTop: 64 }}>
        <div className={`fade-up ${vis ? 'in' : ''}`} style={{ maxWidth: 560 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 20 }}>
            Let's build something together.
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40 }}>
            Open to ML internships, research collaborations, and freelance ML engineering work.
            If you're building with AI — models, pipelines, APIs — reach out.
          </p>

          <a href={`mailto:${LINKS.email}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--text)', color: 'var(--bg)',
            padding: '10px 22px', borderRadius: 6,
            fontSize: 13, fontWeight: 500,
            transition: 'opacity 0.15s', marginBottom: 40,
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {LINKS.email}
          </a>

          <div style={{ display: 'flex', gap: 24 }}>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >GitHub ↗</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      padding: '20px clamp(20px,5vw,64px)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: 8,
    }}>
      <p style={{ fontSize: 12, color: 'var(--muted)' }}>Iyinoluwa Don-Taiwo</p>
      <p style={{ fontSize: 12, color: 'var(--muted)' }}>Lagos, Nigeria · {new Date().getFullYear()}</p>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Nav />
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
