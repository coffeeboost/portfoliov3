import Header from '../components/Header'
import Footer from '../components/Footer'
import KaizenBackdrop from '../components/KaizenBackdrop'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const HEADLINE = `Hey, I’m Gordon Tang — a software engineer based in Ottawa, Canada.`
const EARTHS = [
  'twemoji:globe-showing-americas',
  'twemoji:globe-showing-europe-africa',
  'twemoji:globe-showing-asia-australia',
]

export default function Home(){
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const [ei, setEi] = useState(0)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(HEADLINE.slice(0, i))
      if (i >= HEADLINE.length){ setDone(true); clearInterval(id) }
    }, 18)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(()=> setEi(v => (v+1) % EARTHS.length), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative min-h-screen">
      <KaizenBackdrop fixed />
      <Header/>
      <main className="relative z-10">
        <section className="mx-auto max-w-3xl px-4 py-20 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight whitespace-pre-wrap">
            <span>{typed}</span>
            <span className="ml-1 inline-block align-baseline blink-cursor text-slate-400">|</span>
          </h1>

          <motion.p
            initial={{opacity:0,y:8}}
            animate={done?{opacity:1,y:0}:{}}
            transition={{delay:0.2,duration:0.5}}
            className="mt-4 text-lg text-slate-700"
          >
            Always Learning. Always Improving.
          </motion.p>

          <motion.div
            initial={{opacity:0,y:8}}
            animate={done?{opacity:1,y:0}:{}}
            transition={{delay:0.35,duration:0.5}}
            className="mt-6 flex gap-3 justify-center"
          >
            <a href="/resume.pdf" className="rounded-full bg-brand-500 text-white px-4 py-2 text-sm hover:opacity-90">Resume</a>
            <Link to="/contact" className="rounded-full border border-black/10 px-4 py-2 text-sm">Contact</Link>
          </motion.div>

          <motion.figure
            initial={{opacity:0,y:8}}
            animate={done?{opacity:1,y:0}:{}}
            transition={{delay:0.5,duration:0.5}}
            className="mt-10"
          >
            <div className="relative h-44 w-44 mx-auto overflow-hidden rounded-2xl ring-4 ring-black/5">
              <img src="/gordon-tang-headshot.jpg" alt="鄧友尊" className="h-full w-full object-cover"/>
            </div>
            <figcaption className="mt-3 text-center text-sm italic text-slate-500 flex items-center justify-center gap-2">
              <span>“Laissez-faire et laissez-passer, le monde va de lui-même.”</span>
              <AnimatePresence mode="wait">
                <motion.span key={ei} initial={{opacity:0, rotate:-6}} animate={{opacity:1, rotate:0}} exit={{opacity:0, rotate:6}} transition={{duration:0.2}}>
                  <Icon icon={EARTHS[ei]} width={16} height={16} />
                </motion.span>
              </AnimatePresence>
            </figcaption>
          </motion.figure>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
