import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { getIndustries, FEATURED_SLUGS } from './industryData'
import { LangLink, useLang } from '../../../i18n/routing'
import { GlowingEffect } from '../GlowingEffect'
import FloatingElements from '../FloatingElements'
import DottedSurface from '../DottedSurface'
import './FeaturedUseCases.css'

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

export default function FeaturedUseCases() {
  const { t } = useTranslation()
  const { lang } = useLang()
  const ref = useFadeIn()

  const industries = getIndustries(lang)
  const featured = FEATURED_SLUGS.map(s => industries.find(i => i.slug === s)).filter(Boolean)
  const remaining = industries.filter(i => !FEATURED_SLUGS.includes(i.slug))

  return (
    <section id="use-cases" className="wts-featured" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <DottedSurface className="wts-featured-dots" color={[0.659, 0.333, 0.969]} />
      <FloatingElements section="industries" />
      <div className="wts-featured-inner fade-up">
        <p className="wts-section-label">{t('home:featured.label')}</p>
        <h2 className="wts-section-big-title">{t('home:featured.title')}</h2>

        {/* Featured cards */}
        <div className="wts-featured-grid">
          {featured.map((ind) => (
            <div className="wts-featured-card" key={ind.slug} style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />

              {/* Header */}
              <div>
                <h3 className="wts-featured-card-label">{ind.label}</h3>
                <p className="wts-featured-card-subtitle">{ind.hero.subtitle}</p>
              </div>

              {/* Signals */}
              <div>
                <p className="wts-featured-signals-label">{t('home:featured.signalsLabel')}</p>
                <div className="wts-featured-signals">
                  {ind.signals.slice(0, 3).map((sig, i) => (
                    <span className="wts-featured-signal-chip" key={i}>{sig}</span>
                  ))}
                </div>
              </div>

              {/* Example Activation */}
              <div className="wts-featured-activation">
                <div className="wts-featured-activation-block">
                  <span className="wts-featured-activation-tag">{t('home:featured.tagSignal')}</span>
                  <p className="wts-featured-activation-text">{ind.exampleActivation.context}</p>
                </div>
                <hr className="wts-featured-activation-divider" />
                <div className="wts-featured-activation-block">
                  <span className="wts-featured-activation-tag">{t('home:featured.tagActivated')}</span>
                  <p className="wts-featured-activation-text">{ind.exampleActivation.message}</p>
                </div>
              </div>

              {/* Impact */}
              <div className="wts-featured-impact">
                {ind.impact.map((item, i) => (
                  <p className="wts-featured-impact-item" key={i}>{item}</p>
                ))}
              </div>

              {/* Link */}
              <LangLink to={`/use-cases/${ind.slug}`} className="wts-featured-card-link">
                {t('home:featured.seeFull')} <span className="wts-featured-card-link-arrow">→</span>
              </LangLink>
            </div>
          ))}
        </div>

        {/* Secondary pills */}
        <div className="wts-featured-more">
          <p className="wts-featured-more-label">{t('home:featured.moreLabel')}</p>
          <div className="wts-featured-more-grid">
            {remaining.map((ind) => (
              <LangLink to={`/use-cases/${ind.slug}`} className="wts-featured-more-tag" key={ind.slug}>
                <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                {ind.label}
              </LangLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
