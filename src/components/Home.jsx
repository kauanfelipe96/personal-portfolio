import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { ReactTyped } from 'react-typed'
import { useLang } from '../i18n/useLang'

export default function Home() {
  const { lang, t } = useLang()
  const cvHref = `${import.meta.env.BASE_URL}Kauan-Felipe-CV-${lang === 'pt' ? 'PT' : 'EN'}.pdf`
  const typed = t('hero.typed')

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 10%, color-mix(in oklch, var(--accent) 18%, transparent) 0%, transparent 60%), radial-gradient(50% 40% at 80% 90%, color-mix(in oklch, var(--accent) 10%, transparent) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-container animate-cueIn">
        <p className="font-mono text-xs sm:text-sm text-faint uppercase tracking-[0.18em]">
          {t('hero.eyebrow')}
        </p>

        <h1 className="mt-5 font-display font-bold text-text leading-[0.95] tracking-[-0.04em] text-[clamp(44px,9vw,104px)]">
          {t('hero.name')}
        </h1>

        <h2 className="mt-4 font-display text-muted text-[clamp(20px,3.5vw,32px)] tracking-tight">
          {t('hero.role')}
        </h2>

        {Array.isArray(typed) && typed.length > 0 && (
          <div className="mt-5 font-mono text-sm text-faint">
            <span className="text-accent">&gt;</span>{' '}
            <ReactTyped
              strings={typed}
              typeSpeed={50}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-medium text-bg transition-transform hover:scale-[1.02]"
            style={{ background: 'var(--accent)' }}
          >
            <FiDownload /> {t('hero.ctaCv')}
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white/15 text-text hover:border-accent hover:text-accent-bright transition-colors"
          >
            {t('hero.ctaExperience')} <FiArrowDown />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-muted">
          <a
            href="mailto:kauan_falima@hotmail.com"
            aria-label="Email"
            className="hover:text-accent-bright transition-colors"
          >
            <FaEnvelope className="text-xl" />
          </a>
          <a
            href="https://github.com/kauanfelipe96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent-bright transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/kauan-felipe-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-bright transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}
