import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ThemeContext } from '../ThemeContext'
import KineticNav from '../KineticNav'
import Footer from '../Footer'
import Cursor from '../Cursor'
import { GlowingEffect } from '../GlowingEffect'
import { industryBySlug, industries } from './industryData'
import '../Wantss.css'
import './IndustryPage.css'

export default function IndustryPage() {
  const { slug } = useParams()
  const location = useLocation()
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)
  const data = industryBySlug[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (!data) {
    return (
      <ThemeContext.Provider value={{ light, toggle }}>
        <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
          <KineticNav light={light} toggle={toggle} homePath="/acctual" />
          <div className="ind-not-found">
            <h1>Industry not found</h1>
            <Link to="/acctual#use-cases" className="wts-btn">Back to Use Cases</Link>
          </div>
          <Footer homePath="/acctual" />
          <Cursor light={light} />
        </div>
      </ThemeContext.Provider>
    )
  }

  const related = data.relatedUseCases
    .map(s => industries.find(i => i.slug === s))
    .filter(Boolean)

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta property="og:title" content={data.meta.ogTitle} />
        <meta property="og:description" content={data.meta.ogDescription} />
      </Helmet>
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} homePath="/acctual" />

        {/* Breadcrumb */}
        <nav className="ind-breadcrumb">
          <Link to="/acctual">Home</Link>
          <span className="ind-breadcrumb-sep">/</span>
          <Link to="/acctual#use-cases">Use Cases</Link>
          <span className="ind-breadcrumb-sep">/</span>
          <span className="ind-breadcrumb-current">{data.label}</span>
        </nav>

        {/* Hero */}
        <section className="ind-hero">
          <div className="ind-hero-inner">
            <h1 className="ind-hero-title">{data.hero.title}</h1>
            <p className="ind-hero-sub">{data.hero.subtitle}</p>
            <a href="#" className="wts-btn" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {data.hero.cta}
            </a>
          </div>
        </section>

        {/* Why This Industry */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">{data.whyThisIndustry.heading}</h2>
            <p className="ind-section-body">{data.whyThisIndustry.body}</p>
          </div>
        </section>

        {/* ICP Profile */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">Ideal Client Profile</h2>
            <div className="ind-icp-grid">
              <div className="ind-icp-card" style={{ position: 'relative' }}>
                <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="ind-icp-label">Company Size</span>
                <span className="ind-icp-value">{data.icpProfile.companySize}</span>
              </div>
              <div className="ind-icp-card" style={{ position: 'relative' }}>
                <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="ind-icp-label">Revenue Range</span>
                <span className="ind-icp-value">{data.icpProfile.revenueRange}</span>
              </div>
              <div className="ind-icp-card" style={{ position: 'relative' }}>
                <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="ind-icp-label">Team Maturity</span>
                <span className="ind-icp-value">{data.icpProfile.teamMaturity}</span>
              </div>
              <div className="ind-icp-card" style={{ position: 'relative' }}>
                <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <span className="ind-icp-label">Buyer Roles</span>
                <span className="ind-icp-value">{data.icpProfile.buyerRoles.join(', ')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Signals */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">Signals the System Detects</h2>
            <div className="ind-card-grid">
              {data.signals.map((signal, i) => (
                <div className="ind-signal-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <span className="ind-signal-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What the System Researches */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">What the System Researches</h2>
            <div className="ind-card-grid">
              {data.researches.map((item, i) => (
                <div className="ind-signal-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Activation */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">Example Activation</h2>
            <div className="ind-activation-card" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="ind-activation-context">
                <span className="ind-activation-label">Context</span>
                <p>{data.exampleActivation.context}</p>
              </div>
              <div className="ind-activation-message">
                <span className="ind-activation-label">Message</span>
                <p>{data.exampleActivation.message}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Creates */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">What This Creates</h2>
            <div className="ind-impact-grid">
              {data.impact.map((item, i) => (
                <div className="ind-impact-card" key={i} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Use Cases */}
        <section className="ind-section">
          <div className="ind-section-inner">
            <h2 className="ind-section-title">Related Use Cases</h2>
            <div className="ind-related-grid">
              {related.map(r => (
                <Link to={`/use-cases/${r.slug}`} className="ind-related-card" key={r.slug} style={{ position: 'relative' }}>
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <h3>{r.label}</h3>
                  <p>{r.hero.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ind-cta">
          <div className="ind-cta-inner">
            <h2 className="ind-cta-title">{data.hero.cta}</h2>
            <a href="#" className="wts-btn" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {data.hero.cta}
            </a>
          </div>
        </section>

        <Footer homePath="/acctual" />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}
