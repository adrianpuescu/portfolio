import { Layers, Users, Expand, GitBranch } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Managing Complexity",
    description:
      "Layered architecture that isolates concerns — editor logic, rendering pipelines, and UI state are separated so changes in one system never cascade into another.",
  },
  {
    icon: Expand,
    title: "Designing for Scale",
    description:
      "Components and systems built with growth in mind. From template engines supporting dozens of format variations to UI libraries consumed across the entire product surface.",
  },
  {
    icon: Users,
    title: "Empowering Non-Technical Users",
    description:
      "Every interface decision is grounded in the question: can someone without engineering expertise use this confidently? The best systems are invisible to the people using them.",
  },
  {
    icon: GitBranch,
    title: "Evolving, Not Rebuilding",
    description:
      "10+ years on one product means constant evolution — not rewrites. Incremental refactoring, careful migration paths, and backward compatibility as a core constraint.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Product Thinking
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            How I approach complex systems
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Building at scale is about trade-offs, clarity, and creating
            structures that support both the product and the team.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 inline-flex rounded-lg bg-secondary p-3">
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
