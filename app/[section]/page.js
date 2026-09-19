import { notFound } from 'next/navigation'
import { projects } from '../data/projects'
import { certificates } from '../data/certificates'
import { Arrow, Shell, SectionLabel, links } from '../components/site'

const skills = [
  { title: 'Languages & data', copy: 'The building blocks for thoughtful analysis and reliable systems.', items: ['Python', 'SQL', 'JavaScript', 'PHP', 'HTML / CSS'] },
  { title: 'Machine learning', copy: 'Tools for modelling, experimentation, evaluation, and AI research.', items: ['scikit-learn', 'PyTorch', 'XGBoost', 'Transformers', 'NLTK', 'GridSearchCV'] },
  { title: 'Data & visualisation', copy: 'Turning raw information into patterns people can understand.', items: ['Pandas', 'Power BI', 'Excel', 'SQLite', 'Matplotlib', 'Plotly'] },
  { title: 'Deployment & delivery', copy: 'Bringing ideas out of notebooks and into accessible products.', items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Flask', 'Streamlit'] },
]

const experience = [
  ['2024 — Present', 'PyClub Lead', 'McPherson University', 'I founded and lead a Python and AI community centred on practical learning. Through hands-on sessions, peer collaboration, and project development, I help create a welcoming space for people to build confidence with technology.'],
]

const pageMeta = {
  about: ['01 / About', 'Applied intelligence, built with care.', 'I am a Machine Learning Engineer, Data Scientist, and AI Researcher who develops systems that make complex data more useful. My work combines disciplined experimentation, clear analysis, and thoughtful product delivery.'],
  skills: ['02 / Toolkit', 'The tools behind the work.', 'A practical toolkit spanning programming, machine learning, cloud deployment, and data storytelling.'],
  work: ['03 / Selected work', 'Projects with evidence.', 'A selection of public repositories spanning computer vision, multimodal ML, language models, and predictive analytics.'],
  experience: ['04 / Experience', 'Building communities around technology.', 'Leadership and collaborative work that shape how I approach technical problems and shared learning.'],
  credentials: ['05 / Credentials', 'Continuous learning, documented.', 'A growing record of certifications, programmes, and technical learning.'],
  contact: ['06 / Contact', 'Let’s build something meaningful.', 'Open to ML internships, research collaborations, and freelance ML engineering work. If you are building with AI, reach out.'],
}

export function generateStaticParams() {
  return Object.keys(pageMeta).map((section) => ({ section }))
}

function PageIntro({ section }) {
  const [label, title, description] = pageMeta[section]
  return <section className="relative overflow-hidden border-b border-ink/10 px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:pb-32"><div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-electric/10 blur-[120px]" /><div className="relative mx-auto max-w-7xl"><SectionLabel>{label}</SectionLabel><h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-copy sm:text-7xl">{title}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-quiet sm:text-lg">{description}</p></div></section>
}

function AboutPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"><div className="rounded-3xl bg-ink p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">My approach</p><p className="mt-8 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">The goal is never just a model. It is a system that is reliable, understandable, and useful to the people it serves.</p><p className="mt-8 max-w-xl text-base leading-8 text-[#d8d2c8]">I work from problem framing and data exploration through modelling, evaluation, and delivery. Whether the medium is an image, a dataset, or language, I aim to make the outcome both technically sound and practical.</p></div><div className="rounded-3xl border border-ink/10 bg-panel p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Areas of focus</p><ul className="mt-8 space-y-6">{[['Machine learning engineering', 'Developing, evaluating, and improving production-minded ML systems.'], ['Data science & analytics', 'Finding evidence in data and translating it into clear decisions.'], ['AI research', 'Exploring vision, language, and multimodal methods with care.'], ['Applied AI products', 'Creating interfaces, APIs, and demos that make models approachable.']].map(([title, copy], index) => <li key={title} className="grid grid-cols-[28px_1fr] gap-3"><span className="text-sm font-semibold text-electric">0{index + 1}</span><div><h2 className="font-display text-xl font-semibold text-copy">{title}</h2><p className="mt-2 text-sm leading-7 text-quiet">{copy}</p></div></li>)}</ul></div></div></div>
}

function SkillsPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mb-12 grid gap-6 border-b border-ink/10 pb-12 lg:grid-cols-[0.85fr_1.15fr]"><p className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy">A practical stack for building and studying intelligent systems.</p><p className="max-w-xl text-base leading-8 text-quiet">My toolkit is organised around the work it helps me do—not a list of logos. Each area supports a different part of the journey from data to deployed experience.</p></div><div className="grid gap-5 md:grid-cols-2">{skills.map(({ title, copy, items }, index) => <article key={title} className="group rounded-3xl border border-ink/10 bg-panel p-7 transition-all hover:-translate-y-1 hover:border-electric sm:p-9"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-electric">0{index + 1}</span><span className="h-2 w-2 rounded-full bg-electric/70" /></div><h2 className="mt-12 font-display text-2xl font-semibold text-copy">{title}</h2><p className="mt-4 max-w-md text-sm leading-7 text-quiet">{copy}</p><div className="mt-7 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full bg-[#f1ece4] px-3 py-1.5 text-xs font-medium text-copy">{item}</span>)}</div></article>)}</div></div>
}

function WorkPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mb-16 grid gap-5 border-b border-ink/10 pb-16 md:grid-cols-2">
      {[['01', 'Computer vision & deep learning', 'Working with medical imaging, visual features, and transfer learning to find signal in complex data.'], ['02', 'Language & multimodal AI', 'Exploring how text, images, and language models can work together to solve practical problems.']].map(([number, title, copy]) => <div key={number} className="border-l-2 border-electric pl-5"><span className="text-xs font-medium text-electric">{number}</span><h2 className="mt-4 font-display text-xl font-semibold text-copy">{title}</h2><p className="mt-3 max-w-md text-sm leading-7 text-quiet">{copy}</p></div>)}
    </div>
    <div className="space-y-5">{projects.map((project) => <article key={project.number} className="rounded-xl border border-ink/10 bg-panel p-6 transition-colors hover:border-electric/60 sm:p-8"><div className="grid gap-8 lg:grid-cols-[64px_1fr_auto]"><span className="text-sm font-medium text-electric">{project.number}</span><div><p className="text-xs uppercase tracking-[0.16em] text-quiet">{project.type}</p><h2 className="mt-3 font-display text-2xl font-semibold text-copy sm:text-3xl">{project.title}</h2><p className="mt-4 max-w-2xl text-sm leading-8 text-quiet">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-quiet">{item}</span>)}</div></div><div className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:items-end"><a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-copy hover:text-electric">View code <Arrow /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-copy hover:text-electric">Try the demo <Arrow /></a>}</div></div></article>)}</div>
  </div>
}

function ExperiencePage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="rounded-3xl border border-ink/10 bg-panel p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Leadership</p><div className="mt-10 divide-y divide-ink/10">{experience.map(([period, role, org, description]) => <article key={role} className="grid gap-6 py-8 first:pt-0 md:grid-cols-[180px_1fr] md:gap-12"><p className="text-xs font-medium text-quiet">{period}</p><div><h2 className="font-display text-3xl font-semibold text-copy">{role}</h2><p className="mt-2 text-sm font-medium text-electric">{org}</p><p className="mt-5 max-w-2xl text-sm leading-8 text-quiet">{description}</p></div></article>)}</div></div></div>
}

