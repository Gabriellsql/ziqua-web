import { useEffect, useRef } from 'react'

export default function ImpactoAmbientalBg() {
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
      ctx.fillStyle = '#f0fdf4'
      ctx.fillRect(0, 0, W, H)

      // Grid
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#16a34a'
      ctx.lineWidth = 0.8
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()

      // Rayos de sol animados
      const sunX = W * 0.85, sunY = H * 0.18
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + t * 0.005
        const r1 = 40 + Math.sin(t * 0.03) * 5
        const r2 = 70 + Math.sin(t * 0.03) * 8
        ctx.save()
        ctx.globalAlpha = 0.06
        ctx.strokeStyle = '#d97706'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(sunX + Math.cos(angle) * r1, sunY + Math.sin(angle) * r1)
        ctx.lineTo(sunX + Math.cos(angle) * r2, sunY + Math.sin(angle) * r2)
        ctx.stroke()
        ctx.restore()
      }

      // Sol central
      ctx.save()
      ctx.globalAlpha = 0.08
      ctx.beginPath()
      ctx.arc(sunX, sunY, 28 + Math.sin(t * 0.03) * 3, 0, Math.PI * 2)
      ctx.fillStyle = '#d97706'
      ctx.fill()
      ctx.restore()

      // Ondas de agua abajo
      const waveY = H * 0.78
      for (let w = 0; w < 3; w++) {
        ctx.save()
        ctx.globalAlpha = 0.05 + w * 0.02
        ctx.beginPath()
        ctx.moveTo(0, H)
        for (let x = 0; x <= W; x += 4) {
          const y = waveY + w * 18
            + Math.sin((x / W) * Math.PI * 4 + t * 0.04 + w) * 10
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W, H)
        ctx.closePath()
        ctx.fillStyle = '#16a34a'
        ctx.fill()
        ctx.restore()
      }

      // Hojas flotantes
      const hojas = [
        { ox: 0.12, oy: 0.3 }, { ox: 0.28, oy: 0.55 },
        { ox: 0.45, oy: 0.25 }, { ox: 0.62, oy: 0.65 },
        { ox: 0.75, oy: 0.4  }, { ox: 0.92, oy: 0.5  },
      ]
      hojas.forEach((h, i) => {
        const x = W * h.ox + Math.sin(t * 0.02 + i) * 12
        const y = H * h.oy + Math.cos(t * 0.015 + i) * 10
        const rot = t * 0.01 + i * 0.8
        ctx.save()
        ctx.globalAlpha = 0.08
        ctx.translate(x, y)
        ctx.rotate(rot)
        ctx.beginPath()
        ctx.ellipse(0, 0, 10, 6, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#16a34a'
        ctx.fill()
        ctx.restore()
      })

      // Partículas
      for (let i = 0; i < 14; i++) {
        const x = ((W * (i * 0.07 + 0.02) + t * (i % 2 === 0 ? 0.2 : -0.15))) % W
        const y = H * 0.4 + Math.sin(t * 0.02 + i * 0.7) * H * 0.2
        ctx.save()
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.arc(x, y, 1.5 + (i % 3), 0, Math.PI * 2)
        ctx.fillStyle = '#16a34a'
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