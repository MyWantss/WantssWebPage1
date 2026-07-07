import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Intelinx.css'
import heroScrub from '../../../assets/acctual/hero-scrub.mp4'
import heroRocketScrub from '../../../assets/acctual/hero-rocket-scrub.mp4'
import ctaScrub from '../../../assets/acctual/cta-scrub.mp4'
import heroScrubPoster from '../../../assets/acctual/hero-scrub-poster.jpg'
import heroRocketScrubPoster from '../../../assets/acctual/hero-rocket-scrub-poster.jpg'
import ctaScrubPoster from '../../../assets/acctual/cta-scrub-poster.jpg'
import DisplayCards from './DisplayCards'
import Cursor from './Cursor'
import { GlowingEffect } from './GlowingEffect'
import AnimatedGradientBackground from './AnimatedGradientBackground'
import KineticNav from './KineticNav'
import FloatingElements from './FloatingElements'
import Footer from './Footer'
import FeaturedUseCases from './industry/FeaturedUseCases'
import AccessSystem from './AccessSystem'
import PipelineSteps from './PipelineSteps'
import FounderCredibility from './FounderCredibility'
import DottedSurface from './DottedSurface'
import Seo from '../../i18n/Seo'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollScrubHero from './ScrollScrubHero'
import { Calendar, Code, FileText, User, Clock } from 'lucide-react'
import { ThemeContext } from './ThemeContext'

