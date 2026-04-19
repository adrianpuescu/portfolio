"use client"

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

/** Autoplay interval; pauses on card hover and when `prefers-reduced-motion` is set. */
const CERT_AUTOPLAY_MS = 3400

/** Must match CSS animation duration for `.p-cert-out-*` / `.p-cert-in-*` */
const CERT_TRANSITION_MS = 480

/** Scrimba: one public page for all entries. */
const SCRIMBA_CERTIFICATES_PAGE = "https://scrimba.com/u43b009e:certs";

/**
 * Drop images into `public/images/certs/` using these filenames (or edit `src` below).
 * Each slide links to a page where the credential can be verified (omit `href` if none).
 */
const CERT_SLIDES: {
  label: string;
  src: string;
  href?: string;
}[] = [
  {
    label: "EF SET · English · C1 · 64/100",
    src: "/images/certs/ef-set-english-c1.jpg",
    href: "https://cert.efset.org/en/DdUuab",
  },
  {
    label: "Anthropic  Claude 101",
    src: "/images/certs/claude-101.jpg",
    href: "https://verify.skilljar.com/c/owjqzsgcoe3b",
  },
  {
    label: "Anthropic · Claude Code in Action",
    src: "/images/certs/claude-code-in-action.jpg",
    href: "https://verify.skilljar.com/c/hip36ki3q89h",
  },
  {
    label: "Scrimba · Figma, HTML & CSS",
    src: "/images/certs/scrimba-figma-html-css.jpg",
    href: SCRIMBA_CERTIFICATES_PAGE,
  },
  {
    label: "Scrimba · Learn Tailwind CSS",
    src: "/images/certs/scrimba-tailwind.jpg",
    href: SCRIMBA_CERTIFICATES_PAGE,
  },
  {
    label: "Scrimba · Learn JavaScript",
    src: "/images/certs/scrimba-javascript.jpg",
    href: SCRIMBA_CERTIFICATES_PAGE,
  },
  {
    label: "RO · Web fundamentals (HTML)",
    src: "/images/certs/ro-ministry-web-fundamentals.jpg",
  },
];

type CertSlide = (typeof CERT_SLIDES)[number]

function CertSlideImage({
  src,
  label,
}: {
  src: string
  label: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="p-cert-img-fallback">
        <img src="/images/certs/placeholder.svg" alt="" className="p-cert-img" />
        <span className="p-cert-img-fallback-label">{label}</span>
      </div>
    )
  }

  return (
    <img
      className="p-cert-img"
      src={src}
      alt=""
      onError={() => setFailed(true)}
    />
  )
}

