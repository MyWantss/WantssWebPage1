import { useEffect, useRef, useState } from 'react'
import './Wantss.css'
/* Logo PNG imports removed — using CSS gradient text logo instead */
import heroVideo from '../../../assets/acctual/11 (1).mp4'
import infraVideo from '../../../assets/acctual/13.mp4'
import DisplayCards from './DisplayCards'
import ZoomParallax from './ZoomParallax'
import Cursor from './Cursor'
import { GlowingEffect } from './GlowingEffect'
import AnimatedGradientBackground from './AnimatedGradientBackground'
import KineticNav from './KineticNav'
import FloatingElements from './FloatingElements'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { industries } from './industry/industryData'
import RadialOrbitalTimeline from './RadialOrbitalTimeline'
import BeamsBackground from './BeamsBackground'
import DottedSurface from './DottedSurface'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Code, FileText, User, Clock } from 'lucide-react'

const infrastructureTimelineData = [
  {
    id: 1,
    title: 'Market Signals',
    date: 'Layer 01',
    content: 'Continuously monitors market activity to surface companies that match the ideal client profile.',
    category: 'Signals',
    icon: Calendar,
    relatedIds: [2],
    status: 'completed',
    energy: 100,
  },
  {
    id: 2,
    title: 'Research Engine',
    date: 'Layer 02',
    content: 'Builds structured intelligence around potential clients before any conversation begins.',
    category: 'Research',
    icon: FileText,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 94,
  },
  {
    id: 3,
    title: 'Opportunity Intelligence',
    date: 'Layer 03',
    content: 'Evaluates relevance and identifies which companies represent the strongest acquisition opportunities.',
    category: 'Intelligence',
    icon: Code,
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 89,
  },
  {
    id: 4,
    title: 'Activation',
    date: 'Layer 04',
    content: 'Initiates highly relevant conversations using signal-driven personalization and timing.',
    category: 'Activation',
    icon: User,
    relatedIds: [3, 5],
    status: 'pending',
    energy: 93,
  },
  {
    id: 5,
    title: 'Conversion',
    date: 'Layer 05',
    content: 'Transforms qualified conversations into active opportunities, meetings and pipeline momentum.',
    category: 'Pipeline',
    icon: Clock,
    relatedIds: [4],
    status: 'pending',
    energy: 95,
  },
]

import { ThemeContext } from './ThemeContext'

