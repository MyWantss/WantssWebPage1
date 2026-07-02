import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { GlowingEffect } from './GlowingEffect'
import founderPhoto from '../../../assets/acctual/Profile_Pic/ChatGPT Image Jun 30, 2026, 03_01_57 PM.png'
import './FounderCredibility.css'

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

export default function FounderCredibility() {
  const { t } = useTranslation()
  const ref = useFadeIn()

  return (
    <section className="wts-founder" ref={ref}>
      <div className="wts-founder-inner fade-up">
        <p className="wts-section-label">{t('home:founder.label')}</p>
        <h2 className="wts-section-big-title" style={{ marginBottom: '12px' }}>{t('home:founder.title')}</h2>
        <p className="wts-founder-subtitle">
          {t('home:founder.subtitle')}
        </p>

        {/* Bio card */}
        <div className="wts-founder-card" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />

          <img src={founderPhoto} alt="José Manuel Duque" className="wts-founder-avatar" />

          <div className="wts-founder-info">
            <h3 className="wts-founder-name">José Manuel Duque</h3>
            <p className="wts-founder-role">{t('home:founder.role')}</p>
            <p className="wts-founder-bio">
              {t('home:founder.bio')}
            </p>

            <div className="wts-founder-stats">
              <div className="wts-founder-stat">
                <span className="wts-founder-stat-num">{t('home:founder.stat1num')}</span>
                <span className="wts-founder-stat-label">{t('home:founder.stat1label')}</span>
              </div>
              <div className="wts-founder-stat">
                <span className="wts-founder-stat-num">{t('home:founder.stat2num')}</span>
                <span className="wts-founder-stat-label">{t('home:founder.stat2label')}</span>
              </div>
              <div className="wts-founder-stat" style={{ marginLeft: '40px', textAlign: 'center' }}>
                <span className="wts-founder-stat-num wts-founder-stat-num--accent">{t('home:founder.languages')}</span>
                <span className="wts-founder-stat-label">{t('home:founder.languagesLabel')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
