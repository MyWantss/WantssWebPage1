import { useEffect, useRef, useState } from 'react'

export default function Cursor({ size = 32, light = false }) {
  const cursorRef = useRef(null)
  const rafRef = useRef(null)
  const previousPos = useRef({ x: -size, y: -size })
  const targetPos = useRef({ x: -size, y: -size })
  const isMoving = useRef(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const animate = () => {
      if (!cursorRef.current) return
      const curr = previousPos.current
      const tgt = targetPos.current
      const dx = tgt.x - curr.x
      const dy = tgt.y - curr.y

      // Stop loop when cursor is close enough to target
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        previousPos.current = { x: tgt.x, y: tgt.y }
        cursorRef.current.style.transform = `translate(${tgt.x - size / 2}px, ${tgt.y - size / 2}px)`
        isMoving.current = false
        return
      }

      const newX = curr.x + dx * 0.15
      const newY = curr.y + dy * 0.15
      previousPos.current = { x: newX, y: newY }
      cursorRef.current.style.transform = `translate(${newX - size / 2}px, ${newY - size / 2}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    const startLoop = () => {
      if (!isMoving.current) {
        isMoving.current = true
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    const onMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
      startLoop()
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [size])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        background: light
          ? 'linear-gradient(135deg, #DB2777, #9333EA, #4F56E8)'
          : 'linear-gradient(135deg, #EC4899, #A855F7, #5B6BF5)',
        mixBlendMode: light ? 'normal' : 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? (light ? 0.75 : 1) : 0,
        transition: 'opacity 0.3s',
      }}
    />
  )
}
