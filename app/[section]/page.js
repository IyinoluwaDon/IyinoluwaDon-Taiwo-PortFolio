import { notFound } from 'next/navigation'
import { certificates } from '../data/certificates'
import { projects } from '../data/projects'
import { Arrow, Shell, SectionLabel, links } from '../components/site'

const skills = [
  { title: 'Machine learning & AI', copy: 'Building, tuning, and evaluating models for vision, language, and predictive tasks.', items: ['PyTorch', 'scikit-learn', 'XGBoost', 'LightGBM', 'Transformers', 'PEFT'] },
  { title: 'Data & analysis', copy: 'Preparing data, exploring evidence, and communicating it clearly.', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'SciPy', 'Power BI', 'Plotly'] },
  { title: 'Geospatial & research', copy: 'Working with spatial data and experimental workflows.', items: ['ArcGIS Pro', 'Google Earth Engine', 'Sentinel-2', 'LSTM', 'Jupyter', 'Git / GitHub'] },
  { title: 'Product & deployment', copy: 'Turning models into useful, accessible interfaces and services.', items: ['Streamlit', 'FastAPI', 'Flask', 'Django', 'Supabase', 'Azure AI Services'] },
]

const experience = [
  {
    period: 'May 2026 - Present',
    role: 'Geospatial Data Science Intern',
    organisation: 'Interspatial Technologies (SIWES)',
    location: 'Ikeja, Lagos, Nigeria',
    highlights: [
      'Built Python-based street-name verification scripts with pandas, NumPy, and ArcGIS Pro, reducing manual GIS quality-assurance work and catching location errors across team datasets.',
      'Improved NDVI deforestation forecasting from 0.073 MAE / 0.092 RMSE to 0.066 MAE / 0.080 RMSE by engineering seasonal features for an LSTM trained on 2018-2026 Sentinel-2 imagery over the Omo Forest Reserve.',
    ],
  },
  {
    period: 'June 2026 - Present',
    role: 'AI Research Fellow',
    organisation: 'TRI AI Saturdays, Cohort 10',
    location: 'Google DeepMind AI Research Foundations curriculum, in partnership with University College London',
    highlights: [
      'Selected for a 16+ week applied LLM research fellowship and led the nine-person Team Ethopie through the capstone research project and public showcase.',
      'Directed the fine-tuning strategy for Gemma 2 2B Instruct on a folktale-generation benchmark, placing third among cohort teams.',
    ],
  },
  {
    period: 'February 2025 - Present',
    role: 'Lead',
    organisation: 'PyClub McPherson',
    location: 'McPherson University',
    highlights: [
      'Founded and lead a 100+ member Python and AI community; facilitated 20+ workshops and mentored 30+ beginners in data science and full-stack development.',
    ],
  },
  {
    period: 'October 2025 - Present',
    role: 'Campus Ambassador',
    organisation: 'Data Science Nigeria',
    location: 'McPherson University',
    highlights: [
      'Drive AI and data-science literacy among 500+ students, connecting learners to DSN scholarships, competitions, and internship pathways.',
    ],
  },
]

const pageMeta = {
  about: ['01 / About', 'Applied intelligence, built with care.', 'I am a Machine Learning Engineer, Data Scientist, and AI Researcher who turns complex data into clear, useful systems. My work brings together careful experimentation, honest evaluation, and thoughtful delivery.'],
  skills: ['02 / Toolkit', 'Tools in service of the work.', 'A practical toolkit for researching, developing, and sharing data-driven systems - organised by what each tool makes possible.'],
  work: ['03 / Selected work', 'Work you can inspect.', 'Public projects across medical imaging, multimodal machine learning, and language-model adaptation, each with a repository and, where available, a live demo.'],
  experience: ['04 / Experience', 'Technical work with real-world context.', 'Research, geospatial data science, and community leadership that shape how I approach problems and collaborate with others.'],
  credentials: ['05 / Credentials', 'Continuous learning, documented.', 'Credentials, programmes, and technical learning. When a public verification link is available, it opens directly from the card.'],
  contact: ['06 / Contact', 'Let’s build something meaningful.', 'Open to ML engineering, data science, AI research, and collaborative opportunities. If you are building with AI, reach out.'],
}

export function generateStaticParams() {
  return Object.keys(pageMeta).map((section) => ({ section }))
}

