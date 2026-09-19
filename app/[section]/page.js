import { notFound } from 'next/navigation'
import { projects } from '../data/projects'
import { Arrow, Shell, SectionLabel, links } from '../components/site'

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

const pageMeta = {
  about: ['01 / About', 'Student, builder, perpetual learner.', 'I am a Computer Science student building toward a career in ML Engineering and Data Science. I move from messy data to evaluated models and deployable products.'],
  skills: ['02 / Toolkit', 'The tools behind the work.', 'A practical toolkit spanning programming, machine learning, cloud deployment, and data storytelling.'],
  work: ['03 / Selected work', 'Projects with evidence.', 'A selection of public repositories spanning computer vision, multimodal ML, language models, and predictive analytics.'],
  experience: ['04 / Experience', 'Learning by building with others.', 'Leadership, industrial exposure, and applied data science practice shaping how I approach technical work.'],
  contact: ['05 / Contact', 'Let’s build something meaningful.', 'Open to ML internships, research collaborations, and freelance ML engineering work. If you are building with AI, reach out.'],
}

export function generateStaticParams() {
  return Object.keys(pageMeta).map((section) => ({ section }))
}

function PageIntro({ section }) {
  const [label, title, description] = pageMeta[section]
  return <section className="relative overflow-hidden border-b border-white/[0.07] px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:pb-32"><div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-electric/10 blur-[120px]" /><div className="relative mx-auto max-w-7xl"><SectionLabel>{label}</SectionLabel><h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-copy sm:text-7xl">{title}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-quiet sm:text-lg">{description}</p></div></section>
}

function AboutPage() {
  return <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32"><div className="rounded-2xl border border-white/10 bg-panel p-8"><p className="text-xs uppercase tracking-[0.16em] text-electric">How I work</p><p className="mt-6 text-lg leading-9 text-copy">I like the space between an idea and a useful system: understanding the data, choosing a model carefully, testing assumptions, and making the result usable.</p></div><div className="rounded-2xl border border-white/10 p-8"><p className="text-xs uppercase tracking-[0.16em] text-electric">Current focus</p><ul className="mt-6 space-y-5 text-sm text-copy">{['Machine Learning Engineering', 'Data Science & Analytics', 'Cloud-Native ML Deployment', 'Predictive Modelling'].map((item) => <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-electric" />{item}</li>)}</ul><p className="mt-8 text-sm leading-7 text-quiet">Expected graduation: July 2027<br />Based in Lagos, Nigeria.</p></div></div>
}

function SkillsPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-5 md:grid-cols-2">{skills.map(([label, items], index) => <div key={label} className="rounded-2xl border border-white/10 bg-panel p-8"><span className="text-sm text-electric">0{index + 1}</span><h2 className="mt-10 font-display text-2xl font-semibold text-copy">{label}</h2><p className="mt-5 max-w-md text-sm leading-8 text-quiet">{items}</p></div>)}</div></div>
}

function WorkPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mb-16 grid gap-5 border-b border-white/10 pb-16 md:grid-cols-3">
      {[['01', 'Computer vision', 'Imaging and visual signals, from preparation through evaluation.'], ['02', 'Language & multimodal AI', 'Text, image, and language-model work grounded in real datasets.'], ['03', 'Useful delivery', 'Clear demos, APIs, and interfaces that make technical work approachable.']].map(([number, title, copy]) => <div key={number} className="border-l border-electric/60 pl-5"><span className="text-xs font-medium text-electric">{number}</span><h2 className="mt-4 font-display text-xl font-semibold text-copy">{title}</h2><p className="mt-3 text-sm leading-7 text-quiet">{copy}</p></div>)}
    </div>
    <div className="space-y-5">{projects.map((project) => <article key={project.number} className="rounded-xl border border-white/10 bg-panel p-6 transition-colors hover:border-electric/60 sm:p-8"><div className="grid gap-8 lg:grid-cols-[64px_1fr_auto]"><span className="text-sm font-medium text-electric">{project.number}</span><div><p className="text-xs uppercase tracking-[0.16em] text-quiet">{project.type}</p><h2 className="mt-3 font-display text-2xl font-semibold text-copy sm:text-3xl">{project.title}</h2><p className="mt-4 max-w-2xl text-sm leading-8 text-quiet">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-quiet">{item}</span>)}</div></div><div className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:items-end"><a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-copy hover:text-electric">View code <Arrow /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-copy hover:text-electric">Try the demo <Arrow /></a>}</div></div></article>)}</div>
  </div>
}

function ExperiencePage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="divide-y divide-white/10">{experience.map(([period, role, org, description]) => <article key={role} className="grid gap-5 py-10 md:grid-cols-[180px_1fr] md:gap-12"><p className="text-xs text-quiet">{period}</p><div><h2 className="font-display text-2xl font-semibold text-copy">{role}</h2><p className="mt-2 text-sm text-electric">{org}</p><p className="mt-5 max-w-2xl text-sm leading-8 text-quiet">{description}</p></div></article>)}</div></div>
}

function ContactPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="max-w-3xl rounded-2xl border border-white/10 bg-panel p-8 sm:p-12"><p className="max-w-xl text-base leading-8 text-quiet">Open to ML internships, research collaborations, and freelance ML engineering work. If you are building with AI - models, pipelines, or APIs - reach out.</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${links.email}`} className="inline-flex rounded-lg bg-copy px-5 py-3 text-sm font-semibold text-ink">{links.email}</a><a href={links.resume} target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-white/15 px-5 py-3 text-sm text-copy hover:border-electric hover:text-electric">View resume <Arrow /></a></div><div className="mt-8 flex gap-6 text-sm text-quiet"><a href={links.github} target="_blank" rel="noreferrer" className="hover:text-electric">GitHub <Arrow /></a><a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-electric">LinkedIn <Arrow /></a></div></div></div>
}

export default async function SectionPage({ params }) {
  const { section } = await params
  if (!pageMeta[section]) notFound()
  const content = { about: <AboutPage />, skills: <SkillsPage />, work: <WorkPage />, experience: <ExperiencePage />, contact: <ContactPage /> }[section]
  return <Shell><main><PageIntro section={section} />{content}</main></Shell>
}
