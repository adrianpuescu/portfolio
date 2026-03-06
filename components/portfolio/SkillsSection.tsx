"use client"

import { useState } from "react"

const GROUPS = [
  {
    name: "UI/UX & Product Design",
    tags: [
      "Interface Architecture",
      "Component Systems",
      "WYSIWYG Editors",
      "User Flows",
      "Responsive Design",
      "Interaction Design",
      "Feature Planning",
    ],
  },
  {
    name: "Frontend Development",
    tags: [
      "HTML5",
      "CSS / PostCSS",
      "JavaScript",
      "SVG",
      "Animation & Motion",
      "Ad Format Development",
      "AMP / Web Stories",
    ],
  },
  {
    name: "Platform & Systems",
    tags: [
      "Design Systems",
      "Template Engines",
      "Shared CSS Libraries",
      "Multi-tenant Platforms",
      "White-label SaaS",
    ],
  },
  {
    name: "Production & Tooling",
    tags: [
      "Git Workflows",
      "Node-based Tooling",
      "Package Ecosystems (npm / pnpm)",
      "Build Pipelines",
      "AWS Deployment (S3 / CloudFront)",
    ],
  },
  {
    name: "Creative & Advertising",
    tags: [
      "Rich Media Formats",
      "Display Advertising",
      "Interactive Campaigns",
      "Landing Pages",
      "Creative Asset Production",
      "Image & Video Editing",
    ],
  },
  {
    name: "AI-assisted Workflows",
    tags: ["Claude", "Cursor", "Rapid Prototyping", "POC Development"],
  },
];

export function PortfolioSkillsSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <section
      id="skills"
      style={{
        background: "var(--p-white)",
        borderTop: "1px solid var(--p-border)",
      }}
    >
      <div className="p-eyebrow" data-n="03 •">
        Toolkit
      </div>
      <div className="p-skills-layout">
        <div className="p-skills-sticky p-reveal">
          <h2 className="p-skills-title">
            Craft &<br />
            Capabilities
          </h2>
          <p className="p-skills-note">
            Core strengths built over 20+ years of real production work - from
            pixel-perfect HTML to complex UI architecture and modern AI-assisted
            workflows.
          </p>
        </div>
        <div className="p-reveal p-rd1">
          {GROUPS.map((group, i) => (
            <div
              key={group.name}
              className={`p-skill-group ${openIndex === i ? "open" : ""}`}
            >
              <div
                className="p-skill-gh"
                onClick={() => toggle(i)}
                onKeyDown={(e) => e.key === "Enter" && toggle(i)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === i}
              >
                <span className="p-skill-gn">{group.name}</span>
                <span className="p-skill-tog">+</span>
              </div>
              <div className="p-skill-body">
                <div className="p-skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="p-stag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
