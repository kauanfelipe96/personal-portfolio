import { useLang } from '../i18n/useLang'
import { Reveal, SectionHeader } from './primitives'

export default function Experiences() {
  const { dict: t } = useLang()

  return (
    <section className="scroll-mt-[100px] pt-[clamp(80px,12vh,140px)]" id="work">
      <SectionHeader num="01" title={t.workTitle} />
      <div className="flex flex-col gap-[18px]">
        {t.work.map((job, i) => (
          <Reveal key={i} delay={i * 70}>
            <article className="glass grid grid-cols-[40px_1fr] py-[26px] pl-[22px] pr-7 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-glass-bd-2 hover:bg-glass-2 max-[860px]:grid-cols-1">
              <div className="flex justify-center pt-1.5 max-[860px]:hidden">
                <span
                  className={`relative h-[11px] w-[11px] rounded-full ${
                    job.current
                      ? "bg-accent shadow-[0_0_0_4px_var(--accent-soft)] after:absolute after:-inset-1 after:animate-ring after:rounded-full after:border after:border-accent after:content-['']"
                      : 'bg-faint'
                  }`}
                ></span>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-[18px]">
                  <div>
                    <h3 className="text-veil m-0 mb-1 font-display text-[20px] font-semibold tracking-[-0.01em]">
                      {job.role}
                    </h3>
                    {job.prevRole && <div className="mb-1.5 font-mono text-[11.5px] text-muted">{job.prevRole}</div>}
                    <div className="text-veil font-mono text-[13px] text-accent-bright">
                      {job.company} <span className="text-muted">· {job.place}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-[12px] text-muted">
                    {job.period}
                  </div>
                </div>
                <ul className="m-0 mb-[18px] flex list-none flex-col gap-[9px] p-0">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="relative pl-5 text-[14.5px] leading-[1.55] text-[#d6dae2] before:absolute before:left-1 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:shadow-[0_0_8px_var(--accent-soft)] before:content-['']"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tg) => (
                    <span
                      className="rounded-[7px] border border-glass-bd bg-white/[0.02] px-2.5 py-[5px] font-mono text-[11px] text-muted"
                      key={tg}
                    >
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
