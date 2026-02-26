import { CaseStudyCard } from "./case-study-card"

const caseStudies = [
  {
    title: "WYSIWYG Editor / Creative Platform",
    subtitle: "Core System",
    description:
      "Architected and maintained a complex, multi-layered WYSIWYG editor used by major brands and publishers to build rich content at scale. A decade of continuous evolution across editing flows, rendering logic, and user-facing tooling.",
    impacts: [
      "10+ years of sustained development on a single complex product",
      "Drag-and-drop editing for multi-block layouts and responsive content",
      "Non-technical users creating production-ready content independently",
      "Real-time preview and cross-device rendering at scale",
    ],
    imageSrc: "/images/creative-platform.jpg",
    imageAlt: "Creative platform WYSIWYG editor interface showing drag-and-drop content blocks",
  },
  {
    title: "Interactive Ad Systems",
    subtitle: "Rendering & Templates",
    description:
      "Designed and built rendering pipelines for interactive ad formats — from expandable banners to rich media units. Full creative control within strict technical and performance constraints, delivered at scale across publishing partners.",
    impacts: [
      "Scalable template system supporting 20+ format variations",
      "Consistent cross-browser rendering with tight performance budgets",
      "Rich interactivity without compromising load times",
      "Formats adopted across major publishing networks",
    ],
    imageSrc: "/images/ad-formats.jpg",
    imageAlt: "Ad format rendering system showing multiple interactive ad templates",
  },
  {
    title: "UI Systems & Component Libraries",
    subtitle: "Design Infrastructure",
    description:
      "Created reusable component libraries and scalable frontend architecture that unified the product experience. Shared foundations for consistency, accessibility, and faster delivery across the entire engineering team.",
    impacts: [
      "Shared component library consumed across the full product surface",
      "Layout systems, spacing scales, and typography hierarchies",
      "Reduced UI inconsistencies and accelerated feature delivery",
      "Architecture patterns that scaled with team and product growth",
    ],
    imageSrc: "/images/ui-systems.jpg",
    imageAlt: "Design system documentation showing reusable UI components and tokens",
  },
]

export function SystemsSection() {
  return (
    <section id="systems" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Selected Systems
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            Systems built over years, not weeks
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Not a list of short-lived projects. These represent sustained,
            deep work — evolving architecture, expanding capability, and
            keeping complex systems production-ready at scale.
          </p>
        </div>

        {/* Case studies */}
        <div>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} {...study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
