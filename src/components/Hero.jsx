import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
})

export default function Hero() {
  return (
    <div className="w-full">
      <section className="flex items-center gap-16 max-w-6xl mx-auto px-12 py-24">

        {/* Izquierda */}
        <div className="flex-1">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            Sistema IoT · Monitoreo en tiempo real
          </motion.div>

          <motion.h1 {...fadeUp(0.1)}
            className="text-5xl font-extrabold text-blue-950 leading-tight tracking-tight mb-5"
          >
            Tu alberca siempre <br />
            <span className="text-blue-700">limpia y segura</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)}
            className="text-lg text-gray-500 leading-relaxed max-w-lg mb-9"
          >
            Ziqua monitorea pH, cloro, temperatura y turbidez en tiempo real.
            Detecta anomalías, dosifica químicos automáticamente y te avisa
            desde tu celular — sin visitas innecesarias ni errores manuales.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-colors"
            >
              Solicitar demo →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-blue-700 text-blue-700 px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              ¿Cómo funciona?
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.4)} className="flex gap-8 mt-12">
            {[
              { num: '5+', label: 'Parámetros monitoreados' },
              { num: '24/7', label: 'Monitoreo continuo' },
              { num: '100%', label: 'Dosificación automática' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col border-r last:border-0 border-blue-100 pr-8 last:pr-0">
                <span className="text-2xl font-extrabold text-blue-700">{s.num}</span>
                <span className="text-xs text-gray-400 mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Derecha — tarjeta del panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="bg-white border border-blue-200 rounded-2xl p-8 w-80 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold">Zq</div>
              <div>
                <p className="font-bold text-blue-950 text-sm">Panel Ziqua</p>
                <p className="text-xs text-blue-400">Estado de tu alberca ahora</p>
              </div>
            </div>

            {[
              { label: 'pH del agua', value: '7.4', pct: '74%', status: 'Óptimo' },
              { label: 'Cloro libre (ORP)', value: '720 mV', pct: '82%', status: 'Normal' },
              { label: 'Temperatura', value: '28°C', pct: '60%', status: 'Ideal' },
            ].map((b) => (
              <div key={b.label} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-blue-500 font-medium">{b.label}</p>
                  <span className="text-xs font-bold text-blue-700">{b.value}</span>
                </div>
                <div className="bg-blue-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: b.pct }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="bg-blue-700 h-2 rounded-full"
                  />
                </div>
                <p className="text-xs text-green-500 font-medium mt-1">{b.status}</p>
              </div>
            ))}

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-md">IoT Activo</span>
              <span className="bg-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-md">IA Predictiva</span>
              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md">Solar</span>
            </div>
            <p className="text-blue-500 text-sm font-medium mt-4">✓ Sin alertas — agua en perfectas condiciones</p>
          </div>
        </motion.div>

      </section>
    </div>
  )
}