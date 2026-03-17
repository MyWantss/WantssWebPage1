import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AnimatedGradientBackground = ({
  startingGap = 125,
  Breathing = false,
  gradientColors = [
    '#09090b',
    '#2d1b69',
    '#5B6BF5',
    '#A855F7',
    '#EC4899',
    '#A855F7',
    '#09090b',
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  animationSpeed = 0.02,
  breathingRange = 5,
  containerStyle = {},
  topOffset = 0,
}) => {
  if (gradientColors.length !== gradientStops.length) {
    throw new Error('gradientColors and gradientStops must have the same length.')
  }

  const containerRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let width = startingGap
    let directionWidth = 1

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1
      if (width <= startingGap - breathingRange) directionWidth = 1
      if (!Breathing) directionWidth = 0
      width += directionWidth * animationSpeed

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(', ')

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStopsString})`

      if (containerRef.current) {
        containerRef.current.style.background = gradient
      }

      animationFrame = requestAnimationFrame(animateGradient)
    }

    animationFrame = requestAnimationFrame(animateGradient)
    return () => cancelAnimationFrame(animationFrame)
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, topOffset])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] } }}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: 0, ...containerStyle }}
      />
    </motion.div>
  )
}

export default AnimatedGradientBackground
