"use client"

import { useEffect, useRef, useState } from "react"

export function PortfolioCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const hoveringRef = useRef(false)
  const [hovering, setHovering] = useState(false)
  const mx = useRef(-100)
  const my = useRef(-100)
  const rx = useRef(-100)
  const ry = useRef(-100)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      dot.style.transform = `translate(${mx.current - 4}px,${my.current - 4}px)`
    }

    let rafId = 0
    const anim = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      const isHover = hoveringRef.current
      const size = isHover ? 52 : 32
      const offset = size / 2
      ring.style.transform = `translate(${rx.current - offset}px,${ry.current - offset}px)`
      rafId = requestAnimationFrame(anim)
    }
    rafId = requestAnimationFrame(anim)
    window.addEventListener("mousemove", onMove, { passive: true })

    const onEnter = () => {
      hoveringRef.current = true
      setHovering(true)
    }
    const onLeave = () => {
      hoveringRef.current = false
      setHovering(false)
    }
    const setupInteractive = () => {
      document
        .querySelectorAll(".portfolio-page a, .portfolio-page button, .portfolio-page [role='button']")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter)
          el.addEventListener("mouseleave", onLeave)
        })
    }
    setupInteractive()
    const interval = setInterval(setupInteractive, 2000)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      clearInterval(interval)
      document
        .querySelectorAll(".portfolio-page a, .portfolio-page button, .portfolio-page [role='button']")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnter)
          el.removeEventListener("mouseleave", onLeave)
        })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="p-cursor"
        aria-hidden
        style={{ transform: "translate(-100px,-100px)" }}
      />
      <div
        ref={ringRef}
        className={`p-cursor-ring ${hovering ? "is-hover" : ""}`}
        aria-hidden
        style={{ transform: "translate(-100px,-100px)" }}
      />
    </>
  )
}
