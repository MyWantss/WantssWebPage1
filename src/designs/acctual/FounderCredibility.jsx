import { useEffect, useRef } from 'react'
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
  const ref = useFadeIn()

  return (
    <section className="wts-founder" ref={ref}>
      <div className="wts-founder-inner fade-up">
        <p className="wts-section-label">Who's Behind This</p>
        <h2 className="wts-section-big-title" style={{ marginBottom: '12px' }}>Built by an Operator</h2>
        <p className="wts-founder-subtitle">
          Intelinx was created by someone who has built, scaled, and sold across industries — and now applies AI to the hardest part of growth: finding the right clients at the right time.
        </p>

        {/* Bio card */}
        <div className="wts-founder-card" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />

          <img src={founderPhoto} alt="José Manuel Duque" className="wts-founder-avatar" />

          <div className="wts-founder-info">
            <h3 className="wts-founder-name">José Manuel Duque</h3>
            <p className="wts-founder-role">Founder & AI Systems Architect · Montreal, Canada</p>
            <p className="wts-founder-bio">
              After two decades of building and scaling businesses — managing teams, growing revenue, figuring out what makes people buy — I realized the hardest part was always the same: finding the right conversation with the right person at the right time. So I built a system that does exactly that. Intelinx is what I wish I'd had from day one.
            </p>

            <div className="wts-founder-stats">
              <div className="wts-founder-stat">
                <span className="wts-founder-stat-num">20+</span>
                <span className="wts-founder-stat-label">Years building businesses</span>
              </div>
              <div className="wts-founder-stat">
                <span className="wts-founder-stat-num">7</span>
                <span className="wts-founder-stat-label">Companies founded</span>
              </div>
              <div className="wts-founder-stat" style={{ marginLeft: '40px', textAlign: 'center' }}>
                <span className="wts-founder-stat-num wts-founder-stat-num--accent">English &nbsp;·&nbsp; Spanish &nbsp;·&nbsp; French</span>
                <span className="wts-founder-stat-label">Languages</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
