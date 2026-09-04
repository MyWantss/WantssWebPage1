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

const STEPS = [
  { key: 'step1', hasNote: true },
  { key: 'step2', hasNote: false },
  { key: 'step3', hasNote: true },
]

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

        {/* Engagement ladder */}
        <div className="wts-access-ladder">
          {STEPS.map(({ key, hasNote }, i) => (
            <div className="wts-access-step" key={key} style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="wts-access-step-index">
                <span className="wts-access-step-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="wts-access-step-tag">{t(`home:access.${key}.step`)}</span>
              </div>
              <div className="wts-access-step-body">
                <div className="wts-access-step-head">
                  <h3 className="wts-access-step-name">{t(`home:access.${key}.name`)}</h3>
                  <span className="wts-access-badge wts-access-step-duration">{t(`home:access.${key}.duration`)}</span>
                </div>
                <p className="wts-access-step-desc">{t(`home:access.${key}.desc`)}</p>
                <div className="wts-access-step-price">{t(`home:access.${key}.price`)}</div>
                {hasNote && (
                  <p className="wts-access-step-note">{t(`home:access.${key}.note`)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="wts-access-cta-wrap">
          <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--filled" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            {t('home:access.cta')}
          </a>
          <p className="wts-access-cta-note">{t('home:access.ctaNote')}</p>
        </div>
      </div>
    </section>
  )
}
