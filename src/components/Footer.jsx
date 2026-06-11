import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import logo from '../assets/images/logo.jpg'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <footer className="mx-auto mt-20 flex max-w-container items-center gap-4 border-t border-glass-bd px-pad pb-12 pt-10">
      <img
        className="block h-[30px] w-[30px] rounded-lg object-cover shadow-[0_0_0_1px_var(--glass-bd-2)]"
        src={logo}
        alt={t.name}
        width="30"
        height="30"
      />
      <span className="flex-1 font-mono text-[12px] text-muted">
        © {new Date().getFullYear()} {t.name}
      </span>
      <a className="font-mono text-[12px] text-muted transition-colors duration-200 hover:text-accent-bright" href="#top">
        {t.backToTop}
      </a>
    </footer>
  )
}
