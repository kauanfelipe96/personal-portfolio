import { useEffect, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { useLang } from '../i18n/useLang'

const SECTIONS = [
  { id: 'experience', key: 'nav.experience' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'education', key: 'nav.education' },
  { id: 'contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cvHref = `${import.meta.env.BASE_URL}Kauan-Felipe-CV-${lang === 'pt' ? 'PT' : 'EN'}.pdf`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-bg/70 border-b border-white/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-bg text-sm"
            style={{ background: 'var(--accent)' }}
            aria-hidden="true"
          >
            KF
          </span>
          <span className="hidden sm:inline font-mono text-xs text-muted group-hover:text-text transition-colors">
            kauanfelipe96
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-2 text-sm text-muted hover:text-text transition-colors"
            >
              {t(s.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center font-mono text-xs">
            <button
              type="button"
              onClick={() => setLang('pt')}
              aria-pressed={lang === 'pt'}
              aria-label="Português"
              className={`px-2 py-1 rounded-l border border-white/10 ${
                lang === 'pt' ? 'text-bg' : 'text-muted hover:text-text'
              }`}
              style={lang === 'pt' ? { background: 'var(--accent)' } : undefined}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              aria-label="English"
              className={`px-2 py-1 rounded-r border border-l-0 border-white/10 ${
                lang === 'en' ? 'text-bg' : 'text-muted hover:text-text'
              }`}
              style={lang === 'en' ? { background: 'var(--accent)' } : undefined}
            >
              EN
            </button>
          </div>

          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/15 text-sm text-text hover:border-accent hover:text-accent-bright transition-colors"
          >
            <FiDownload className="text-base" />
            {t('nav.downloadCv')}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 text-muted hover:text-text"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-bg/95 backdrop-blur-md">
          <ul className="px-5 py-3 flex flex-col gap-1 max-w-container mx-auto">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted hover:text-text"
                >
                  {t(s.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 py-2 text-sm text-text"
              >
                <FiDownload /> {t('nav.downloadCv')}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
