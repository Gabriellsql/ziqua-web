import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let bubbles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const createBubble = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      r: Math.random() * 24 + 8,
      speed: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.35 + 0.15,
      drift: (Math.random() - 0.5) * 0.4,
    })

    for (let i = 0; i < 28; i++) {
      const b = createBubble()
      b.y = Math.random() * canvas.height
      bubbles.push(b)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((b, i) => {
        b.y -= b.speed
        b.x += b.drift

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(24, 95, 165, ${b.opacity + 0.2})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(55, 138, 221, ${b.opacity * 0.3})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(183, 212, 244, ${b.opacity})`
        ctx.fill()

        if (b.y + b.r < 0) {
          bubbles[i] = createBubble()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}