"use client"

import { ArrowUpRight } from "lucide-react"

const currentFocus = [
  {
    label: "React & TypeScript",
    status: "Active",
    detail:
      "Transitioning from legacy frontend patterns to modern component architectures. Building with React, TypeScript, and server-side rendering frameworks.",
  },
  {
    label: "AI-Assisted Workflows",
    status: "Exploring",
    detail:
      "Integrating AI into creative tooling — from auto-layout suggestions to intelligent content generation. Understanding how LLMs can augment editorial workflows.",
  },
  {
    label: "Modern Frontend Ecosystem",
    status: "Active",
    detail:
      "Working with Next.js, Tailwind CSS, and modern state management. Applying a decade of architecture knowledge to current tooling and patterns.",
  },
]

export function EvolutionSection() {
  return (
    <section id="evolution" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Current Evolution
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            Expanding the toolkit
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A decade of deep product work builds intuition that transfers.
            Now applying that experience to modern technologies and new
            paradigms.
          </p>
        </div>

        {/* Focus areas */}
        <div className="flex flex-col gap-4">
          {currentFocus.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:flex-row md:items-start md:gap-8 md:p-8"
            >
              <div className="flex shrink-0 items-center gap-3 md:w-64">
                <ArrowUpRight size={14} className="text-primary" />
                <span className="font-medium text-foreground">
                  {item.label}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
              <span className="shrink-0 self-start rounded-full border border-primary/15 bg-primary/8 px-3 py-1 font-mono text-xs text-primary">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 shadow-sm md:p-12">
          <blockquote className="text-xl leading-relaxed font-light text-foreground md:text-2xl text-pretty">
            {'"'}The best engineers I know didn{"'"}t become experts by starting
            over every two years. They became experts by going deep — and then
            bringing that depth to new contexts.{'"'}
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            — A personal philosophy
          </p>
        </div>
      </div>
    </section>
  )
}
