import { useEffect, useRef, useState } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import './ScrollScrubHero.css'

/*
 * Scroll-scrubbed video band. On desktop the video stays pinned (no resizing)
 * while the scroll position drives its currentTime: scrolling down advances the
 * video, scrolling up rewinds it. `children` are overlaid, centered, over it.
 * The source video should be encoded all-intra for smooth seeking.
 *
 * Mobile / touch devices: currentTime-scrubbing is unreliable on mobile Safari
 * (it won't paint frames on a video that never played, ignores preload, and
 * throttles seeks), so there the video simply autoplays muted in a loop as a
 * normal background video. A `poster` is shown as a fallback if autoplay is
 * blocked (e.g. iOS Low Power Mode).
 */
export default function ScrollScrubHero({
  videoSrc,
  poster,
  scrollHeight = '220vh',
  overlayOpacity = 0.5,
  children,
}) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  // Touch-primary devices (phones/tablets) → autoplay-loop instead of scrub.
  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    const update = () => setIsTouch(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 34, mass: 0.4 })

  // Desktop scrubbing: pause and drive currentTime from scroll progress.
  useEffect(() => {
    if (isTouch) return
    const v = videoRef.current
    if (v) v.pause()
  }, [isTouch])

  useEffect(() => {
    if (isTouch) return
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
  }, [smooth, isTouch])

  // Touch: kick off looped playback (the autoPlay attribute alone may not fire
  // after the client-side toggle, so call play() explicitly; ignore rejections).
  useEffect(() => {
    if (!isTouch) return
    const v = videoRef.current
    if (!v) return
    v.play?.().catch(() => {})
  }, [isTouch])

  return (
    <section ref={sectionRef} className="ss-section" style={{ height: scrollHeight }}>
      <div className="ss-sticky">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted
          playsInline
          loop={isTouch}
          autoPlay={isTouch}
          preload="auto"
          className="ss-video"
        />
        <div className="ss-overlay" style={{ background: `rgba(9, 9, 11, ${overlayOpacity})` }} />
        <div className="ss-center">{children}</div>
      </div>
    </section>
  )
}