/* ─── Floating element that drifts gently ─── */
function Float({ children, className = '', style = {}, delay = 0 }) {
  return (
    <div
      className={`float-element ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}

/* ─── Fade-in on scroll ─── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}


/* ─── Hero ─── */
function Hero() {
  const ref = useFadeIn(0.1)
  return (
    <section className="wts-hero" ref={ref}>
      <video
        className="wts-hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="wts-hero-overlay" />
      <FloatingElements section="hero" />
      <Float className="wts-float-dot-1" delay={0}>
        <div className="wts-geo-shape" />
      </Float>
      <Float className="wts-float-dot-2" delay={0.5}>
        <div className="wts-geo-shape wts-geo-shape--ring" />
      </Float>
      <Float className="wts-float-dot-3" delay={1}>
        <div className="wts-geo-shape wts-geo-shape--lg" />
      </Float>

      <div className="wts-hero-content fade-up">
        <h1 className="wts-hero-title">
          The AI system behind<br/><span>modern B2B client acquisition</span>
        </h1>
        <p className="wts-hero-sub">
          Detects opportunities, researches ideal prospects and initiates conversations.
        </p>
        <a href="#" className="wts-btn" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          Discuss Infrastructure
        </a>
        <p className="wts-hero-micro">Private infrastructure for a small number of B2B companies.</p>
      </div>
    </section>
  )
}

/* ─── Problem ─── */
function Problem() {
  const ref = useFadeIn(0.1)
  return (
    <section className="wts-problem" ref={ref}>
      <FloatingElements section="problem" />
      <div className="wts-problem-content fade-up">
        <h2 className="wts-section-big-title">The Problem</h2>
        <div className="wts-problem-cards-wrap">
          <DisplayCards />
        </div>
      </div>
    </section>
  )
}

/* ─── Transformation ─── */
function Transformation() {
  const ref = useFadeIn()
  return (
    <section className="wts-transform" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingElements section="transform" />
      <AnimatedGradientBackground
        startingGap={110}
        Breathing={true}
        breathingRange={6}
        animationSpeed={0.012}
        gradientColors={['#09090b', '#0d0620', '#3730a3', '#A855F7', '#5B6BF5', '#1e1b4b', '#09090b']}
        gradientStops={[30, 48, 60, 70, 80, 90, 100]}
        topOffset={20}
      />
      <div className="wts-transform-inner fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="wts-section-big-title">What This System Creates</h2>
        <div className="wts-transform-grid">
          <div className="wts-transform-col wts-transform-col--before" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h3>Before</h3>
            <ul>
              <li>Manual prospecting</li>
              <li>Generic messaging</li>
              <li>Slow lead generation</li>
              <li>Unpredictable pipeline</li>
              <li>No outbound system</li>
            </ul>
          </div>
          <div className="wts-transform-col wts-transform-col--after" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h3>After</h3>
            <ul>
              <li>Client acquisition infrastructure</li>
              <li>Continuous prospect intelligence</li>
              <li>Signal-based conversations</li>
              <li>Scalable outbound engine</li>
              <li>Predictable opportunity flow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Infrastructure ─── */
function Infrastructure() {
  return (
    <section className="wts-infra-zoom" style={{ position: 'relative', overflow: 'visible' }}>
      {/* <BeamsBackground intensity="medium" /> */}
      <FloatingElements section="infra-zoom" />
      <div className="wts-infra-zoom-header" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="wts-infra-zoom-title">How the System Operates</h2>
      </div>
      <ZoomParallax />
      <div className="wts-infra-video-wrap">
        <video
          className="wts-infra-video"
          src={infraVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="wts-infra-video-overlay" />
      </div>
    </section>
  )
}

/* ─── Process (Orbital Timeline) ─── */
function ProcessOrbital() {
  return (
    <section className="wts-process-orbital" style={{ position: 'relative', overflow: 'visible' }}>
      <FloatingElements section="process-orbital" />
      <div style={{ textAlign: 'center', padding: '80px 24px 0' }}>
        <h2 className="wts-section-big-title" style={{ marginBottom: '8px' }}>Infrastructure in Motion</h2>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          A system that detects opportunities and activates conversations.
        </p>
      </div>
      <RadialOrbitalTimeline
        timelineData={infrastructureTimelineData}
        centerTitle="Acquisition Engine"
        centerDescription="AI-driven client acquisition infrastructure"
      />
      <p style={{ textAlign: 'center', maxWidth: '560px', margin: '-20px auto 0', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, padding: '0 24px' }}>
        Each layer strengthens the next.
      </p>
    </section>
  )
}


/* ─── Industries ─── */
function Industries() {
  const ref = useFadeIn()
  return (
    <section id="use-cases" className="wts-industries" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <DottedSurface className="wts-industries-dots" color={[0.659, 0.333, 0.969]} />
      <FloatingElements section="industries" />
      <div className="wts-industries-inner fade-up">
        <p className="wts-section-label">Where This Infrastructure Creates the Most Value</p>
        <h2 className="wts-section-big-title">Use Cases</h2>
        <div className="wts-industries-grid">
          {industries.map((ind) => (
            <Link to={`/use-cases/${ind.slug}`} className="wts-industry-tag" key={ind.slug} style={{ position: 'relative', textDecoration: 'none', color: 'inherit' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {ind.label}
            </Link>
          ))}
        </div>
        <p className="wts-industries-note">The system adapts to different markets and business models.</p>
      </div>
    </section>
  )
}

/* ─── Differentiators ─── */
function Differentiators() {
  const ref = useFadeIn()
  const [selectedDiff, setSelectedDiff] = useState(null)
  const items = [
    { title: 'Scalable Infrastructure', desc: 'Client acquisition operates as a system that scales with your market instead of relying on manual outreach.' },
    { title: 'Signal-Driven Personalization', desc: 'Every conversation is generated from real market signals and prospect intelligence. No templates.' },
    { title: 'Operational Speed', desc: 'Research, identification and conversation activation happen continuously and faster than manual teams.' },
    { title: 'System Architecture', desc: 'Client acquisition is built as infrastructure rather than isolated campaigns.' },
  ]
  return (
    <section className="wts-diff" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <DottedSurface className="wts-diff-dots" color={[0.659, 0.333, 0.969]} />
      <FloatingElements section="diff" />
      <div className="wts-diff-inner fade-up">
        <h2 className="wts-section-big-title">The Shift</h2>
        <div className="wts-diff-grid">
          {items.map((item, i) => (
            <motion.div
              layoutId={`diff-${i}`}
              className="wts-diff-card"
              key={i}
              style={{ position: 'relative', cursor: 'pointer' }}
              onClick={() => setSelectedDiff(i)}
            >
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDiff !== null && (
          <>
            <motion.div
              className="wts-diff-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDiff(null)}
            />
            <div className="wts-diff-overlay-center" onClick={() => setSelectedDiff(null)}>
              <motion.div
                layoutId={`diff-${selectedDiff}`}
                className="wts-diff-card wts-diff-card-expanded"
                onClick={(e) => e.stopPropagation()}
              >
                <GlowingEffect spread={60} proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <h3>{items[selectedDiff].title}</h3>
                <p>{items[selectedDiff].desc}</p>
                <button className="wts-diff-card-close" onClick={() => setSelectedDiff(null)}>✕</button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ─── Offer ─── */
function Offer() {
  const ref = useFadeIn()
  const [selectedOffer, setSelectedOffer] = useState(null)

  const phaseCards = [
    {
      badge: 'One-Time',
      title: 'Infrastructure Deployment',
      price: '$7,500 — $15,000',
      period: null,
      desc: 'Design and deployment of the acquisition infrastructure tailored to your market, including signal detection, prospect intelligence pipelines and activation systems.',
      note: 'Typical timeline: 3–6 weeks.',
    },
    {
      badge: 'Ongoing',
      title: 'Infrastructure Operation',
      price: '$3,000 — $6,500',
      period: '/ month',
      desc: 'Continuous system operation including market signal monitoring, prospect intelligence, conversation activation, pipeline development and ongoing optimization.',
      note: null,
    },
  ]

  const tierCards = [
    {
      title: '6-Month Engagement',
      desc: 'Recommended for companies building a predictable outbound pipeline.',
      price: '$3,000 — $6,500',
      period: '/ month',
      total: 'Total engagement range: $18,000 — $39,000',
      featured: false,
      discount: null,
      recommend: null,
      list: null,
    },
    {
      title: '12-Month Engagement',
      desc: 'Best for companies seeking long-term acquisition infrastructure.',
      price: '$2,700 — $5,850',
      period: '/ month',
      total: 'Total engagement range: $32,400 — $70,200',
      featured: true,
      discount: '10% commitment discount',
      recommend: 'Recommended for long-term infrastructure',
      list: null,
    },
    {
      title: 'Custom Infrastructure',
      desc: 'For organizations requiring deeper integrations, additional markets or dedicated research capacity.',
      price: null,
      period: null,
      total: 'Pricing defined after infrastructure assessment.',
      featured: false,
      discount: null,
      recommend: null,
      list: ['Multi-market infrastructure', 'Advanced signal intelligence', 'CRM integrations', 'Dedicated outbound teams', 'International market expansion'],
    },
  ]

  return (
    <section className="wts-offer" ref={ref}>
      <FloatingElements section="offer" />
      <div className="wts-offer-inner fade-up">
        <h2 className="wts-section-big-title">Infrastructure Investment</h2>
        <p className="wts-offer-intro">
          Client acquisition infrastructure is deployed as a dedicated system<br/>tailored to each company's market and growth objectives.
        </p>

        {/* Deployment + Operation side by side */}
        <div className="wts-offer-grid">
          {phaseCards.map((card, i) => (
            <div className="wts-offer-card" key={i} style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setSelectedOffer(card)}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <span className="wts-offer-badge">{card.badge}</span>
              <h3>{card.title}</h3>
              <div className="wts-offer-price">{card.price}{card.period && <span className="wts-offer-period">{card.period}</span>}</div>
              <p>{card.desc}</p>
              {card.note && <p className="wts-offer-note">{card.note}</p>}
            </div>
          ))}
        </div>

        {/* Engagement Options */}
        <h3 className="wts-offer-subtitle" style={{ marginTop: '56px' }}>Engagement Options</h3>
        <div className="wts-offer-tiers">
          {tierCards.map((card, i) => (
            <div className={`wts-offer-tier${card.featured ? ' wts-offer-tier--featured' : ''}`} key={i} style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setSelectedOffer(card)}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {card.discount && <span className="wts-offer-discount">{card.discount}</span>}
              {card.recommend && <p className="wts-offer-tier-recommend">{card.recommend}</p>}
              <h4>{card.title}</h4>
              <p className="wts-offer-tier-desc">{card.desc}</p>
              {card.price && <div className="wts-offer-price">{card.price}{card.period && <span className="wts-offer-period">{card.period}</span>}</div>}
              {card.list && (
                <ul className="wts-offer-tier-list">
                  {card.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              <p className="wts-offer-tier-total">{card.total}</p>
            </div>
          ))}
        </div>

        {/* Typical Outcomes */}
        <h3 className="wts-offer-subtitle" style={{ marginTop: '56px' }}>Typical Outcomes</h3>
        <ul className="wts-offer-outcomes-list">
          <li>Continuous pipeline of qualified opportunities</li>
          <li>Higher response rates due to signal-driven outreach</li>
          <li>Reduced reliance on referrals and manual prospecting</li>
          <li>Predictable outbound pipeline growth</li>
        </ul>
      </div>

      <AnimatePresence>
        {selectedOffer && (
          <>
            <motion.div
              className="wts-diff-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
            />
            <motion.div
              className="wts-diff-overlay-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedOffer(null)}
            >
              <div className="wts-offer-card wts-offer-card-expanded" style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
                <GlowingEffect spread={60} proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
                {selectedOffer.badge && <span className="wts-offer-badge">{selectedOffer.badge}</span>}
                {selectedOffer.discount && <span className="wts-offer-discount">{selectedOffer.discount}</span>}
                {selectedOffer.recommend && <p className="wts-offer-tier-recommend">{selectedOffer.recommend}</p>}
                <h3>{selectedOffer.title}</h3>
                {selectedOffer.price && (
                  <div className="wts-offer-price">{selectedOffer.price}{selectedOffer.period && <span className="wts-offer-period">{selectedOffer.period}</span>}</div>
                )}
                <p>{selectedOffer.desc}</p>
                {selectedOffer.list && (
                  <ul className="wts-offer-tier-list">
                    {selectedOffer.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
                {selectedOffer.total && <p className="wts-offer-tier-total">{selectedOffer.total}</p>}
                {selectedOffer.note && <p className="wts-offer-note">{selectedOffer.note}</p>}
                <button className="wts-diff-card-close" onClick={() => setSelectedOffer(null)}>✕</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ─── Final CTA ─── */
function FinalCTA() {
  const ref = useFadeIn()
  return (
    <section className="wts-cta-final" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingElements section="cta-final" />
      <AnimatedGradientBackground
        startingGap={120}
        Breathing={true}
        breathingRange={8}
        animationSpeed={0.015}
        gradientColors={['#09090b', '#1a0a2e', '#5B6BF5', '#A855F7', '#EC4899', '#A855F7', '#09090b']}
        gradientStops={[30, 48, 60, 70, 80, 90, 100]}
        topOffset={10}
      />
      <div className="wts-cta-final-inner fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="wts-cta-final-title">
          Ready to turn client acquisition<br/>into structured infrastructure?
        </h2>
        <a href="#" className="wts-btn" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          Discuss Infrastructure
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
/* ─── Main ─── */
export default function Wantss() {
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} />
        <Hero />
        <Problem />
        <ProcessOrbital />
        <Differentiators />
        <Infrastructure />
        <Transformation />
        <Industries />
        <Offer />
        <FinalCTA />
        <Footer />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}

export const meta = {
  title: 'WANTSS — Client Acquisition Infrastructure',
  description: 'AI Research and Growth Infrastructure for B2B client acquisition',
  thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
  date: '2026-03-11',
}
