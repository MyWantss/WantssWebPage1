/*
 * Floating Decorative Elements — Configuration
 *
 * 1. Drop your PNG/WebP images (transparent background) into ./floaters/
 * 2. Add an entry below with the filename and positioning
 * 3. Save — Vite hot-reloads and the floater appears
 *
 * To reorder: move entries in the array (later = visually on top)
 * To remove:  delete the entry
 *
 * Available sections:
 *   hero, problem, transform, infra-zoom, process,
 *   industries, diff, offer, cta-final
 */

import floater1 from './floaters/floater-1.png'
import floater2 from './floaters/floater-2.png'
import floater3 from './floaters/floater-3.png'
import floater4 from './floaters/floater-4.png'
import floater5 from './floaters/floater-5.png'
import floater6 from './floaters/floater-6.png'
import floater7 from './floaters/floater-7.png'
import floater8 from './floaters/floater-8.png'

const floaterImages = {
  'floater-1.png': floater1,
  'floater-2.png': floater2,
  'floater-3.png': floater3,
  'floater-4.png': floater4,
  'floater-5.png': floater5,
  'floater-6.png': floater6,
  'floater-7.png': floater7,
  'floater-8.png': floater8,
}

function img(filename) {
  return floaterImages[filename] || ''
}

export const floaterConfig = [
  {
    id: 'process-floater-1',
    src: img('floater-1.png'),
    section: 'process-orbital',
    position: { top: '12%', left: '13%' },
    size: 528,
    rotation: -8,
    delay: 0.3,
    shadow: true,
    opacity: 0.9,
    slideIn: true,
    slideInDelay: 0.2,
    hideOnMobile: true,
  },
  {
    id: 'process-floater-5',
    src: img('floater-5.png'),
    section: 'process-orbital',
    position: { top: '15%', right: '13%' },
    size: 528,
    rotation: 5,
    delay: 0.5,
    shadow: true,
    opacity: 0.9,
    reverseFloat: true,
    slideIn: true,
    slideInDelay: 0.4,
    hideOnMobile: true,
  },
  {
    id: 'orbital-floater-2',
    src: img('floater-2.png'),
    section: 'process-orbital',
    position: { bottom: '3%', left: '13%' },
    size: 495,
    rotation: 6,
    delay: 0.7,
    shadow: true,
    opacity: 0.9,
    slideIn: true,
    slideInDelay: 0.6,
    hideOnMobile: true,
  },
  {
    id: 'orbital-floater-7',
    src: img('floater-7.png'),
    section: 'process-orbital',
    position: { bottom: '3%', right: '13%' },
    size: 342,
    rotation: -5,
    delay: 0.9,
    shadow: true,
    opacity: 0.9,
    reverseFloat: true,
    slideIn: true,
    slideInDelay: 0.8,
    hideOnMobile: true,
  },
  {
    id: 'diff-floater-8',
    src: img('floater-8.png'),
    section: 'diff',
    position: { top: '-5%', left: '1%' },
    size: 545,
    rotation: -4,
    delay: 0.3,
    shadow: true,
    opacity: 0.9,
    slideIn: true,
    slideInFrom: 'left',
    slideInDelay: 0.2,
    hideOnMobile: true,
  },
  {
    id: 'diff-floater-6',
    src: img('floater-6.png'),
    section: 'diff',
    position: { top: '-5%', right: '1%' },
    size: 572,
    rotation: -3,
    delay: 0.5,
    shadow: true,
    opacity: 0.9,
    reverseFloat: true,
    slideIn: true,
    slideInFrom: 'right',
    slideInDelay: 0.4,
    hideOnMobile: true,
  },
  {
    id: 'diff-floater-3',
    src: img('floater-3.png'),
    section: 'diff',
    position: { bottom: '-5%', left: '5%' },
    size: 528,
    rotation: 5,
    delay: 0.7,
    shadow: true,
    opacity: 0.9,
    slideIn: true,
    slideInFrom: 'left',
    slideInDelay: 0.6,
    hideOnMobile: true,
  },
  {
    id: 'diff-floater-4',
    src: img('floater-4.png'),
    section: 'diff',
    position: { bottom: '-5%', right: '5%' },
    size: 418,
    rotation: 3,
    delay: 0.9,
    shadow: true,
    opacity: 0.9,
    reverseFloat: true,
    slideIn: true,
    slideInFrom: 'right',
    slideInDelay: 0.8,
    hideOnMobile: true,
  },
  {
    id: 'cta-floater-4',
    src: img('floater-4.png'),
    section: 'cta-final',
    position: { top: '5%', left: '5%' },
    size: 540,
    rotation: 3,
    delay: 0.4,
    shadow: true,
    opacity: 0.9,
    hideOnMobile: true,
  },
  {
    id: 'cta-floater-8',
    src: img('floater-8.png'),
    section: 'cta-final',
    position: { top: '12%', right: '5%' },
    size: 480,
    rotation: -4,
    delay: 0.6,
    shadow: true,
    opacity: 0.9,
    reverseFloat: true,
    hideOnMobile: true,
  },
]
