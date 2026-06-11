import { useEffect, useState } from 'react'
import { useLang } from '../i18n/useLang'
import { WorkIcon, SkillsIcon, ProjectsIcon, EducationIcon, ContactIcon, FlagBR, FlagUS } from './icons'
import logo from '../assets/images/logo.jpg'

const SECTIONS = [
  { id: 'work', Icon: WorkIcon },
  { id: 'skills', Icon: SkillsIcon },
  { id: 'projects', Icon: ProjectsIcon },
  { id: 'education', Icon: EducationIcon },
  { id: 'contact', Icon: ContactIcon },
]

export default function Navbar() {
  const { lang, setLang, dict } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // seção ativa = a que cobre a linha a 34% da altura da viewport
    const visible = new Set()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        const current = [...SECTIONS].reverse().find(({ id }) => visible.has(id))
        setActive(current ? current.id : '')
      },
      { rootMargin: '-34% 0px -65% 0px' }
    )
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt')

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-pad py-[18px]">
      <nav
        className={`pointer-events-auto flex items-center gap-1.5 rounded-2xl border py-[7px] pl-[9px] pr-2 transition-[background,border-color,box-shadow,backdrop-filter] duration-[350ms] max-[560px]:gap-[3px] max-[560px]:p-1.5 ${
          scrolled
            ? 'border-glass-bd-2 bg-[#0b0d15]/85 shadow-[0_14px_44px_rgba(0,0,0,0.3)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a className="grid place-items-center" href="#top" title={dict.name}>
          <img
            className="block h-9 w-9 rounded-[10px] object-cover shadow-[0_0_0_1px_var(--glass-bd-2),0_6px_18px_rgba(0,0,0,0.4)]"
            src={logo}
            alt={dict.name}
            width="36"
            height="36"
          />
        </a>
        <span className="mx-[3px] h-[22px] w-px bg-glass-bd-2 max-[560px]:hidden"></span>
        <div className="flex gap-0.5">
          {SECTIONS.map(({ id, Icon }) => (
            <a
              key={id}
              className={`flex items-center gap-2 rounded-[10px] px-[15px] py-[9px] font-mono text-[12.5px] transition-[color,background-color] duration-200 max-[860px]:px-3 ${
                active === id ? 'bg-accent-soft text-accent-bright' : 'text-muted hover:bg-glass hover:text-text'
              }`}
              href={`#${id}`}
              title={dict.nav[id]}
            >
              <span className="grid h-[17px] w-[17px] flex-none place-items-center [&>svg]:h-[17px] [&>svg]:w-[17px]">
                <Icon />
              </span>
              <span className="whitespace-nowrap max-[860px]:hidden">{dict.nav[id]}</span>
            </a>
          ))}
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
