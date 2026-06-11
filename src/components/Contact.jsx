import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import { Reveal, SocialRow, Button } from './primitives'

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang]
  const cvHref = `${import.meta.env.BASE_URL}${t.cv}`

  return (
    <section className="scroll-mt-[100px] pb-10 pt-[clamp(80px,12vh,140px)]" id="contact">
      <Reveal>
        <div className="glass relative flex flex-col items-center gap-[22px] overflow-hidden p-[clamp(36px,6vw,72px)] text-center before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(70%_100%_at_50%_0%,var(--accent-soft),transparent_70%)] before:opacity-60 before:content-['']">
          <h2 className="text-veil relative m-0 font-display text-[clamp(32px,5.5vw,56px)] font-semibold tracking-[-0.02em]">
            {t.contactTitle}
          </h2>
          <p className="text-veil relative m-0 max-w-[46ch] text-[16px] text-muted">{t.contactSub}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button href={`mailto:${t.email}`} variant="primary">
              {t.contactCta}
              <span className="transition-transform duration-[220ms] group-hover:translate-x-1">→</span>
            </Button>
            <Button href={cvHref} variant="ghost" download>
              {t.cvCta}
              <span className="transition-transform duration-[220ms] group-hover:translate-y-0.5">↓</span>
            </Button>
          </div>
          <div className="relative flex flex-wrap justify-center gap-2.5 font-mono text-[12.5px] text-muted [&_a:hover]:text-accent-bright">
            <a href={`mailto:${t.email}`}>{t.email}</a>
            <span className="text-faint">·</span>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`}>{t.phone}</a>
            <span className="text-faint">·</span>
            <span>{t.location}</span>
          </div>
          <SocialRow t={t} />
        </div>
      </Reveal>
    </section>
  )
}
