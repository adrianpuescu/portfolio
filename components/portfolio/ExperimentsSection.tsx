"use client"

import { useEffect, useState } from "react"

function ExternalIcon() {
  return (
    <svg
      className="p-exp-external-icon"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
  )
}

function hostFromHref(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "")
  } catch {
    return href
  }
}

function ProjectSlideshow({
  href,
  slides,
}: {
  href: string
  slides: { src: string; title: string }[]
}) {
  const n = slides.length
  const [active, setActive] = useState(0)
  const goPrev = () => setActive((s) => (s <= 0 ? n - 1 : s - 1))
  const goNext = () => setActive((s) => (s >= n - 1 ? 0 : s + 1))

  useEffect(() => {
    if (n <= 1) return
    const id = setInterval(() => {
      setActive((s) => (s >= n - 1 ? 0 : s + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [n])

  const currentTitle = slides[active]?.title ?? ""

  return (
    <div className="p-exp-slideshow-block">
      <div className="p-slideshow-wrap">
        <div className="p-exp-slideshow-label-row">
          <div className="p-exp-slide-title" aria-live="polite">
            {currentTitle}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-exp-launch p-exp-launch--corner"
          >
            <ExternalIcon />
            <span className="p-exp-launch-text">Open live site</span>
          </a>
        </div>
        <div className="p-slideshow">
          {slides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className={`p-slide ${i === active ? "active" : ""}`}
            >
              <img src={slide.src} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div
        className="p-slideshow-timeline p-exp-slideshow-timeline"
        style={{ ["--p-timeline-segments" as string]: n }}
      >
        <div className="p-timeline-grid">
          <div className="p-timeline-track-line" aria-hidden />
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              className={`p-timeline-segment ${i === active ? "active" : ""}`}
              style={{ gridColumn: i + 1, gridRow: 2 }}
              onClick={() => setActive(i)}
              aria-label={slide.title}
              title={slide.title}
            />
          ))}
        </div>
        <button
          type="button"
          className="p-timeline-arrow p-timeline-prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="p-timeline-arrow p-timeline-next"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  )
}

const RECENT_PROJECTS: {
  title: string;
  period: string;
  lede: string;
  more?: string;
  stack: string[];
  href: string;
  slides: { src: string; title: string }[];
}[] = [
  {
    title: "Cadu",
    period: "2026 – Present",
    lede: "WhatsApp-native website builder - businesses describe themselves in chat and Cadu generates and manages their site. No login, no dashboard, no technical knowledge needed.",
    more: "My contribution: naming, logo, landing page, copywriting, animations, visual guidelines, communication strategy, marketing planning and product logic.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI design",
      "Copywriting",
      "Motion",
      "Marketing",
      "Cursor",
      "Frontend",
    ],
    href: "https://cadu.app/",
    slides: [
      { src: "/images/experiments/cadu/hero.png", title: "Hero" },
      { src: "/images/experiments/cadu/how-it-works.png", title: "How it works" },
      { src: "/images/experiments/cadu/features.png", title: "Features" },
      { src: "/images/experiments/cadu/pricing.png", title: "Pricing" }
    ],
  },
  {
    title: "Boardly",
    period: "Apr 2026 – Present",
    lede: "Turn-based board game platform built full-stack with Next.js 14, TypeScript and Supabase. Chess is the first game, with an architecture meant to grow into more games over time.",
    more: "Real-time multiplayer via Supabase Realtime, guest play without an account, a multi-board dashboard for simultaneous games, PWA-ready and mobile-first. Row-level security on the database. Available in English, Romanian and Spanish.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "AI-assisted dev",
    ],
    href: "https://boardly.games/",
    slides: [
      { src: "/images/experiments/boardly/login.png", title: "Login" },
      { src: "/images/experiments/boardly/lobby.png", title: "Lobby" },
      { src: "/images/experiments/boardly/dashboard.png", title: "Dashboard" },
      {
        src: "/images/experiments/boardly/chess-game.png",
        title: "Chess game",
      },
      { src: "/images/experiments/boardly/profile.png", title: "Profile" },
    ],
  },
  {
    title: "RiveAds Studio",
    period: "Mar 2026 – Present",
    lede: "AI-assisted web app for generating animated display ads from natural language, rendered with the Rive runtime. A typed AdSpec schema drives layout, copy, and animation; outputs target embeddable HTML/JS, video, and static fallbacks (some formats on the roadmap).",
    more: "Experimental MVP - active development.",
    stack: [
      "UI design",
      "TypeScript",
      "React",
      "Rive",
      "Claude / Anthropic",
      "Cursor",
      "Front-end",
    ],
    href: "https://riveads.webz.ro/",
    slides: [
      {
        src: "/images/experiments/riveads/homepage.png",
        title: "Homepage",
      },
      {
        src: "/images/experiments/riveads/editor.png",
        title: "Editor canvas",
      },
      {
        src: "/images/experiments/riveads/dashboard.png",
        title: "Dashboard",
      },
    ],
  },
];

export function PortfolioExperimentsSection() {
  return (
    <section
      id="recent-work"
      style={{
        background: "var(--p-white)",
        borderTop: "1px solid var(--p-border)",
      }}
    >
      <div className="p-eyebrow" data-n="02 •">
        Side projects
      </div>
      <div className="p-exp-head p-reveal">
        <h2 className="p-exp-heading">
          Recent
          <br />
          work
        </h2>
        <p className="p-exp-intro">
          Things I build and ship on the side - from proofs of concept to full
          products, spanning AI tooling, full-stack development and product
          work.
        </p>
      </div>
      <div className="p-exp-list">
        {RECENT_PROJECTS.map((project) => (
          <article key={project.href} className="p-project-card p-reveal p-rd1">
            <div className="p-project-card-inner p-exp-card-inner">
              <div className="p-project-info">
                <div>
                  <div className="p-project-tags">
                    <span className="p-ptag p-ptag-blue">Side project</span>
                    <span className="p-ptag p-ptag-slate">{project.period}</span>
                  </div>
                  <div className="p-project-name">{project.title}</div>
                  <div className="p-project-product">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-text-link"
                    >
                      {hostFromHref(project.href)}
                    </a>
                  </div>
                  <ul className="p-project-bullets">
                    <li>{project.lede}</li>
                    {project.more ? <li>{project.more}</li> : null}
                  </ul>
                </div>
                <div className="p-project-meta">
                  <div>
                    <div className="p-pmeta-label">Stack</div>
                    <div className="p-pmeta-tags" aria-label="Stack">
                      {project.stack.map((t, i) => (
                        <span
                          key={`${project.href}-stack-${i}`}
                          className="p-pmeta-chip"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-project-visual">
                <ProjectSlideshow href={project.href} slides={project.slides} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
