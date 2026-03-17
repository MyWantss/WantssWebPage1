import { memo, useCallback, useEffect, useRef } from 'react'
import { animate } from 'framer-motion'
import './GlowingEffect.css'

const GlowingEffect = memo(({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  glow = false,
  disabled = true,
  movementDuration = 2,
  borderWidth = 1,
}) => {
  const containerRef = useRef(null)
  const lastPosition = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(0)

  const handleMove = useCallback((e) => {
    if (!containerRef.current) return

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const element = containerRef.current
      if (!element) return

      const { left, top, width, height } = element.getBoundingClientRect()
      const mouseX = e?.x ?? lastPosition.current.x
      const mouseY = e?.y ?? lastPosition.current.y

      if (e) lastPosition.current = { x: mouseX, y: mouseY }

      const center = [left + width * 0.5, top + height * 0.5]
      const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
      const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

      if (distanceFromCenter < inactiveRadius) {
        element.style.setProperty('--active', '0')
        return
      }

      const isActive =
        mouseX > left - proximity &&
        mouseX < left + width + proximity &&
        mouseY > top - proximity &&
        mouseY < top + height + proximity

      element.style.setProperty('--active', isActive ? '1' : '0')
      if (!isActive) return

      const currentAngle = parseFloat(element.style.getPropertyValue('--start')) || 0
      let targetAngle =
        (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90

      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
      const newAngle = currentAngle + angleDiff

      animate(currentAngle, newAngle, {
        duration: movementDuration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          element.style.setProperty('--start', String(value))
        },
      })
    })
  }, [inactiveZone, proximity, movementDuration])

  useEffect(() => {
    if (disabled) return

    const handleScroll = () => handleMove()
    const handlePointerMove = (e) => handleMove(e)

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.body.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener('scroll', handleScroll)
      document.body.removeEventListener('pointermove', handlePointerMove)
    }
  }, [handleMove, disabled])

  if (disabled) return null

  return (
    <div
      ref={containerRef}
      className="ge-container"
      style={{
        '--blur': `${blur}px`,
        '--spread': spread,
        '--start': '0',
        '--active': '0',
        '--glowingeffect-border-width': `${borderWidth}px`,
        '--repeating-conic-gradient-times': '5',
        '--gradient': `
          radial-gradient(circle, #EC4899 10%, #EC489900 20%),
          radial-gradient(circle at 40% 40%, #A855F7 5%, #A855F700 15%),
          radial-gradient(circle at 60% 60%, #5B6BF5 10%, #5B6BF500 20%),
          radial-gradient(circle at 40% 60%, #EC4899 10%, #EC489900 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #EC4899 0%,
            #A855F7 calc(25% / var(--repeating-conic-gradient-times)),
            #5B6BF5 calc(50% / var(--repeating-conic-gradient-times)),
            #EC4899 calc(75% / var(--repeating-conic-gradient-times)),
            #EC4899 calc(100% / var(--repeating-conic-gradient-times))
          )
        `,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
    >
      <div className="ge-glow" />
    </div>
  )
})

GlowingEffect.displayName = 'GlowingEffect'
export { GlowingEffect }
