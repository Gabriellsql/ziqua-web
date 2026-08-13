import { useEffect, useRef } from 'react'

export default function TecnologiaBg() {
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
      ctx.fillStyle = '#fff8f0'
      ctx.fillRect(0, 0, W, H)

      // Grid
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = '#d97706'
      ctx.lineWidth = 0.8
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()

      // Circuito PCB fondo izquierdo
      ctx.save()
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#d97706'
      ctx.lineWidth = 1
      const pcb = [
        [W*0.02, H*0.1, W*0.18, H*0.1],
        [W*0.18, H*0.1, W*0.18, H*0.3],
        [W*0.18, H*0.3, W*0.35, H*0.3],
        [W*0.08, H*0.5, W*0.22, H*0.5],
        [W*0.22, H*0.5, W*0.22, H*0.7],
        [W*0.22, H*0.7, W*0.38, H*0.7],
        [W*0.05, H*0.8, W*0.15, H*0.8],
        [W*0.15, H*0.8, W*0.15, H*0.9],
      ]
      pcb.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()
      })
      const pcbDots = [[W*0.18,H*0.1],[W*0.18,H*0.3],[W*0.22,H*0.5],[W*0.22,H*0.7],[W*0.15,H*0.8]]
      ctx.globalAlpha = 0.12
      ctx.fillStyle = '#d97706'
      pcbDots.forEach(([x,y]) => { ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill() })
      ctx.restore()

      // Circuito PCB fondo derecho
      ctx.save()
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#d97706'
      ctx.lineWidth = 1
      const pcb2 = [
        [W*0.98, H*0.2, W*0.82, H*0.2],
        [W*0.82, H*0.2, W*0.82, H*0.4],
        [W*0.82, H*0.4, W*0.65, H*0.4],
        [W*0.92, H*0.6, W*0.78, H*0.6],
        [W*0.78, H*0.6, W*0.78, H*0.8],
        [W*0.78, H*0.8, W*0.62, H*0.8],
      ]
      pcb2.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()
      })
      ctx.globalAlpha = 0.12
      ctx.fillStyle = '#d97706'
      const pcbDots2 = [[W*0.82,H*0.2],[W*0.82,H*0.4],[W*0.78,H*0.6],[W*0.78,H*0.8]]
      pcbDots2.forEach(([x,y]) => { ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill() })
      ctx.restore()

      // Partículas flotantes
      for (let i = 0; i < 16; i++) {
        const x = ((W * (i * 0.065 + 0.02) + t * (i % 2 === 0 ? 0.2 : -0.15))) % W
        const y = H * 0.4 + Math.sin(t * 0.02 + i * 0.7) * H * 0.25
        ctx.save()
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.arc(x, y, 1.5 + (i % 3), 0, Math.PI * 2)
        ctx.fillStyle = '#d97706'
        ctx.fill()
        ctx.restore()
      }

      // Pulso central
      const pulseR = 60 + Math.sin(t * 0.03) * 15
      ctx.save()
      ctx.globalAlpha = 0.04
      ctx.beginPath()
      ctx.arc(W * 0.5, H * 0.5, pulseR, 0, Math.PI * 2)
      ctx.strokeStyle = '#d97706'
      ctx.lineWidth = 1.5
      ctx.stroke()
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