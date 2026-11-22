import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Cómo funciona?', href: '#como-funciona' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Contacto', href: '#contacto' },
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
        willChange: 'transform',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center gap-4 sm:gap-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'tween', duration: 0.15 }}
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ willChange: 'transform' }}
        >
          <img
            src="/logo.png"
            alt="ZYQUA logo"
            className="object-contain"
            style={{ width: '40px', height: '40px', verticalAlign: 'middle' }}
          />
          <span className="font-black tracking-tight" style={{ color: '#185FA5', fontSize: '22px', lineHeight: '40px' }}>
            ZYQUA
          </span>
        </motion.div>

        <ul className="hidden md:flex items-center gap-1 list-none ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.button
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'tween', duration: 0.15 }}
                className="relative px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{ color: active === link.href ? '#185FA5' : '#5a6a7a', willChange: 'transform' }}
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

        <motion.button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
          className="md:hidden flex flex-col gap-1.5 p-3 ml-auto rounded-lg"
          style={{ willChange: 'transform' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="block w-5 h-0.5 rounded-full"
              style={{ background: '#185FA5', willChange: 'transform, opacity' }}
            />
          ))}
        </motion.button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden md:hidden"
        style={{
          background: 'rgba(255,255,255,0.98)',
          borderTop: '1px solid rgba(24,95,165,0.08)',
          willChange: 'height, opacity',
        }}
      >
        <div className="px-5 sm:px-8 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              whileHover={{ x: 4 }}
              transition={{ type: 'tween', duration: 0.15 }}
              className="text-sm font-semibold py-3 px-2 text-left rounded-lg"
              style={{
                color: active === link.href ? '#185FA5' : '#5a6a7a',
                background: active === link.href ? 'rgba(24,95,165,0.06)' : 'transparent',
                willChange: 'transform',
              }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}