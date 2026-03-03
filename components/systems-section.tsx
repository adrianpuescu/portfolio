"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface SystemTab {
  id: string
  label: string
  description: string
  highlights: string[]
  media: MediaItem[]
}

const systemTabs: SystemTab[] = [
  {
    id: "platform",
    label: "Platform",
    description:
      "The full product environment — Dashboard, Projects, Assets library, Reports, Settings. I owned UI/UX planning and front-end implementation for the entire SaaS surface.",
    highlights: [
      "Complete SaaS product surface",
      "Navigation, CRUD flows, settings",
      "Multi-project workflow architecture",
    ],
    media: [
      { type: "image", src: "/images/studio-platform.jpg", alt: "Studio platform dashboard" },
    ],
  },
  {
    id: "editor",
    label: "Editor",
    description:
      "A sophisticated WYSIWYG editor for building interactive stories, ads, and presentations. Canvas editing, drag-drop blocks, real-time preview, toolbar systems.",
    highlights: [
      "Drag-and-drop multi-block layouts",
      "Real-time preview across formats",
      "Template-driven batch generation",
    ],
    media: [
      { type: "image", src: "/images/studio-editor.jpg", alt: "Studio WYSIWYG editor" },
    ],
  },
  {
    id: "output",
    label: "Content Output",
    description:
      "Interactive stories, rich media ads, presentations, and pages — all HTML-based, distributed across partner networks. Including AMP-compliant formats with strict constraints.",
    highlights: [
      "Stories and rich media ads",
      "AMP-compliant formats",
      "Dataset-driven batch generation",
    ],
    media: [
      { type: "image", src: "/images/content-output.jpg", alt: "Published content and ad formats" },
    ],
  },
  {
    id: "ui-systems",
    label: "UI Systems",
    description:
      "Shared CSS library (PostCSS-based), component patterns, and layout systems. Owned visual consistency and UI architecture across the platform.",
    highlights: [
      "Shared CSS library across products",
      "Spacing scales and typography",
      "Scalable architecture patterns",
    ],
    media: [
      { type: "image", src: "/images/ui-systems.jpg", alt: "UI components and design system" },
    ],
  },
]

export function SystemsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)

  const activeSystem = systemTabs[activeIndex]

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const windowHeight = window.innerHeight

      // Only update when container is in view
      if (containerTop > windowHeight || containerRect.bottom < 0) return

      systemTabs.forEach((_, index) => {
        const ref = sectionRefs.current.get(index)
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const sectionMiddle = rect.top + rect.height / 2

        // When section middle is in the top half of the viewport
        if (sectionMiddle < windowHeight * 0.6 && sectionMiddle > windowHeight * 0.1) {
          if (activeIndex !== index) {
            setActiveIndex(index)
            setCurrentSlide(0)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSystem.media.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSystem.media.length) % activeSystem.media.length)
  }

  const hasMultipleSlides = activeSystem.media.length > 1

  return (
    <section id="systems" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              8+ Years, One Platform
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            NWS Studio
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            The flagship creative platform at Newsroom AI — used by Forbes, USA Today, The Guardian, Yahoo, VICE, 
            and brands including Google, Meta, Disney, Netflix, H&M, Adidas.
          </p>
        </div>

        {/* Sticky scroll layout */}
        <div ref={containerRef} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left: Scrolling text sections */}
          <div className="flex flex-col gap-32 lg:gap-48">
            {systemTabs.map((tab, index) => (
              <div
                key={tab.id}
                ref={(el) => { if (el) sectionRefs.current.set(index, el) }}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "lg:opacity-30"
                }`}
              >
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {tab.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tab.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {tab.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <ArrowUpRight size={14} className="mt-1 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Mobile: Show media inline */}
                <div className="mt-8 lg:hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    {tab.media[0].type === "image" ? (
                      <Image
                        src={tab.media[0].src}
                        alt={tab.media[0].alt || tab.label}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    ) : (
                      <video
                        src={tab.media[0].src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky media */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="group relative aspect-[4/3] overflow-hidden bg-secondary">
                {activeSystem.media[currentSlide].type === "image" ? (
                  <Image
                    src={activeSystem.media[currentSlide].src}
                    alt={activeSystem.media[currentSlide].alt || activeSystem.label}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="50vw"
                  />
                ) : (
                  <video
                    src={activeSystem.media[currentSlide].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}

                {/* Navigation arrows */}
                {hasMultipleSlides && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-all hover:scale-105 group-hover:opacity-100"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-all hover:scale-105 group-hover:opacity-100"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Dots */}
                {hasMultipleSlides && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {activeSystem.media.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentSlide
                            ? "w-6 bg-primary"
                            : "w-1.5 bg-background/60 hover:bg-background"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Tab label indicator */}
              <div className="mt-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {activeSystem.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
