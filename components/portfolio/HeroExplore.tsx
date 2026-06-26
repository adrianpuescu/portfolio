"use client"

import { useEffect, useState } from "react"

const SCROLL_FADE_THRESHOLD_PX = 16
/** Match p-fadeUp delay (.6s) + duration (.5s) before scroll-driven opacity can transition */
const INTRO_ANIMATION_MS = 1150

export function HeroExplore({
  onExploreClick,
}: {
  onExploreClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  const [introDone, setIntroDone] = useState(false)
  const [scrolledAway, setScrolledAway] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const delay = reduced ? 0 : INTRO_ANIMATION_MS
    const t = window.setTimeout(() => setIntroDone(true), delay)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!introDone) return
    const update = () => {
      setScrolledAway(window.scrollY > SCROLL_FADE_THRESHOLD_PX)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [introDone])

  return (
    <div
      className={`p-hero-explore${introDone ? " is-intro-done" : ""}${
        scrolledAway ? " is-scrolled-away" : ""
      }`}
    >
      <a
        href="#work"
        className="p-explore-btn"
        id="exploreBtn"
        onClick={onExploreClick}
      >
        <span className="p-explore-arrow">↓</span>
        Explore
      </a>
    </div>
  )
}
