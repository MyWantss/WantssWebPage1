import { useTranslation } from 'react-i18next'
import { LangLink } from '../../i18n/routing'
import intelinxLogoDark from '../../../assets/intelinx-logo-dark.png'
import intelinxLogoLight from '../../../assets/intelinx-logo-light.png'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="wts-footer">
      <div className="wts-footer-inner">
        <div className="wts-footer-brand">
          <a href="#" className="wts-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src={intelinxLogoDark} alt="Intelinx" className="kn-logo-img kn-logo-img--for-dark" />
            <img src={intelinxLogoLight} alt="Intelinx" className="kn-logo-img kn-logo-img--for-light" />
          </a>
          <p className="wts-footer-desc">
            {t('common:footer.desc')}
          </p>
          <p className="wts-footer-copy">&copy; {new Date().getFullYear()} Intelinx</p>
        </div>
        <div className="wts-footer-col">
          <h4>{t('common:footer.company')}</h4>
          <LangLink to="/#the-system">{t('common:footer.infrastructure')}</LangLink>
          <LangLink to="/#results">{t('common:footer.results')}</LangLink>
          <LangLink to="/#use-cases">{t('common:footer.useCases')}</LangLink>
          <LangLink to="/about">{t('common:footer.about')}</LangLink>
        </div>
        <div className="wts-footer-col">
          <h4>{t('common:footer.connect')}</h4>
          <a href="#">{t('common:footer.contact')}</a>
          <a href="#">{t('common:footer.linkedin')}</a>
        </div>
      </div>
    </footer>
  )
}
