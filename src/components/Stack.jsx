import { useLang } from '../i18n/useLang'
import { Reveal, SectionHeader } from './primitives'
import {
  SiDotnet,
  SiCsharp,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiAzuredevops,
} from 'react-icons/si'
import { DiDotnet } from 'react-icons/di'

const ICONS = {
  dotnet: SiDotnet,
  csharp: SiCsharp,
  aspnet: DiDotnet,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  sqlserver: SiMicrosoftsqlserver,
  docker: SiDocker,
  githubactions: SiGithubactions,
  git: SiGit,
  azuredevops: SiAzuredevops,
}

export default function Stack() {
  const { dict: t } = useLang()

  return (
    <section className="scroll-mt-[100px] pt-[clamp(80px,12vh,140px)]" id="skills">
      <SectionHeader num="02" title={t.skillsTitle} />
      <div className="grid grid-cols-6 gap-3.5 max-[860px]:grid-cols-4 max-[560px]:grid-cols-3">
        {t.techStack.map((tech, i) => {
          const Icon = ICONS[tech.icon]
          return (
            <Reveal key={tech.label} delay={i * 40}>
              <div className="glass group flex flex-col items-center justify-center gap-[13px] px-3 py-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-[3px] hover:border-glass-bd-2 hover:bg-glass-2">
                <Icon
                  className="h-10 w-10 text-text opacity-[0.92] transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_var(--accent)]"
                  aria-hidden="true"
                />
                <span className="text-veil text-center font-mono text-[11.5px] tracking-[0.01em] text-muted transition-colors duration-300 group-hover:text-text">
                  {tech.label}
                </span>
              </div>
            </Reveal>
          )
        })}
      </div>
      <Reveal delay={120}>
        <div className="mt-[26px] rounded-2xl border border-glass-bd bg-glass px-6 py-[22px] backdrop-blur-[14px]">
          <div className="text-veil mb-4 flex items-center gap-2.5 font-mono text-[12.5px] text-text">
            <span className="font-semibold text-accent-bright">+</span>
            {t.practicesLabel}
          </div>
          <div className="grid grid-cols-4 gap-2.5 max-[860px]:grid-cols-3 max-[560px]:grid-cols-2">
            {t.practices.map((p) => (
              <span
                className="text-veil flex items-center justify-center rounded-[9px] border border-glass-bd bg-white/[0.025] px-3 py-[11px] text-center font-mono text-[12.5px] text-[#cdd2db] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-bright hover:shadow-[0_0_18px_var(--accent-soft)]"
                key={p}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
