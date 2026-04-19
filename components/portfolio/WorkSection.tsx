"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const BRAND_ITEMS: { name: string; file: string; href?: string }[] = [
  {
    name: "Google",
    file: "Google.svg",
    href: "https://stories.nws.ai/branded/1288496525/inclusive-marketing-panel/?opts=fb:1",
  },
  {
    name: "Netflix",
    file: "Netflix.svg",
    href: "https://preview.nws.ai/1288515173/extraction-2/?opts=fb:1",
  },
  {
    name: "Meta",
    file: "Meta.svg",
    href: "https://preview.nws.ai/1288517481/whatsapp-view-once-dv-320x480/?opts=fb:1",
  },
  {
    name: "Forbes",
    file: "Forbes.svg",
    href: "https://stories.nws.ai/branded/1288491669/inside-larry-ellisons-1-billion-trophy-home-portfolio/?opts=fb:1",
  },
  {
    name: "Adidas",
    file: "Adidas.svg",
    href: "https://preview.nws.ai/audienzz/adidas-ultraboost/?opts=fb:1",
  },
  {
    name: "Uber",
    file: "Uber.svg",
    href: "https://preview.nws.ai/1288495214/uber-plug-it-in/?opts=fb:1",
  },
  {
    name: "Vodafone",
    file: "Vodafone.svg",
    href: "https://preview.nws.ai/1288516284/interactive-video-30-years/?opts=fb:1",
  },
  {
    name: "VICE",
    file: "VICE.svg",
    href: "https://stories.nws.ai/branded/1288493109/questionnaire-of-life-fireboy-dml/?opts=fb:1",
  },
  {
    name: "Glamour",
    file: "Glamour.svg",
    href: "https://stories.glamour.ro/hm-innovation-stories-re-enchantment-episodul-3/?opts=fb:1",
  },
  {
    name: "Prime",
    file: "Amazon Prime.svg",
    href: "https://preview.nws.ai/1288514627/amazon-prime-citadel/?opts=fb:1",
  },
  {
    name: "Electronic Arts",
    file: "EA.svg",
    href: "https://preview.nws.ai/1288492160/ea-sports-fifa21-ps5/?opts=fb:1",
  },
  {
    name: "AMEX",
    file: "Amex.svg",
    href: "https://preview.nws.ai/1288507450/amex-indy-v1/?opts=fb:1",
  },
  {
    name: "Whatsapp",
    file: "Meta.svg",
    href: "https://preview.nws.ai/1288507583/whats-app-2/?opts=fb:1",
  },
  {
    name: "Disney",
    file: "Disney.svg",
    href: "https://preview.nws.ai/audienzz/disney-poor-things-fr-v1/?opts=fb:1",
  },
  {
    name: "Land Rover",
    file: "Land_Rover.svg",
    href: "https://preview.nws.ai/1288495145/the-new-range-rover-sport-is-here/?opts=fb:1",
  },
  {
    name: "Tissot",
    file: "Tissot.svg",
    href: "https://preview.nws.ai/1288501765/tissot-sideral-s-powermatic-80-de/?opts=fb:1",
  },
  {
    name: "H&M",
    file: "H_M.svg",
    href: "https://preview.nws.ai/1288491337/simone-rocha-x-hm-interpretarea-glamour/?opts=fb:1",
  },
  {
    name: "Starbucks",
    file: "Starbucks.svg",
    href: "https://preview.nws.ai/1288492160/starbucks-pumpkin-spice-latte/?opts=fb:1",
  },
  {
    name: "IKEA",
    file: "IKEA.svg",
    href: "https://preview.nws.ai/newsroomai2/ikea-sales/?opts=fb:1",
  },
  {
    name: "BMW",
    file: "BMW.svg",
    href: "https://preview.nws.ai/display-ads/bmw-reveal-carousel/?opts=fb:1",
  },
  {
    name: "Peugeot",
    file: "Peugeot.svg",
    href: "https://preview.nws.ai/Immediate_uk/peugeot-408/?opts=fb:1",
  },
  {
    name: "Volkswagen",
    file: "Volkswagen.svg",
    href: "https://preview.nws.ai/audienzz/volkswagen-d/?opts=fb:1",
  },
  {
    name: "Rolex",
    file: "Rolex.svg",
    href: "https://preview.nws.ai/audienzz/rolex-ocean-day-8-june/?opts=fb:1",
  },
  {
    name: "RedBull",
    file: "RedBull.svg",
    href: "https://preview.nws.ai/audienzz/redbull-soapbox-race/?opts=fb:1",
  },
  {
    name: "Toyota",
    file: "Toyota.svg",
    href: "https://preview.nws.ai/audienzz/toyota-bz4x-de-v3-fullscreen/?opts=fb:1",
  },
  {
    name: "KFC",
    file: "KFC.svg",
    href: "https://preview.nws.ai/1288508522/crispy-shaorma/?opts=fb:1",
  },
  {
    name: "Audi",
    file: "Audi.svg",
    href: "https://preview.nws.ai/audienzz/audi-q8-e-tron-elektrisierend-auf-den-ersten-blick-it/?opts=fb:1",
  },
  {
    name: "Samsung",
    file: "Samsung.svg",
    href: "https://preview.nws.ai/audienzz/samsung-galaxy-z-flip4/?opts=fb:1",
  },
  {
    name: "Miele",
    file: "Miele.svg",
    href: "https://preview.nws.ai/audienzz/miele-triflex-fr/?opts=fb:1",
  },
  {
    name: "Chanel",
    file: "Chanel.svg",
    href: "https://preview.nws.ai/audienzz/chanel-holiday-2022-collection/?opts=fb:1",
  },
  {
    name: "DeLonghi",
    file: "DeLonghi.svg",
    href: "https://preview.nws.ai/Immediate_uk/delonghi-i-manual-machines-i-v2/?opts=fb:1",
  },
  {
    name: "M&S",
    file: "M_S.svg",
    href: "https://preview.nws.ai/Immediate_uk/ms-store-locator-easter/?opts=fb:1",
  },
  {
    name: "British Airways",
    file: "British_Airways.svg",
    href: "https://preview.nws.ai/escommercial/ba-jersey-brand-story-mobile-347735/?opts=fb:1",
  },
  {
    name: "VISA",
    file: "VISA.svg",
    href: "https://preview.nws.ai/audienzz/visa/#0",
  },
  {
    name: "dyson",
    file: "dyson.svg",
    href: "https://preview.nws.ai/audienzz/dyson-touchpoints-2-apr-24-v1/?opts=fb:1",
  },
  {
    name: "SWISS",
    file: "SWISS.svg",
    href: "https://preview.nws.ai/audienzz/swiss-i-brand-story-apr-24-i-v1/?opts=fb:1",
  },
  {
    name: "McDonald's",
    file: "McDonalds.svg",
    href: "https://preview.nws.ai/mcdonalds_ro/mcdonalds-big-tasty-variety-brand-story-janmar26/?opts=fb:1",
  },
];

