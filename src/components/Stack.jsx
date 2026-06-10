import { useLang } from '../i18n/useLang'
import { useReveal } from '../hooks/useReveal'

export default function Stack() {
  const { t } = useLang()
  const categories = t('stack.categories') || []
  const { ref, visible } = useReveal()

  return (
    <section id="stack" className="px-5 sm:px-8 py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-container transition-opacity ${visible ? 'opacity-100 animate-cueIn' : 'opacity-0'}`}
      >
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display font-bold text-text text-[clamp(28px,5vw,48px)] tracking-tight">
            {t('stack.title')}
          </h2>
          <span className="font-mono text-xs text-faint">02 / 04</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <div
              key={c.key}
              className="rounded-xl p-6 border border-white/10 bg-white/[0.035] backdrop-blur-sm"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint mb-4">
                {c.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="px-2.5 py-1 rounded border border-white/15 text-sm text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
