import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLang } from '../i18n/useLang'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { t } = useLang()
  const c = t('contact')
  const { ref, visible } = useReveal()

  const items = [
    { icon: FaEnvelope, label: c.emailLabel, value: c.email, href: `mailto:${c.email}` },
    { icon: FaPhone, label: c.phoneLabel, value: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, '')}` },
    { icon: FaLinkedin, label: c.linkedinLabel, value: c.linkedin, href: `https://${c.linkedin}` },
    { icon: FaGithub, label: c.githubLabel, value: c.github, href: `https://${c.github}` },
  ]

  return (
    <section id="contact" className="px-5 sm:px-8 py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-container transition-opacity ${visible ? 'opacity-100 animate-cueIn' : 'opacity-0'}`}
      >
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display font-bold text-text text-[clamp(28px,5vw,48px)] tracking-tight">
            {c.title}
          </h2>
          <span className="font-mono text-xs text-faint">04 / 04</span>
        </div>
        <p className="text-muted max-w-2xl mb-10">{c.intro}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((it) => {
            const Icon = it.icon
            const external = it.href.startsWith('http')
            return (
              <li key={it.label}>
                <a
                  href={it.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl p-5 border border-white/10 bg-white/[0.035] backdrop-blur-sm hover:border-accent transition-colors"
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-muted group-hover:text-accent-bright group-hover:border-accent transition-colors"
                  >
                    <Icon className="text-lg" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                      {it.label}
                    </span>
                    <span className="text-text truncate">{it.value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
