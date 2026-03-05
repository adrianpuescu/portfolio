const ROWS = [
  {
    name: "React & TypeScript",
    desc: "Modern component patterns, hooks, and type-safe frontend development. Building from the ground up with fresh eyes and deep UI instincts.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Next.js",
    desc: "App router, server components, SSR/SSG - building full-stack React apps with proper architecture and routing patterns.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first CSS at scale. Familiar territory conceptually - years of PostCSS component systems translate naturally.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Rive Animation",
    desc: "Exploring interactive animation for UI and ad formats - building a PoC editor, leveraging prior ad format knowledge.",
    badge: "Exploring",
    badgeClass: "p-fb-explore",
  },
  {
    name: "AI-assisted Development",
    desc: "Claude, Cursor - already in active use. This portfolio was built with this stack.",
    badge: "Active",
    badgeClass: "p-fb-active",
  },
]

export function PortfolioFocusSection() {
  return (
    <section
      id="focus"
      style={{
        background: "var(--p-bg)",
        borderTop: "1px solid var(--p-border)",
      }}
    >
      <div className="p-eyebrow" data-n="04 •">
        Current Focus
      </div>
      <div className="p-focus-head p-reveal">
        <h2 className="p-focus-title">
          Expanding
          <br />
          the toolkit
        </h2>
        <p className="p-focus-intro">
          After years deep in one product, I&apos;m actively learning and
          building with modern frameworks and AI-assisted workflows - bringing
          years of product intuition to fresh tooling.
        </p>
      </div>
      <div className="p-focus-list p-reveal p-rd1">
        {ROWS.map((row) => (
          <div key={row.name} className="p-focus-row">
            <div className="p-focus-row-left">
              <span className="p-focus-row-name">{row.name}</span>
              <span className={`p-fbadge ${row.badgeClass}`}>{row.badge}</span>
            </div>
            <div className="p-focus-row-desc">{row.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
