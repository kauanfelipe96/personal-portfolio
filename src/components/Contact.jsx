import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SocialRow } from './primitives'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang]
  const cvHref = `${import.meta.env.BASE_URL}${t.cv}`

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="contact-card glass">
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-sub">{t.contactSub}</p>
          <div className="cta-row center-cta">
            <a className="btn btn-primary" href={`mailto:${t.email}`}>
              {t.contactCta}
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href={cvHref} download>
              {t.cvCta}
              <span className="dl">↓</span>
            </a>
          </div>
          <div className="contact-meta">
            <a href={`mailto:${t.email}`}>{t.email}</a>
            <span className="dot-sep">·</span>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`}>{t.phone}</a>
            <span className="dot-sep">·</span>
            <span>{t.location}</span>
          </div>
          <SocialRow t={t} />
        </div>
      </Reveal>
    </section>
  )
}
