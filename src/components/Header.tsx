import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-1 rounded text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      aria-label="Toggle dark mode"
    >
      <Icon icon={dark ? 'ph:sun-bold' : 'ph:moon-bold'} width={18} height={18} />
    </button>
  )
}

export default function Header(){
  const { pathname } = useLocation()
  const link = (to: string, label: string) => (
    <Link to={to} className={`px-2 py-1 rounded ${pathname===to ? 'text-brand-500' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}`}>{label}</Link>
  )
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold dark:text-slate-100"><span className="text-brand-500">鄧</span>友尊</Link>
        <nav className="flex items-center gap-3 text-sm">
          {link('/', 'Home')}
          {link('/about', 'About')}
          {link('/projects', 'Projects')}
          {link('/blog', 'Blog')}
          {link('/contact', 'Contact')}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
