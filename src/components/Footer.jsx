import { useLang } from '../i18n/useLang'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-white/5">
      <div className="mx-auto max-w-container flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-faint">
        <span>{t('footer.copyright')}</span>
        <a
          href="https://github.com/kauanfelipe96/personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-bright transition-colors"
        >
          {t('footer.sourceLabel')} ↗
        </a>
      </div>
    </footer>
  )
}
