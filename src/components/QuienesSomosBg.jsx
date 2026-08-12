import { useEffect, useRef } from 'react'

export default function QuienesSomosBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let t = 0, animId

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 3 + 2,
      op: Math.random() * 0.3 + 0.1,
    }))

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      nodes.forEach(n => {
        n.x = Math.random() * canvas.width
        n.y = Math.random() * canvas.height
      })
    }
    resize()
    window.addEventListener('resize', resize)

    const hexPts = (cx, cy, r) =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 180) * (60 * i - 30)
        return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
      })

    const drawHex = (x, y, r, op) => {
      const pts = hexPts(x, y, r)
      ctx.save(); ctx.globalAlpha = op
      ctx.beginPath()
      pts.forEach(([px, py], i) => i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py))
      ctx.closePath()
      ctx.strokeStyle = '#185FA5'; ctx.lineWidth = 0.8; ctx.stroke()
      ctx.restore()
    }

    const drawCircuit = (W, H) => {
      ctx.save(); ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#185FA5'; ctx.lineWidth = 1
      const lines = [
        [0, H*0.2, W*0.3, H*0.2], [W*0.3, H*0.2, W*0.3, H*0.5],
        [W*0.3, H*0.5, W*0.6, H*0.5], [W*0.6, H*0.5, W*0.6, H*0.8],
        [0, H*0.6, W*0.15, H*0.6], [W*0.15, H*0.6, W*0.15, H*0.35],
        [W*0.15, H*0.35, W*0.45, H*0.35],
        [W*0.7, H*0.1, W*0.7, H*0.4], [W*0.7, H*0.4, W, H*0.4],
        [W*0.85, H*0.6, W*0.85, H*0.9],
      ]
      lines.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()
      })
      const dots = [[W*0.3,H*0.2],[W*0.3,H*0.5],[W*0.6,H*0.5],[W*0.15,H*0.35],[W*0.7,H*0.4]]
      ctx.globalAlpha = 0.14; ctx.fillStyle = '#185FA5'
      dots.forEach(([x,y]) => { ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill() })
      ctx.restore()
    }

    const animate = () => {
      const { width: W, height: H } = canvas
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#f0f6ff'; ctx.fillRect(0, 0, W, H)

      drawCircuit(W, H)

      for (let s = 1; s <= 4; s++) {
        const hexR = s * 48
        for (let a = 0; a < 360; a += 30) {
          const rad = (a * Math.PI / 180) + t * (s % 2 === 0 ? 0.003 : -0.003)
          const hx = W * 0.72 + hexR * Math.cos(rad)
          const hy = H * 0.38 + hexR * Math.sin(rad)
          drawHex(hx, hy, 10 + s * 2, 0.04 + s * 0.01)
        }
      }
      drawHex(W * 0.72, H * 0.38, 28, 0.12)
      drawHex(W * 0.72, H * 0.38, 16, 0.18)

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
        ctx.save(); ctx.globalAlpha = n.op
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = '#185FA5'; ctx.fill(); ctx.restore()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 130) {
            ctx.save(); ctx.globalAlpha = (1 - dist / 130) * 0.12
            ctx.strokeStyle = '#185FA5'; ctx.lineWidth = 0.8
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); ctx.restore()
          }
        }
      }

      const pulseR = 20 + Math.sin(t * 0.05) * 8
      ctx.save(); ctx.globalAlpha = 0.08
      ctx.beginPath(); ctx.arc(W * 0.72, H * 0.38, pulseR, 0, Math.PI * 2)
      ctx.strokeStyle = '#185FA5'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore()

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