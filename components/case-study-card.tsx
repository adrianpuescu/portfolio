"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  subtitle: string
  description: string
  impacts: string[]
  imageSrc: string
  imageAlt: string
  index: number
}

export function CaseStudyCard({
  title,
  subtitle,
  description,
  impacts,
  imageSrc,
  imageAlt,
  index,
}: CaseStudyCardProps) {
  return (
    <div className="group grid gap-8 border-t border-border py-12 first:border-t-0 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Image — alternate left/right */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-card ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-background/10" />
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
