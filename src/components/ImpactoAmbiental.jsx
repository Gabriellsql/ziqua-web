import { motion } from 'framer-motion'
import ImpactoAmbientalBg from './ImpactoAmbientalBg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
})

const impactos = [
  {
    icon: '☀️',
    title: 'Energía solar autónoma',
    desc: 'Ziqua opera con un panel solar y batería de respaldo integrados. No depende de la red eléctrica, reduciendo costos operativos y emisiones de carbono.',
    tag: 'Solar · Autónomo',
    color: '#d97706',
    stat: '100%',
    statLabel: 'Energía renovable',
  },
  {
    icon: '🧪',
    title: 'Dosificación precisa',
    desc: 'Al dosificar solo la cantidad exacta de químicos necesarios, Ziqua reduce el desperdicio de cloro y otros reactivos hasta en un 40% comparado con métodos manuales.',
    tag: 'Químicos · Eficiencia',
    color: '#0891b2',
    stat: '-40%',
    statLabel: 'Uso de químicos',
  },
  {
    icon: '💧',
    title: 'Agua siempre óptima',
    desc: 'El monitoreo continuo evita desequilibrios que dañan la infraestructura o requieren vaciado total. Menos cambios de agua significa menos desperdicio hídrico.',
    tag: 'Agua · Conservación',
    color: '#16a34a',
    stat: '-60%',
    statLabel: 'Desperdicio de agua',
  },
  {
    icon: '🌱',
    title: 'Huella de carbono reducida',
    desc: 'Menos visitas de mantenimiento, menos transporte de químicos y operación con energía limpia resultan en una huella de carbono significativamente menor.',
    tag: 'CO₂ · Sostenibilidad',
    color: '#16a34a',
    stat: '-35%',
    statLabel: 'Huella de carbono',
  },
]

export default function ImpactoAmbiental() {
  return (
    <div className="relative overflow-hidden py-24 px-12" style={{ background: '#f0fdf4' }}>
      <ImpactoAmbientalBg />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 border text-xs font-bold px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(22,163,74,0.10)', borderColor: 'rgba(22,163,74,0.25)', color: '#166534' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#16a34a' }}
            />
            Impacto ambiental
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '44px', color: '#042C53', letterSpacing: '-1.5px' }}
          >
            Tecnología que cuida<br />
            <span style={{ color: '#16a34a' }}>el planeta</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Ziqua no solo mantiene tu alberca limpia — lo hace de forma inteligente,
            eficiente y responsable con el medio ambiente.
          </motion.p>
        </div>

        {/* Cards principales */}
        <div className="grid grid-cols-2 gap-6 mb-8 items-stretch">
          {impactos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl p-7 flex gap-6 items-start"
              style={{
                background: 'rgba(255,255,255,0.88)',
                border: `1px solid ${item.color}22`,
                boxShadow: `0 16px 40px rgba(4,44,83,0.07), 0 2px 8px ${item.color}15`,
                backdropFilter: 'blur(10px)',
                transform: i % 2 === 0
                  ? 'perspective(700px) rotateY(3deg) rotateX(1deg)'
                  : 'perspective(700px) rotateY(-3deg) rotateX(1deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Ícono + stat */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl relative"
                  style={{ background: `${item.color}12` }}
                >
                  {item.icon}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: `1px solid ${item.color}40` }}
                  />
                </motion.div>

                {/* Stat */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring' }}
                    className="text-2xl font-black"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </motion.div>
                  <div className="text-xs font-semibold mt-0.5 text-center"
                    style={{ color: '#6a88a8', maxWidth: '70px', lineHeight: 1.3 }}>
                    {item.statLabel}
                  </div>
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-col flex-1">
                <h3 className="font-black text-base mb-2" style={{ color: '#042C53', letterSpacing: '-0.3px' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#5a7a9a' }}>
                  {item.desc}
                </p>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full self-start"
                  style={{ background: `${item.color}12`, color: item.color }}
                >
                  {item.tag}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Banner inferior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl p-8 flex items-center justify-between gap-8"
          style={{
            background: '#16a34a',
            boxShadow: '0 20px 48px rgba(22,163,74,0.25)',
          }}
        >
          <div>
            <h3 className="font-black text-xl text-white mb-2">
              Ziqua es sustentable por diseño
            </h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Cada decisión de diseño fue tomada pensando en minimizar el impacto ambiental
              sin sacrificar rendimiento ni confiabilidad del sistema.
            </p>
          </div>
          <div className="flex gap-8 flex-shrink-0">
            {[
              { n: '☀️', label: 'Solar' },
              { n: '♻️', label: 'Reciclable' },
              { n: '🌊', label: 'Ahorra agua' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{s.n}</div>
                <div className="text-xs font-bold text-white">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}