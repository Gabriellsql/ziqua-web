import { useEffect, useRef } from 'react'

export default function HeroBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let t = 0, animId

    const bubbles = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 22 + 6,
      speed: Math.random() * 0.4 + 0.15,
      drift: (Math.random() - 0.5) * 0.3,
      op: Math.random() * 0.18 + 0.06,
    }))

    const sensors = (W, H) => [
      { x: W * 0.06, y: H * 0.68, label: 'pH',   val: '7.4',   color: '#185FA5' },
      { x: W * 0.14, y: H * 0.76, label: 'ORP',  val: '720mV', color: '#378ADD' },
      { x: W * 0.22, y: H * 0.70, label: 'TEMP', val: '28°C',  color: '#185FA5' },
      { x: W * 0.30, y: H * 0.78, label: 'TDS',  val: '480',   color: '#378ADD' },
      { x: W * 0.38, y: H * 0.72, label: 'NTU',  val: '1.2',   color: '#185FA5' },
      { x: W * 0.82, y: H * 0.70, label: 'pH',   val: '7.4',   color: '#185FA5' },
      { x: W * 0.90, y: H * 0.76, label: 'ORP',  val: '720',   color: '#378ADD' },
    ]

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drawWave = (yBase, amp, freq, phase, color) => {
      const { width: W, height: H } = canvas
      ctx.beginPath()
      ctx.moveTo(0, H)
      for (let x = 0; x <= W; x += 3) {
        const y = yBase
          + Math.sin((x / W) * Math.PI * freq + phase) * amp
          + Math.sin((x / W) * Math.PI * (freq * 1.7) + phase * 0.8) * amp * 0.4
        ctx.lineTo(x, y)
      }
      ctx.lineTo(W, H)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    const drawGrid = (W, H) => {
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#185FA5'
      ctx.lineWidth = 0.8
      for (let x = 0; x < W; x += 44) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
      for (let y = 0; y < H; y += 44) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
      ctx.restore()
    }

    const drawSensor = (x, y, label, val, color) => {
      ctx.save()
      ctx.globalAlpha = 0.22
      ctx.beginPath(); ctx.arc(x, y, 28, 0, Math.PI * 2)
      ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke()
      ctx.beginPath(); ctx.arc(x, y, 18, 0, Math.PI * 2)
      ctx.lineWidth = 1; ctx.stroke()
      ctx.globalAlpha = 0.5
      ctx.fillStyle = color
      ctx.font = '700 10px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(label, x, y + 3)
      ctx.globalAlpha = 0.3
      ctx.fillStyle = '#042C53'
      ctx.font = '600 8px Inter, sans-serif'
      ctx.fillText(val, x, y + 14)
      ctx.restore()
    }

    const drawSignal = (x1, y1, x2, y2) => {
      ctx.save()
      ctx.globalAlpha = 0.10
      ctx.setLineDash([4, 8])
      ctx.strokeStyle = '#185FA5'
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()
    }

    const animate = () => {
      const { width: W, height: H } = canvas
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#eef5fd'
      ctx.fillRect(0, 0, W, H)

      drawGrid(W, H)

      const wH = H * 0.62
      drawWave(wH + Math.sin(t * 0.6) * 6,  18, 4, t * 0.70,       'rgba(24,95,165,0.07)')
      drawWave(wH + 22 + Math.sin(t * 0.5 + 1) * 5, 14, 5, t * 0.55 + 1, 'rgba(24,95,165,0.09)')
      drawWave(wH + 44 + Math.sin(t * 0.4 + 2) * 4, 10, 6, t * 0.45 + 2, 'rgba(24,95,165,0.11)')
      drawWave(wH + 66 + Math.sin(t * 0.35 + 3) * 3, 7, 7, t * 0.38 + 3, 'rgba(24,95,165,0.13)')
      drawWave(H * 0.82, 5, 8, t * 0.30 + 4, 'rgba(24,95,165,0.15)')

      const cx = W * 0.5, cy = H * 0.5
      const sns = sensors(W, H)
      sns.forEach(s => drawSignal(s.x, s.y, cx, cy))
      sns.forEach(s => drawSensor(
        s.x + Math.sin(t * 0.4 + s.x) * 2,
        s.y + Math.cos(t * 0.3 + s.y) * 2,
        s.label, s.val, s.color
      ))

      bubbles.forEach(b => {
        b.y -= b.speed; b.x += b.drift
        if (b.y + b.r < 0) { b.y = H + b.r; b.x = Math.random() * W }
        ctx.save()
        ctx.globalAlpha = b.op
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.strokeStyle = '#185FA5'; ctx.lineWidth = 1; ctx.stroke()
        ctx.beginPath(); ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2)
        ctx.fillStyle = '#85B7EB'; ctx.fill()
        ctx.restore()
      })

      t += 0.012
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