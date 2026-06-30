import { useEffect, useRef } from 'react'
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
  const ref = useFadeIn()

  return (
    <section id="partnership" className="wts-access" ref={ref}>
      <FloatingElements section="access" />
      <div className="wts-access-inner fade-up">

        {/* Label */}
        <div className="wts-access-label">
          <span className="wts-access-label-line" />
          <span className="wts-access-label-text">Access the System</span>
          <span className="wts-access-label-line" />
        </div>

        {/* Title */}
        <h2 className="wts-access-title">
          BUILT <span className="wts-access-title-accent">FOR YOU</span>
        </h2>

        {/* Intro */}
        <p className="wts-access-intro">
          FROM SIGNAL DETECTION TO BOOKED CONVERSATION
        </p>
        <p className="wts-access-scarcity">Only 3 spots left until maximum capacity</p>

        {/* Pricing plans grid */}
        <div className="wts-access-plans-grid">
          {/* 6-month plan */}
          <div className="wts-access-plan-card" style={{ position: 'relative', cursor: 'default' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <span className="wts-access-badge">6 months</span>
            <span className="wts-access-plan-from">Starting at</span>
            <div className="wts-access-plan-price">$5,250<span className="wts-access-plan-mo">/mo</span></div>
            <p className="wts-access-plan-billing">Billed every six months · 6-month minimum</p>
            <p className="wts-access-plan-desc">
              Full outbound system — list building, copy, infrastructure, and optimization.
            </p>
            <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--center" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              Explore a partnership
            </a>
          </div>

          {/* 12-month plan — recommended */}
          <div className="wts-access-plan-card wts-access-plan-card--featured" style={{ position: 'relative', cursor: 'default' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <span className="wts-access-recommended">Recommended</span>
            <span className="wts-access-badge">12 months</span>
            <span className="wts-access-plan-from">Starting at</span>
            <div className="wts-access-plan-price">$4,950<span className="wts-access-plan-mo">/mo</span></div>
            <p className="wts-access-plan-billing">Billed annually · 12-month commitment</p>
            <span className="wts-access-plan-savings">Save $3,600 vs. 6-month rate</span>
            <p className="wts-access-plan-desc">
              Everything in the 6-month plan, with a longer runway to compound results. Best value for sustained pipeline.
            </p>
            <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--filled wts-access-cta--center" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              Explore a partnership
            </a>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="wts-access-guarantee-bottom">
          <div className="wts-access-guarantee-badge">
            <span className="wts-access-guarantee-title">30-day money-back guarantee</span>
            <span className="wts-access-guarantee-desc">If you're not satisfied with the system and strategy delivered in your first 30 days, you get a full refund.<br />No questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
