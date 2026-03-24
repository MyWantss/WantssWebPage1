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

const results = [
  {
    number: '56%',
    label: 'open rate',
    desc: 'Email open rate achieved through signal-driven targeting, optimized subject lines, and deliverability management.',
  },
  {
    number: '15',
    label: 'meetings',
    desc: 'Qualified sales meetings booked through AI-powered prospecting and personalized outreach sequences.',
  },
  {
    number: '5.75%',
    label: 'reply rate',
    desc: 'Cold outreach reply rate achieved through signal-driven targeting and AI-written copy — 3x the industry average.',
  },
]

export default function SocialProof() {
  const ref = useFadeIn()

  return (
    <section id="results" className="wts-proof" ref={ref}>
      <div className="wts-proof-inner fade-up">
        <p className="wts-section-label">Early Results</p>
        <h2 className="wts-section-big-title" style={{ marginBottom: '8px' }}>What the System Delivers</h2>
        <p className="wts-proof-accent">In the first 8 weeks</p>
        <p className="wts-proof-subtitle">
          For every 1,000 prospects reached.
        </p>

        <div className="wts-proof-grid">
          {results.map((r, i) => (
            <div className="wts-proof-card" key={i} style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="wts-proof-card-number">{r.number}</div>
              <div className="wts-proof-card-label">{r.label}</div>
              <p className="wts-proof-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Update note when you have more case studies */}
        <p className="wts-proof-note">Results vary from program to program. Individual outcomes may vary.</p>
      </div>
    </section>
  )
}
