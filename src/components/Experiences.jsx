import { useLang } from '../i18n/useLang'

export default function Experiences() {
  const { t } = useLang()
  const items = t('experience.items') || []

  return (
    <section id="experience" className="px-5 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-container">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display font-bold text-text text-[clamp(28px,5vw,48px)] tracking-tight">
            {t('experience.title')}
          </h2>
          <span className="font-mono text-xs text-faint">01 / 04</span>
        </div>

        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li
              key={item.company}
              className="rounded-xl p-6 sm:p-8 border border-white/10 bg-white/[0.035] backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                <h3 className="font-display font-semibold text-text text-2xl tracking-tight">
                  {item.company}
                </h3>
                <span className="font-mono text-xs text-faint">{item.location}</span>
              </div>

              <div className="flex flex-col gap-1 mb-5">
                {item.roles.map((role) => (
                  <div
                    key={role.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                  >
                    <span className="text-text font-medium">{role.title}</span>
                    <span className="font-mono text-xs text-muted">{role.period}</span>
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-2 text-muted text-[15px] leading-relaxed">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent flex-none mt-2 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
