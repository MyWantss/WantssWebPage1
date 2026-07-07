import { useEffect, useRef } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import './ScrollScrubHero.css'

/*
 * Scroll-scrubbed video band. A full-screen video stays pinned (no resizing)
 * while the scroll position drives its currentTime: scrolling down advances the
 * video, scrolling up rewinds it. `children` are overlaid, centered, over it.
 * The source video should be encoded all-intra for smooth seeking.
 */
export default function ScrollScrubHero({
  videoSrc,
  scrollHeight = '220vh',
  overlayOpacity = 0.5,
  children,
}) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 34, mass: 0.4 })

  useEffect(() => {
    const v = videoRef.current
    if (v) v.pause()
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const apply = (p) => {
      const dur = v.duration
      if (!dur || Number.isNaN(dur)) return
      const t = Math.min(Math.max(p, 0), 1) * dur
      if (Math.abs(v.currentTime - t) > 0.015) v.currentTime = t
    }
    const onMeta = () => apply(smooth.get())
    v.addEventListener('loadedmetadata', onMeta)
    const unsub = smooth.on('change', apply)
    return () => {
      v.removeEventListener('loadedmetadata', onMeta)
      unsub()
    }
  }, [smooth])

  return (
    <section ref={sectionRef} className="ss-section" style={{ height: scrollHeight }}>
      <div className="ss-sticky">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          className="ss-video"
        />
        <div className="ss-overlay" style={{ background: `rgba(9, 9, 11, ${overlayOpacity})` }} />
        <div className="ss-center">{children}</div>
      </div>
    </section>
  )
}
