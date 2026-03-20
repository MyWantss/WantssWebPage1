import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import './KineticNav.css'
import wantssLogo from '../../../assets/WANTTS logo.png'
import { GlowingEffect } from './GlowingEffect'

import menuImgSystem from '../../../assets/acctual/Menu/Crea_una_imagen_similar_a_la_q_Nano_Banana_2_00844.jpg'
import menuImgResults from '../../../assets/acctual/Menu/Crea_una_imagen_similar_a_la_q_Nano_Banana_2_42464.jpg'
import menuImgUseCases from '../../../assets/acctual/Menu/Obscurece_el_fondo_de_la_image_Nano_Banana_2_53798.jpg'
import menuImgPartnership from '../../../assets/acctual/Menu/Regrgale_mi_logotipo_en_alguna_Nano_Banana_2_43997.jpg'
import menuImgAbout from '../../../assets/acctual/Menu/Crea_una_imagen_similar_a_la_q_Nano_Banana_2_63684.jpg'
import menuImgContact from '../../../assets/acctual/Menu/Agrega_el_logotipo_en_colores__Nano_Banana_2_69920.jpg'

gsap.registerPlugin(CustomEase)

const CALENDLY_URL = 'https://calendly.com/wantss/explore-a-partnership-wantss'
const openCalendly = (e) => {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

const defaultLinks = [
  { label: 'The System',  href: '#the-system',  type: 'scroll', img: menuImgSystem },
  { label: 'Results',     href: '#results',      type: 'scroll', img: menuImgResults },
  { label: 'Use Cases',   href: '#use-cases',    type: 'scroll', img: menuImgUseCases },
  { label: 'Partnership', href: '#partnership',   type: 'scroll', img: menuImgPartnership },
  { label: 'About',       href: '/about',         type: 'route',  img: menuImgAbout },
  { label: 'Contact',     href: '#',              type: 'calendly', img: menuImgContact },
]

function MenuLink({ link, homePath, onClose }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    onClose()

    if (link.type === 'calendly') {
      setTimeout(() => openCalendly(e), 600)
      return
    }

    if (link.type === 'route') {
      setTimeout(() => navigate(link.href), 600)
      return
    }

    // scroll type — if on a subpage, navigate home first
    if (homePath) {
      setTimeout(() => navigate('/' + link.href), 600)
      return
    }

    const id = link.href.replace('#', '')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  return (
    <a href={link.href} className="kn-link" onClick={handleClick}>
      <span className="kn-link-text">{link.label}</span>
      <div className="kn-link-bg" />
    </a>
  )
}

export default function KineticNav({ light, toggle, homePath }) {
  const containerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /* ─── Hover: shape reveal ─── */
  useEffect(() => {
    if (!containerRef.current) return

    try {
      CustomEase.create('main', '0.65, 0.01, 0.05, 0.99')
      gsap.defaults({ ease: 'main', duration: 0.7 })
    } catch {
      gsap.defaults({ ease: 'power2.out', duration: 0.7 })
    }

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.kn-menu-item[data-shape]')
      const shapesContainer = containerRef.current.querySelector('.kn-shapes')

      items.forEach((item) => {
        const idx = item.getAttribute('data-shape')
        const shape = shapesContainer?.querySelector(`.kn-shape-${idx}`)
        if (!shape) return

        const els = shape.querySelectorAll('.shape-element')

        const onEnter = () => {
          shapesContainer.querySelectorAll('.kn-bg-shape').forEach((s) => s.classList.remove('active'))
          shape.classList.add('active')
          gsap.fromTo(els,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.7)', overwrite: 'auto' }
          )
        }
        const onLeave = () => {
          gsap.to(els, {
            scale: 0.8, opacity: 0, duration: 0.3, ease: 'power2.in',
            onComplete: () => shape.classList.remove('active'),
            overwrite: 'auto',
          })
        }

        item.addEventListener('mouseenter', onEnter)
        item.addEventListener('mouseleave', onLeave)
        item._cleanup = () => {
          item.removeEventListener('mouseenter', onEnter)
          item.removeEventListener('mouseleave', onLeave)
        }
      })
    }, containerRef)

    return () => {
      ctx.revert()
      containerRef.current?.querySelectorAll('.kn-menu-item[data-shape]').forEach((el) => el._cleanup?.())
    }
  }, [])

  /* ─── Open / Close animation ─── */
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const overlay    = containerRef.current.querySelector('.kn-overlay-wrapper')
      const panel      = containerRef.current.querySelector('.kn-panel')
      const backdrop   = containerRef.current.querySelector('.kn-backdrop')
      const layers     = containerRef.current.querySelectorAll('.kn-layer')
      const navLinks   = containerRef.current.querySelectorAll('.kn-link')
      const btnTexts   = containerRef.current.querySelectorAll('.kn-btn-text p')
      const btnIcon    = containerRef.current.querySelector('.kn-btn-icon')
      const tl = gsap.timeline()

      if (isMenuOpen) {
        tl.set(overlay, { display: 'block' })
          .fromTo(btnTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.15 })
          .fromTo(btnIcon, { rotate: 0 }, { rotate: 315 }, '<')
          .fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
          .fromTo(layers, { xPercent: 101 }, { xPercent: 0, stagger: 0.1, duration: 0.55 }, '<')
          .fromTo(navLinks, { yPercent: 130, rotate: 8 }, { yPercent: 0, rotate: 0, stagger: 0.06 }, '<+=0.3')
      } else {
        tl.to(backdrop, { autoAlpha: 0 })
          .to(panel, { xPercent: 110 }, '<')
          .to(btnTexts, { yPercent: 0 }, '<')
          .to(btnIcon, { rotate: 0 }, '<')
          .set(overlay, { display: 'none' })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMenuOpen])

  /* ─── Escape key ─── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <div ref={containerRef}>
      {/* ── Fixed header bar ── */}
      <header className="kn-header">
        <div className="kn-header-inner">
          <Link to={homePath || '/acctual'} className="kn-logo">
            <img src={wantssLogo} alt="WANTSS" className="kn-logo-img" />
          </Link>
          <div className="kn-header-right">
            <button className="wts-theme-toggle" onClick={toggle} aria-label="Toggle theme" style={{ position: 'relative' }}>
              <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
              {light ? '\u263E' : '\u2600'}
            </button>
            <a href="#" onClick={openCalendly} className="wts-btn-sm" style={{ position: 'relative' }}>
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              Explore a Partnership
            </a>
            <button className="kn-menu-btn" onClick={() => setIsMenuOpen((p) => !p)} style={{ position: 'relative' }}>
              <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="kn-btn-text">
                <p>Menu</p>
                <p>Close</p>
              </div>
              <div className="kn-btn-icon-wrap">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="kn-btn-icon">
                  <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor"/>
                  <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"/>
                  <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"/>
                  <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"/>
                  <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"/>
                  <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen overlay ── */}
      <div className="kn-overlay-wrapper" style={{ display: 'none' }}>
        <div className="kn-backdrop" onClick={() => setIsMenuOpen(false)} />

        <nav className="kn-panel">
          {/* Staggered backdrop layers */}
          <div className="kn-layer kn-layer--1" />
          <div className="kn-layer kn-layer--2" />
          <div className="kn-layer kn-layer--3" />

          {/* Hover images — one per link */}
          <div className="kn-shapes">
            {defaultLinks.map((link, i) => (
              <div className={`kn-bg-shape kn-shape-${i + 1}`} key={i}>
                <img className="shape-element" src={link.img} alt={link.label} />
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="kn-links-wrap">
            <div className="kn-menu-logo" data-menu-fade>
              <img src={wantssLogo} alt="WANTSS" className="kn-logo-img kn-logo-img--lg" />
            </div>
            <ul className="kn-menu-list">
              {defaultLinks.map((link, i) => (
                <li className="kn-menu-item" data-shape={String(i + 1)} key={i}>
                  <MenuLink link={link} homePath={homePath} onClose={() => setIsMenuOpen(false)} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
