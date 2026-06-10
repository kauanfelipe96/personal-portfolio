import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SectionHeader } from './primitives'
import { GradCapIcon } from './icons'

export default function Education() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="section" id="education">
      <SectionHeader num="03" title={t.educationTitle} />
      <div className="edu-wrap">
        {t.education.map((e, i) => (
          <Reveal key={i}>
            <article className="edu-card glass">
              <div className="edu-icon">
                <GradCapIcon />
              </div>
              <div className="edu-left">
                <h3 className="edu-course">{e.course}</h3>
                <div className="edu-school">{e.school}</div>
                <div className="edu-place">{e.place}</div>
              </div>
              <div className="edu-right">
                <span className="edu-status">{e.status}</span>
                <span className="edu-period">{e.period}</span>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={100}>
          <div className="lang-block">
            <div className="lang-block-label">
              <span className="sec-num">+</span>
              {t.languagesLabel}
            </div>
            <div className="lang-strip glass">
              {t.languages.map((l) => (
                <div className="lang-item" key={l.name}>
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
