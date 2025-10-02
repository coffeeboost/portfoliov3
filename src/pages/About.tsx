import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import KaizenBackdrop from '../components/KaizenBackdrop'
import ToolkitMap from '../components/ToolkitMap'

export default function About(){
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <KaizenBackdrop />
      <Header />
      <main className="relative z-10">
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h1 className="text-4xl font-bold">About me</h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-800">
            I’m Gordon ("鄧友尊") Tang — a developer who loves learning and solving problems. Outside of work, I’m into judo, the gym, and video games.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-800">
            I believe in the Japanese philosophy of Kaizen — continuous improvement. You can usually catch me learning something or improving — whether it’s coding, a new gym routine, or a new judo throw.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-800">
            I’m currently a Recruit Programmer at Statistics Canada, working mainly with C# and Python — building the next generation of census tabulation and improving business statistics processing software.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-800">
            I graduated with a Bachelor of Computer Science (Honours) from Carleton University (2023), with focuses in AI, statistics, and economics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a href="/resume.pdf" className="rounded-full bg-brand-500 text-white px-4 py-2 hover:opacity-90">Resume</a>
            <a href="https://github.com/coffeeboost" className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5">GitHub</a>
            <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" className="rounded-full border border-black/10 px-4 py-2 hover:bg-black/5">LinkedIn</a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Toolkit</h2>
          <div className="mt-3">{/* tightened spacing */}
            <ToolkitMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
