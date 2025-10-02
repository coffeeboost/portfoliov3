export default function Footer(){
  const y = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">© {y} 鄧友尊 — Ottawa, Canada.</div>
    </footer>
  )
}
