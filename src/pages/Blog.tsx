import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import YAML from 'yaml'

const files = import.meta.glob<string>(
  '/content/posts/*.{yml,yaml}',
  { as: 'raw', eager: true }
) as Record<string,string>

type Post = { path: string; title: string; date: string; summary: string }

function parseFile(path: string, raw: string): Post | null {
  try {
    const data = YAML.parse(raw) as Record<string, unknown>
    const title = String(data?.title ?? '').trim() || fallbackTitleFromPath(path)
    const date = String(data?.date ?? '').trim()
    const summary = String(data?.summary ?? '').trim()
    return { path, title, date, summary }
  } catch (e) {
    console.warn('Failed to parse YAML file', path, e)
    return null
  }
}

function fallbackTitleFromPath(p: string){
  const b = p.split('/').pop() || 'Untitled'
  return b.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').trim() || 'Untitled'
}

function getPosts(): Post[] {
  const list: Post[] = []
  for (const [path, raw] of Object.entries(files)){
    const p = parseFile(path, raw)
    if (p) list.push(p)
  }
  return list.sort((a,b) => new Date(b.date||0).getTime() - new Date(a.date||0).getTime())
}

function textPreview(s: string, words = 120){
  return s.replace(/\s+/g,' ').trim().split(' ').slice(0, words).join(' ') + (s.trim().length>0 ? '…' : '')
}

function ExpandableCard({ p }: { p: Post }){
  const [open, setOpen] = useState(false)
  const preview = useMemo(()=> textPreview(p.summary, 120), [p.summary])
  return (
    <motion.article
      initial={{opacity:0, y:16}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true, margin:'-10%'}}
      transition={{duration:0.4}}
      className="card p-5"
    >
      <header>
        <h2 className="text-xl font-semibold">{p.title}</h2>
        <div className="mt-1 text-xs text-slate-500">
          {p.date && <time dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>}
        </div>
      </header>
      <div className="mt-3 blog-content whitespace-pre-wrap">
        {open ? p.summary : preview}
        {p.summary && (
          <button onClick={()=>setOpen(!open)} className="mt-3 ml-2 text-sm text-brand-500 hover:underline inline-block">
            {open?'Show less':'Read more'}
          </button>
        )}
      </div>
    </motion.article>
  )
}

export default function Blog(){
  const posts = useMemo(() => getPosts(), [])
  return (
    <div className="relative min-h-screen">
      <Header/>
      <main className="relative z-10">
        <section className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-2 text-slate-700 flex items-center gap-2">Short posts, small wins <Icon icon="ph:trophy-duotone" width={16} height={16} /></p>
          <div className="mt-6 grid gap-4">
            {posts.map(p => (
              <ExpandableCard key={p.path} p={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
