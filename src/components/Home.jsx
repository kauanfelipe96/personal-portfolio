import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, Stats, SocialRow, ScrollCue, Button } from './primitives'

export default function Home() {
  const { lang } = useLang()
  const t = translations[lang]
  const cvHref = `${import.meta.env.BASE_URL}${t.cv}`

  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center gap-[22px] pb-[98px] pt-24" id="top">
      <div className="flex flex-col gap-[22px]">
        <Reveal>
          <h1 className="text-veil m-0 font-display text-[clamp(44px,10.5vw,124px)] font-bold leading-[0.92] tracking-[-0.04em]">
            {t.name}
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <div className="w-fit bg-[linear-gradient(92deg,#eef1f7_0%,var(--accent-bright)_100%)] bg-clip-text font-display text-[clamp(22px,4vw,46px)] font-semibold leading-[1.05] tracking-[-0.015em] text-transparent">
            {t.hero.tagline}
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-veil m-0 max-w-[62ch] text-[clamp(15px,1.8vw,18.5px)] leading-[1.6] text-[#f3f5fa]">
            {t.hero.sub}
          </p>
        </Reveal>
        <Reveal delay={290}>
          <div className="flex flex-wrap gap-3.5">
            <Button href="#work" variant="primary">
              {t.hero.ctaPrimary}
              <span className="transition-transform duration-[220ms] group-hover:translate-x-1">→</span>
            </Button>
            <Button href={cvHref} variant="ghost" download>
              {t.hero.ctaSecondary}
              <span className="transition-transform duration-[220ms] group-hover:translate-y-0.5">↓</span>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="mt-[18px] flex flex-wrap items-end justify-between gap-[30px] border-t border-glass-bd pt-[26px] max-[860px]:flex-col max-[860px]:items-start">
        <Reveal delay={360}>
          <Stats stats={t.hero.stats} lang={lang} />
        </Reveal>
        <Reveal delay={440}>
          <SocialRow t={t} compact />
        </Reveal>
      </div>
      <ScrollCue label={t.scrollHint} />
    </header>
  )
}
