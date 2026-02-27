import { ArrowUpRight } from "lucide-react"

const experience = [
  {
    label: "20+ Years in Digital",
    detail:
      "Started in online advertising and interactive campaigns — graphics, HTML/CSS, Flash animation — for major brands. Then transitioned into sustained product work, spending 8+ years building and evolving a single complex platform.",
  },
  {
    label: "8+ Years on NWS Studio",
    detail:
      "Deep, focused work on NWS Studio — the flagship creative platform at Newsroom AI. Owned UI/UX, feature planning, and front-end implementation. Evolved the product through countless iterations while keeping it production-ready for global publishers and brands.",
  },
  {
    label: "Design to Implementation",
    detail:
      "Background spanning creative direction, UI/UX design, and front-end implementation (HTML/CSS/JS). Not a full-stack developer — but fluent across the full journey from concept to shipped product.",
  },
]

const currentFocus = [
  {
    label: "React & TypeScript",
    status: "Learning",
    detail:
      "Getting hands-on with modern component patterns, hooks, and type-safe frontend development. Building from the ground up with fresh eyes.",
  },
  {
    label: "Next.js & Tailwind CSS",
    status: "Learning",
    detail:
      "Picking up the modern frontend stack — server components, app router, utility-first CSS. Applying years of product intuition to new tooling.",
  },
  {
    label: "AI-Assisted Development",
    status: "Active",
    detail:
      "Leaning heavily into AI-powered workflows — Claude, Cursor, v0 by Vercel. This portfolio was built with v0. Already applying this approach to personal projects and production work at NWS Studio.",
  },
]

export function EvolutionSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
