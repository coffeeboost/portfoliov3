import { Link, useLocation } from 'react-router-dom'
export default function Header(){
  const { pathname } = useLocation()
  const link = (to: string, label: string) => (
    <Link to={to} className={`px-2 py-1 rounded ${pathname===to?'text-brand-500':'text-slate-600 hover:text-slate-900'}`}>{label}</Link>
  )
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold"><span className="text-brand-500">鄧</span>友尊</Link>
        <nav className="flex items-center gap-3 text-sm">
          {link('/', 'Home')}
          {link('/about', 'About')}
          {link('/projects', 'Projects')}
          {link('/blog', 'Blog')}
          {link('/contact', 'Contact')}
        </nav>
      </div>
    </header>
  )
}
