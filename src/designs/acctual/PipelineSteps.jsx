import { useEffect, useRef } from 'react'
import { GlowingEffect } from './GlowingEffect'
import FloatingElements from './FloatingElements'
import './PipelineSteps.css'

function useFadeIn(threshold = 0.1) {
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

export default function PipelineSteps({ steps }) {
  const ref = useFadeIn()

  return (
    <section id="the-system" className="wts-pipeline" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingElements section="process-orbital" />

      <div className="wts-pipeline-header">
        <h2 className="wts-section-big-title" style={{ marginBottom: '8px' }}>From Signal to Conversation</h2>
        <p className="wts-pipeline-subtitle">
          Everything needed to identify demand, build context, and act at the right time.
        </p>
      </div>

      <div className="wts-pipeline-track">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div className="wts-pipeline-step" key={step.id}>
              <div className="wts-pipeline-node">
                <Icon />
              </div>
              <div className="wts-pipeline-card" style={{ position: 'relative' }}>
                <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                <div className="wts-pipeline-card-header">
                  <span className="wts-pipeline-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="wts-pipeline-badge">{step.category}</span>
                </div>
                <h3 className="wts-pipeline-title">{step.title}</h3>
                <p className="wts-pipeline-desc">{step.content}</p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="wts-pipeline-footer">Each layer strengthens the next.</p>
    </section>
  )
}
