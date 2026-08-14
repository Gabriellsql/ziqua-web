import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactoBg from './ContactoBg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
})

const infoCards = [
  {
    icon: '📍',
    title: 'Ubicación',
    desc: 'Zihuatanejo, Guerrero, México',
    sub: 'Instituto Tecnológico de la Costa Grande',
    color: '#185FA5',
  },
  {
    icon: '📧',
    title: 'Correo',
    desc: 'contacto@ziqua.mx',
    sub: 'Respondemos en menos de 24h',
    color: '#0891b2',
  },
  {
    icon: '📱',
    title: 'Teléfono',
    desc: '+52 755 000 0000',
    sub: 'Lunes a viernes 9am - 6pm',
    color: '#0d9488',
  },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) return
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div id="contacto" className="relative overflow-hidden py-24 px-12" style={{ background: '#eef5fd' }}>
      <ContactoBg />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 border text-xs font-bold px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(24,95,165,0.10)', borderColor: 'rgba(24,95,165,0.22)', color: '#0C447C' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#185FA5' }}
            />
            Contáctanos
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '44px', color: '#042C53', letterSpacing: '-1.5px' }}
          >
            ¿Listo para automatizar<br />
            <span style={{ color: '#185FA5' }}>tu alberca?</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Escríbenos y agenda una demo gratuita. Te mostramos cómo Ziqua
            puede transformar el mantenimiento de tu alberca desde el primer día.
          </motion.p>
        </div>

        <div className="flex gap-8 items-start">

          {/* Izquierda — info + cards */}
          <div className="flex flex-col gap-5 w-80 flex-shrink-0">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: `1px solid ${card.color}22`,
                  boxShadow: `0 8px 24px rgba(4,44,83,0.07)`,
                  backdropFilter: 'blur(10px)',
                  transform: 'perspective(600px) rotateY(4deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${card.color}12` }}
                >
                  {card.icon}
                </motion.div>
                <div>
                  <p className="text-xs font-bold mb-0.5" style={{ color: card.color }}>
                    {card.title}
                  </p>
                  <p className="text-sm font-bold" style={{ color: '#042C53' }}>
                    {card.desc}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#8a9bb0' }}>
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Banner demo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl p-5"
              style={{
                background: '#185FA5',
                boxShadow: '0 16px 40px rgba(24,95,165,0.25)',
              }}
            >
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-black text-white text-sm mb-1">Demo gratuita</h4>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.80)' }}>
                Te hacemos una demostración en vivo del sistema funcionando en una alberca real.
              </p>
            </motion.div>
          </div>

          {/* Derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.90)',
              border: '1px solid rgba(24,95,165,0.16)',
              boxShadow: '0 24px 64px rgba(4,44,83,0.10)',
              backdropFilter: 'blur(12px)',
              transform: 'perspective(800px) rotateY(-6deg) rotateX(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <h3 className="font-black text-lg mb-6" style={{ color: '#042C53' }}>
              Envíanos un mensaje
            </h3>

            <div className="flex flex-col gap-4">

              {/* Nombre */}
              <div>
                <label className="text-xs font-bold mb-1.5 block" style={{ color: '#0C447C' }}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: '#f0f6ff',
                    border: '1px solid rgba(24,95,165,0.15)',
                    color: '#042C53',
                  }}
                  onFocus={e => e.target.style.borderColor = '#185FA5'}
                  onBlur={e => e.target.style.borderColor = 'rgba(24,95,165,0.15)'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold mb-1.5 block" style={{ color: '#0C447C' }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: '#f0f6ff',
                    border: '1px solid rgba(24,95,165,0.15)',
                    color: '#042C53',
                  }}
                  onFocus={e => e.target.style.borderColor = '#185FA5'}
                  onBlur={e => e.target.style.borderColor = 'rgba(24,95,165,0.15)'}
                />
              </div>

              {/* Tipo de alberca */}
              <div>
                <label className="text-xs font-bold mb-1.5 block" style={{ color: '#0C447C' }}>
                  Tipo de alberca
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: '#f0f6ff',
                    border: '1px solid rgba(24,95,165,0.15)',
                    color: '#042C53',
                  }}
                >
                  <option>Residencial privada</option>
                  <option>Hotel o resort</option>
                  <option>Condominio</option>
                  <option>Club deportivo</option>
                  <option>Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="text-xs font-bold mb-1.5 block" style={{ color: '#0C447C' }}>
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu alberca y qué necesitas..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                  style={{
                    background: '#f0f6ff',
                    border: '1px solid rgba(24,95,165,0.15)',
                    color: '#042C53',
                  }}
                  onFocus={e => e.target.style.borderColor = '#185FA5'}
                  onBlur={e => e.target.style.borderColor = 'rgba(24,95,165,0.15)'}
                />
              </div>

              {/* Botón */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl font-black text-sm text-white mt-2"
                style={{
                  background: enviado
                    ? '#16a34a'
                    : '#185FA5',
                  boxShadow: enviado
                    ? '0 4px 18px rgba(22,163,74,0.35)'
                    : '0 4px 18px rgba(24,95,165,0.35)',
                  transition: 'background 0.4s',
                }}
              >
                {enviado ? '✓ Mensaje enviado' : 'Solicitar demo gratuita →'}
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}