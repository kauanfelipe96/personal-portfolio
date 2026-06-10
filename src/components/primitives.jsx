import { useEffect, useRef, useState } from 'react'
import { GithubIcon, LinkedinIcon, EmailIcon } from './icons'

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot"></span>
      {children}
    </span>
  )
}

export function SectionHeader({ num, title }) {
  return (
    <div className="sec-head">
      <h2 className="sec-title">
        <span className="sec-num">{num}</span>
        {title}
      </h2>
    </div>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reveal = () => setVis(true)
    const rect = el.getBoundingClientRect()
    if (rect.top < (window.innerHeight || 800) * 1.05) {
      reveal()
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          reveal()
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    const fb = setTimeout(reveal, 2600)
    return () => {
      io.disconnect()
      clearTimeout(fb)
    }
  }, [])
  return (
    <div ref={ref} className={`reveal ${vis ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function CountUp({ to, decimals = 0, group = false, suffix = '', lang }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const fmt = (n) =>
    new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: group,
    }).format(n)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let cancelled = false
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        if (cancelled) return
        const k = Math.min(1, (now - t0) / 1500)
        const e = 1 - Math.pow(1 - k, 3)
        setVal(to * e)
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const rect = el.getBoundingClientRect()
    if (rect.top < (window.innerHeight || 800) * 1.1) {
      run()
      return () => {
        cancelled = true
        if (raf) cancelAnimationFrame(raf)
      }
    }
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          io.disconnect()
          run()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => {
      cancelled = true
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [to, lang])
  return (
    <span ref={ref}>
      {fmt(val)}
      {suffix}
    </span>
  )
}

export function Stats({ stats, lang }) {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat-val">
            <CountUp to={s.to} decimals={s.decimals} group={s.group} suffix={s.suffix} lang={lang} />
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function SocialRow({ t, compact }) {
  const links = [
    { label: 'GitHub', href: t.github, icon: <GithubIcon /> },
    { label: 'LinkedIn', href: t.linkedin, icon: <LinkedinIcon /> },
    { label: 'Email', href: `mailto:${t.email}`, icon: <EmailIcon /> },
  ]
  return (
    <div className={`social-row ${compact ? 'compact' : ''}`}>
      {links.map((l) => (
        <a
          key={l.label}
          className="social-icon"
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          title={l.label}
        >
          {l.icon}
        </a>
      ))}
    </div>
  )
}

export function ScrollCue({ label }) {
  return (
    <a className="scroll-cue" href="#work" aria-label={label}>
      <span className="scroll-cue-label">{label}</span>
      <span className="scroll-cue-mouse">
        <span className="scroll-cue-wheel"></span>
      </span>
    </a>
  )
}
