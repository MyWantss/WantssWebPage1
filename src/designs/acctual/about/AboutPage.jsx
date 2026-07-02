import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../ThemeContext'
import KineticNav from '../KineticNav'
import Footer from '../Footer'
import Cursor from '../Cursor'
import Seo from '../../../i18n/Seo'
import '../Intelinx.css'
import './AboutPage.css'

export default function AboutPage() {
  const { t } = useTranslation()
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <Seo title={t('about:meta.title')} description={t('about:meta.description')} />
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} homePath="/" />

        <section className="about-hero">
          <div className="about-hero-inner">
            <h1 className="about-hero-title">
              {t('about:hero.titleLead')} <span style={{ color: 'var(--accent)' }}>{t('about:hero.titleBrand')}</span>
            </h1>
            <p className="about-hero-sub">
              {t('about:hero.subtitle')}
            </p>
          </div>
        </section>

        <Footer />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}