const CALENDLY_URL = 'https://calendly.com/wantss/explore-a-partnership-wantss'
const openCalendly = (e) => {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

// Icons for the pipeline layers (text comes from translations, in order).
const pipelineIcons = [Calendar, FileText, Code, User, Clock]

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

/* ─── Hero (scroll-scrubbed rocket video) ─── */
function Hero() {
  const { t } = useTranslation()
  return (
    <ScrollScrubHero videoSrc={heroRocketScrub} poster={heroRocketScrubPoster} scrollHeight="240vh" overlayOpacity={0.5}>
      <div className="ss-textwrap">
        <h1 className="wts-hero-title" style={{ color: '#fff' }}>
          {t('home:hero.title')}<br/><span style={{ color: 'var(--accent)' }}>{t('home:hero.titleAccent')}</span>
        </h1>
        <p className="wts-hero-sub" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{t('home:hero.sub')}</p>
        <div style={{ marginTop: '32px' }}>
          <a href="#" onClick={openCalendly} className="wts-btn" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            {t('common:cta.explorePartnership')}
          </a>
          <p className="wts-hero-micro" style={{ marginTop: '14px' }}>{t('home:hero.micro')}</p>
        </div>
      </div>
    </ScrollScrubHero>
  )
}

/* ─── Notification Showcase ─── */
import floater1 from './floaters/floater-1.png'
import floater2 from './floaters/floater-2.png'
import floater3 from './floaters/floater-3.png'
import floater5 from './floaters/floater-5.png'
import floater6 from './floaters/floater-6.png'
import floater8 from './floaters/floater-8.png'

const notificationItems = [
  { src: floater1, alt: 'New Sales Opportunity', from: 'right', width: '465px', extraSpace: 40 },
  { src: floater5, alt: 'New Meeting Scheduled', from: 'left', width: '465px', extraSpace: 120 },
  { src: floater2, alt: 'AI Lead Analysis', from: 'left', width: '768px', extraSpace: 90 },
  { src: floater6, alt: 'AI Prospect Identified', from: 'right', width: '820px', extraSpace: -140 },
  { src: floater8, alt: 'Market Signal Detected', from: 'left', width: '820px', extraSpace: -90 },
  { src: floater3, alt: 'Deal Cards', from: 'left', width: '864px', extraSpace: -75 },
]

function NotifItem({ item, index, sectionVisible }) {
  const itemRef = useRef(null)
  const [state, setState] = useState('hidden') // hidden | visible | exited

  useEffect(() => {
    const el = itemRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState('visible')
        } else {
          setState(prev => prev === 'visible' ? 'exited' : prev)
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const isVisible = sectionVisible && state === 'visible'
  const isExited = state === 'exited'
  const exitDir = item.from === 'left' ? 'right' : 'left'

  return (
    <div
      ref={itemRef}
      className={`wts-notif-slide ${isExited ? `wts-notif-exit-${exitDir}` : `wts-notif-from-${item.from}`}${isVisible ? ' wts-notif-slide--visible' : ''}`}
      style={{
        width: item.width,
        transitionDelay: isVisible ? `${index * 0.25}s` : '0s',
        ...(item.extraSpace ? { marginTop: `${item.extraSpace}px` } : {}),
      }}
    >
      <div
        className="wts-notif-float"
        style={{ animationDelay: `${index * 0.6}s` }}
      >
        <img src={item.src} alt={item.alt} loading="lazy" draggable="false" />
      </div>
    </div>
  )
}

function NotificationShowcase() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="wts-notif-showcase" ref={sectionRef}>
      <h2 className="wts-section-big-title" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease', marginBottom: '40px' }}>
        <span style={{ color: 'var(--accent)', display: 'block', textAlign: 'center' }}>{t('home:notif.titleAccent')}</span>
        <span style={{ display: 'block', textAlign: 'center' }}>{t('home:notif.titleRest')}</span>
      </h2>
      <div className="wts-notif-container">
        {notificationItems.map((item, i) => (
          <NotifItem key={i} item={item} index={i} sectionVisible={visible} />
        ))}
      </div>
      <p style={{ maxWidth: '720px', textAlign: 'center', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(16px, 2.2vw, 22px)', fontWeight: 400, letterSpacing: '0.01em', color: 'var(--text)', lineHeight: 1.5, marginTop: '120px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease 3s, transform 0.8s ease 3s' }}>
        {t('home:notif.body')}<br/><span style={{ color: 'var(--accent)' }}>{t('home:notif.bodyAccent')}</span>
      </p>
    </section>
  )
}

/* ─── Problem ─── */
function Problem() {
  const { t } = useTranslation()
  const ref = useFadeIn(0.1)
  return (
    <section className="wts-problem" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <DottedSurface className="wts-problem-dots" color={[0.659, 0.333, 0.969]} />
      <FloatingElements section="problem" />
      <div className="wts-problem-content fade-up" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="wts-section-big-title">{t('home:problem.title')}<br/><span style={{ color: 'var(--accent)' }}>{t('home:problem.titleAccent')}</span></h2>
        <div className="wts-problem-cards-wrap">
          <DisplayCards />
        </div>
      </div>
    </section>
  )
}

/* ─── Transformation ─── */
function Transformation() {
  const { t } = useTranslation()
  const ref = useFadeIn()
  const before = t('home:transformation.before', { returnObjects: true })
  const after = t('home:transformation.after', { returnObjects: true })
  return (
    <section id="results" className="wts-transform" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
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
        <h2 className="wts-section-big-title">{t('home:transformation.title')}<br/><span style={{ color: 'var(--accent)' }}>{t('home:transformation.titleAccent')}</span></h2>
        <div className="wts-transform-grid">
          <div className="wts-transform-col wts-transform-col--before" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h3>{t('home:transformation.beforeTitle')}</h3>
            <ul>
              {before.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="wts-transform-col wts-transform-col--after" style={{ position: 'relative' }}>
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
            <h3>{t('home:transformation.afterTitle')}</h3>
            <ul>
              {after.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Differentiators ─── */
function Differentiators() {
  const { t } = useTranslation()
  const ref = useFadeIn()
  const [selectedDiff, setSelectedDiff] = useState(null)
  const items = t('home:differentiators.items', { returnObjects: true })
  return (
    <section className="wts-diff" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingElements section="diff" />
      <div className="wts-diff-inner fade-up">
        <h2 className="wts-section-big-title">{t('home:differentiators.title')}</h2>
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

/* ─── Mid CTA (scroll-scrubbed video background) ─── */
function MidCTA() {
  const { t } = useTranslation()
  return (
    <ScrollScrubHero videoSrc={heroScrub} poster={heroScrubPoster} scrollHeight="220vh" overlayOpacity={0.55}>
      <div className="ss-textwrap">
        <h2 className="wts-mid-cta-title" style={{ color: '#fff' }}>
          {t('home:midCta.title')}<br/><span style={{ color: 'var(--accent)' }}>{t('home:midCta.titleAccent')}</span>
        </h2>
        <p className="wts-mid-cta-desc" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{t('home:midCta.desc')}</p>
        <a href="#" onClick={openCalendly} className="wts-btn" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          {t('common:cta.explorePartnership')}
        </a>
        <p className="wts-mid-cta-note" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{t('home:midCta.note')}</p>
      </div>
    </ScrollScrubHero>
  )
}

/* ─── Final CTA (scroll-scrubbed video background) ─── */
function FinalCTA() {
  const { t } = useTranslation()
  return (
    <ScrollScrubHero videoSrc={ctaScrub} poster={ctaScrubPoster} scrollHeight="220vh" overlayOpacity={0.55}>
      <div className="ss-textwrap">
        <h2 className="wts-cta-final-title" style={{ color: '#fff' }}>{t('home:finalCta.title')}</h2>
        <a href="#" onClick={openCalendly} className="wts-btn" style={{ position: 'relative' }}>
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
          {t('common:cta.explorePartnership')}
        </a>
        <p style={{ marginTop: '24px', color: 'var(--accent)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('common:limitedAvailability')}</p>
        <p style={{ marginTop: '6px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px' }}>{t('home:finalCta.note')}</p>
      </div>
    </ScrollScrubHero>
  )
}

/* ─── Main ─── */
export default function Intelinx() {
  const { t } = useTranslation()
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)

  const steps = t('home:pipeline.steps', { returnObjects: true }).map((s, i) => ({
    id: i + 1,
    icon: pipelineIcons[i],
    category: s.category,
    title: s.title,
    content: s.content,
  }))

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <Seo title={t('home:meta.title')} description={t('home:meta.description')} />
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} homePath="/" />
        <Hero />
        <NotificationShowcase />
        <Differentiators />
        <Transformation />
        <MidCTA />
        <PipelineSteps steps={steps} />
        <Problem />
        <FeaturedUseCases />
        <AccessSystem />
        <FounderCredibility />
        <FinalCTA />
        <Footer homePath="/" />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}

export const meta = {
  title: 'Intelinx — Client Acquisition Infrastructure',
  description: 'AI Research and Growth Infrastructure for B2B client acquisition',
  thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
  date: '2026-03-11',
}
