"use client"

import { useEffect, useRef } from "react"
import "./WeightChart.css"

export default function WeightChart({ weightHistory }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!weightHistory || weightHistory.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Find min and max weight for scaling
    const weights = weightHistory.map((entry) => entry.weight)
    let minWeight = Math.min(...weights)
    let maxWeight = Math.max(...weights)

    // Add some padding to min/max for better visualization
    const weightRange = maxWeight - minWeight
    minWeight = Math.max(0, minWeight - weightRange * 0.1)
    maxWeight = maxWeight + weightRange * 0.1

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 2

    // Y-axis
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)

    // X-axis
    ctx.moveTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.stroke()

    // Draw weight points and connect them
    ctx.beginPath()
    ctx.strokeStyle = "#4CAF50"
    ctx.lineWidth = 3

    weightHistory.forEach((entry, index) => {
      const x = padding + (index / (weightHistory.length - 1)) * chartWidth
      const y = canvas.height - padding - ((entry.weight - minWeight) / (maxWeight - minWeight)) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw point
      ctx.fillStyle = "#4CAF50"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      // Draw weight label
      ctx.fillStyle = "#333"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`${entry.weight}kg`, x, y - 10)

      // Draw date label on x-axis
      const date = new Date(entry.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })
      ctx.fillText(date, x, canvas.height - padding + 20)
    })

    ctx.stroke()

    // Draw y-axis labels (weight)
    const weightStep = (maxWeight - minWeight) / 5
    for (let i = 0; i <= 5; i++) {
      const weight = minWeight + weightStep * i
      const y = canvas.height - padding - (i / 5) * chartHeight

      ctx.fillStyle = "#666"
      ctx.textAlign = "right"
      ctx.fillText(weight.toFixed(1), padding - 10, y + 5)

      // Draw horizontal grid line
      ctx.beginPath()
      ctx.strokeStyle = "#eee"
      ctx.lineWidth = 1
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.stroke()
    }
  }, [weightHistory])

  return (
    <div className="weight-chart">
      <canvas ref={canvasRef} width={800} height={400} />
    </div>
  )
}
