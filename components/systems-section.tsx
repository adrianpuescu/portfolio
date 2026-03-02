"use client"

import Image from "next/image"
import { useState } from "react"
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
  const [activeTab, setActiveTab] = useState("platform")
  const [currentSlide, setCurrentSlide] = useState(0)

  const activeSystem = systemTabs.find((tab) => tab.id === activeTab)!

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentSlide(0)
  }

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
        <div className="mb-12">
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
            and brands including Google, Meta, Disney, Netflix, H&M, Adidas. I owned UI/UX, feature planning, 
            and front-end implementation across the entire product.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 flex flex-wrap gap-2">
          {systemTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 font-mono text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Description */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-foreground">
              {activeSystem.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {activeSystem.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <ArrowUpRight size={14} className="mt-1 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slideshow navigation dots for desktop */}
          {hasMultipleSlides && (
            <div className="hidden md:flex items-end justify-start pb-4">
              <div className="flex items-center gap-2">
                {activeSystem.media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Media slideshow - full width */}
      <div className="mt-8 w-full bg-secondary py-6">
        <div className="group relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden">
            {activeSystem.media[currentSlide].type === "image" ? (
              <Image
                src={activeSystem.media[currentSlide].src}
                alt={activeSystem.media[currentSlide].alt || activeSystem.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
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
          </div>

          {/* Navigation arrows */}
          {hasMultipleSlides && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-all hover:scale-105 group-hover:opacity-100 lg:left-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-all hover:scale-105 group-hover:opacity-100 lg:right-10"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Mobile dots */}
          {hasMultipleSlides && (
            <div className="mt-4 flex justify-center gap-2 md:hidden">
              {activeSystem.media.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
