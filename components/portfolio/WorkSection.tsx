"use client"

import { useState, useEffect } from "react"

const BRANDS = [
  "Forbes", "USA Today", "VICE", "The Guardian", "Yahoo", "Glamour",
  "Meta", "Microsoft", "Google", "Netflix", "Disney", "H&M", "Adidas",
  "Uber", "Vodafone", "Amazon Prime", "EA", "Amex", "+ more",
]

const CAPS = [
  { n: "01", t: "WYSIWYG Editor", d: "Designed and built the drag-and-drop editor powering story and ad creation across all verticals." },
  { n: "02", t: "AMP Stories & more", d: "The same editor exports AMP Stories, Brand Stories (our name), LPs, and HTML presentations — one canvas, multiple formats." },
  { n: "03", t: "Dataset-driven Creatives", d: "Tabular datasets + templates → hundreds of ad variations generated automatically in one pass." },
  { n: "04", t: "Campaign Dashboards", d: "Multi-account dashboards for campaign management, asset libraries, team admin, and reporting." },
  { n: "05", t: "Client Showcase Tools", d: "Automated preview pages and client-facing showcase tools for presenting creatives to brand advertisers." },
  { n: "06", t: "Design System", d: "Shared PostCSS component library reused across multiple products for visual consistency at scale." },
]

const SLIDESHOW_IMAGES: string[] = [
  /* Platform */
  "/images/featured-work/platform/1-login.png",
  "/images/featured-work/platform/2-dashboard.png",
  "/images/featured-work/platform/3-projects.png",
  "/images/featured-work/platform/4-assets-media_library.png",
  "/images/featured-work/platform/5-assets-fonts.png",
  "/images/featured-work/platform/6-reports.png",
  "/images/featured-work/platform/7-account-personal_information.png",
  "/images/featured-work/platform/7-account-team.png",
  /* Editor */
  "/images/featured-work/editor/1-typography.png",
  "/images/featured-work/editor/2-media.png",
  "/images/featured-work/editor/3-animations.png",
  "/images/featured-work/editor/4-links.png",
  "/images/featured-work/editor/5-data_binding.png",
  "/images/featured-work/editor/6-interactives.png",
  "/images/featured-work/editor/7-editor-helpers.png",
  "/images/featured-work/editor/8-editor-menus_and_helpers.png",
  "/images/featured-work/editor/9-editor-360_view.png",
  "/images/featured-work/editor/10-editor-settings-delivery.png",
  /* Content Output */
  "/images/featured-work/content-output/1-showcase-page.png",
  "/images/featured-work/content-output/2-formats-page.png",
  "/images/featured-work/content-output/3-formats-page-preview-format.png",
  "/images/featured-work/content-output/4-formats-page-info_and_specs.png",
  "/images/featured-work/content-output/5-multi-formats-page.png",
  "/images/featured-work/content-output/6-preview_pagec-carousel_mode.png",
  "/images/featured-work/content-output/7-preview_pagec-full_bleed_mode.png",
  "/images/featured-work/content-output/8-preview-in-feed.png",
  /* UI Systems */
  "/images/featured-work/ui-systems/1-typography-colors.png",
  "/images/featured-work/ui-systems/2-icons-buttons.png",
  "/images/featured-work/ui-systems/3-forms.png",
  "/images/featured-work/ui-systems/4-other-components.png",
  "/images/featured-work/ui-systems/5-production-demos.png",
  "/images/featured-work/ui-systems/6-production-demos-2.png",
]

const SLIDESHOW_SECTIONS: { label: string; startIndex: number; labelColumn?: number }[] = [
  { label: "Platform", startIndex: 0 },
  { label: "Editor", startIndex: 8 },
  { label: "Content Output", startIndex: 18, labelColumn: 20 },
  { label: "UI Systems", startIndex: 26 },
]

