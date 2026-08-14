import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import HeroBg from './HeroBg'


const params = [
  { name: 'pH del agua', value: '7.4', pct: '74%', status: 'Óptimo' },
  { name: 'Cloro libre (ORP)', value: '720 mV', pct: '82%', status: 'Normal' },
  { name: 'Temperatura', value: '28°C', pct: '60%', status: 'Ideal' },
  { name: 'Turbidez', value: '1.2 NTU', pct: '88%', status: 'Cristalina' },
]

const stats = [
  { n: '5+', l: 'Parámetros' },
  { n: '24/7', l: 'Monitoreo' },
  { n: 'IoT', l: 'Conectividad' },
  { n: 'IA', l: 'Predictiva' },
]

export default function Hero() {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-12, 4])

  const handleMouse = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(-20)
  }

  return (
    <div id="Hero" className="relative min-h-screen flex items-center justify-center px-12 py-20 overflow-hidden" style={{ background: '#eef5fd' }}>
  <HeroBg />

      {/* Grid de fondo */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(24,95,165,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(24,95,165,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Glow central */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(24,95,165,0.10) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <div className="relative z-10 flex items-center gap-16 max-w-6xl w-full">

        {/* IZQUIERDA */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border text-xs font-semibold px-4 py-2 rounded-full mb-7"
            style={{ background: 'rgba(24,95,165,0.08)', borderColor: 'rgba(24,95,165,0.2)', color: '#185FA5' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blue-600"
            />
            Sistema IoT · En desarrollo · Zihuatanejo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-black leading-none tracking-tight mb-5"
            style={{ color: '#042C53', letterSpacing: '-2px' }}
          >
            Tu alberca,<br />
            <span className="text-blue-700 relative">
              inteligente
              <span className="absolute bottom-0 left-0 w-full h-1 rounded-full opacity-30" style={{ background: '#185FA5' }} />
            </span>
            <br />y segura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed mb-9 max-w-md"
            style={{ color: '#5a6a7a' }}
          >
            Ziqua monitorea pH, cloro, temperatura y turbidez en tiempo real.
            Dosificación automática, IA predictiva y alertas desde tu celular.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="text-white font-bold px-8 py-4 rounded-xl text-sm tracking-wide"
              style={{ background: '#185FA5', boxShadow: '0 4px 20px rgba(24,95,165,0.35)' }}
            >
              Solicitar demo →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(24,95,165,0.05)' }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold px-7 py-4 rounded-xl text-sm"
              style={{ color: '#185FA5', border: '1.5px solid rgba(24,95,165,0.3)' }}
            >
              ¿Cómo funciona?
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex mt-12 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(24,95,165,0.12)', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex-1 py-4 text-center"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(24,95,165,0.1)' : 'none' }}>
                <div className="text-xl font-black text-blue-700">{s.n}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: '#8a9bb0' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DERECHA — tarjeta 3D */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
          style={{ perspective: '1000px' }}
        >
          <div className="relative">

            {/* Flotante arriba */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -right-8 rounded-xl px-4 py-3 z-20"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(24,95,165,0.12)', boxShadow: '0 8px 24px rgba(4,44,83,0.08)' }}
            >
              <div className="text-xl font-black text-blue-700">7.4</div>
              <div className="text-xs font-medium" style={{ color: '#8aa0bb' }}>pH óptimo</div>
            </motion.div>

            {/* Flotante abajo */}
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-10 -left-10 rounded-xl px-4 py-3 z-20"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(24,95,165,0.12)', boxShadow: '0 8px 24px rgba(4,44,83,0.08)' }}
            >
              <div className="text-xl font-black text-blue-700">28°C</div>
              <div className="text-xs font-medium" style={{ color: '#8aa0bb' }}>Temperatura ideal</div>
            </motion.div>

            {/* Tarjeta principal */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouse}
              onMouseLeave={handleLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="w-80 rounded-2xl p-7"
              initial={{ rotateY: -12, rotateX: 4 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              sx={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(24,95,165,0.15)',
                boxShadow: '0 24px 64px rgba(4,44,83,0.12), 0 8px 24px rgba(24,95,165,0.08)',
              }}
            >
              <div className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(24,95,165,0.15)', boxShadow: '0 24px 64px rgba(4,44,83,0.12), 0 8px 24px rgba(24,95,165,0.08)' }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: '#185FA5', boxShadow: '0 4px 12px rgba(24,95,165,0.3)' }}>
                    Zq
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#042C53' }}>Panel Ziqua</p>
                    <p className="text-xs" style={{ color: '#8aa0bb' }}>Estado en tiempo real</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 text-xs font-bold text-green-500">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-green-500"
                    />
                    EN VIVO
                  </div>
                </div>

                {/* Parámetros */}
                {params.map((p, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium" style={{ color: '#5a6a7a' }}>{p.name}</span>
                      <span className="text-xs font-bold text-blue-700">{p.value}</span>
                    </div>
                    <div className="rounded-full h-1.5" style={{ background: '#f0f4f8' }}>
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: p.pct }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                        className="h-1.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #378ADD, #185FA5)' }}
                      />
                    </div>
                    <p className="text-xs font-semibold text-green-500 mt-1">✓ {p.status}</p>
                  </div>
                ))}

                {/* Tags */}
                <div className="flex gap-2 flex-wrap pt-4 mt-2" style={{ borderTop: '1px solid rgba(24,95,165,0.08)' }}>
                  {[
                    { t: 'IoT Activo', bg: '#E6F1FB', c: '#185FA5' },
                    { t: 'IA Predictiva', bg: '#EDE9FE', c: '#7c3aed' },
                    { t: 'Solar', bg: '#DCFCE7', c: '#16a34a' },
                    { t: 'ESP32', bg: '#E6F1FB', c: '#185FA5' },
                  ].map((tag) => (
                    <span key={tag.t} className="text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{ background: tag.bg, color: tag.c }}>
                      {tag.t}
                    </span>
                  ))}
                </div>

                {/* Alert */}
                <div className="mt-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-green-600 flex items-center gap-2"
                  style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  ✓ Sin alertas — agua en perfectas condiciones
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}