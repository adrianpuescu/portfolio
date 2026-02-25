import { CaseStudyCard } from "./case-study-card"

const caseStudies = [
  {
    title: "Creative Platform",
    subtitle: "Core Product",
    description:
      "Architected and maintained the primary creative suite — a complex, multi-layered WYSIWYG editor used by major brands and publishers to build rich content at scale. Focused on clarity, reliability, and enabling non-technical users to create professional layouts.",
    impacts: [
      "Built and evolved the platform over 10+ years of continuous development",
      "Designed drag-and-drop editing flows for complex multi-block layouts",
      "Enabled non-technical users to create production-ready content independently",
      "Implemented real-time preview and responsive rendering across devices",
    ],
    imageSrc: "/images/creative-platform.jpg",
    imageAlt: "Creative platform WYSIWYG editor interface showing drag-and-drop content blocks",
  },
  {
    title: "Ad Formats & Rendering",
    subtitle: "Interactive Systems",
    description:
      "Designed and built a rendering pipeline for interactive ad formats — from expandable banners to rich media units. Focused on cross-browser compatibility, performance budgets, and giving designers full creative control within strict technical constraints.",
    impacts: [
      "Created a scalable template system supporting 20+ ad format variations",
      "Built rendering engine achieving consistent cross-browser output",
      "Reduced ad load times while maintaining rich interactivity",
      "Delivered formats adopted by major publishing partners",
    ],
    imageSrc: "/images/ad-formats.jpg",
    imageAlt: "Ad format rendering system showing multiple interactive ad templates",
  },
  {
    title: "UI Systems & Architecture",
    subtitle: "Design Infrastructure",
    description:
      "Created reusable UI component libraries and scalable front-end architecture that unified the product experience. Focused on consistency, accessibility, and empowering the team to build faster without sacrificing quality.",
    impacts: [
      "Established a shared component library used across the entire product",
      "Defined layout systems, spacing scales, and typography hierarchies",
      "Reduced UI inconsistencies and accelerated feature delivery",
      "Built architecture patterns that scaled with team and product growth",
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
              Systems, Not Projects
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
            A decade of building, refining, and scaling
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Rather than a list of short-lived projects, this work represents
            deep, sustained commitment to a single complex product — evolving
            its architecture, expanding its capabilities, and keeping it
            production-ready at scale.
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
