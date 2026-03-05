"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#before", label: "Background" },
  { href: "#skills", label: "Skills" },
  { href: "#focus", label: "Now" },
  { href: "#about", label: "About" },
]

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

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

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav id="nav" className={`p-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="p-nav-inner">
          <Link href="#" className="p-nav-logo" onClick={closeMobile}>
            <span className="p-nav-logo-name">Adrian Puescu</span>
            <span className="p-nav-logo-sep"> • </span>
            <span className="p-nav-logo-rest">Portfolio</span>
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
          <div className="p-nav-desk-cta">
            <Link href="#contact" className="p-nav-cta">
              Contact
            </Link>
          </div>
          <button
            type="button"
            className={`p-nav-hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div
        className={`p-nav-overlay ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
        aria-hidden
      />
      <div className={`p-nav-mobile ${mobileOpen ? "open" : ""}`}>
        <ul className="p-nav-mobile-links">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={closeMobile} className={activeId === href.slice(1) ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" onClick={closeMobile} className="p-nav-mobile-cta">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
