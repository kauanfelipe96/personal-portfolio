import { useEffect, useRef, useState } from 'react'
import { GithubIcon, LinkedinIcon, EmailIcon } from './icons'

export function SectionHeader({ num, title }) {
  return (
    <div className="mb-11">
      <h2 className="text-veil m-0 flex items-baseline gap-4 font-display text-[clamp(30px,5vw,50px)] font-semibold leading-[1.04] tracking-[-0.02em]">
        <span className="flex-none font-mono text-[15px] font-semibold tracking-[0.04em] text-accent-bright">{num}</span>
        {title}
      </h2>
    </div>
  )
}

const BTN_BASE =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-transparent px-[22px] py-[13px] font-mono text-[13.5px] font-medium transition-all duration-[220ms] ease-[ease] hover:-translate-y-0.5'

const BTN_VARIANTS = {
  primary:
    'bg-accent font-semibold text-[#05070d] shadow-[0_8px_30px_var(--accent-soft)] hover:bg-accent-bright hover:shadow-[0_10px_40px_color-mix(in_oklch,var(--accent),transparent_55%)]',
  ghost:
    'border-glass-bd-2 bg-glass text-text backdrop-blur-[8px] hover:border-accent hover:text-accent-bright',
}

export function Button({ href, variant = 'primary', children, ...rest }) {
  return (
    <a className={`${BTN_BASE} ${BTN_VARIANTS[variant]}`} href={href} {...rest}>
      {children}
    </a>
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
    <div className="flex flex-wrap gap-[clamp(20px,4vw,44px)]">
      {stats.map((s, i) => (
        <div key={i}>
          <div className="text-veil font-display text-[clamp(26px,3.4vw,36px)] font-semibold leading-none tracking-[-0.02em]">
            <CountUp to={s.to} decimals={s.decimals} group={s.group} suffix={s.suffix} lang={lang} />
          </div>
          <div className="text-veil mt-2 max-w-[130px] font-mono text-[11.5px] text-muted">{s.label}</div>
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
  const size = compact ? 'h-10 w-10 rounded-[11px]' : 'h-11 w-11 rounded-xl'
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          className={`${size} grid place-items-center border border-glass-bd bg-glass text-muted backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-bright hover:shadow-[0_0_22px_var(--accent-soft)] [&>svg]:h-[18px] [&>svg]:w-[18px]`}
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
    <a
      className="animate-cueIn absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-[9px] text-muted opacity-0 transition-colors duration-[250ms] hover:text-accent-bright motion-reduce:animate-none motion-reduce:opacity-100 [@media(max-height:560px)]:hidden"
      href="#work"
      aria-label={label}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.24em]">{label}</span>
      <span className="flex h-[34px] w-[22px] justify-center rounded-xl border-[1.5px] border-current pt-1.5">
        <span className="animate-scrollwheel h-[7px] w-[3px] rounded-sm bg-current motion-reduce:animate-none"></span>
      </span>
    </a>
  )
}