function PageIntro({ section }) {
  const [label, title, description] = pageMeta[section]
  return <section className="relative isolate overflow-hidden border-b border-ink/10 px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"><div aria-hidden="true" className="absolute -right-20 top-8 -z-10 h-72 w-72 rounded-full border border-electric/20 sm:h-96 sm:w-96" /><div aria-hidden="true" className="absolute -right-8 top-20 -z-10 h-72 w-72 rounded-full bg-electric/10 blur-[100px]" /><div className="mx-auto max-w-7xl"><SectionLabel>{label}</SectionLabel><h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-copy sm:text-7xl">{title}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-quiet sm:text-lg">{description}</p></div></section>
}

function AboutPage() {
  const principles = [
    ['Frame the question', 'A useful model starts with a precise problem, meaningful constraints, and data worth trusting.'],
    ['Make evidence visible', 'I favour transparent evaluation, clear metrics, and explanations that hold up beyond a notebook.'],
    ['Deliver with the user in mind', 'Demos, APIs, and interfaces make technical work easier to test, understand, and act on.'],
  ]
  return <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"><section className="rounded-[2rem] bg-ink p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">My approach</p><h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">The point is not just a model. It is a result people can rely on.</h2><p className="mt-8 max-w-xl text-base leading-8 text-[#d8d2c8]">I work from problem framing and data exploration through modelling, evaluation, and delivery. Whether the material is medical imagery, geospatial data, or language, I aim for outcomes that are technically sound and practical.</p></section><section className="rounded-[2rem] border border-ink/10 bg-panel p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Working principles</p><ol className="mt-8 space-y-7">{principles.map(([title, copy], index) => <li key={title} className="grid grid-cols-[2rem_1fr] gap-3"><span className="text-xs font-semibold text-electric">0{index + 1}</span><div><h2 className="font-display text-xl font-semibold text-copy">{title}</h2><p className="mt-2 text-sm leading-7 text-quiet">{copy}</p></div></li>)}</ol></section></div></div>
}

function SkillsPage() {
  return <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mb-12 grid gap-6 border-b border-ink/10 pb-12 lg:grid-cols-[0.85fr_1.15fr]"><h2 className="font-display text-3xl font-semibold tracking-[-0.045em] text-copy">A practical stack for building and studying intelligent systems.</h2><p className="max-w-xl text-base leading-8 text-quiet">This is not a logo wall. Each group reflects a part of the path from raw data to a decision, model, or usable product.</p></div><div className="grid gap-5 md:grid-cols-2">{skills.map(({ title, copy, items }, index) => <article key={title} className="rounded-2xl border border-ink/10 bg-panel p-7 transition-all hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_16px_36px_rgba(36,33,30,0.06)] sm:p-9"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-electric">0{index + 1}</span><span aria-hidden="true" className="h-2 w-2 rounded-full bg-electric/70" /></div><h2 className="mt-12 font-display text-2xl font-semibold text-copy">{title}</h2><p className="mt-4 text-sm leading-7 text-quiet">{copy}</p><div className="mt-7 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full bg-[#f1ece4] px-3 py-1.5 text-xs font-medium text-copy">{item}</span>)}</div></article>)}</div></div>
}

function WorkPage() {
  return <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mb-14 grid gap-5 md:grid-cols-3">{[['01', 'See the evidence', 'Public repositories make the technical choices and implementation easy to inspect.'], ['02', 'Measure what matters', 'Metrics and results are included where the work supports a responsible claim.'], ['03', 'Make it usable', 'Live interfaces translate a model or experiment into something others can explore.']].map(([number, title, copy]) => <article key={number} className="border-t border-ink/15 pt-4"><span className="text-xs font-semibold text-electric">{number}</span><h2 className="mt-6 font-display text-xl font-semibold text-copy">{title}</h2><p className="mt-3 text-sm leading-7 text-quiet">{copy}</p></article>)}</div><div className="space-y-5">{projects.map((project) => <article key={project.number} className="rounded-2xl border border-ink/10 bg-panel p-6 transition-all hover:border-electric/60 sm:p-8"><div className="grid gap-7 lg:grid-cols-[4rem_1fr_auto]"><span className="text-sm font-semibold text-electric">{project.number}</span><div><div className="flex flex-wrap items-center gap-3"><p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">{project.type}</p>{project.result && <span className="rounded-full bg-[#f2e7e0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-electric">{project.result}</span>}</div><h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-copy sm:text-3xl">{project.title}</h2><p className="mt-4 max-w-2xl text-sm leading-8 text-quiet">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-quiet">{item}</span>)}</div></div><div className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:items-end"><a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-copy transition-colors hover:text-electric">View code <Arrow /></a>{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-copy transition-colors hover:text-electric">Try the demo <Arrow /></a>}</div></div></article>)}</div></div>
}

