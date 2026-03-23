import { useEffect, useRef } from 'react'
import { GlowingEffect } from './GlowingEffect'
import './SocialProof.css'

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

{/* [REPLACE] Replace placeholder metrics below with real client data */}
const results = [
  {
    metric: '12 meetings',
    desc: 'Qualified sales meetings booked in the first 8 weeks of operation for a mid-size SaaS company.',
    industry: 'B2B SaaS',
  },
  {
    metric: '4.1% reply rate',
    desc: 'Cold outreach reply rate achieved through signal-driven targeting and AI-written copy — 3x the industry average.',
    industry: 'Cybersecurity',
  },
  {
    metric: '38 conversations',
    desc: 'New client conversations initiated in 60 days, converting to 6 active placements.',
    industry: 'Recruitment',
  },
]

export default function SocialProof() {
  const ref = useFadeIn()

  return (
    <section id="results" className="wts-proof" ref={ref}>
      <div className="wts-proof-inner fade-up">
        <p className="wts-section-label">Early Results</p>
        <h2 className="wts-section-big-title" style={{ marginBottom: '12px' }}>What the System Delivers</h2>
        <p className="wts-proof-subtitle">
          Real outcomes from companies running the system in their market.
        </p>

        <div className="wts-proof-grid">
          {results.map((r, i) => (
            <div className="wts-proof-card" key={i} style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="wts-proof-card-metric">{r.metric}</div>
              <p className="wts-proof-card-desc">{r.desc}</p>
              <span className="wts-proof-card-industry">{r.industry}</span>
            </div>
          ))}
        </div>

        {/* [REPLACE] Update note when you have more case studies */}
        <p className="wts-proof-note">Results from pilot program participants. Individual outcomes may vary.</p>
      </div>
    </section>
  )
}
