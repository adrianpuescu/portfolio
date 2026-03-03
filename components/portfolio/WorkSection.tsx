"use client"

import { useState } from "react"

const TABS = [
  {
    label: "Platform",
    desc: "Dashboard, projects, assets, reports, settings — the full SaaS shell that wraps the editor and supports multi-project workflows.",
  },
  {
    label: "Editor",
    desc: "The WYSIWYG story & ad editor — drag-and-drop canvas, real-time preview, toolbar systems, and template-driven batch creation.",
  },
  {
    label: "Content Output",
    desc: "What gets published: interactive stories, rich media ads, presentations, and pages — HTML-based, across partner networks. AMP-compliant where required.",
  },
  {
    label: "UI Systems",
    desc: "Shared CSS library (PostCSS-based), component patterns, and layout systems that keep the product consistent as it scales across teams and white-label deployments.",
  },
]

const BRANDS = [
  "Forbes", "USA Today", "VICE", "The Guardian", "Yahoo", "Glamour",
  "Meta", "Microsoft", "Google", "Netflix", "Disney", "H&M", "Adidas",
  "Uber", "Vodafone", "Amazon Prime", "EA", "Amex", "+ more",
]

const CAPS = [
  { n: "01", t: "WYSIWYG Editor", d: "Designed and built the drag-and-drop editor powering story and ad creation across all verticals." },
  { n: "02", t: "AMP Web Stories", d: "Compliant Google AMP story output with strict format constraints — used by Forbes, VICE, USA Today." },
  { n: "03", t: "Dataset-driven Creatives", d: "Tabular datasets + templates → hundreds of ad variations generated automatically in one pass." },
  { n: "04", t: "Campaign Dashboards", d: "Multi-account dashboards for campaign management, asset libraries, team admin, and reporting." },
  { n: "05", t: "Design System", d: "Shared PostCSS component library reused across multiple products for visual consistency at scale." },
  { n: "06", t: "Client Showcase Tools", d: "Automated preview pages and client-facing showcase tools for presenting creatives to brand advertisers." },
]

const SLIDE_PLACEHOLDERS: Record<number, { icon: string; text: string }> = {
  0: { icon: "🖥️", text: "Platform screenshots" },
  1: { icon: "✏️", text: "Editor screenshots" },
  2: { icon: "📱", text: "Output screenshots coming soon" },
  3: { icon: "🧩", text: "UI system screenshots coming soon" },
}

export function PortfolioWorkSection() {
  const [activeTab, setActiveTab] = useState(0)

  const switchTab = (idx: number) => {
    setActiveTab(idx)
  }

  const ph = SLIDE_PLACEHOLDERS[activeTab] ?? { icon: "📷", text: "Screenshot" }

  return (
    <section id="work" style={{ background: "var(--p-white)" }}>
      <div className="p-eyebrow" data-n="01 —">
        Featured Work
      </div>

      <div className="p-work-head p-reveal">
        <h2 className="p-work-title">
          Eight years.
          <br />
          One product.
          <br />
          Global scale.
        </h2>
        <p className="p-work-intro">
          Deep, focused work on{" "}
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
          . Owned UI/UX, feature planning, and front-end implementation. Evolved
          the product through countless iterations while keeping it
          production-ready for global publishers and brands.
        </p>
      </div>

      <div className="p-project-card p-reveal">
        <div className="p-project-card-inner">
          <div className="p-project-info">
            <div>
              <div className="p-project-tags">
                <span className="p-ptag p-ptag-blue">Lead UI/UX</span>
                <span className="p-ptag p-ptag-slate">8+ Years</span>
                <span className="p-ptag p-ptag-gray">SaaS Platform</span>
                <span className="p-ptag p-ptag-gray">Enterprise</span>
              </div>
              <div className="p-project-name">
                NWS
                <br />
                Studio
              </div>
              <div className="p-project-product">
                studio.nws.ai · Newsroom Studio
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
            <div className="p-project-meta">
              <div>
                <div className="p-pmeta-label">Primary Focus</div>
                <div className="p-pmeta-val">
                  HTML · CSS/PostCSS · JS · UI Architecture
                </div>
              </div>
              <div>
                <div className="p-pmeta-label">Output Formats</div>
                <div className="p-pmeta-val">
                  AMP Web Stories · Display Ads · LPs
                </div>
              </div>
            </div>
          </div>

          <div className="p-project-visual">
            <div className="p-tab-nav">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  className={`p-tab-btn ${activeTab === i ? "active" : ""}`}
                  onClick={() => switchTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="p-tab-panels">
              {TABS.map((tab, tabIdx) => (
                <div
                  key={tab.label}
                  className={`p-tab-panel ${activeTab === tabIdx ? "active" : ""}`}
                >
                  <div className="p-slideshow">
                    <div className="p-slide active">
                      <div className="p-slide-placeholder">
                        <div className="p-slide-placeholder-icon">
                          {tabIdx === activeTab ? ph.icon : "📷"}
                        </div>
                        <div className="p-slide-placeholder-text">
                          {tabIdx === activeTab ? ph.text : "Screenshot"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-tab-desc">{tab.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-caps-grid">
          {CAPS.map((cap, i) => (
            <div
              key={cap.n}
              className={`p-cap p-reveal ${i === 0 ? "p-rd1" : i === 1 ? "p-rd2" : "p-rd3"}`}
            >
              <div className="p-cap-n">{cap.n}</div>
              <div className="p-cap-t">{cap.t}</div>
              <div className="p-cap-d">{cap.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
