import { useLang } from '../i18n/useLang'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const { t } = useLang()
  const items = t('education.items') || []
  const languages = t('education.languages')
  const languagesTitle = t('education.languagesTitle')
  const { ref, visible } = useReveal()

  return (
    <section id="education" className="px-5 sm:px-8 py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-container transition-opacity ${visible ? 'opacity-100 animate-cueIn' : 'opacity-0'}`}
      >
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display font-bold text-text text-[clamp(28px,5vw,48px)] tracking-tight">
            {t('education.title')}
          </h2>
          <span className="font-mono text-xs text-faint">03 / 04</span>
        </div>

        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li
              key={item.degree}
              className="rounded-xl p-6 sm:p-8 border border-white/10 bg-white/[0.035] backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-text text-xl tracking-tight">
                  {item.degree}
                </h3>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </div>
              <p className="text-muted">{item.institution}</p>
              <p className="font-mono text-xs text-faint mt-1">
                {item.location} · {item.status}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl p-6 sm:p-8 border border-white/10 bg-white/[0.035] backdrop-blur-sm">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint mb-2">
            {languagesTitle}
          </h3>
          <p className="text-muted">{languages}</p>
        </div>
      </div>
    </section>
  )
}
