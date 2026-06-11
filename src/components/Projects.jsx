import { useLang } from '../i18n/useLang'
import { Reveal, SectionHeader } from './primitives'
import { GithubIcon } from './icons'
import { LuExternalLink } from 'react-icons/lu'

const LINK_CLASS =
  'grid h-9 w-9 place-items-center rounded-[10px] border border-glass-bd bg-glass text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-bright hover:shadow-[0_0_18px_var(--accent-soft)] [&>svg]:h-4 [&>svg]:w-4'

export default function Projects() {
  const { dict: t } = useLang()
  if (!t.projects?.length) return null

  return (
    <section className="scroll-mt-[100px] pt-[clamp(80px,12vh,140px)]" id="projects">
      <SectionHeader num="03" title={t.projectsTitle} />
      <div className="grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1">
        {t.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 70} className="h-full">
            <article className="glass flex h-full flex-col gap-3.5 p-[26px] transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-glass-bd-2 hover:bg-glass-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-veil m-0 font-display text-[19px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                <div className="flex gap-2">
                  {p.repo && (
                    <a className={LINK_CLASS} href={p.repo} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {p.demo && (
                    <a className={LINK_CLASS} href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo" title="Demo">
                      <LuExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <p className="m-0 flex-1 text-[14.5px] leading-[1.55] text-[#d6dae2]">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tg) => (
                  <span
                    className="rounded-[7px] border border-glass-bd bg-white/[0.02] px-2.5 py-[5px] font-mono text-[11px] text-muted"
                    key={tg}
                  >
                    {tg}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