const BRAND_ITEMS_WITH_LINKS = BRAND_ITEMS.filter((b) => b.href)

function hrefForNewTab(href: string): string {
  return href.replace(/\?opts=fb:1$/, "")
}

function BrandLogo({
  brand,
  linkedIndex,
  onBrandClick,
}: {
  brand: (typeof BRAND_ITEMS)[0]
  linkedIndex?: number
  onBrandClick?: (index: number) => void
}) {
  const logo = (
    <img
      src={`/images/brands/${brand.file}`}
      alt={brand.name}
      className="p-brand-logo"
    />
  )
  return (
    <span className="p-brand-logo-wrap">
      {brand.href && linkedIndex !== undefined && onBrandClick ? (
        <button
          type="button"
          className="p-brand-logo-link"
          title={brand.name}
          onClick={(e) => {
            e.preventDefault()
            onBrandClick(linkedIndex)
          }}
        >
          {logo}
        </button>
      ) : brand.href ? (
        <a
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-brand-logo-link"
          title={brand.name}
        >
          {logo}
        </a>
      ) : (
        logo
      )}
    </span>
  )
}

const CAPS = [
  {
    t: "WYSIWYG Editor",
    d: "Implemented the frontend of a drag-and-drop editor for online ads and story-based creatives — including canvas layout, element controls, and toolbar interactions.",
  },
  {
    t: "Multi-format Creatives",
    d: "Designed the UI logic and HTML structure enabling creatives to export as web ads, AMP Stories, landing pages, and HTML presentations from the same canvas.",
  },
  {
    t: "Dataset-driven Creatives",
    d: "Designed UI workflows for dataset-driven creatives — templates and tabular data generating hundreds of ad variations in a single pass.",
  },
  {
    t: "Campaign Management UI",
    d: "Implemented dashboard interfaces for campaign management, asset libraries, team administration, and reporting.",
  },
  {
    t: "Creative Preview & Client Review",
    d: "Built UI for automated preview pages and client-facing tools used to present and review creatives with brand advertisers.",
  },
  {
    t: "Design System",
    d: "Created and maintained a shared PostCSS component library reused across multiple Newsroom products to ensure visual consistency at scale.",
  },
];

