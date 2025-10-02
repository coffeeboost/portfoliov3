import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

interface Repo { id: number; name: string; description?: string; stargazers_count: number; html_url: string; homepage?: string; language?: string; fork: boolean; updated_at: string }

export default function Projects(){
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/coffeeboost/repos?sort=updated&per_page=8')
      .then(r => r.json())
      .then((list: Repo[]) => setRepos(list.filter(r => !r.fork)))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="relative min-h-screen">
                  <Header/>
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">Recent Projects</h1>
          {loading ? (
            <p className="mt-6 text-slate-600">Loading recent projects…</p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map(r => (
                <motion.article initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:"-10%"}} transition={{duration:0.4}} key={r.id} className="card border-[6px] border-slate-400 p-5">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  {r.description && <p className="mt-1 text-slate-700">{r.description}</p>}
                  <div className="mt-3 flex gap-3">
                    <a href={r.html_url} className="text-brand-500 hover:underline">Repo</a>
                    {r.homepage && <a href={r.homepage} className="text-brand-500 hover:underline">Site</a>}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer/>
    </div>
  )
}