function CertSlidePane({ slide }: { slide: CertSlide }) {
  const inner = (
    <>
      <CertSlideImage src={slide.src} label={slide.label} />
      {slide.href ? (
        <span className="p-cert-slide-verify" aria-hidden>
          Verify
        </span>
      ) : null}
    </>
  )

  if (slide.href) {
    return (
      <a
        className="p-cert-slide-hit"
        href={slide.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${slide.label} — open verification page`}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className="p-cert-slide-hit p-cert-slide-hit--static"
      role="img"
      aria-label={slide.label}
    >
      {inner}
    </div>
  )
}

type CertSwap = { from: number; to: number; dir: "next" | "prev" }

function CertSlideshow() {
  const n = CERT_SLIDES.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [pauseHover, setPauseHover] = useState(false)
  const [swap, setSwap] = useState<CertSwap | null>(null)
  const activeIndexRef = useRef(0)
  const swappingRef = useRef(false)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const startSwap = useCallback(
    (to: number, dir: "next" | "prev") => {
      if (n <= 1 || swappingRef.current) return
      const from = activeIndexRef.current
      if (from === to) return
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setActiveIndex(to)
        return
      }
      swappingRef.current = true
      setSwap({ from, to, dir })
    },
    [n],
  )

  useEffect(() => {
    if (!swap) return
    const to = swap.to
    const id = window.setTimeout(() => {
      setActiveIndex(to)
      setSwap(null)
      swappingRef.current = false
    }, CERT_TRANSITION_MS)
    return () => window.clearTimeout(id)
  }, [swap])

  const go = useCallback(
    (delta: number) => {
      const to = (activeIndexRef.current + delta + n) % n
      startSwap(to, delta > 0 ? "next" : "prev")
    },
    [n, startSwap],
  )

  useEffect(() => {
    if (typeof window === "undefined" || n <= 1) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (pauseHover) return

    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return
      if (swappingRef.current) return
      const from = activeIndexRef.current
      const to = (from + 1) % n
      swappingRef.current = true
      setSwap({ from, to, dir: "next" })
    }, CERT_AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [n, pauseHover])

  const listHighlight = swap ? swap.to : activeIndex

  const slideFrameRef = useRef<HTMLDivElement>(null)
  const [slideFrameHeightPx, setSlideFrameHeightPx] = useState<number | null>(
    null,
  )

  useLayoutEffect(() => {
    const el = slideFrameRef.current
    if (!el || typeof window === "undefined") return

    const mq = window.matchMedia("(min-width: 821px)")

    const sync = () => {
      if (!mq.matches) {
        setSlideFrameHeightPx(null)
        return
      }
      setSlideFrameHeightPx(el.offsetHeight)
    }

    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    mq.addEventListener("change", sync)

    return () => {
      ro.disconnect()
      mq.removeEventListener("change", sync)
    }
  }, [activeIndex, swap, listHighlight])

  const dualStyle: CSSProperties | undefined =
    slideFrameHeightPx == null
      ? undefined
      : { ["--cert-slide-h" as string]: `${slideFrameHeightPx}px` }

  return (
    <div id="credentials" className="p-cert-slideshow">
      <div
        className="p-cert-slideshow-grid"
        onMouseEnter={() => setPauseHover(true)}
        onMouseLeave={() => setPauseHover(false)}
      >
        <div className="p-cert-dual" style={dualStyle}>
          <div ref={slideFrameRef} className="p-cert-slide-frame">
            <div className="p-cert-slide-stage">
              {!swap ? (
                <div className="p-cert-layer p-cert-layer--single">
                  <CertSlidePane slide={CERT_SLIDES[activeIndex]} />
                </div>
              ) : (
                <>
                  <div
                    className={`p-cert-layer p-cert-layer--out p-cert-out--${swap.dir}`}
                    aria-hidden
                  >
                    <CertSlidePane slide={CERT_SLIDES[swap.from]} />
                  </div>
                  <div
                    className={`p-cert-layer p-cert-layer--in p-cert-in--${swap.dir}`}
                  >
                    <CertSlidePane slide={CERT_SLIDES[swap.to]} />
                  </div>
                </>
              )}
            </div>
          </div>
          <aside
            className="p-cert-names"
            aria-live="polite"
            aria-label="Current certificate"
          >
            <p key={listHighlight} className="p-cert-names-caption">
              {CERT_SLIDES[listHighlight].label}
            </p>
          </aside>
        </div>
        <div className="p-cert-arrows">
          <button
            type="button"
            className="p-cert-arrow p-cert-arrow-prev"
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="p-cert-arrow p-cert-arrow-next"
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

const GROUPS = [
  {
    name: "UI/UX & Product Design",
    tags: [
      "Interface Architecture",
      "Component Systems",
      "WYSIWYG Editors",
      "User Flows",
      "Responsive Design",
      "Interaction Design",
      "Feature Planning",
    ],
  },
  {
    name: "Frontend Development",
    tags: [
      "HTML5",
      "CSS / PostCSS",
      "JavaScript",
      "SVG",
      "Animation & Motion",
      "Ad Format Development",
      "AMP / Web Stories",
    ],
  },
  {
    name: "Platform & Systems",
    tags: [
      "Design Systems",
      "Template Engines",
      "Shared CSS Libraries",
      "Multi-tenant Platforms",
      "White-label SaaS",
    ],
  },
  {
    name: "Production & Tooling",
    tags: [
      "Git Workflows",
      "Node-based Tooling",
      "Package Ecosystems (npm / pnpm)",
      "Build Pipelines",
      "AWS Deployment (S3 / CloudFront)",
    ],
  },
  {
    name: "Creative & Advertising",
    tags: [
      "Rich Media Formats",
      "Display Advertising",
      "Interactive Campaigns",
      "Landing Pages",
      "Creative Asset Production",
      "Image & Video Editing",
    ],
  },
  {
    name: "AI-assisted Workflows",
    tags: ["Claude", "Cursor", "Rapid Prototyping", "POC Development"],
  },
]

export function PortfolioSkillsSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <section
      id="skills"
      style={{
        background: "var(--p-white)",
        borderTop: "1px solid var(--p-border)",
      }}
    >
      <div className="p-eyebrow" data-n="04 •">
        Toolkit
      </div>
      <div className="p-skills-layout">
        <div className="p-skills-sticky p-reveal">
          <h2 className="p-skills-title">
            Craft &<br />
            Capabilities
          </h2>
          <p className="p-skills-note">
            Two decades of production work — UI systems, front-end, and AI-assisted
            delivery.
          </p>
          <CertSlideshow />
        </div>
        <div className="p-reveal p-rd1">
          {GROUPS.map((group, i) => (
            <div
              key={group.name}
              className={`p-skill-group ${openIndex === i ? "open" : ""}`}
            >
              <div
                className="p-skill-gh"
                onClick={() => toggle(i)}
                onKeyDown={(e) => e.key === "Enter" && toggle(i)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === i}
              >
                <span className="p-skill-gn">{group.name}</span>
                <span className="p-skill-tog">+</span>
              </div>
              <div className="p-skill-body">
                <div className="p-skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="p-stag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
