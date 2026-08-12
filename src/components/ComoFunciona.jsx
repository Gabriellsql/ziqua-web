import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function ComoFuncionaBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let t = 0, animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const { width: W, height: H } = canvas
      ctx.clearRect(0, 0, W, H)

      // Fondo suave verde agua
      ctx.fillStyle = '#f0faf8'
      ctx.fillRect(0, 0, W, H)

      // Grid suave
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#0d9488'
      ctx.lineWidth = 0.8
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()

      // Círculos concéntricos animados
      for (let i = 1; i <= 5; i++) {
        ctx.save()
        ctx.globalAlpha = 0.03 + i * 0.01
        ctx.beginPath()
        ctx.arc(W * 0.85, H * 0.5, i * 70 + Math.sin(t * 0.02 + i) * 10, 0, Math.PI * 2)
        ctx.strokeStyle = '#0d9488'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }

      // Línea de flujo animada
      ctx.save()
      ctx.globalAlpha = 0.07
      ctx.strokeStyle = '#0d9488'
      ctx.lineWidth = 1.5
      ctx.setLineDash([8, 16])
      ctx.lineDashOffset = -t * 0.8
      ctx.beginPath()
      ctx.moveTo(W * 0.05, H * 0.5)
      ctx.bezierCurveTo(W * 0.25, H * 0.2, W * 0.5, H * 0.8, W * 0.95, H * 0.5)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // Partículas flotantes
      for (let i = 0; i < 14; i++) {
        const x = ((W * (i * 0.07 + 0.03) + t * (i % 2 === 0 ? 0.25 : -0.18))) % W
        const y = H * 0.35 + Math.sin(t * 0.025 + i * 0.8) * H * 0.22
        ctx.save()
        ctx.globalAlpha = 0.10
        ctx.beginPath()
        ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2)
        ctx.fillStyle = '#0d9488'
        ctx.fill()
        ctx.restore()
      }

      t++
      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

const pasos = [
  {
    num: '01',
    icon: '🔌',
    title: 'Instalación del hardware',
    desc: 'Se instalan los sensores multiparámetro y el módulo ESP32 en la alberca. El sistema se conecta a la red WiFi o usa comunicación local según disponibilidad.',
    tag: 'ESP32 · Sensores',
    color: '#0d9488',
  },
  {
    num: '02',
    icon: '📡',
    title: 'Lectura y transmisión',
    desc: 'Los sensores miden pH, ORP, temperatura, turbidez y TDS cada pocos segundos. Los datos se envían en tiempo real a Firebase mediante conectividad híbrida.',
    tag: 'IoT · Firebase',
    color: '#0891b2',
  },
  {
    num: '03',
    icon: '🤖',
    title: 'Análisis con IA',
    desc: 'Un modelo de inteligencia artificial procesa los datos, detecta anomalías, predice tendencias y determina si se requiere dosificación de químicos.',
    tag: 'IA · ML',
    color: '#185FA5',
  },
  {
    num: '04',
    icon: '⚗️',
    title: 'Acción automática',
    desc: 'Si el sistema detecta un desequilibrio, activa las bombas dosificadoras de forma precisa para corregir los niveles sin intervención humana.',
    tag: 'Automatización',
    color: '#0d9488',
  },
  {
    num: '05',
    icon: '📱',
    title: 'Alerta y monitoreo',
    desc: 'El usuario recibe notificaciones push en la app móvil, puede ver el historial completo y tiene control total desde su celular.',
    tag: 'Flutter · App',
    color: '#0891b2',
  },
]

export default function ComoFunciona() {
  return (
    <div className="relative overflow-hidden py-24 px-12" style={{ background: '#f0faf8' }}>
      <ComoFuncionaBg />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border text-xs font-bold px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(13,148,136,0.10)', borderColor: 'rgba(13,148,136,0.25)', color: '#0f766e' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#0d9488' }}
            />
            ¿Cómo funciona?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: '44px', color: '#042C53', letterSpacing: '-1.5px' }}
          >
            Del sensor a tu celular<br />
            <span style={{ color: '#0d9488' }}>en segundos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#4a6080' }}
          >
            Ziqua combina hardware, conectividad, inteligencia artificial y automatización
            en un flujo continuo que trabaja por ti sin parar.
          </motion.p>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-5 gap-5 items-start">
          {pasos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="flex flex-col items-center text-center"
            >
              {/* Ícono 3D */}
              <motion.div
                animate={{ rotateY: [0, 8, 0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                className="relative mb-5"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: p.color, filter: 'blur(10px)', transform: 'scale(1.2)' }}
                />
                <div
                  className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center relative z-10"
                  style={{
                    background: `${p.color}18`,
                    border: `1px solid ${p.color}33`,
                    boxShadow: `0 8px 24px ${p.color}20`,
                  }}
                >
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs font-black mt-1" style={{ color: p.color }}>{p.num}</span>
                </div>
              </motion.div>

              {/* Card 3D */}
              <motion.div
                whileHover={{ rotateY: 4, rotateX: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="rounded-2xl p-5 w-full flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: `1px solid ${p.color}22`,
                  boxShadow: `0 16px 40px rgba(4,44,83,0.07), 0 2px 8px ${p.color}15`,
                  backdropFilter: 'blur(10px)',
                  transform: 'perspective(600px) rotateX(2deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <h3 className="font-black text-sm mb-2" style={{ color: '#042C53', letterSpacing: '-0.3px' }}>
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#5a7a9a' }}>
                  {p.desc}
                </p>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full self-center"
                  style={{ background: `${p.color}15`, color: p.color }}
                >
                  {p.tag}
                </span>
              </motion.div>

            </motion.div>
          ))}
        </div>

        {/* Línea de flujo */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="mt-12 mx-auto rounded-full"
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #0d9488, #0891b2, #185FA5, transparent)',
            transformOrigin: 'left',
            maxWidth: '80%',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center text-xs font-semibold mt-4"
          style={{ color: '#0d9488' }}
        >
          Flujo continuo · Tiempo real · Sin intervención humana
        </motion.p>

      </div>
    </div>
  )
}