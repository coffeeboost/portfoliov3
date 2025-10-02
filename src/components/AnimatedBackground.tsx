import { motion } from 'framer-motion'

const ITEMS = [
  { key: 'dumbbell', svg: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="8" width="4" height="8" rx="1"/>
      <rect x="6" y="9" width="2" height="6" rx="1"/>
      <rect x="16" y="9" width="2" height="6" rx="1"/>
      <rect x="21" y="8" width="2" height="8" rx="1"/>
      <rect x="8" y="11" width="8" height="2" rx="1"/>
    </svg>
  )},
  { key: 'kettlebell', svg: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 7a4 4 0 0 1 8 0"/>
      <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/>
    </svg>
  )},
  { key: 'plate', svg: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )},
  { key: 'heartbeat', svg: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h4l2-5 4 10 2-5h4"/>
    </svg>
  )}
]

const POS = [
  { top: '10%', left: '-10%' },
  { top: '25%', left: '110%' },
  { top: '70%', left: '-15%' },
  { top: '85%', left: '105%' },
  { top: '40%', left: '-12%' },
  { top: '55%', left: '108%' },
]

export default function AnimatedBackground(){
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 creative-bg" />
      {POS.map((p, i) => {
        const item = ITEMS[i % ITEMS.length]
        const delay = i * 2
        const xFrom = p.left.endsWith('%') && parseFloat(p.left) > 100 ? -300 : 300
        const xTo = -xFrom
        const yAmp = i % 2 === 0 ? 30 : 50
        return (
          <motion.div
            key={i}
            className="absolute text-slate-400"
            style={{ top: p.top, left: p.left }}
            initial={{ opacity: 0.04, x: xFrom }}
            animate={{ opacity: [0.04, 0.12, 0.04], x: [xFrom, xTo], y: [0, -yAmp, 0] }}
            transition={{ duration: 28 + i*2, delay, ease: 'easeInOut', repeat: Infinity }}
          >
            {item.svg}
          </motion.div>
        )
      })}
    </div>
  )
}
