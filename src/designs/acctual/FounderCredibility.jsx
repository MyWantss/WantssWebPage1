import { useEffect, useRef } from 'react'
import { GlowingEffect } from './GlowingEffect'
import founderPhoto from '../../../assets/acctual/DSC01348.jpg'
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
          WANTSS was created by someone who has built, scaled, and sold across industries — and now applies AI to the hardest part of growth: finding the right clients at the right time.
        </p>

        {/* Bio card */}
        <div className="wts-founder-card" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />

          <img src={founderPhoto} alt="José Manuel" className="wts-founder-avatar" />

          <div className="wts-founder-info">
            <h3 className="wts-founder-name">José Manuel</h3>
            <p className="wts-founder-role">Founder & AI Systems Architect · Montreal, Canada</p>
            <p className="wts-founder-bio">
              Over two decades building and scaling businesses — from managing 150 people as COO to growing revenue 33% in events production and achieving 150% sales growth on Amazon. With deep experience in sales and client acquisition across multiple industries, now applying that operational expertise to AI: designing voice agents, automating complex workflows, and building the acquisition engine behind WANTSS.
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
