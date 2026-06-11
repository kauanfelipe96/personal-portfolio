import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
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
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <section className="section" id="skills">
      <SectionHeader num="02" title={t.skillsTitle} />
      <div className="tech-grid">
        {t.techStack.map((tech, i) => {
          const Icon = ICONS[tech.icon]
          return (
            <Reveal key={tech.label} delay={i * 40}>
              <div className="tech-tile glass">
                <Icon className="tech-icon" aria-hidden="true" />
                <span className="tech-name">{tech.label}</span>
              </div>
            </Reveal>
          )
        })}
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
