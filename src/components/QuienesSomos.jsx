import { motion } from 'framer-motion'
import QuienesSomosBg from './QuienesSomosBg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
})

const valores = [
  { icon: '⚡', title: 'Innovación',       desc: 'Tecnología IoT e IA aplicada al mantenimiento real de albercas.' },
  { icon: '🌊', title: 'Calidad del agua', desc: 'Garantizamos agua segura, limpia y equilibrada en todo momento.' },
  { icon: '🌱', title: 'Sustentabilidad',  desc: 'Energía solar y dosificación precisa para reducir el impacto ambiental.' },
  { icon: '🔒', title: 'Confianza',        desc: 'Datos en la nube, seguros y disponibles desde cualquier lugar.' },
]

const stats = [
  { n: '+375', label: 'Albercas en Zihuatanejo' },
  { n: '5+',   label: 'Parámetros monitoreados' },
  { n: '24/7', label: 'Monitoreo continuo'      },
  { n: '0',    label: 'Errores manuales'        },
]

export default function QuienesSomos() {
  return (
    <div id="quienes-somos" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#f0f6ff' }}>
      <QuienesSomosBg />

      <div className="relative z-10 max-w-6xl mx-auto px-12 py-24 w-full">

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
            Quiénes somos
          </motion.div>

          <motion.h2 {...fadeUp(0.1)}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '48px', color: '#042C53', letterSpacing: '-2px' }}
          >
            Una solución inteligente<br />
            para un problema <span style={{ color: '#185FA5' }}>real</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Ziqua nació en Zihuatanejo, Guerrero — una de las zonas turísticas más importantes
            del país, con más de 375 albercas que dependen de mantenimiento manual, costoso y
            propenso a errores. Nuestra plataforma integra sensores IoT, inteligencia artificial
            y automatización para transformar ese proceso en algo preciso, eficiente y sustentable.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="rounded-2xl p-5 text-center"
              style={{
                background: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(24,95,165,0.14)',
                boxShadow: '0 8px 24px rgba(4,44,83,.07)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: '#185FA5' }}>{s.n}</div>
              <div className="text-xs font-semibold" style={{ color: '#6a88a8' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Misión + Visión + Valores */}
        <div className="flex gap-6 items-stretch">

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="flex-1 rounded-2xl p-7 flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(24,95,165,0.16)',
              boxShadow: '0 20px 48px rgba(4,44,83,.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: 'rgba(24,95,165,0.10)' }}>
              🎯
            </div>
            <h3 className="font-black text-lg mb-3" style={{ color: '#042C53' }}>Nuestra misión</h3>
            <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a6080' }}>
              Optimizar el mantenimiento y la calidad del agua en albercas mediante
              una solución automatizada que maximice la eficiencia operativa y minimice
              el uso de productos químicos, a través de sensores multiparámetro,
              conectividad híbrida y análisis inteligente con IA.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="flex-1 rounded-2xl p-7 flex flex-col"
            style={{
              background: '#185FA5',
              border: '1px solid rgba(24,95,165,0.3)',
              boxShadow: '0 20px 48px rgba(24,95,165,.30)',
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: 'rgba(255,255,255,0.15)' }}>
              🚀
            </div>
            <h3 className="font-black text-lg mb-3 text-white">Nuestra visión</h3>
            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Ser la plataforma líder en automatización de albercas en México,
              expandiéndonos desde el sector turístico de Ixtapa-Zihuatanejo hacia
              hoteles, condominios y residencias privadas en todo el país,
              promoviendo un mantenimiento más seguro, económico y sostenible.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="flex-1 rounded-2xl p-7 flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(24,95,165,0.16)',
              boxShadow: '0 20px 48px rgba(4,44,83,.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ background: 'rgba(24,95,165,0.10)' }}>
              💡
            </div>
            <h3 className="font-black text-lg mb-4" style={{ color: '#042C53' }}>Nuestros valores</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {valores.map((v, i) => (
                <div key={i}
                  className="rounded-xl p-3 flex flex-col gap-1"
                  style={{ background: 'rgba(24,95,165,0.05)', border: '1px solid rgba(24,95,165,0.08)' }}
                >
                  <span className="text-lg">{v.icon}</span>
                  <p className="text-xs font-bold" style={{ color: '#0C447C' }}>{v.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#4a6a8a' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}