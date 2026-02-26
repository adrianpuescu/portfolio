import { CaseStudyCard } from "./case-study-card"

const caseStudies = [
  {
    title: "WYSIWYG Editor / Creative Platform",
    subtitle: "Core System",
    description:
      "Architected and evolved a complex WYSIWYG editor at the heart of a creative platform — primarily used to produce interactive stories, ads, and presentations. Over a decade of continuous work: editing flows, rendering logic, template systems, and user-facing tooling, all built so non-technical teams could create production-ready content independently.",
    impacts: [
      "10+ years of sustained development on a single complex product",
      "Primary output: interactive stories, rich media ads, and visual presentations",
      "Drag-and-drop editing with multi-block layouts and real-time preview",
      "Non-technical users producing and publishing content at scale",
    ],
    imageSrc: "/images/creative-platform.jpg",
    imageAlt: "Creative platform WYSIWYG editor interface for building stories and ads",
  },
  {
    title: "Stories, Ads & Online Output",
    subtitle: "Content Delivery Pipeline",
    description:
      "The editor's output was a production pipeline for online content — primarily interactive stories and ad units, but also pages and presentations. Content was published, embedded, and distributed across partner networks. Template-driven, format-aware, and optimized for cross-browser delivery under strict performance constraints.",
    impacts: [
      "End-to-end pipeline from editor to published online content",
      "Interactive stories and rich media ads as primary output formats",
      "Template system enabling reuse across formats and campaigns",
      "Cross-browser, cross-device delivery at scale across partner networks",
    ],
    imageSrc: "/images/ad-formats.jpg",
    imageAlt: "Content delivery pipeline showing interactive stories and ad formats",
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
