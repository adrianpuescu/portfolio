const ITEMS = [
  "WYSIWYG Editor",
  "AMP Web Stories",
  "Ad Creative Systems",
  "Campaign Reporting",
  "Design Systems",
  "HTML / CSS / JS",
  "PostCSS Architecture",
  "Template Engines",
  "Dataset-driven Creatives",
  "White-label Platforms",
  "UI Architecture",
  "Interactive Campaigns",
]

export function PortfolioMarquee() {
  return (
    <div className="p-marquee-section">
      <div className="p-marquee-track">
        {[...ITEMS, ...ITEMS].map((label, i) => (
          <div key={i} className="p-marquee-item">
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