const SLIDESHOW_IMAGES: string[] = [
  /* Platform */
  "/images/featured-work/platform/1-login.jpg",
  "/images/featured-work/platform/2-dashboard.jpg",
  "/images/featured-work/platform/3-projects.jpg",
  "/images/featured-work/platform/4-assets-media_library.jpg",
  "/images/featured-work/platform/5-assets-fonts.jpg",
  "/images/featured-work/platform/6-reports.jpg",
  "/images/featured-work/platform/7-account-personal_information.jpg",
  "/images/featured-work/platform/8-account-team.jpg",
  /* Editor */
  "/images/featured-work/editor/1-typography.jpg",
  "/images/featured-work/editor/2-media.jpg",
  "/images/featured-work/editor/3-animations.jpg",
  "/images/featured-work/editor/4-links.jpg",
  "/images/featured-work/editor/5-data_binding.jpg",
  "/images/featured-work/editor/6-interactives.jpg",
  "/images/featured-work/editor/7-editor-helpers.jpg",
  "/images/featured-work/editor/8-editor-menus_and_helpers.jpg",
  "/images/featured-work/editor/9-editor-360_view.jpg",
  "/images/featured-work/editor/10-editor-settings-delivery.jpg",
  /* Content Output */
  "/images/featured-work/content-output/1-showcase-page.jpg",
  "/images/featured-work/content-output/2-formats-page.jpg",
  "/images/featured-work/content-output/3-formats-page-preview-format.jpg",
  "/images/featured-work/content-output/4-formats-page-info_and_specs.jpg",
  "/images/featured-work/content-output/5-multi-formats-page.jpg",
  "/images/featured-work/content-output/6-preview_pagec-carousel_mode.jpg",
  "/images/featured-work/content-output/7-preview_pagec-full_bleed_mode.jpg",
  "/images/featured-work/content-output/8-preview-in-feed.jpg",
  /* UI Systems */
  "/images/featured-work/ui-systems/1-typography-colors.jpg",
  "/images/featured-work/ui-systems/2-icons-buttons.jpg",
  "/images/featured-work/ui-systems/3-forms.jpg",
  "/images/featured-work/ui-systems/4-other-components.jpg",
  "/images/featured-work/ui-systems/5-production-demos.jpg",
  "/images/featured-work/ui-systems/6-production-demos-2.jpg",
]

const SLIDESHOW_SECTIONS: {
  label: string
  startIndex: number
  /** Offset în px de la începutul celulei (margin-left) pentru aliniere cu segmentele din timeline */
  labelMarginStartPx?: number
}[] = [
  { label: "Platform", startIndex: 0 },
  { label: "Editor", startIndex: 8 },
  { label: "Content Output", startIndex: 18 },
  { label: "UI Systems", startIndex: 26 },
]

