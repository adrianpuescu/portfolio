import { ArrowUpRight } from "lucide-react"

const experience = [
  {
    label: "20+ Years in Digital",
    detail:
      "Web, animation, interactive, and creative production. A career spanning the evolution of digital from Flash to modern frontend frameworks.",
  },
  {
    label: "10+ Years on One Platform",
    detail:
      "Deep, sustained work on a major creative platform. Not jumping between projects — going deep on one complex product and evolving it continuously.",
  },
  {
    label: "Design to Code",
    detail:
      "Background spanning creative direction, interaction design, and frontend implementation. Fluent across the full stack of digital product creation.",
  },
]

const currentFocus = [
  {
    label: "React & TypeScript",
    status: "Active",
    detail:
      "Modern component architectures, server-side rendering, and type-safe frontend systems.",
  },
  {
    label: "AI-Assisted Workflows",
    status: "Exploring",
    detail:
      "Integrating AI into creative tooling — from auto-layout suggestions to intelligent content generation within editorial workflows.",
  },
  {
    label: "Modern Frontend Systems",
    status: "Active",
    detail:
      "Next.js, Tailwind CSS, and modern state management. Applying a decade of architecture knowledge to current patterns.",
  },
]

export function EvolutionSection() {
  return (
    <section id="experience" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Experience */}
        <div className="mb-24">
          <div className="mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Experience
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
              Two decades of building
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {experience.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-start md:gap-8 md:p-8"
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
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <div className="mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Current Focus
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
              Expanding the toolkit
            </h2>
          </div>

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
                <span className="shrink-0 self-start rounded-full border border-primary/15 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
