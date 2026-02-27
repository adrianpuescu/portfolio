import { Layers, Expand, GitBranch, ArrowLeftRight } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Systems Over One-Off Solutions",
    description:
      "Investing in reusable foundations instead of bespoke implementations. Components, patterns, and architecture that compound over time.",
  },
  {
    icon: Expand,
    title: "Structure Enables Creativity",
    description:
      "Constraints and systems aren't the enemy of creative work — they're what make it sustainable. Good structure frees people to focus on what matters.",
  },
  {
    icon: GitBranch,
    title: "Build for Scale From the Start",
    description:
      "Every decision is made with growth in mind. From template engines supporting dozens of variations to UI libraries consumed across the entire product.",
  },
  {
    icon: ArrowLeftRight,
    title: "Bridge Design and Engineering",
    description:
      "The best products come from people who understand both sides. Fluency in design thinking and technical implementation removes translation loss.",
  },
]

export function ApproachSection() {
  return (
    <section id="thinking" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              How I Think
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            Principles that guide the work
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Twenty years of building teaches you patterns. These are the ones
            that have held up.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <p.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
