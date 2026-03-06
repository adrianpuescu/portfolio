const ICON_SIZE = 20

const FocusIcons = {
  react_typescript: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <g transform="translate(12 12) scale(1.1) translate(-12 -12)">
        {/* nucleus */}
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />

        {/* orbit 1 */}
        <ellipse cx="12" cy="12" rx="8.5" ry="3.5" />

        {/* orbit 2 */}
        <ellipse
          cx="12"
          cy="12"
          rx="8.5"
          ry="3.5"
          transform="rotate(60 12 12)"
        />

        {/* orbit 3 */}
        <ellipse
          cx="12"
          cy="12"
          rx="8.5"
          ry="3.5"
          transform="rotate(-60 12 12)"
        />
      </g>
    </svg>
  ),
  next_js: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <g transform="translate(12 12) scale(1.16) translate(-12 -12)">
        {/* rounded square */}
        <rect x="4.5" y="4.5" width="15" height="15" rx="3.2" />

        {/* N */}
        <path d="M9 16V8" />
        <path d="M9 8l6 8" />
        <path d="M15 16V8" />
      </g>
    </svg>
  ),
  tailwind_css: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* top wave */}
      <path d="M5 9.2c1.6-2 3.6-3 6-3 2.6 0 4 1.2 5 2.3.9 1 1.9 1.7 3 1.7 1.5 0 2.7-.7 4-2.2" />
      {/* bottom wave */}
      <path d="M5 14.8c1.6-2 3.6-3 6-3 2.6 0 4 1.2 5 2.3.9 1 1.9 1.7 3 1.7 1.5 0 2.7-.7 4-2.2" />
    </svg>
  ),
  rive_animation: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* top bar + hook */}
      <path d="M6 6h10.2c2.3 0 4.2 1.9 4.2 4.2S18.5 14.4 16.2 14.4H10" />
      {/* middle bar */}
      <path d="M6 14.4h6.5" />
      {/* diagonal leg */}
      <path d="M12 14.4l6 7.6" />
    </svg>
  ),
  ai_assisted_development: (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <g transform="translate(12 12) scale(1.25) translate(-12 -12)">
        {/* antenna */}
        <path d="M12 3.5v2" />

        {/* head */}
        <rect x="6" y="7" width="12" height="9" rx="2.5" />

        {/* eyes */}
        <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
        <circle cx="14.5" cy="11.5" r="1" fill="currentColor" />

        {/* sides */}
        <path d="M4.5 10.5v2" />
        <path d="M19.5 10.5v2" />

        {/* base */}
        <path d="M9 16v2.5" />
        <path d="M15 16v2.5" />
      </g>
    </svg>
  ),
} as const;

const ROWS = [
  {
    name: "React & TypeScript",
    icon: "react_typescript" as const,
    desc: "Modern component patterns, hooks, and type-safe frontend development. Building from the ground up with fresh eyes and deep UI instincts.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Next.js",
    icon: "next_js" as const,
    desc: "App router, server components, SSR/SSG - building full-stack React apps with proper architecture and routing patterns.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind_css" as const,
    desc: "Utility-first CSS at scale. Familiar territory conceptually - years of PostCSS component systems translate naturally.",
    badge: "Learning",
    badgeClass: "p-fb-learn",
  },
  {
    name: "Rive Animation",
    icon: "rive_animation" as const,
    desc: "Exploring interactive animation for UI and ad formats - building a PoC editor, leveraging prior ad format knowledge.",
    badge: "Exploring",
    badgeClass: "p-fb-explore",
  },
  {
    name: "AI-assisted Development",
    icon: "ai_assisted_development" as const,
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
          After years working deeply in one product, I&apos;m actively learning
          and building with modern frameworks and AI-assisted workflows -
          bringing years of product intuition to fresh tooling.
        </p>
      </div>
      <div className="p-focus-list p-reveal p-rd1">
        {ROWS.map((row) => (
          <div key={row.name} className="p-focus-row">
            <div className="p-focus-row-left">
              <span className="p-focus-row-icon" aria-hidden>
                {FocusIcons[row.icon]}
              </span>
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