function CredentialsPage() {
  const categories = [...new Set(certificates.map((certificate) => certificate.category))]
  if (categories.length === 0) {
    return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="rounded-3xl border border-ink/10 bg-panel p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Certificate library</p><p className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight text-copy">Verified credentials will be organised here by area of study, with each certificate opening directly from its card.</p></div></div>
  }
  return <div className="mx-auto max-w-7xl space-y-14 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">{categories.map((category) => <section key={category}><h2 className="font-display text-3xl font-semibold text-copy">{category}</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{certificates.filter((certificate) => certificate.category === category).map((certificate) => <a key={certificate.name} href={certificate.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-ink/10 bg-panel p-7 transition-all hover:-translate-y-1 hover:border-electric"><p className="text-xs uppercase tracking-[0.16em] text-electric">{certificate.issuer}</p><h3 className="mt-5 font-display text-2xl font-semibold text-copy">{certificate.name}</h3><p className="mt-7 text-sm font-medium text-quiet">View credential <Arrow /></p></a>)}</div></section>)}</div>
}

function ContactPage() {
  return <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-panel lg:grid-cols-[1.1fr_0.9fr]"><div className="bg-ink p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Get in touch</p><h2 className="mt-8 max-w-lg font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Have a problem worth exploring?</h2><p className="mt-6 max-w-md text-base leading-8 text-[#d8d2c8]">I&apos;m open to machine learning engineering, data science, AI research, and collaboration opportunities.</p><a href={`mailto:${links.email}`} className="mt-10 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink">Email me <Arrow /></a></div><div className="p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">Find me online</p><div className="mt-8 divide-y divide-ink/10"><a href={`mailto:${links.email}`} className="flex items-center justify-between gap-5 py-5 text-sm font-medium text-copy hover:text-electric"><span>Email</span><span className="text-right text-quiet">{links.email} <Arrow /></span></a><a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-medium text-copy hover:text-electric"><span>GitHub</span><span className="text-quiet">IyinoluwaDon <Arrow /></span></a><a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-medium text-copy hover:text-electric"><span>LinkedIn</span><span className="text-quiet">Iyinoluwa Don-Taiwo <Arrow /></span></a><a href={links.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-5 py-5 text-sm font-medium text-copy hover:text-electric"><span>X</span><span className="text-quiet">@IyinoluwaDon <Arrow /></span></a></div><a href={links.resume} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex text-sm font-semibold text-electric hover:text-copy">View Resume <Arrow /></a></div></div></div>
}

export default async function SectionPage({ params }) {
  const { section } = await params
  if (!pageMeta[section]) notFound()
  const content = { about: <AboutPage />, skills: <SkillsPage />, work: <WorkPage />, experience: <ExperiencePage />, credentials: <CredentialsPage />, contact: <ContactPage /> }[section]
  return <Shell><main><PageIntro section={section} />{content}</main></Shell>
}
