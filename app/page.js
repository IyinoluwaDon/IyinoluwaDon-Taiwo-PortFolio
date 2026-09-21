import { projects } from './data/projects'
import { Arrow, Footer, Header, SectionLabel, links } from './components/site'

const focusAreas = [
  ['Vision systems', 'Medical imaging, visual features, and deep learning.'],
  ['Language models', 'Fine-tuning, evaluation, and culturally grounded NLP.'],
  ['Applied data', 'Experiments, analysis, and products people can use.'],
]

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section aria-labelledby="hero-title" className="relative isolate border-b border-ink/10 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_74%_35%,rgba(184,74,50,0.18),transparent_25rem),linear-gradient(120deg,rgba(255,255,255,0.72),transparent_60%)] ambient-pulse" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:min-h-[660px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="pb-2">
            <p className="reveal-up mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric" style={{ '--reveal-delay': '60ms' }}>Machine learning engineer · Data scientist · AI researcher</p>
            <h1 id="hero-title" className="reveal-up max-w-4xl font-display text-[clamp(3.2rem,7.3vw,6.75rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-copy" style={{ '--reveal-delay': '140ms' }}>Making data<br />do <span className="relative inline-block text-electric">useful work<span aria-hidden="true" className="absolute -bottom-2 left-1 h-px w-[92%] bg-electric/40" /></span>.</h1>
            <p className="reveal-up mt-9 max-w-xl text-base leading-8 text-quiet sm:text-lg" style={{ '--reveal-delay': '240ms' }}>I develop machine-learning systems that move from rigorous experimentation to practical, inspectable tools - across computer vision, language models, multimodal AI, and data products.</p>
            <div className="reveal-up mt-10 flex flex-wrap gap-3" style={{ '--reveal-delay': '320ms' }}>
              <a href="/work" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Explore selected work <Arrow /></a>
              <a href={links.resume} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink/20 bg-white/50 px-5 py-3 text-sm font-semibold text-copy transition-colors hover:border-electric hover:text-electric">View resume <Arrow /></a>
            </div>
          </div>

          <figure className="reveal-up relative mx-auto flex w-full max-w-md flex-col items-center pb-3 lg:items-end" style={{ '--reveal-delay': '220ms' }}>
            <div aria-hidden="true" className="absolute left-1/2 top-[13%] -z-10 h-64 w-64 -translate-x-1/2 sm:h-80 sm:w-80 lg:left-auto lg:right-8 lg:translate-x-0"><span className="slow-orbit absolute inset-0 rounded-full border border-electric/25 border-dashed" /></div>
            <div className="soft-float relative rounded-full bg-panel p-2 shadow-[0_20px_60px_rgba(36,33,30,0.13)]">
            <img src="/portrait.jpg" alt="Iyinoluwa Don-Taiwo" style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
            }}
/>          <span aria-hidden="true" className="absolute bottom-5 right-3 grid h-12 w-12 place-items-center rounded-full bg-electric text-lg text-white shadow-lg">↗</span>
            </div>
            <figcaption className="mt-6 flex w-full max-w-xs items-center justify-between border-t border-ink/10 pt-4 text-xs text-quiet"><span>Iyinoluwa Don-Taiwo</span><span>Lagos, Nigeria</span></figcaption>
          </figure>






        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24">
          <div><SectionLabel>01 / How I work</SectionLabel><h2 className="max-w-sm font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-copy sm:text-5xl">Research-minded.<br />Delivery-aware.</h2></div>
          <div>
            <p className="max-w-2xl text-lg leading-9 text-quiet">The throughline in my work is clarity: frame the problem, make the data trustworthy, evaluate the model honestly, and present the result in a form that people can understand and use.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{focusAreas.map(([title, copy], index) => <article key={title} className="lift-card border-t border-ink/15 pt-4"><span className="text-xs font-semibold text-electric">0{index + 1}</span><h3 className="mt-7 font-display text-xl font-semibold text-copy">{title}</h3><p className="mt-3 text-sm leading-7 text-quiet">{copy}</p></article>)}</div>
            <a href="/about" className="mt-10 inline-flex text-sm font-semibold text-electric transition-colors hover:text-copy">More about my approach <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-[#efe9df]/60 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><SectionLabel>02 / Selected work</SectionLabel><h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-copy sm:text-5xl">Work with evidence.</h2></div><a href="/work" className="text-sm font-medium text-quiet transition-colors hover:text-electric">See all projects <Arrow /></a></div>
          <div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.number} className="lift-card group flex min-h-[390px] flex-col rounded-2xl border border-ink/10 bg-panel p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-electric">{project.number}</span>{project.result && <span className="rounded-full bg-[#f2e7e0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-electric">{project.result}</span>}</div><p className="mt-9 text-[11px] font-medium uppercase tracking-[0.14em] text-quiet">{project.type}</p><h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-copy">{project.title}</h3><p className="mt-4 text-sm leading-7 text-quiet">{project.description}</p><a href="/work" className="mt-auto pt-8 text-sm font-semibold text-electric">Inspect project <Arrow /></a></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 sm:px-12 sm:py-16"><div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-electric/35" /><SectionLabel>03 / Let&apos;s connect</SectionLabel><h2 className="relative max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">Have a problem worth exploring?</h2><p className="relative mt-6 max-w-xl text-base leading-8 text-[#d8d2c8]">I&apos;m open to ML engineering, data science, AI research, and collaborative opportunities.</p><div className="relative mt-9 flex flex-wrap gap-3"><a href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">Start a conversation <Arrow /></a><a href={links.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-electric hover:text-electric">GitHub <Arrow /></a></div></div></section>
      <Footer />
    </main>
  )
}
