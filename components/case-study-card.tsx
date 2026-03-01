"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface CaseStudyCardProps {
  title: string
  subtitle: string
  description: string
  impacts: string[]
  media: MediaItem[]
  index: number
}

export function CaseStudyCard({
  title,
  subtitle,
  description,
  impacts,
  media,
  index,
}: CaseStudyCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length)
  }

  const hasMultipleSlides = media.length > 1

  return (
    <div className="border-t border-border py-16 first:border-t-0">
      {/* Content row */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              {subtitle}
            </span>
            <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl text-balance">
              {title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {description}
            </p>

            {/* Impact points */}
            <ul className="mt-6 flex flex-col gap-3">
              {impacts.map((impact) => (
                <li key={impact} className="flex items-start gap-3">
                  <ArrowUpRight
                    size={14}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-sm text-secondary-foreground">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slideshow indicator for desktop - shows on the content side */}
          {hasMultipleSlides && (
            <div className="hidden md:flex items-end justify-start pb-4">
              <div className="flex items-center gap-2">
                {media.map((_, idx) => (
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

      {/* Media slideshow - full width with contrast background */}
      <div className="mt-8 w-full bg-secondary py-6">
        <div className="group relative mx-auto max-w-6xl px-6 lg:px-8">
          {/* Current media */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {media[currentSlide].type === "image" ? (
              <Image
                src={media[currentSlide].src}
                alt={media[currentSlide].alt || title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            ) : (
              <video
                src={media[currentSlide].src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Navigation arrows - visible on hover */}
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
              {media.map((_, idx) => (
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
    </div>
  )
}
