import { useLang } from '../i18n/useLang'
import { translations } from '../i18n/translations'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <footer className="footer">
      <span className="footer-mark">{t.initials}</span>
      <span className="footer-note">
        © {new Date().getFullYear()} {t.name} — {t.footerNote}
      </span>
      <a className="footer-top" href="#top">
        ↑ Top
      </a>
    </footer>
  )
}
