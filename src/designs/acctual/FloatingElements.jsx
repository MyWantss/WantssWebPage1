import { useEffect, useRef, useState } from 'react'
import { floaterConfig } from './floaterConfig'

function ParallaxWrapper({ children, speed = 0.3 }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const center = window.innerHeight / 2
      const dist = rect.top + rect.height / 2 - center
      setOffset(dist * speed)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}

function SlideInWrapper({ children, from = 'left', delay = 0 }) {
  const sentinelRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const offsets = {
    left: 'translate(-120%, 0)',
    right: 'translate(120%, 0)',
    'top-right': 'translate(120%, -80%)',
    'bottom-left': 'translate(-120%, 80%)',
    'bottom-right': 'translate(120%, 80%)',
    'top-left': 'translate(-120%, -80%)',
  }

  const startTransform = offsets[from] || offsets.left

  const enterTransition = `transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.8s ease ${delay}s`
  const exitTransition = `transform 0.6s ease 0s, opacity 0.4s ease 0s`

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }} />
      <div
        style={{
          transform: visible ? 'translate(0, 0)' : startTransform,
          opacity: visible ? 1 : 0,
          transition: visible ? enterTransition : exitTransition,
        }}
      >
        {children}
      </div>
    </>
  )
}

export default function FloatingElements({ section }) {
  const items = floaterConfig.filter(f => f.section === section && f.src)
  if (!items.length) return null

  return (
    <>
      {items.map(item => {
        const inner = (
          <div
            className="float-element"
            style={{
              animationDelay: `${item.delay || 0}s`,
              ...(item.reverseFloat ? { animationDirection: 'reverse' } : {}),
              ...(item.parallax ? { animation: 'none' } : {}),
            }}
          >
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
              draggable={false}
              loading="lazy"
              style={{
                width: `${item.size || 64}px`,
                height: 'auto',
                display: 'block',
                transform: `rotate(${item.rotation || 0}deg)`,
                opacity: item.opacity ?? 0.85,
                filter: item.shadow
                  ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.35))'
                  : 'none',
              }}
            />
          </div>
        )

        const slideFrom = item.slideInFrom || (item.position?.left != null ? 'left' : 'right')

        const side = item.position?.left != null ? 'left' : 'right'

        return (
          <div
            key={item.id}
            className={`floater-side-${side}${item.hideOnMobile ? ' floater-hide-mobile' : ''}`}
            style={{
              ...item.position,
              position: 'absolute',
              zIndex: 2,
              pointerEvents: 'none',
              ...(item.slideIn && item.position?.left === '50%' ? { transform: 'translateX(-50%)' } : {}),
            }}
          >
            {item.slideIn ? (
              <SlideInWrapper from={slideFrom} delay={item.slideInDelay || 0}>
                {item.parallax ? (
                  <ParallaxWrapper speed={item.parallax}>{inner}</ParallaxWrapper>
                ) : (
                  inner
                )}
              </SlideInWrapper>
            ) : item.parallax ? (
              <ParallaxWrapper speed={item.parallax}>{inner}</ParallaxWrapper>
            ) : (
              inner
            )}
          </div>
        )
      })}
    </>
  )
}
