import { CaseStudyCard } from "./case-study-card"

const caseStudies = [
  {
    title: "Studio Platform",
    subtitle: "SaaS Application Shell",
    description:
      "The full product environment surrounding the editor — Dashboard, Projects, Assets library, Reports, Settings, Account management. I owned the UI/UX planning and front-end implementation for the entire platform surface, creating a coherent SaaS experience that supports complex creative workflows.",
    impacts: [
      "Used by Forbes, USA Today, The Guardian, Yahoo, VICE, and more",
      "Content created for brands including Google, Meta, Disney, Netflix, H&M, Adidas",
      "Complete SaaS product surface: navigation, CRUD flows, settings, account",
      "Information architecture for complex multi-project workflows",
    ],
    imageSrc: "/images/studio-platform.jpg",
    imageAlt: "Studio platform dashboard showing projects, assets, and navigation",
  },
  {
    title: "Studio Editor",
    subtitle: "WYSIWYG Creative Environment",
    description:
      "The core creative tool — a sophisticated WYSIWYG editor for building interactive stories, ads, presentations, and pages. Canvas-based editing, drag-drop blocks, real-time preview, toolbar systems, panel layouts. A unique, self-contained environment I shaped and evolved over 10+ years of continuous development.",
    impacts: [
      "Drag-and-drop editing with multi-block layouts",
      "Real-time preview across devices and formats",
      "Template systems for batch content generation",
      "Non-technical users producing content independently",
    ],
    imageSrc: "/images/studio-editor.jpg",
    imageAlt: "Studio WYSIWYG editor showing canvas, toolbar, and editing panels",
  },
  {
    title: "Content Output",
    subtitle: "Stories, Ads & Published Pages",
    description:
      "The platform's primary output: interactive stories, rich media ads, visual presentations, and landing pages — all HTML-based, published and distributed across partner networks. I developed the HTML structure and rendering logic for ad formats (including AMP with strict restrictions), built client showcase pages for Sales, and created systems for template-driven batch content generation.",
    impacts: [
      "End-to-end pipeline from editor to live online content",
      "Interactive stories and rich media ads as primary output formats",
      "AMP-compliant formats with strict technical constraints",
      "Dataset-driven batch generation for campaigns at scale",
    ],
    imageSrc: "/images/content-output.jpg",
    imageAlt: "Published content showing interactive stories and ad formats",
  },
  {
    title: "UI Systems & Shared Libraries",
    subtitle: "Design Infrastructure",
    description:
      "Created a shared CSS library (PostCSS-based) reusable across projects, along with component patterns and layout systems that unified the product experience. Owned the visual consistency, spacing hierarchies, and UI architecture that kept the platform coherent as it scaled.",
    impacts: [
      "Shared CSS library consumed across multiple products",
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
