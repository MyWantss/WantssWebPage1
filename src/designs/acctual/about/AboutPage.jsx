import { useState, useEffect } from 'react'
import { ThemeContext } from '../ThemeContext'
import KineticNav from '../KineticNav'
import Footer from '../Footer'
import Cursor from '../Cursor'
import '../Wantss.css'
import './AboutPage.css'

export default function AboutPage() {
  const [light, setLight] = useState(false)
  const toggle = () => setLight(prev => !prev)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      <div className={`wts-page ${light ? 'wts-page--light' : ''}`}>
        <KineticNav light={light} toggle={toggle} homePath="/" />

        <section className="about-hero">
          <div className="about-hero-inner">
            <h1 className="about-hero-title">
              About <span style={{ color: 'var(--accent)' }}>Wantss</span>
            </h1>
            <p className="about-hero-sub">
              Content coming soon. This page will tell the story behind the system and the people building it.
            </p>
          </div>
        </section>

        <Footer />
        <Cursor light={light} />
      </div>
    </ThemeContext.Provider>
  )
}
