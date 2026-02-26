import { Palette, Target, Layers, MousePointerClick, Wrench, Clapperboard } from "lucide-react"

const capabilities = [
  {
    icon: Palette,
    title: "Creative Direction & Concept Development",
    description:
      "Leading visual and interaction strategy from pitch through production. Translating business goals into compelling, coherent creative output.",
  },
  {
    icon: Target,
    title: "Product & Feature Planning",
    description:
      "Defining scope, prioritizing features, and mapping user flows. Bridging what the business needs with what users actually experience.",
  },
  {
    icon: Layers,
    title: "UI Systems & Design Infrastructure",
    description:
      "Building shared component libraries, design tokens, spacing scales, and typography hierarchies that keep products consistent at scale.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive & Rich Media Production",
    description:
      "Designing and building interactive content — from rich media ads and stories to animated presentations. Making things move, respond, and engage.",
  },
  {
    icon: Wrench,
    title: "Tooling for Non-Technical Users",
    description:
      "Creating WYSIWYG editors, drag-and-drop interfaces, and configuration systems that give non-engineers real creative control.",
  },
  {
    icon: Clapperboard,
    title: "Creative Production & Animation",
    description:
      "A background rooted in web animation, motion design, and interactive production. From Flash-era campaigns to modern rich media — making digital experiences feel alive.",
  },
]

export function WhatIDoSection() {
  return (
    <section id="what-i-do" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              What I Do
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            A hybrid practice across design and engineering
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Two decades of work spanning creative direction, product thinking,
            UI architecture, and frontend implementation.
          </p>
        </div>

        {/* Capabilities list */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <c.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
