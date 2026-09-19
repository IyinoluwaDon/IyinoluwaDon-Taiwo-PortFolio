import { projects } from './data/projects'
import { Arrow, Footer, Header, SectionLabel, links } from './components/site'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <section aria-labelledby="hero-title" className="relative flex min-h-[88vh] items-center border-b border-white/[0.07] px-5 pb-20 pt-36 sm:px-8 lg:min-h-[92vh] lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_65%_at_35%_45%,black,transparent)]" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-electric/10 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-7xl"><div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3 text-xs font-medium text-electric"><span className="h-2 w-2 animate-pulse rounded-full bg-electric" />Open to ML internships & research collaborations</div>
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-quiet">ML Engineer · Data Scientist · AI Developer</p>
          <h1 id="hero-title" className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-copy sm:text-7xl lg:text-8xl">Building systems<br /><span className="text-electric">that learn.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-quiet sm:text-lg">I work across the full ML stack - from data wrangling and model training to evaluation and cloud deployment. Computer Science student based in Lagos, Nigeria.</p>
          <div className="mt-10 flex flex-wrap gap-3"><a href="/work" className="rounded-lg bg-copy px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Explore selected work <Arrow /></a><a href={links.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-sm text-copy transition-colors hover:border-electric hover:text-electric">Download résumé <Arrow /></a></div>
        </div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>01 / About</SectionLabel><h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy sm:text-4xl">A compact view<br />of the work.</h2></div><div className="grid gap-6 sm:grid-cols-2"><a href="/about" className="rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-electric"><p className="mb-3 text-xs uppercase tracking-[0.16em] text-electric">About me</p><p className="text-sm leading-7 text-quiet">Student, builder, and perpetual learner working across machine learning and data products. <Arrow /></p></a><a href="/skills" className="rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-electric"><p className="mb-3 text-xs uppercase tracking-[0.16em] text-electric">Toolkit</p><p className="text-sm leading-7 text-quiet">Python, ML frameworks, cloud services, and analytics tools. <Arrow /></p></a></div></div>
      </section>

      <section className="border-y border-white/[0.07] bg-panel/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><SectionLabel>02 / Selected work</SectionLabel><h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-copy sm:text-4xl">Projects you can inspect.</h2></div><a href="/work" className="text-sm text-quiet hover:text-electric">See every project <Arrow /></a></div><div className="grid gap-5 lg:grid-cols-3">{projects.slice(0, 3).map((project) => <a href="/work" key={project.number} className="rounded-xl border border-white/10 bg-panel p-6 transition-colors hover:border-electric"><span className="text-sm font-medium text-electric">{project.number}</span><p className="mt-7 text-[11px] uppercase tracking-[0.14em] text-quiet">{project.type}</p><h3 className="mt-3 font-display text-xl font-semibold text-copy">{project.title}</h3><p className="mt-4 text-sm leading-7 text-quiet">{project.description}</p><span className="mt-6 block text-sm font-medium text-electric">See project <Arrow /></span></a>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="max-w-3xl"><SectionLabel>03 / Next step</SectionLabel><h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-copy sm:text-6xl">Let&apos;s build something meaningful.</h2><p className="mt-6 max-w-xl text-base leading-8 text-quiet">Explore the full story, or get in touch about ML internships, research collaborations, and freelance engineering work.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/contact" className="rounded-lg bg-copy px-5 py-3 text-sm font-semibold text-ink">Start a conversation <Arrow /></a><a href={links.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-sm text-copy hover:border-electric hover:text-electric">Download résumé <Arrow /></a></div></div></section>
      <Footer />
    </main>
  )
}
