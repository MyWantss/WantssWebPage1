import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, BarChart2, DollarSign } from 'lucide-react'
import { GlowingEffect } from './GlowingEffect'
import './DisplayCards.css'

// Icons + layout class per problem card, in the order of home:problem.cards.
const cardMeta = [
  { icon: <TrendingDown size={16} className="dc-icon-purple" />, className: 'dc-card--1' },
  { icon: <AlertTriangle size={16} className="dc-icon-purple" />, className: 'dc-card--2' },
  { icon: <BarChart2 size={16} className="dc-icon-blue" />, className: 'dc-card--3' },
  { icon: <Users size={16} className="dc-icon-pink" />, className: 'dc-card--4' },
  { icon: <DollarSign size={16} className="dc-icon-pink" />, className: 'dc-card--5' },
]

function DisplayCard({ className = '', icon, title, description, date, onClick }) {
  return (
    <div className={`dc-card ${className}`} style={{ position: 'relative' }} onClick={onClick}>
      <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
      <div className="dc-card-header">
        <span className="dc-card-icon-wrap">{icon}</span>
        <p className="dc-card-title">{title}</p>
      </div>
      <p className="dc-card-desc">{description}</p>
      <p className="dc-card-date">{date}</p>
    </div>
  )
}

export default function DisplayCards({ cards }) {
  const { t } = useTranslation()
  const [selectedCard, setSelectedCard] = useState(null)

  const translatedCards = t('home:problem.cards', { returnObjects: true }).map((c, i) => ({
    icon: cardMeta[i]?.icon,
    title: c.title,
    description: c.description,
    date: '',
    className: cardMeta[i]?.className,
  }))

  const displayCards = cards || translatedCards

  return (
    <>
      <div className="dc-stack">
        {displayCards.map((card, i) => (
          <DisplayCard key={i} {...card} onClick={() => setSelectedCard(card)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.div
              className="dc-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            />
            <motion.div
              className="dc-overlay-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCard(null)}
            >
              <div
                className="dc-card dc-card-expanded"
                style={{ position: 'relative' }}
                onClick={(e) => e.stopPropagation()}
              >
                <GlowingEffect spread={60} proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="dc-card-header">
                  <span className="dc-card-icon-wrap">{selectedCard.icon}</span>
                  <p className="dc-card-title">{selectedCard.title}</p>
                </div>
                <p className="dc-card-desc dc-card-desc--expanded">{selectedCard.description}</p>
                {selectedCard.date && <p className="dc-card-date">{selectedCard.date}</p>}
                <button className="dc-card-close" onClick={() => setSelectedCard(null)}>✕</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
