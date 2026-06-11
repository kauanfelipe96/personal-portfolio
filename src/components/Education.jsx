import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SectionHeader } from './primitives'
import { GradCapIcon } from './icons'

export default function Education() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="scroll-mt-[100px] pt-[clamp(80px,12vh,140px)]" id="education">
      <SectionHeader num="03" title={t.educationTitle} />
      <div className="flex flex-col gap-4">
        {t.education.map((e, i) => (
          <Reveal key={i}>
            <article className="glass flex flex-wrap items-start justify-between gap-[22px] px-7 py-[26px] transition-[border-color] duration-300 hover:border-glass-bd-2">
              <div className="grid h-12 w-12 flex-none place-items-center rounded-[13px] border border-accent-soft bg-accent-soft text-accent-bright [&>svg]:h-[25px] [&>svg]:w-[25px]">
                <GradCapIcon />
              </div>
              <div className="min-w-[200px] flex-1">
                <h3 className="text-veil m-0 mb-2 font-display text-[19px] font-semibold tracking-[-0.01em]">
                  {e.course}
                </h3>
                <div className="text-veil text-[14px] text-[#c3c8d2]">{e.school}</div>
                <div className="mt-1 font-mono text-[12px] text-muted">{e.place}</div>
              </div>
              <div className="flex flex-col items-end gap-2 text-right">
                <span className="whitespace-nowrap rounded-full border border-accent-soft bg-accent-soft px-[11px] py-[5px] font-mono text-[11px] text-accent-bright">
                  {e.status}
                </span>
                <span className="font-mono text-[12px] text-muted">{e.period}</span>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={100}>
          <div className="mt-1.5">
            <div className="text-veil mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] text-text">
              <span className="font-semibold text-accent-bright">+</span>
              {t.languagesLabel}
            </div>
            <div className="glass flex flex-wrap items-center gap-7 px-6 py-[18px]">
              {t.languages.map((l) => (
                <div className="flex items-baseline gap-2" key={l.name}>
                  <span className="font-mono text-[13px] text-text">{l.name}</span>
                  <span className="font-mono text-[11.5px] text-muted">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
