import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../ThemeContext'
import KineticNav from '../KineticNav'
import Footer from '../Footer'
import Cursor from '../Cursor'
import { GlowingEffect } from '../GlowingEffect'
import { getIndustry } from './industryData'
import { LangLink, useLang } from '../../../i18n/routing'
import Seo from '../../../i18n/Seo'
import '../Intelinx.css'
import './IndustryPage.css'

const CALENDLY_URL = 'https://calendly.com/wantss/explore-a-partnership-wantss'
const openCalendly = (e) => {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

export default function IndustryPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const { lang } = useLang()
  const location = useLocation()
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)
  const data = getIndustry(lang, slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (!data) {
    return (
      <ThemeContext.Provider value={{ light, toggle }}>
        <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
          <KineticNav light={light} toggle={toggle} homePath="/" />
          <div className="ind-not-found">
            <h1>{t('useCases:notFoundTitle')}</h1>
            <LangLink to="/#use-cases" className="wts-btn">{t('useCases:backToUseCases')}</LangLink>
          </div>
          <Footer />
          <Cursor light={light} />
        </div>
      </ThemeContext.Provider>
    )
  }

  const related = data.relatedUseCases
    .map(s => getIndustry(lang, s))
    .filter(Boolean)

  // Per-industry section labels override the shared defaults.
  const labels = data.labels || {}
  const icpLabel = labels.icp || t('useCases:labels.icp')
  const signalsLabel = labels.signals || t('useCases:labels.signals')
  const researchesLabel = labels.researches || t('useCases:labels.researches')
  const activationLabel = labels.activation || t('useCases:labels.activation')
  const impactLabel = labels.impact || t('useCases:labels.impact')

  const activation = data.exampleActivation
  const contextLabel = activation.contextLabel || t('useCases:labels.context')
  const messageLabel = activation.messageLabel || t('useCases:labels.message')

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <Seo
        title={data.meta.title}
        description={data.meta.description}
        ogTitle={data.meta.ogTitle}
        ogDescription={data.meta.ogDescription}
      />
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} homePath="/" />

        {/* Breadcrumb */}
        <nav className="ind-breadcrumb">
          <LangLink to="/">{t('useCases:breadcrumbHome')}</LangLink>
          <span className="ind-breadcrumb-sep">/</span>
          <LangLink to="/#use-cases">{t('useCases:breadcrumbUseCases')}</LangLink>
          <span className="ind-breadcrumb-sep">/</span>
          <span className="ind-breadcrumb-current">{data.label}</span>
        </nav>

        {/* Hero */}
        <section className="ind-hero">
          <div className="ind-hero-inner">
            <h1 className="ind-hero-title">{data.hero.title}</h1>
            <p className="ind-hero-sub">{data.hero.subtitle}</p>
            <a href="#" onClick={openCalendly} className="wts-btn" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {data.hero.cta}
            </a>
          </div>
        </section>

        {/* Why This Industry */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{data.whyThisIndustry.heading}</h2>
            <p className="ind-section-body">{data.whyThisIndustry.body}</p>
          </div>
        </section>

        {/* ICP Profile */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{icpLabel}</h2>
            <div className="ind-icp-grid">
              {data.icpProfile.map((item, i) => (
                <div className="ind-icp-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <span className="ind-icp-label">{item.label}</span>
                  <span className="ind-icp-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signals */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{signalsLabel}</h2>
            <div className="ind-card-grid">
              {data.signals.map((signal, i) => (
                <div className="ind-signal-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <span className="ind-signal-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What the System Researches */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{researchesLabel}</h2>
            <div className="ind-card-grid">
              {data.researches.map((item, i) => (
                <div className="ind-signal-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Activation */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{activationLabel}</h2>
            <div className="ind-activation-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="ind-activation-context">
                <span className="ind-activation-label">{contextLabel}</span>
                <p>{activation.context}</p>
              </div>
              <div className="ind-activation-message">
                <span className="ind-activation-label">{messageLabel}</span>
                <p>{activation.message}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Creates */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{impactLabel}</h2>
            <div className="ind-impact-grid">
              {data.impact.map((item, i) => (
                <div className="ind-impact-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{t('useCases:related')}</h2>
            <div className="ind-related-grid">
              {related.map(r => (
                <LangLink to={`/use-cases/${r.slug}`} className="ind-related-card" key={r.slug} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <h3>{r.label}</h3>
                  <p>{r.hero.subtitle}</p>
                </LangLink>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ind-cta">
          <div className="ind-cta-inner">
            <h2 className="ind-cta-title">{data.hero.cta}</h2>
            <a href="#" onClick={openCalendly} className="wts-btn" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {data.hero.cta}
            </a>
          </div>
        </section>

        <Footer />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}
