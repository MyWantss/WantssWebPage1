import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { GlowingEffect } from './GlowingEffect'
import FloatingElements from './FloatingElements'
import './AccessSystem.css'

const CALENDLY_URL = 'https://calendly.com/wantss/explore-a-partnership-wantss'
const openCalendly = (e) => {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function AccessSystem() {
  const { t } = useTranslation()
  const ref = useFadeIn()

  return (
    <section id="partnership" className="wts-access" ref={ref}>
      <FloatingElements section="access" />
      <div className="wts-access-inner fade-up">

        {/* Label */}
        <div className="wts-access-label">
          <span className="wts-access-label-line" />
          <span className="wts-access-label-text">{t('home:access.label')}</span>
          <span className="wts-access-label-line" />
        </div>

        {/* Title */}
        <h2 className="wts-access-title">
          {t('home:access.title')} <span className="wts-access-title-accent">{t('home:access.titleAccent')}</span>
        </h2>

        {/* Intro */}
        <p className="wts-access-intro">
          {t('home:access.intro')}
        </p>
        <p className="wts-access-scarcity">{t('home:access.scarcity')}</p>

        {/* Pricing plans grid */}
        <div className="wts-access-plans-grid">
          {/* 6-month plan */}
          <div className="wts-access-plan-card" style={{ position: 'relative', cursor: 'default' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <span className="wts-access-badge">{t('home:access.plan6.badge')}</span>
            <span className="wts-access-plan-from">{t('home:access.startingAt')}</span>
            <div className="wts-access-plan-price">$5,500<span className="wts-access-plan-mo">/mo</span></div>
            <p className="wts-access-plan-billing">{t('home:access.plan6.billing')}</p>
            <p className="wts-access-plan-desc">
              {t('home:access.plan6.desc')}
            </p>
            <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--center" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {t('common:cta.explorePartnershipLower')}
            </a>
          </div>

          {/* 12-month plan — recommended */}
          <div className="wts-access-plan-card wts-access-plan-card--featured" style={{ position: 'relative', cursor: 'default' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <span className="wts-access-recommended">{t('home:access.recommended')}</span>
            <span className="wts-access-badge">{t('home:access.plan12.badge')}</span>
            <span className="wts-access-plan-from">{t('home:access.startingAt')}</span>
            <div className="wts-access-plan-price">$4,950<span className="wts-access-plan-mo">/mo</span></div>
            <p className="wts-access-plan-billing">{t('home:access.plan12.billing')}</p>
            <span className="wts-access-plan-savings">{t('home:access.plan12.savings')}</span>
            <p className="wts-access-plan-desc">
              {t('home:access.plan12.desc')}
            </p>
            <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--filled wts-access-cta--center" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {t('common:cta.explorePartnershipLower')}
            </a>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="wts-access-guarantee-bottom">
          <div className="wts-access-guarantee-badge">
            <span className="wts-access-guarantee-title">{t('home:access.guaranteeTitle')}</span>
            <span className="wts-access-guarantee-desc">{t('home:access.guaranteeDesc')}<br />{t('home:access.guaranteeNote')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
