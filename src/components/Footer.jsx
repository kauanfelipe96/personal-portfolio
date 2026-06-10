import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'
import logo from '../assets/images/logo.jpg'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt={t.name} width="30" height="30" />
      <span className="footer-note">
        © {new Date().getFullYear()} {t.name} — {t.footerNote}
      </span>
      <a className="footer-top" href="#top">
        ↑ Top
      </a>
    </footer>
  )
}
