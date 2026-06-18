import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-12 py-4 border-b border-blue-100 bg-white sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          Zq
        </div>
        <span className="text-xl font-bold text-blue-700 tracking-tight">Ziqua</span>
      </div>

      {/* Links */}
      <ul className="flex gap-8 list-none">
        {['Quiénes somos', 'Servicios', 'Precios', 'Blog', 'Contacto'].map((item) => (
          <li key={item}>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
      >
        Comenzar gratis
      </motion.button>
    </motion.nav>
  )
}