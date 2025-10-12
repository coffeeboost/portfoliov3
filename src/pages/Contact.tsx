import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="relative min-h-screen">
                  <Header/>
      <main className="relative z-10">
        <section className="mx-auto max-w-xl px-4 py-12">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-2 text-slate-700">Send me a note — I’m always happy to connect.</p>

          <form method="POST" action="https://formspree.io/f/YOUR_FORMSPREE_ID" className="mt-6 grid gap-3">
            <input name="name" placeholder="Your name" className="rounded border border-black/10 px-3 py-2" required />
            <input name="email" type="email" placeholder="Your email" className="rounded border border-black/10 px-3 py-2" required />
            <textarea name="message" placeholder="Message" rows={6} className="rounded border border-black/10 px-3 py-2" required />
            <button className="rounded bg-brand-500 text-white px-4 py-2 text-sm hover:opacity-90">Send</button>
          </form>

          <div className="mt-6 text-sm">
            <a className="text-brand-500 hover:underline" href="mailto:gtcanada0730@gmail.com">or email me directly</a>
            <span className="mx-2">•</span>
            <a className="text-brand-500 hover:underline" href="https://github.com/coffeeboost">GitHub</a>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
