'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from './data/projects'

const links = {
  email: 'iyinoluwadontaiwo@gmail.com',
  github: 'https://github.com/IyinoluwaDon',
  linkedin: 'https://www.linkedin.com/in/iyinoluwa-don-taiwo',
}

const skills = [
  ['Languages', 'Python, SQL, JavaScript, PHP, HTML / CSS'],
  ['ML & AI', 'scikit-learn, XGBoost, PyTorch, NLTK, Transformers, GridSearchCV'],
  ['Cloud & deploy', 'AWS Lambda, API Gateway, DynamoDB, S3, Flask, Streamlit'],
  ['Data & analytics', 'Pandas, Power BI, Excel, SQLite, Matplotlib, Plotly'],
]

const experience = [
  ['2024 — Present', 'PyClub Lead', 'McPherson University', 'Founded and lead a student Python and AI community. I turn peer learning into practical sessions on Python, machine learning, and project development, and co-organised a Python Starters Hub webinar with DSN McPherson.'],
  ['2025', 'SIWES Industrial Intern', 'ipNX Nigeria · Lagos', 'Built practical exposure to technology infrastructure and operations through an industrial placement at a Nigerian internet service provider and systems integrator.'],
  ['2025', 'Data Science Practitioner', 'WorldQuant University DS Labs', 'Applied statistical analysis, NLP, and machine-learning visualisation through project notebooks, while preparing applications to Deep Learning Indaba 2026 and the AWS AI & ML Scholars Program.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function MenuIcon({ open }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span className={`absolute left-0 top-0 h-px w-5 bg-copy transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
      <span className={`absolute left-0 top-[7px] h-px w-5 bg-copy transition-opacity ${open ? 'opacity-0' : ''}`} />
      <span className={`absolute left-0 top-[14px] h-px w-5 bg-copy transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
    </span>
  )
}

function Header({ open, setOpen }) {
  const nav = ['About', 'Skills', 'Work', 'Experience', 'Contact']
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) menuButtonRef.current?.focus()
      wasOpen.current = false
      return undefined
    }

    wasOpen.current = true
    firstMenuLinkRef.current?.focus()
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open, setOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Iyinoluwa Don-Taiwo home" className="font-display text-sm font-semibold tracking-tight text-copy">ID<span className="text-electric">.</span></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-quiet transition-colors hover:text-copy">{item}</a>)}
          </nav>
          <button
            type="button"
            ref={menuButtonRef}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </header>
      {open && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink px-6 md:hidden" aria-label="Mobile navigation">
          {nav.map((item, index) => <a key={item} ref={index === 0 ? firstMenuLinkRef : undefined} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="font-display text-3xl tracking-tight text-copy">{item}</a>)}
        </nav>
      )}
    </>
  )
}

function SectionLabel({ children }) {
  return <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">{children}</p>
}

export default function Page() {
  const [open, setOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <main id="top" className="overflow-hidden">
      <Header open={open} setOpen={setOpen} />

      <section aria-labelledby="hero-title" className="relative flex min-h-[90vh] items-center border-b border-white/[0.07] px-5 pb-20 pt-36 sm:px-8 lg:min-h-screen lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_65%_at_35%_45%,black,transparent)]" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-electric/10 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-medium text-electric">
              <span className="h-2 w-2 animate-pulse rounded-full bg-electric" />
              Open to ML internships & research collaborations
            </div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-quiet">ML Engineer · Data Scientist · AI Developer</p>
            <h1 id="hero-title" className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-copy sm:text-7xl lg:text-8xl">
              Building systems<br /><span className="text-electric">that learn.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-quiet sm:text-lg">
              I work across the full ML stack — from data wrangling and model training to evaluation and cloud deployment. Computer Science student based in Lagos, Nigeria.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="rounded-lg bg-copy px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Explore selected work <Arrow /></a>
              <a href={`mailto:${links.email}`} className="rounded-lg border border-white/15 px-5 py-3 text-sm text-copy transition-colors hover:border-electric hover:text-electric">Let&apos;s talk</a>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-4 text-xs text-quiet">
            <span className="h-px w-12 bg-electric" /> Scroll to explore
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><SectionLabel>01 / About</SectionLabel><h2 id="about-title" className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy sm:text-4xl">Student, builder,<br />perpetual learner.</h2></div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="space-y-5 text-sm leading-8 text-quiet"><p>I&apos;m a Computer Science student building toward a career in ML Engineering and Data Science. I work across the full stack — data cleaning, modelling, evaluation, and cloud deployment.</p><p>Expected graduation July 2027. Based in Lagos, Nigeria.</p></div>
            <div className="rounded-2xl border border-white/10 bg-panel p-6 shadow-glow"><p className="mb-5 text-xs uppercase tracking-[0.18em] text-quiet">Current focus</p><ul className="space-y-4 text-sm text-copy">{['Machine Learning Engineering', 'Data Science & Analytics', 'Cloud-Native ML Deployment', 'Predictive Modelling'].map((item) => <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-electric" />{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-title" className="border-y border-white/[0.07] bg-panel/40 scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionLabel>02 / Toolkit</SectionLabel><h2 id="skills-title" className="sr-only">Technical toolkit</h2><div className="grid divide-y divide-white/10 rounded-2xl border border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">{skills.map(([label, items]) => <div key={label} className="p-6 lg:p-7"><h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-electric">{label}</h3><p className="text-sm leading-7 text-quiet">{items}</p></div>)}</div></div>
      </section>

      <section id="work" aria-labelledby="work-title" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><SectionLabel>03 / Selected work</SectionLabel><h2 id="work-title" className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy sm:text-4xl">Projects with purpose.</h2></div><a href={links.github} target="_blank" rel="noreferrer" className="text-sm text-quiet transition-colors hover:text-electric">View all on GitHub <Arrow /></a></div>
        <div className="space-y-5">{projects.map((project) => <article key={project.number} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-white/20 sm:p-8"><div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} /><div className="relative grid gap-8 lg:grid-cols-[80px_1fr_auto] lg:items-start"><span className="font-display text-sm text-electric">{project.number}</span><div><p className="mb-3 text-xs uppercase tracking-[0.16em] text-quiet">{project.type}</p><h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-copy">{project.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-quiet">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-quiet">{item}</span>)}</div></div><div className="flex gap-5 lg:pt-1">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-copy hover:text-electric">View code <Arrow /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm text-copy hover:text-electric">Live API <Arrow /></a>}</div></div></article>)}</div>
      </section>

      <section id="experience" aria-labelledby="experience-title" className="border-y border-white/[0.07] bg-panel/40 scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionLabel>04 / Experience</SectionLabel><h2 id="experience-title" className="sr-only">Professional experience</h2><div className="divide-y divide-white/10">{experience.map(([period, role, org, description]) => <div key={role} className="grid gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-12"><p className="text-xs text-quiet">{period}</p><div><h3 className="font-display text-lg font-semibold text-copy">{role}</h3><p className="mt-1 text-sm text-electric">{org}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-quiet">{description}</p></div></div>)}</div></div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="max-w-3xl"><SectionLabel>05 / Contact</SectionLabel><h2 id="contact-title" className="font-display text-4xl font-semibold tracking-[-0.05em] text-copy sm:text-6xl">Let&apos;s build something meaningful.</h2><p className="mt-6 max-w-xl text-base leading-8 text-quiet">Open to ML internships, research collaborations, and freelance ML engineering work. If you&apos;re building with AI — models, pipelines, APIs — reach out.</p><a href={`mailto:${links.email}`} className="mt-8 inline-flex rounded-lg bg-copy px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">{links.email}</a><div className="mt-8 flex gap-6 text-sm text-quiet"><a href={links.github} target="_blank" rel="noreferrer" className="hover:text-electric">GitHub <Arrow /></a><a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-electric">LinkedIn <Arrow /></a></div></div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-6 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-quiet"><p>© {year} Iyinoluwa Don-Taiwo. All rights reserved.</p><p>Lagos, Nigeria · Built with Next.js & Tailwind CSS</p></div></footer>
    </main>
  )
}
