import { useEffect, useState } from 'react'
import { useLang } from '../i18n/useLang'
import { WorkIcon, SkillsIcon, EducationIcon, ContactIcon, FlagBR, FlagUS } from './icons'
import logo from '../assets/images/logo.jpg'

const ICONS = {
  work: WorkIcon,
  skills: SkillsIcon,
  education: EducationIcon,
  contact: ContactIcon,
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const items = [
    { id: 'work', label: t('nav.work') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const ids = items.map((i) => i.id)
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + window.innerHeight * 0.34
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= pos) current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt')

  return (
    <header className="navbar-wrap">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="nb-brand" href="#top" title={t('name') || 'Kauan Felipe'}>
          <img className="brand-logo" src={logo} alt={t('name') || 'Kauan Felipe'} width="36" height="36" />
        </a>
        <span className="nb-divider"></span>
        <div className="nb-links">
          {items.map((it) => {
            const Icon = ICONS[it.id]
            return (
              <a
                key={it.id}
                className={`nb-link ${active === it.id ? 'active' : ''}`}
                href={`#${it.id}`}
                title={it.label}
              >
                <span className="nb-icon"><Icon /></span>
                <span className="nb-label">{it.label}</span>
              </a>
            )
          })}
        </div>
        <span className="nb-divider"></span>
        <div className="nb-actions">
          <button
            className="nb-flag"
            onClick={toggleLang}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={lang === 'pt' ? 'English' : 'Português'}
          >
            {lang === 'pt' ? <FlagBR /> : <FlagUS />}
          </button>
        </div>
      </nav>
    </header>
  )
}
