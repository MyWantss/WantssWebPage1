import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'
import './ZoomParallax.css'
import { GlowingEffect } from './GlowingEffect'
import DottedSurface from './DottedSurface'

const modules = [
  { num: '01', label: 'Market Signals Appear',          desc: 'Early indicators show where demand is starting to form.', effect: null },
  { num: '02', label: 'Relevant Companies Identified',  desc: 'The system filters for businesses that match real opportunity.', effect: null },
  { num: '03', label: 'Context Is Built',               desc: 'Each company is analyzed to understand timing, needs, and relevance.', effect: null },
  { num: '04', label: 'Opportunities Are Qualified',    desc: 'Only companies with real potential move forward.', effect: null },
  { num: '05', label: 'Conversations Are Activated',    desc: 'Outreach happens with the right message, at the right moment.', effect: null },
  { num: '06', label: 'Pipeline Is Generated',          desc: 'Relevant conversations turn into real business opportunities.', effect: null },
]

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

export default function ZoomParallax() {
  const container = useRef(null)
  const [selectedId, setSelectedId] = useState(null)
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 33%', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1 : 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1 : 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1 : 6])

  const scales = [scale5, scale4, scale5, scale6, scale5, scale6]

  /* Arrows: between slots 0→1, 1→2, 3→4, 4→5 */
  const arrows = [
    { id: 'a01', row: 1, pos: 'left',  scale: scale5 },
    { id: 'a12', row: 1, pos: 'right', scale: scale4 },
    { id: 'a34', row: 2, pos: 'left',  scale: scale6 },
    { id: 'a45', row: 2, pos: 'right', scale: scale5 },
  ]

  const selectedMod = selectedId !== null ? modules[selectedId] : null

  return (
    <div ref={container} className="zp-container">
      <div className="zp-sticky">
        {modules.map((mod, index) => (
          <motion.div
            key={index}
            style={{ scale: scales[index] }}
            className="zp-layer"
          >
            <div className={`zp-slot zp-slot-${index}`}>
              <motion.div
                layoutId={`zp-card-${index}`}
                className="wts-infra-card zp-card"
                style={{ position: 'relative', cursor: 'pointer' }}
                onClick={() => setSelectedId(index)}
              >
                <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                {mod.effect === 'dotted' && <DottedSurface className="zp-card-effect" />}
                <div className="zp-card-header" style={{ position: 'relative', zIndex: 1 }}>
                  <span className="wts-infra-card-num">{mod.num}</span>
                  <h3>{mod.label}</h3>
                </div>
                <p style={{ position: 'relative', zIndex: 1 }}>{mod.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Arrows connecting cards */}
        {arrows.map((arrow) => (
          <motion.div
            key={arrow.id}
            style={{ scale: arrow.scale }}
            className="zp-layer"
          >
            <div className={`zp-arrow zp-arrow-row${arrow.row} zp-arrow-${arrow.pos}`}>
              <span className="zp-arrow-icon">&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && selectedMod && (
          <>
            <motion.div
              className="zp-overlay-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <div className="zp-overlay-center" onClick={() => setSelectedId(null)}>
              <motion.div
                layoutId={`zp-card-${selectedId}`}
                className="wts-infra-card zp-card zp-card-expanded"
                onClick={(e) => e.stopPropagation()}
              >
                <GlowingEffect spread={60} proximity={80} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="zp-card-header" style={{ position: 'relative', zIndex: 1 }}>
                  <span className="wts-infra-card-num">{selectedMod.num}</span>
                  <h3>{selectedMod.label}</h3>
                </div>
                <p className="zp-card-expanded-desc" style={{ position: 'relative', zIndex: 1 }}>{selectedMod.desc}</p>
                <button className="zp-card-close" onClick={() => setSelectedId(null)}>✕</button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
