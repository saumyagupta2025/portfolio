import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/projects', label: 'projects' },
  { to: '/blog', label: 'blog' },
  { to: '/knowledge', label: 'notes' },
  { to: '/library', label: 'library' },
  { to: '/interests', label: 'interests' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-[#e7e5e4]">
      <div className="max-w-3xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-[#1c1917] text-lg font-medium hover:text-[#44403c] transition-colors shrink-0"
        >
          Saumya Gupta
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#1c1917] font-medium'
                    : 'text-[#78716c] hover:text-[#44403c]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#78716c] hover:text-[#1c1917] transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e7e5e4] bg-[#faf9f6] px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? 'text-[#1c1917] font-medium' : 'text-[#78716c]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
