"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CaseStudyCardProps {
  title: string
  subtitle: string
  description: string
  impacts: string[]
  images: { src: string; alt: string }[]
  index: number
}

export function CaseStudyCard({
  title,
  subtitle,
  description,
  impacts,
  images,
  index,
}: CaseStudyCardProps) {
  const showNav = images.length > 1

  return (
    <div className="group grid gap-8 border-t border-border py-12 first:border-t-0 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Slideshow — alternate left/right */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-primary ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="ml-0">
            {images.map((img) => (
              <CarouselItem key={img.src} className="pl-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {showNav && (
            <>
              <CarouselPrevious className="left-2 right-auto top-1/2 -translate-y-1/2 border-border bg-background/80 hover:bg-background" />
              <CarouselNext className="right-2 left-auto top-1/2 -translate-y-1/2 border-border bg-background/80 hover:bg-background" />
            </>
          )}
        </Carousel>
      </div>

      {/* Content */}
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
    </div>
  )
}
