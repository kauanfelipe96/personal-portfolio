import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SectionHeader } from './primitives'

export default function Experiences() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="section" id="work">
      <SectionHeader num="01" title={t.workTitle} />
      <div className="timeline">
        {t.work.map((job, i) => (
          <Reveal key={i} delay={i * 70} className="tl-item-wrap">
            <article className="tl-item glass">
              <div className="tl-marker">
                <span className={`tl-dot ${job.current ? 'live' : ''}`}></span>
              </div>
              <div className="tl-content">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-role">{job.role}</h3>
                    {job.prevRole && <div className="tl-prev-role">{job.prevRole}</div>}
                    <div className="tl-company">
                      {job.company} <span className="tl-place">· {job.place}</span>
                    </div>
                  </div>
                  <div className="tl-period">{job.period}</div>
                </div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tags.map((tg) => (
                    <span className="tag" key={tg}>
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
