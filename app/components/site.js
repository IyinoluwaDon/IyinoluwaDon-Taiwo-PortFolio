'use client'

import { useEffect, useRef, useState } from 'react'

export const links = {
  email: 'iyinoluwadontaiwo@gmail.com',
  github: 'https://github.com/IyinoluwaDon',
  linkedin: 'https://www.linkedin.com/in/iyinoluwa-don-taiwo',
  x: 'https://x.com/IyinoluwaDon',
  resume: 'https://drive.google.com/file/d/1tfqpzJGjKhv0-8xrAHvL8APg215-noPx/view?usp=drive_link',
  photo: '/iyinoluwa-don-taiwo.jpeg',
}

export function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export function SectionLabel({ children }) {
  return <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric">{children}</p>
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

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)
  const wasOpen = useRef(false)
  const nav = [['About', '/about'], ['Skills', '/skills'], ['Work', '/work'], ['Experience', '/experience'], ['Credentials', '/credentials'], ['Contact', '/contact']]

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
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-[#f6f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" aria-label="Iyinoluwa Don-Taiwo home" className="group flex items-center gap-3">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 bg-panel font-display text-xs font-bold tracking-[-0.1em] text-copy transition-colors group-hover:border-electric group-hover:text-electric">ID</span>
            <span className="hidden font-display text-xs font-semibold leading-tight tracking-[-0.02em] text-copy sm:block">Iyinoluwa<br /><span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-quiet">Don-Taiwo</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-xs text-quiet transition-colors hover:text-copy">{label}</a>)}
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="rounded-full border border-electric/40 px-4 py-2 text-xs text-electric transition-colors hover:bg-electric hover:text-ink">View Resume <Arrow /></a>
          </nav>
          <button type="button" ref={menuButtonRef} className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 md:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
            <MenuIcon open={open} />
          </button>
        </div>
      </header>
      {open && <nav id="mobile-navigation" className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#f6f3ee] px-6 md:hidden" aria-label="Mobile navigation">
        {nav.map(([label, href], index) => <a key={label} ref={index === 0 ? firstMenuLinkRef : undefined} href={href} onClick={() => setOpen(false)} className="font-display text-3xl tracking-tight text-copy">{label}</a>)}
        <a href={links.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-4 rounded-full border border-electric/40 px-5 py-2 text-sm text-electric">View Resume <Arrow /></a>
      </nav>}
    </>
  )
}

export function Footer() {
  return <footer className="border-t border-ink/10 px-5 py-6 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-quiet"><p>© {new Date().getFullYear()} Iyinoluwa Don-Taiwo. All rights reserved.</p><p>Lagos, Nigeria</p></div></footer>
}

export function Shell({ children }) {
  return <><Header />{children}<Footer /></>
}
