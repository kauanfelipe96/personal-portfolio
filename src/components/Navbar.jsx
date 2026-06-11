import { useEffect, useState } from 'react'
import { useLang } from '../i18n/useLang'
import { WorkIcon, SkillsIcon, EducationIcon, ContactIcon, FlagBR, FlagUS } from './icons'
import logo from '../assets/images/logo.jpg'

const ICONS = {
  work: WorkIcon,
  skills: SkillsIcon,
  education: EducationIcon,
  contact: ContactIcon,
}

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const items = [
    { id: 'work', label: t('nav.work') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const ids = items.map((i) => i.id)
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + window.innerHeight * 0.34
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= pos) current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-pad py-[18px]">
      <nav
        className={`pointer-events-auto flex items-center gap-1.5 rounded-2xl border py-[7px] pl-[9px] pr-2 transition-[background,border-color,box-shadow,backdrop-filter] duration-[350ms] max-[560px]:gap-[3px] max-[560px]:p-1.5 ${
          scrolled
            ? 'border-glass-bd-2 bg-white/[0.045] shadow-[0_14px_44px_rgba(0,0,0,0.3)] backdrop-blur-[18px] backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a className="grid place-items-center" href="#top" title={t('name') || 'Kauan Felipe'}>
          <img
            className="block h-9 w-9 rounded-[10px] object-cover shadow-[0_0_0_1px_var(--glass-bd-2),0_6px_18px_rgba(0,0,0,0.4)]"
            src={logo}
            alt={t('name') || 'Kauan Felipe'}
            width="36"
            height="36"
          />
        </a>
        <span className="mx-[3px] h-[22px] w-px bg-glass-bd-2 max-[560px]:hidden"></span>
        <div className="flex gap-0.5">
          {items.map((it) => {
            const Icon = ICONS[it.id]
            return (
              <a
                key={it.id}
                className={`flex items-center gap-2 rounded-[10px] px-[15px] py-[9px] font-mono text-[12.5px] transition-[color,background-color] duration-200 max-[860px]:px-3 ${
                  active === it.id
                    ? 'bg-accent-soft text-accent-bright'
                    : 'text-muted hover:bg-glass hover:text-text'
                }`}
                href={`#${it.id}`}
                title={it.label}
              >
                <span className="grid h-[17px] w-[17px] flex-none place-items-center [&>svg]:h-[17px] [&>svg]:w-[17px]">
                  <Icon />
                </span>
                <span className="whitespace-nowrap max-[860px]:hidden">{it.label}</span>
              </a>
            )
          })}
        </div>
        <span className="mx-[3px] h-[22px] w-px bg-glass-bd-2 max-[560px]:hidden"></span>
        <div className="flex items-center gap-[7px] pr-[3px]">
          <button
            className="grid h-[34px] w-[34px] flex-none cursor-pointer place-items-center rounded-[9px] border border-glass-bd-2 bg-transparent p-0 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-accent hover:bg-glass [&>svg]:h-[22px] [&>svg]:w-[22px] [&>svg]:rounded-full"
            onClick={toggleLang}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={lang === 'pt' ? 'English' : 'Português'}
          >
            {lang === 'pt' ? <FlagBR /> : <FlagUS />}
          </button>
        </div>
      </nav>
    </header>
  )
}