function formatSlideLabel(path: string): string {
  const name = path.replace(/\.[^/.]+$/, "").split("/").pop() ?? ""
  const withoutLeadingNumbers = name.replace(/^\d+-?/, "")
  return withoutLeadingNumbers
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function PortfolioWorkSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const n = SLIDESHOW_IMAGES.length
  const goPrev = () => setActiveSlide((s) => (s <= 0 ? n - 1 : s - 1))
  const goNext = () => setActiveSlide((s) => (s >= n - 1 ? 0 : s + 1))

  useEffect(() => {
    if (n <= 1) return
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev >= n - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [n])

  return (
    <section id="work" style={{ background: "var(--p-white)" }}>
      <div className="p-eyebrow" data-n="01 —">
        Featured Work
      </div>

      <div className="p-work-head p-reveal">
        <h2 className="p-work-title">
          One product.
          <br />
          Global scale.
        </h2>
        <p className="p-work-intro">
          For the last eight years I&apos;ve been focused on{" "}
          <a
            href="https://studio.nws.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text-link"
          >
            NWS Studio
          </a>
          {" — the flagship creative platform at "}
          <a
            href="https://nws.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text-link"
          >
            Newsroom AI
          </a>
          , leading UI/UX, feature planning, and front-end implementation while
          keeping the product production-ready for global publishers and brands.
        </p>
      </div>

      <div className="p-project-card p-reveal">
        <div className="p-project-card-inner">
          <div className="p-project-info">
            <div>
              <div className="p-project-tags">
                <span className="p-ptag p-ptag-blue">Lead UI/UX</span>
                <span className="p-ptag p-ptag-slate">Last 8 years</span>
                <span className="p-ptag p-ptag-gray">SaaS Platform</span>
                <span className="p-ptag p-ptag-gray">Enterprise</span>
              </div>
              <div className="p-project-name">NWS Studio</div>
              <div className="p-project-product">
                <a
                  href="https://studio.nws.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-text-link"
                >
                  studio.nws.ai
                </a>
                {" · Newsroom Studio"}
              </div>

              <ul className="p-project-bullets">
                <li>
                  Architected and implemented{" "}
                  <strong>UI across the entire product</strong> — editor,
                  dashboards, asset management, reporting, admin
                </li>
                <li>
                  Built a{" "}
                  <strong>WYSIWYG story & ad editor</strong> with drag-and-drop
                  canvas, real-time preview, and full toolbar systems
                </li>
                <li>
                  Designed a{" "}
                  <strong>dataset-driven creative system</strong> — tabular
                  data + templates → hundreds of ad variations in one pass
                </li>
                <li>
                  Maintained a{" "}
                  <strong>shared PostCSS component library</strong> used across
                  multiple{" "}
                  <a
                    href="https://nws.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-text-link"
                  >
                    Newsroom
                  </a>{" "}
                  products
                </li>
              </ul>
            </div>
            <div className="p-project-meta">
              <div>
                <div className="p-pmeta-label">Primary Focus</div>
                <div className="p-pmeta-val">
                  HTML · CSS/PostCSS · JS · UI Architecture
                </div>
              </div>
            </div>
          </div>

          <div className="p-project-visual">
            <div className="p-slideshow-wrap">
              <div className="p-slideshow">
                {SLIDESHOW_IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className={`p-slide ${i === activeSlide ? "active" : ""}`}
                  >
                    <img src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-slideshow-timeline" style={{ ["--p-timeline-segments" as string]: n }}>
              <div className="p-timeline-labels">
                {SLIDESHOW_SECTIONS.map((sec, i) => {
                  const isActiveSection =
                    activeSlide >= sec.startIndex &&
                    (i === SLIDESHOW_SECTIONS.length - 1 || activeSlide < SLIDESHOW_SECTIONS[i + 1].startIndex)
                  return (
                    <button
                      key={sec.label}
                      type="button"
                      className={`p-timeline-label ${i === SLIDESHOW_SECTIONS.length - 1 ? "last" : ""} ${isActiveSection ? "active" : ""}`}
                      style={{ gridColumn: (sec.labelColumn ?? sec.startIndex) + 1 }}
                      onClick={() => setActiveSlide(sec.startIndex >= n ? n - 1 : sec.startIndex)}
                      aria-label={`Go to ${sec.label}`}
                    >
                      {sec.label}
                    </button>
                  )
                })}
              </div>
              <div className="p-timeline-track-row">
                <button
                  type="button"
                  className="p-timeline-arrow p-timeline-prev"
                  onClick={goPrev}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <div className="p-timeline-track-wrap">
                  <div className="p-timeline-track">
                  {SLIDESHOW_IMAGES.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`p-timeline-segment ${i === activeSlide ? "active" : ""}`}
                      onClick={() => setActiveSlide(i)}
                      aria-label={formatSlideLabel(src)}
                      title={formatSlideLabel(src)}
                    />
                  ))}
                  </div>
                </div>
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
          </div>
        </div>
        <div className="p-caps-grid">
          {CAPS.map((cap, i) => (
            <div
              key={cap.n}
              className={`p-cap p-reveal ${i === 0 ? "p-rd1" : i === 1 ? "p-rd2" : "p-rd3"}`}
            >
              <span className="p-cap-n" aria-hidden>{cap.n}</span>
              <div className="p-cap-t">{cap.t}</div>
              <div className="p-cap-d">{cap.d}</div>
            </div>
          ))}
        </div>
        <div className="p-brands-strip">
          <div className="p-brands-label">
            Brands & publishers that used the platform
          </div>
          <div className="p-brands-list">
            {BRANDS.map((b) => (
              <span key={b} className="p-brand-pill">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
