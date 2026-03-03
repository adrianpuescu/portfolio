const ITEMS = [
  {
    title: "Online Advertising Campaigns",
    desc: "Digital campaigns for major local and international brands — display advertising, landing pages, and interactive formats across multiple agencies.",
  },
  {
    title: "Rich Media & Interactive Ads",
    desc: "Complex interactive ad formats requiring tight technical constraints, cross-device rendering, and creative ingenuity within strict boundaries.",
  },
  {
    title: "HTML/CSS & Graphics",
    desc: "Frontend implementation and graphic design work across multiple clients — the hands-on foundation for everything that followed.",
  },
]

export function PortfolioBeforeSection() {
  return (
    <section
      id="before"
      style={{ background: "var(--p-bg)", borderTop: "1px solid var(--p-border)" }}
    >
      <div className="p-eyebrow" data-n="02 —">
        Background
      </div>
      <div className="p-before-grid">
        <div className="p-reveal">
          <div className="p-before-title">
            Before
            <br />
            NWS Studio
          </div>
          <div className="p-before-sub">Years of digital work before the platform</div>
          <p className="p-before-intro">
            Before transitioning to product work, I spent years in online
            advertising and interactive campaigns — creating graphics, animations,
            and rich media for agencies and brands. That foundation in visual
            design and technical constraints shaped how I approach product UI today.
          </p>
        </div>
        <div className="p-before-items p-reveal p-rd1">
          {ITEMS.map((item) => (
            <div key={item.title} className="p-before-item">
              <div>
                <div className="p-before-t">{item.title}</div>
                <div className="p-before-d">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
