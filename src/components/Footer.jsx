import { motion } from 'framer-motion'

const links = [
  {
    title: 'Producto',
    items: ['Quiénes somos', 'Servicios', '¿Cómo funciona?', 'Tecnología'],
  },
  {
    title: 'Empresa',
    items: ['Impacto ambiental', 'Contáctanos', 'Demo gratuita'],
  },
  {
    title: 'Tecnología',
    items: ['ESP32', 'Flutter', 'Firebase', 'IA & ML', 'Energía solar'],
  },
]

const ids = {
  'Quiénes somos':    'quienes-somos',
  'Servicios':        'servicios',
  '¿Cómo funciona?':  'como-funciona',
  'Tecnología':       'tecnologia',
  'Impacto ambiental':'impacto',
  'Contáctanos':      'contacto',
  'Demo gratuita':    'contacto',
}

export default function Footer() {
  const scrollTo = (label) => {
    const id = ids[label]
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: '#042C53' }}>

      {/* Onda superior */}
      <div className="w-full overflow-hidden" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f0fdf4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-12 pt-8 pb-12">

        {/* Top */}
        <div className="flex gap-16 mb-14">

          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div
              className="flex items-center gap-3 mb-5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white"
                style={{ background: '#185FA5', boxShadow: '0 4px 12px rgba(24,95,165,0.4)' }}
              >
                Zq
              </div>
              <span className="text-xl font-black text-white tracking-tight">Ziqua</span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Sistema inteligente de monitoreo y automatización de albercas.
              IoT, IA y energía solar para mantener tu agua siempre perfecta.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {['IoT', 'ESP32', 'Flutter', 'Firebase', 'IA', 'Solar'].map((b) => (
                <span
                  key={b}
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(24,95,165,0.30)', color: 'rgba(255,255,255,0.70)' }}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {links.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
            >
              <p
                className="text-xs font-black mb-4 tracking-widest uppercase"
                style={{ color: '#378ADD' }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="text-sm text-left transition-colors hover:text-white"
                      style={{
                        color: 'rgba(255,255,255,0.50)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        willChange: 'color',
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA lateral */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: 'rgba(24,95,165,0.20)',
              border: '1px solid rgba(24,95,165,0.30)',
              minWidth: '200px',
            }}
          >
            <div>
              <div className="text-3xl mb-3">🌊</div>
              <h4 className="font-black text-white text-sm mb-2">
                ¿Tu alberca lista?
              </h4>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Agenda una demo gratuita y ve Ziqua en acción.
              </p>
            </div>
            <motion.button
              onClick={() => scrollTo('Contáctanos')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'tween', duration: 0.15 }}
              className="mt-5 w-full py-2.5 rounded-xl text-xs font-black text-white"
              style={{
                background: '#185FA5',
                boxShadow: '0 4px 14px rgba(24,95,165,0.35)',
                willChange: 'transform',
              }}
            >
              Solicitar demo →
            </motion.button>
          </motion.div>

        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)', willChange: 'opacity' }}
          >
            © 2026 Ziqua · Instituto Tecnológico de la Costa Grande · Zihuatanejo, Guerrero
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2"
            style={{ willChange: 'opacity' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ willChange: 'opacity' }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Sistema activo · Zihuatanejo, Gro.
            </span>
          </motion.div>
        </div>

      </div>
    </footer>
  )
}