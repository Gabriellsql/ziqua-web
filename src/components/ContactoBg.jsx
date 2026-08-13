import { useEffect, useRef } from 'react'

export default function ContactoBg() {
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
      ctx.fillStyle = '#eef5fd'
      ctx.fillRect(0, 0, W, H)

      // Grid
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#185FA5'
      ctx.lineWidth = 0.8
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()

      // Ondas de agua fondo
      for (let w = 0; w < 4; w++) {
        ctx.save()
        ctx.globalAlpha = 0.04 + w * 0.015
        ctx.beginPath()
        ctx.moveTo(0, H)
        for (let x = 0; x <= W; x += 4) {
          const y = H * (0.65 + w * 0.08)
            + Math.sin((x / W) * Math.PI * 5 + t * 0.035 + w * 1.2) * 12
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W, H)
        ctx.closePath()
        ctx.fillStyle = '#185FA5'
        ctx.fill()
        ctx.restore()
      }

      // Círculos de señal WiFi arriba derecha
      for (let i = 1; i <= 4; i++) {
        ctx.save()
        ctx.globalAlpha = 0.05 + i * 0.01
        ctx.beginPath()
        ctx.arc(W * 0.88, H * 0.15, i * 44 + Math.sin(t * 0.03 + i) * 6, 0, Math.PI * 2)
        ctx.strokeStyle = '#185FA5'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }

      // Punto central señal
      ctx.save()
      ctx.globalAlpha = 0.15
      ctx.beginPath()
      ctx.arc(W * 0.88, H * 0.15, 8 + Math.sin(t * 0.05) * 2, 0, Math.PI * 2)
      ctx.fillStyle = '#185FA5'
      ctx.fill()
      ctx.restore()

      // Partículas flotantes
      for (let i = 0; i < 16; i++) {
        const x = ((W * (i * 0.065 + 0.02) + t * (i % 2 === 0 ? 0.22 : -0.16))) % W
        const y = H * 0.35 + Math.sin(t * 0.022 + i * 0.75) * H * 0.22
        ctx.save()
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.arc(x, y, 1.5 + (i % 3), 0, Math.PI * 2)
        ctx.fillStyle = '#185FA5'
        ctx.fill()
        ctx.restore()
      }

      // Líneas de conexión izquierda
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#185FA5'
      ctx.lineWidth = 1
      ctx.setLineDash([6, 12])
      ctx.lineDashOffset = -t * 0.5
      const lines = [
        [0, H*0.2, W*0.2, H*0.35],
        [0, H*0.5, W*0.18, H*0.42],
        [0, H*0.75, W*0.15, H*0.6],
      ]
      lines.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()
      })
      ctx.setLineDash([])
      ctx.restore()

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