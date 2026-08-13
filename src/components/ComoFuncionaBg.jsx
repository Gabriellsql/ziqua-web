import { useEffect, useRef } from 'react'

export default function ComoFuncionaBg() {
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