function formatSlideLabel(path: string): string {
  const name = path.replace(/\.[^/.]+$/, "").split("/").pop() ?? ""
  const withoutLeadingNumbers = name.replace(/^\d+-?/, "")
  return withoutLeadingNumbers
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function getSectionLabelForSlide(slideIndex: number): string {
  let label = SLIDESHOW_SECTIONS[0]?.label ?? ""
  for (const sec of SLIDESHOW_SECTIONS) {
    if (slideIndex >= sec.startIndex) label = sec.label
  }
  return label
}

export function PortfolioWorkSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [slideshowExpanded, setSlideshowExpanded] = useState(false)
  const [brandModalOpen, setBrandModalOpen] = useState(false)
  const [brandModalIndex, setBrandModalIndex] = useState(0)
  const brandModalSwipeStart = useRef<number | null>(null)
  const n = SLIDESHOW_IMAGES.length
  const goPrev = () => setActiveSlide((s) => (s <= 0 ? n - 1 : s - 1))
  const goNext = () => setActiveSlide((s) => (s >= n - 1 ? 0 : s + 1))
  const currentSectionLabel = getSectionLabelForSlide(activeSlide)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(max-width: 768px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!slideshowExpanded && !brandModalOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [slideshowExpanded, brandModalOpen])

  useEffect(() => {
    if (brandModalOpen) {
      document.body.classList.add("brand-modal-open")
      return () => document.body.classList.remove("brand-modal-open")
    }
  }, [brandModalOpen])

  const openBrandModal = useCallback((index: number) => {
    setBrandModalIndex(index)
    setBrandModalOpen(true)
  }, [])

  const brandModalPrev = useCallback(() => {
    setBrandModalIndex((i) =>
      i <= 0 ? BRAND_ITEMS_WITH_LINKS.length - 1 : i - 1
    )
  }, [])

  const brandModalNext = useCallback(() => {
    setBrandModalIndex((i) =>
      i >= BRAND_ITEMS_WITH_LINKS.length - 1 ? 0 : i + 1
    )
  }, [])

  useEffect(() => {
    if (n <= 1) return
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev >= n - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [n])

  return (
    <section id="work" style={{ background: "var(--p-white)" }}>
      <div className="p-eyebrow" data-n="01 •">
        Featured Work
      </div>

      <div className="p-work-head p-reveal">
        <h2 className="p-work-title">
          One product.
          <br />
          Global scale.
        </h2>
        <p className="p-work-intro">
          For the past eight years, my main focus has been {" "}
          <a
            href="https://studio.nws.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text-link"
          >
            NWS Studio
          </a>
          {", the flagship creative platform at "}
          <a
            href="https://nws.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text-link"
          >
            Newsroom AI
          </a>
          , shaping the UI/UX, feature design and frontend implementation
          while keeping the product production-ready for global publishers and
          brands.
        </p>
      </div>

      <div className="p-project-card p-reveal">
        <div className="p-project-card-inner">
          <div className="p-project-info">
            <div>
              <div className="p-project-tags">
                <span className="p-ptag p-ptag-blue">Lead UI Engineer</span>
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
              </div>

              <ul className="p-project-bullets">
                <li>
                  Implemented <strong>UI across the platform</strong> - editor,
                  dashboards, asset management, reporting.
                </li>
                <li>
                  Built the <strong>WYSIWYG editor UI</strong> powering story
                  and ad creation.
                </li>
                <li>
                  Designed a <strong>dataset-driven creative system</strong>{" "}
                  generating hundreds of ad variations in one pass.
                </li>
              </ul>
            </div>
            <div className="p-project-meta">
              <div>
                <div className="p-pmeta-label">Primary Focus</div>
                <div className="p-pmeta-tags" aria-label="Primary focus">
                  {[
                    "HTML",
                    "CSS/PostCSS",
                    "JS",
                    "UI Architecture",
                  ].map((t) => (
                    <span key={t} className="p-pmeta-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-project-visual">
            <div
              className={`p-slideshow-wrap ${isMobile ? "p-slideshow-wrap-tappable" : ""}`}
              {...(isMobile && {
                role: "button",
                tabIndex: 0,
                "aria-label": "Open slideshow full screen",
                onClick: (e) => {
                  e.stopPropagation()
                  setSlideshowExpanded(true)
                },
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setSlideshowExpanded(true)
                  }
                },
              })}
            >
              <div className="p-slideshow-section-label" aria-live="polite">
                {currentSectionLabel}
              </div>
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
            <div
              className="p-slideshow-timeline"
              style={{ ["--p-timeline-segments" as string]: n }}
            >
              <div className="p-timeline-grid">
                {SLIDESHOW_SECTIONS.map((sec, i) => {
                  const labelPos = sec.startIndex + 1;
                  const isActiveSection =
                    activeSlide >= sec.startIndex &&
                    (i === SLIDESHOW_SECTIONS.length - 1 ||
                      activeSlide < SLIDESHOW_SECTIONS[i + 1].startIndex);
                  return (
                    <button
                      key={sec.label}
                      type="button"
                      className={`p-timeline-label ${i === SLIDESHOW_SECTIONS.length - 1 ? "last" : ""} ${isActiveSection ? "active" : ""}`}
                      style={{
                        gridColumn: String(labelPos),
                        gridRow: 1,
                        ...(sec.labelMarginStartPx != null && {
                          position: "relative",
                          left: sec.labelMarginStartPx,
                        }),
                      }}
                      onClick={() =>
                        setActiveSlide(
                          sec.startIndex >= n ? n - 1 : sec.startIndex,
                        )
                      }
                      aria-label={`Go to ${sec.label}`}
                    >
                      {sec.label}
                    </button>
                  );
                })}
                <div className="p-timeline-track-line" aria-hidden />
                {SLIDESHOW_IMAGES.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`p-timeline-segment ${i === activeSlide ? "active" : ""}`}
                    style={{ gridColumn: i + 1, gridRow: 2 }}
                    onClick={() => setActiveSlide(i)}
                    aria-label={formatSlideLabel(src)}
                    title={formatSlideLabel(src)}
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
        </div>
        <div className="p-caps-grid">
          {CAPS.map((cap, i) => (
            <div
              key={cap.t}
              className={`p-cap p-reveal ${i === 0 ? "p-rd1" : i === 1 ? "p-rd2" : "p-rd3"}`}
            >
              <div className="p-cap-t">{cap.t}</div>
              <div className="p-cap-d">{cap.d}</div>
            </div>
          ))}
        </div>
        <div id="brands-publishers" className="p-brands-strip">
          <div className="p-brands-head">
            <div className="p-brands-label">
              Brands that used the platform
            </div>
            <p className="p-brands-hint"><em>(each logo links to a live example)</em></p>
          </div>
          <div className="p-brands-marquee">
            <div className="p-brands-marquee-row p-brands-marquee-row-1" aria-hidden>
              <div className="p-brands-marquee-track">
                {[...BRAND_ITEMS.slice(0, 20), ...BRAND_ITEMS.slice(0, 20)].map((b, i) => (
                  <BrandLogo
                    key={`r1-${i}-${b.name}`}
                    brand={b}
                    linkedIndex={b.href ? BRAND_ITEMS_WITH_LINKS.findIndex((lb) => lb === b) : undefined}
                    onBrandClick={openBrandModal}
                  />
                ))}
              </div>
            </div>
            <div className="p-brands-marquee-row p-brands-marquee-row-2" aria-hidden>
              <div className="p-brands-marquee-track p-brands-marquee-track-reverse">
                {[...BRAND_ITEMS.slice(20), ...BRAND_ITEMS.slice(20)].map((b, i) => (
                  <BrandLogo
                    key={`r2-${i}-${b.name}`}
                    brand={b}
                    linkedIndex={b.href ? BRAND_ITEMS_WITH_LINKS.findIndex((lb) => lb === b) : undefined}
                    onBrandClick={openBrandModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {brandModalOpen && BRAND_ITEMS_WITH_LINKS.length > 0 && (
        <div
          className="p-brand-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Brand example preview"
          onClick={() => setBrandModalOpen(false)}
        >
          <div
            className="p-brand-modal-inner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              brandModalSwipeStart.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              const start = brandModalSwipeStart.current
              if (start == null) return
              const end = e.changedTouches[0].clientX
              const diff = start - end
              if (Math.abs(diff) > 50) {
                if (diff > 0) brandModalNext()
                else brandModalPrev()
              }
              brandModalSwipeStart.current = null
            }}
          >
            <div className="p-brand-modal-header">
              <span className="p-brand-modal-title">
                {BRAND_ITEMS_WITH_LINKS[brandModalIndex]?.name}
              </span>
              {/* <a
                href={
                  BRAND_ITEMS_WITH_LINKS[brandModalIndex]?.href
                    ? hrefForNewTab(BRAND_ITEMS_WITH_LINKS[brandModalIndex].href)
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-brand-modal-fallback"
              >
                Open in new tab
              </a> */}
              <button
                type="button"
                className="p-brand-modal-close p-vc-btn"
                onClick={() => setBrandModalOpen(false)}
                aria-label="Close"
                title="Close"
              >
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="p-brand-modal-iframe-wrap">
              <div className="p-brand-modal-iframe-aspect">
                <iframe
                  src={BRAND_ITEMS_WITH_LINKS[brandModalIndex]?.href}
                  title={BRAND_ITEMS_WITH_LINKS[brandModalIndex]?.name}
                  className="p-brand-modal-iframe"
                />
              </div>
            </div>
            <div className="p-brand-modal-nav">
              <button
                type="button"
                className="p-brand-modal-prev p-vc-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  brandModalPrev()
                }}
                aria-label="Previous"
                title="Previous"
              >
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                className="p-brand-modal-next p-vc-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  brandModalNext()
                }}
                aria-label="Next"
                title="Next"
              >
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {slideshowExpanded && isMobile && (
        <div
          className="p-slideshow-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Slideshow full screen"
          onClick={() => setSlideshowExpanded(false)}
        >
          <div
            className="p-slideshow-overlay-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="p-slideshow-overlay-close p-vc-btn"
              onClick={() => setSlideshowExpanded(false)}
              aria-label="Close"
              title="Close"
            >
              <svg viewBox="0 0 24 24" width={18} height={18}>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <div className="p-slideshow-overlay-slideshow">
              {SLIDESHOW_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className={`p-slide ${i === activeSlide ? "active" : ""}`}
                >
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="p-slideshow-overlay-prev p-vc-btn"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Previous"
              title="Previous"
            >
              <svg viewBox="0 0 24 24" width={18} height={18}>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              type="button"
              className="p-slideshow-overlay-next p-vc-btn"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Next"
              title="Next"
            >
              <svg viewBox="0 0 24 24" width={18} height={18}>
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
