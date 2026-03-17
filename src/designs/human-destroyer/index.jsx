import './HumanDestroyer.css'
import { HeroBloodOverlay, SpeciesCracks, PoisonedBlood, CTABlood } from './components/BloodSplatters'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const IMAGES = {
  whale: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1200&q=80',
  dump: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1920&q=80',
  factory: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80',
  turtle: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&q=80',
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#shop">Shop</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#journal">Journal</a>
      <a href="#lookbook">Lookbook</a>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="section hero">
      <div className="hero-text-top">
        <span className="hero-text-line">HUMAN</span>
        <span className="hero-text-line hero-text-right">DESTROYER</span>
      </div>
      <img
        className="hero-whale"
        src={IMAGES.whale}
        alt="Whale"
        loading="eager"
      />
      <HeroBloodOverlay />
      <div className="hero-text-bottom">
        <span className="hero-text-line">OF THE</span>
        <span className="hero-text-line hero-text-right">OCEANS</span>
      </div>
    </section>
  )
}

function DumpSection() {
  const titleRef = useScrollAnimation()

  return (
    <section className="section dump-section">
      <div className="dump-bg">
        <img src={IMAGES.dump} alt="Ocean garbage dump" loading="lazy" />
      </div>
      <div className="dump-gradient" />
      <h2 ref={titleRef} className="section-title dump-title fade-in">
        OCEAN<br />TURNS INTO<br />A DUMP
      </h2>
    </section>
  )
}

function SpeciesSection() {
  const titleRef = useScrollAnimation()

  return (
    <section className="section species-section">
      <SpeciesCracks />
      <h2 ref={titleRef} className="section-title species-title fade-in">
        HOW SPECIES<br />THREATENS<br />OCEANS
      </h2>
    </section>
  )
}

function PoisonedSection() {
  const titleRef = useScrollAnimation()

  return (
    <section className="section poisoned-section">
      <PoisonedBlood />
      <h2 ref={titleRef} className="section-title poisoned-title fade-in">
        POISONED<br />DEPTHS
      </h2>
    </section>
  )
}

function CoralSection() {
  const titleRef = useScrollAnimation()

  return (
    <section className="section coral-section">
      <div className="coral-bg">
        <img src={IMAGES.factory} alt="Industrial pollution" loading="lazy" />
      </div>
      <div className="coral-overlay coral-overlay-1" />
      <div className="coral-overlay coral-overlay-2" />
      <h2 ref={titleRef} className="section-title coral-title fade-in">
        DESTRUCTION<br />OF CORAL<br />REEFS
      </h2>
    </section>
  )
}

function CTASection() {
  const titleRef = useScrollAnimation()

  return (
    <section className="section cta-section">
      <CTABlood />
      <h2 ref={titleRef} className="section-title cta-title fade-in">
        TOGETHER<br />WE CAN SAVE<br />THE OCEAN
      </h2>
      <img
        className="cta-turtle"
        src={IMAGES.turtle}
        alt="Sea turtle"
        loading="lazy"
      />
    </section>
  )
}

export default function HumanDestroyer() {
  return (
    <>
      <Nav />
      <HeroSection />
      <DumpSection />
      <SpeciesSection />
      <PoisonedSection />
      <CoralSection />
      <CTASection />
    </>
  )
}

export const meta = {
  title: 'Human Destroyer of the Oceans',
  description: 'Ocean conservation awareness — dramatic environmental storytelling',
  thumbnail: IMAGES.whale,
  date: '2026-03-10',
}
