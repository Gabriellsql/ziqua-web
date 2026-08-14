import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Quiénes somos',   href: '#quienes-somos' },
  { label: 'Servicios',       href: '#servicios'      },
  { label: '¿Cómo funciona?', href: '#como-funciona'  },
  { label: 'Tecnología',      href: '#tecnologia'     },
  { label: 'Impacto',         href: '#impacto'        },
  { label: 'Contacto',        href: '#contacto'       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,1)',
        borderBottom: scrolled ? '1px solid rgba(24,95,165,0.10)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(4,44,83,0.07)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-12 py-4 flex items-center gap-8">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm text-white"
            style={{ background: '#185FA5', boxShadow: '0 4px 12px rgba(24,95,165,0.3)' }}
          >
            Zq
          </div>
          <span className="text-xl font-black tracking-tight" style={{ color: '#185FA5' }}>
            Ziqua
          </span>
        </motion.div>

        {/* Links desktop — pegados al logo */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.button
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{ color: active === link.href ? '#185FA5' : '#5a6a7a' }}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: '#185FA5' }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              className="block w-5 h-0.5 rounded-full"
              style={{ background: '#185FA5' }}
            />
          ))}
        </motion.button>

      </div>

      {/* Menú mobile */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
        style={{
          background: 'rgba(255,255,255,0.97)',
          borderTop: '1px solid rgba(24,95,165,0.08)',
        }}
      >
        <div className="px-8 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              whileHover={{ x: 4 }}
              className="text-sm font-semibold py-2 text-left"
              style={{ color: active === link.href ? '#185FA5' : '#5a6a7a' }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

    </motion.nav>
  )
}