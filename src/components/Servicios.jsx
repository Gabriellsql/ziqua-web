import { motion } from 'framer-motion'
import ServicesBg from './ServicesBg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
})

const servicios = [
  {
    icon: '🔬',
    title: 'Monitoreo en tiempo real',
    desc: 'Sensores multiparámetro miden pH, cloro, temperatura, turbidez y TDS de forma continua las 24 horas del día, los 7 días de la semana.',
    tag: 'IoT · ESP32',
    featured: false,
  },
  {
    icon: '⚗️',
    title: 'Dosificación automática',
    desc: 'El sistema detecta desequilibrios y activa bombas dosificadoras para agregar cloro u otros químicos con precisión, sin intervención humana.',
    tag: 'Automatización',
    featured: true,
  },
  {
    icon: '📱',
    title: 'App móvil e historial',
    desc: 'Consulta el estado de tu alberca desde cualquier lugar con nuestra app en Flutter. Visualiza gráficas, alertas y el historial completo de parámetros.',
    tag: 'Flutter · Firebase',
    featured: false,
  },
  {
    icon: '🤖',
    title: 'IA predictiva y alertas',
    desc: 'Un modelo de inteligencia artificial analiza tendencias y anticipa problemas antes de que ocurran, enviando alertas push a tu celular al instante.',
    tag: 'IA · Notificaciones',
    featured: false,
  },
]

export default function Servicios() {
  return (
    <div id="servicios" className="relative overflow-hidden py-24 px-12" style={{ background: '#eef5fd' }}>
      <ServicesBg />

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
            Nuestros servicios
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '44px', color: '#042C53', letterSpacing: '-1.5px' }}
          >
            Todo lo que <span style={{ color: '#185FA5' }}>Ziqua</span> hace<br />
            por tu alberca
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Una plataforma completa que combina hardware inteligente, software en la nube
            y análisis con IA para mantener tu alberca siempre en condiciones óptimas.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={s.featured ? {
                background: '#185FA5',
                border: '1px solid rgba(24,95,165,0.4)',
                boxShadow: '0 24px 56px rgba(24,95,165,0.30)',
              } : {
                background: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(24,95,165,0.14)',
                boxShadow: '0 8px 32px rgba(4,44,83,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Ícono */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 relative"
                style={{ background: s.featured ? 'rgba(255,255,255,0.15)' : 'rgba(24,95,165,0.08)' }}
              >
                {s.icon}
                {/* Ring animado */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: `1px solid ${s.featured ? 'rgba(255,255,255,0.2)' : 'rgba(24,95,165,0.15)'}` }}
                />
              </motion.div>

              {/* Título */}
              <h3 className="font-black text-base mb-3" style={{ color: s.featured ? '#fff' : '#042C53', letterSpacing: '-0.3px' }}>
                {s.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: s.featured ? 'rgba(255,255,255,0.82)' : '#5a7a9a' }}>
                {s.desc}
              </p>

              {/* Tag */}
              <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={s.featured ? {
                  background: 'rgba(255,255,255,0.20)',
                  color: '#fff',
                } : {
                  background: '#E6F1FB',
                  color: '#0C447C',
                }}
              >
                {s.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}