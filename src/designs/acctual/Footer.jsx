import { useTranslation } from 'react-i18next'
import { LangLink } from '../../i18n/routing'
import intelinxLogoDark from '../../../assets/intelinx-logo-dark.png'
import intelinxLogoLight from '../../../assets/intelinx-logo-light.png'

const CALENDLY_URL = 'https://calendly.com/wantss/explore-a-partnership-wantss'
const openCalendly = (e) => {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

// Mirrors the real nav (KineticNav). Labels come from common:nav.* so the footer
// and the header menu always read the same in every language.
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
          <LangLink to="/#the-system">{t('common:nav.system')}</LangLink>
          <LangLink to="/#results">{t('common:nav.results')}</LangLink>
          <LangLink to="/#use-cases">{t('common:nav.useCases')}</LangLink>
          <LangLink to="/#partnership">{t('common:nav.partnership')}</LangLink>
          <LangLink to="/about">{t('common:nav.about')}</LangLink>
        </div>
        <div className="wts-footer-col">
          <h4>{t('common:footer.connect')}</h4>
          <a href="#" onClick={openCalendly}>{t('common:nav.contact')}</a>
        </div>
      </div>
    </footer>
  )
}
