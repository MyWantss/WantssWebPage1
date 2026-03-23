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
          A system built<br />
          <span className="wts-access-title-accent">for you.</span>
        </h2>

        {/* Intro */}
        <p className="wts-access-intro">
          Signal detection, personalized outreach, and continuous operation.
          Fully managed for you — from first contact to booked conversation.
        </p>

        {/* Pilot month — entry point */}
        <div className="wts-access-pilot" style={{ position: 'relative', cursor: 'default' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <div className="wts-access-pilot-top">
            <div>
              <span className="wts-access-badge">Entry point</span>
              <h3>Start with a pilot month</h3>
            </div>
            <div className="wts-access-pilot-pricing">
              <div className="wts-access-pilot-price">$2,000</div>
              <p className="wts-access-pilot-period">flat · 1 active month</p>
            </div>
          </div>
          <p className="wts-access-card-desc">
            One full month of active campaigning in your market. List, copy, setup, and iterations included. No long-term commitment until you see results.
          </p>
          <a href="#" onClick={openCalendly} className="wts-access-cta wts-access-cta--center" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            Explore a Partnership
          </a>
        </div>

        {/* Continuous operation — pricing card */}
        <div className="wts-access-continuous-card" style={{ position: 'relative', cursor: 'default' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          <span className="wts-access-badge">Continuous operation plans</span>
          <span className="wts-access-price-from">From</span>
          <div className="wts-access-price">$18,000</div>
          <span className="wts-access-period">per period · pricing based on commitment horizon</span>
          <p className="wts-access-meta">Starting at 6-month plans</p>
        </div>

        <h4 className="wts-access-section-title">What's included</h4>

        <div className="wts-access-blocks">
          {/* Monthly Operation */}
          <div className="wts-access-block" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h5 className="wts-access-subgroup-title">Monthly Operation</h5>
            <ul className="wts-access-list">
              <li>A dedicated full-time AI expert operator</li>
              <li>Access to our proprietary acquisition system</li>
              <li>1,000+ fresh prospect contacts every month</li>
              <li>Copy fully revised based on prior month data</li>
              <li>A/B testing of subject lines and openers</li>
              <li>Active campaign management in Instantly.ai</li>
              <li>Deliverability monitoring and inbox health</li>
              <li>Replies filtered, contextualized, and delivered</li>
            </ul>
          </div>

          {/* Strategy & Reporting */}
          <div className="wts-access-block" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h5 className="wts-access-subgroup-title">Strategy & Reporting</h5>
            <ul className="wts-access-list">
              <li>ICP audit and targeting definition (month 1)</li>
              <li>3 to 6-step outreach copy sequence written from scratch</li>
              <li>Quarterly strategy review — pivots based on data</li>
              <li>Monthly performance report with real metrics</li>
              <li>Prospect briefing for every contact passed through</li>
              <li>Vertical and angle optimization every cycle</li>
              <li>Weekly updates — minimum once per week</li>
            </ul>
          </div>

          {/* Live Monitoring Dashboard */}
          <div className="wts-access-block" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h5 className="wts-access-subgroup-title">Live Monitoring Dashboard</h5>
            <p className="wts-access-dashboard-desc">
              You get access to a dedicated monitoring panel with real-time campaign data — opens, replies, prospect activity, and pipeline status. Updated continuously. Weekly summary delivered to you every week, minimum.
            </p>
          </div>
        </div>

        {/* Exclusions */}
        <p className="wts-access-exclusions">
          <span className="wts-access-exclusions-label">Not included:</span> Full market or ICP changes outside quarterly review · CRM integration · Sales call management or closing — that's your team's job.
        </p>

        <p className="wts-access-note">
          Exact pricing depends on commitment horizon and market scope.
          Everything is defined on a free diagnostic call — no commitment required.
        </p>

        {/* Bottom text */}
        <div className="wts-access-bottom">
          <p className="wts-access-how">
            <span className="wts-access-how-label">How does it work?</span>{' '}
            We start with the pilot month. At the end, if you decide to continue, we define the plan that best fits your business and move forward without interruption.
          </p>
        </div>
      </div>
    </section>
  )
}
