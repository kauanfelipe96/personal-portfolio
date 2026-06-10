import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, Stats, SocialRow, ScrollCue } from './primitives'
import logo from '../assets/images/logo.jpg'

export default function Home() {
  const { lang } = useLang()
  const t = translations[lang]
  const cvHref = `${import.meta.env.BASE_URL}${t.cv}`

  return (
    <header className="hero hero-editorial" id="top">
      <div className="hero-ed-main">
        <Reveal>
          <img className="hero-logo" src={logo} alt={t.name} width="76" height="76" />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero-name">{t.name}</h1>
        </Reveal>
        <Reveal delay={150}>
          <div className="hero-tagline">{t.hero.tagline}</div>
        </Reveal>
        <Reveal delay={220}>
          <p className="hero-sub wide">{t.hero.sub}</p>
        </Reveal>
        <Reveal delay={290}>
          <div className="cta-row">
            <a className="btn btn-primary" href="#work">
              {t.hero.ctaPrimary}
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href={cvHref} download>
              {t.hero.ctaSecondary}
              <span className="dl">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="hero-ed-footer">
        <Reveal delay={360}>
          <Stats stats={t.hero.stats} lang={lang} />
        </Reveal>
        <Reveal delay={440}>
          <SocialRow t={t} compact />
        </Reveal>
      </div>
      <ScrollCue label={t.scrollHint} />
    </header>
  )
}
