"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#before", label: "Background" },
  { href: "#skills", label: "Skills" },
  { href: "#focus", label: "Now" },
]

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll<HTMLElement>("section[id]")
      let current = ""
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id
      })
      setActiveId(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav id="nav" className={`p-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="p-nav-inner">
        <Link href="#" className="p-nav-logo">
          UI / Product / Creative Technologist
        </Link>
        <ul className="p-nav-links">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={activeId === href.slice(1) ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact" className="p-nav-cta">
          Contact
        </Link>
      </div>
    </nav>
  )
}
