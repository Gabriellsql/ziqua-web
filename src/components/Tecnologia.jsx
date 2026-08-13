import { motion } from 'framer-motion'
import TecnologiaBg from './TecnologiaBg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
})

const tecnologias = [
  {
    icon: '⚡',
    title: 'ESP32',
    desc: 'Microcontrolador con WiFi y Bluetooth integrado. Es el cerebro del hardware de Ziqua, responsable de leer sensores y transmitir datos en tiempo real.',
    tags: ['WiFi', 'Bluetooth', 'Bajo consumo'],
    color: '#d97706',
  },
  {
    icon: '🔬',
    title: 'Sensores multiparámetro',
    desc: 'Sensores especializados para pH, ORP, temperatura DS18B20, turbidez y TDS. Cada uno calibrado para ofrecer lecturas precisas en ambientes acuáticos.',
    tags: ['pH', 'ORP', 'TDS', 'Turbidez'],
    color: '#0891b2',
  },
  {
    icon: '📱',
    title: 'Flutter',
    desc: 'Framework de Google para desarrollo móvil multiplataforma. La app de Ziqua corre en iOS y Android con una sola base de código, con UI fluida y reactiva.',
    tags: ['iOS', 'Android', 'Dart'],
    color: '#185FA5',
  },
  {
    icon: '🔥',
    title: 'Firebase',
    desc: 'Plataforma de Google en la nube para almacenar datos en tiempo real, autenticación de usuarios, notificaciones push y sincronización instantánea entre dispositivos.',
    tags: ['Realtime DB', 'Auth', 'Cloud'],
    color: '#d97706',
  },
  {
    icon: '🤖',
    title: 'IA & Machine Learning',
    desc: 'Modelo entrenado con datos históricos de calidad del agua para detectar patrones, predecir anomalías y recomendar acciones de mantenimiento preventivo.',
    tags: ['Predicción', 'Anomalías', 'ML'],
    color: '#0d9488',
  },
  {
    icon: '☀️',
    title: 'Energía solar',
    desc: 'Panel solar y batería de respaldo integrados al sistema para operación autónoma. Ziqua funciona sin depender de la red eléctrica, reduciendo costos y huella de carbono.',
    tags: ['Solar', 'Autónomo', 'Verde'],
    color: '#059669',
  },
]

export default function Tecnologia() {
  return (
    <div className="relative overflow-hidden py-24 px-12" style={{ background: '#fff8f0' }}>
      <TecnologiaBg />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 border text-xs font-bold px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(217,119,6,0.10)', borderColor: 'rgba(217,119,6,0.25)', color: '#92400e' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#d97706' }}
            />
            Tecnología
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '44px', color: '#042C53', letterSpacing: '-1.5px' }}
          >
            El stack tecnológico<br />
            <span style={{ color: '#d97706' }}>detrás de Ziqua</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Cada componente fue elegido con precisión para garantizar confiabilidad,
            escalabilidad y eficiencia en entornos de albercas reales.
          </motion.p>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-3 gap-6 items-stretch">
          {tecnologias.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.88)',
                border: `1px solid ${tech.color}22`,
                boxShadow: `0 16px 40px rgba(4,44,83,0.07), 0 2px 8px ${tech.color}15`,
                backdropFilter: 'blur(10px)',
                transform: i % 2 === 0
                  ? 'perspective(700px) rotateY(3deg) rotateX(1deg)'
                  : 'perspective(700px) rotateY(-3deg) rotateX(1deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Ícono */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 relative"
                style={{ background: `${tech.color}12` }}
              >
                {tech.icon}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 rounded-xl"
                  style={{ border: `1px solid ${tech.color}40` }}
                />
              </motion.div>

              {/* Título */}
              <h3 className="font-black text-base mb-2" style={{ color: '#042C53', letterSpacing: '-0.3px' }}>
                {tech.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#5a7a9a' }}>
                {tech.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.tags.map((tag, j) => (
                  <span key={j}
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${tech.color}12`, color: tech.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}