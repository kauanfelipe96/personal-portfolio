import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SectionHeader } from './primitives'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

export default function Stack() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="section" id="skills">
      <SectionHeader num="02" title={t.skillsTitle} />
      <div className="tech-grid">
        {t.techStack.map((tech, i) => (
          <Reveal key={tech.label} delay={i * 40}>
            <div className="tech-tile glass">
              <img
                className="tech-icon"
                src={`${DEVICON}${tech.icon}.svg`}
                alt={tech.label}
                loading="lazy"
                width="40"
                height="40"
              />
              <span className="tech-name">{tech.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="practices-block">
          <div className="practices-label">
            <span className="sec-num">+</span>
            {t.practicesLabel}
          </div>
          <div className="practice-grid">
            {t.practices.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