function ExperiencePage() {
  return <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="rounded-[2rem] border border-ink/10 bg-panel p-7 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Experience & leadership</p><div className="mt-8 divide-y divide-ink/10">{experience.map((item) => <article key={`${item.role}-${item.organisation}`} className="grid gap-5 py-9 first:pt-0 md:grid-cols-[11rem_1fr] md:gap-12"><p className="text-xs font-semibold leading-6 text-quiet">{item.period}</p><div><h2 className="font-display text-2xl font-semibold tracking-[-0.035em] text-copy sm:text-3xl">{item.role}</h2><p className="mt-2 text-sm font-semibold text-electric">{item.organisation}</p><p className="mt-1 text-xs leading-6 text-quiet">{item.location}</p><ul className="mt-5 space-y-3">{item.highlights.map((highlight) => <li key={highlight} className="grid grid-cols-[0.75rem_1fr] gap-3 text-sm leading-7 text-quiet"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-electric" />{highlight}</li>)}</ul></div></article>)}</div></div></div>
}

function CredentialsPage() {
  const categories = [...new Set(certificates.map((certificate) => certificate.category))]
  return <div className="mx-auto max-w-7xl space-y-14 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">{categories.map((category) => <section key={category}><h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy">{category}</h2><div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{certificates.filter((certificate) => certificate.category === category).map((certificate) => <article key={certificate.name} className="flex min-h-[220px] flex-col rounded-2xl border border-ink/10 bg-panel p-7"><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-electric">{certificate.issuer}</p><h3 className="mt-5 font-display text-xl font-semibold leading-tight text-copy">{certificate.name}</h3>{certificate.date && <p className="mt-3 text-xs text-quiet">{certificate.date}</p>}<div className="mt-auto pt-8">{certificate.url ? <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-electric transition-colors hover:text-copy">View credential <Arrow /></a> : <p className="text-sm font-medium text-quiet">Verification link coming soon</p>}</div></article>)}</div></section>)}</div>
}

function ContactPage() {
  return <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-32"><div className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-panel lg:grid-cols-[1.05fr_0.95fr]"><section className="relative isolate overflow-hidden bg-ink p-8 sm:p-12"><div aria-hidden="true" className="absolute -bottom-16 -left-16 -z-10 h-64 w-64 rounded-full border border-electric/40" /><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Get in touch</p><h2 className="mt-8 max-w-lg font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">Have a problem worth exploring?</h2><p className="mt-6 max-w-md text-base leading-8 text-[#d8d2c8]">I&apos;m open to machine learning engineering, data science, AI research, and collaboration opportunities.</p><a href={`mailto:${links.email}`} className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Email me <Arrow /></a></section><section className="p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Find me online</p><div className="mt-8 divide-y divide-ink/10"><a href={`mailto:${links.email}`} className="flex items-center justify-between gap-5 py-5 text-sm font-semibold text-copy transition-colors hover:text-electric"><span>Email</span><span className="text-right text-quiet">{links.email} <Arrow /></span></a><a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-semibold text-copy transition-colors hover:text-electric"><span>GitHub</span><span className="text-quiet">IyinoluwaDon <Arrow /></span></a><a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-semibold text-copy transition-colors hover:text-electric"><span>LinkedIn</span><span className="text-quiet">Iyinoluwa Don-Taiwo <Arrow /></span></a><a href={links.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-semibold text-copy transition-colors hover:text-electric"><span>X</span><span className="text-quiet">@IyinoluwaDon <Arrow /></span></a></div><a href={links.resume} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex text-sm font-semibold text-electric transition-colors hover:text-copy">View resume <Arrow /></a></section></div></div>
}

export default async function SectionPage({ params }) {
  const { section } = await params
  if (!pageMeta[section]) notFound()
  const content = { about: <AboutPage />, skills: <SkillsPage />, work: <WorkPage />, experience: <ExperiencePage />, credentials: <CredentialsPage />, contact: <ContactPage /> }[section]
  return <Shell><main><PageIntro section={section} />{content}</main></Shell>
}
