import { LinkedInIcon, EmailIcon, GitHubIcon } from "./SocialIcons"

export function PortfolioHero({
  onExploreClick,
}: {
  onExploreClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  /* Grid cell indices (col, row); right side only so we don’t overlap the hero text */
  const glowCells: [number, number][] = [
    [2, 2],
    [8, 5],
    [14, 3],
    [22, 8],
    [5, 7],
    [18, 10],
    [12, 12],
    [28, 4],
    [10, 13],
    [35, 9],
    [6, 10],
    [42, 6],
  ]

  return (
    <section id="hero" className="p-hero">
      <div
        className="p-hero-grid-glow"
        aria-hidden
      >
        {glowCells.map(([col, row], i) => (
          <div
            key={i}
            className="p-hero-grid-glow-cell"
            style={{ gridColumn: col + 1, gridRow: row + 1 }}
          />
        ))}
      </div>
      <div className="p-hero-inner">
        <div className="p-hero-badge">
          <span className="p-hero-badge-dot" />
          Available for new opportunities
        </div>

        <h1 className="p-hero-h1">
          <span className="muted">Hi, I&apos;m Adrian</span>
          <span className="blue">Product Engineer</span>
          <span className="p-hero-h1-light">UI & Interactive Systems</span>
        </h1>

        <p className="p-hero-sub">
          20+ years building digital products and creative tools - lately UI/UX
          on a platform used by global publishers and brands.
        </p>

        <div className="p-hero-actions">
          <a
            className="p-btn-ghost"
            href="https://www.linkedin.com/in/adrianpuescu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="p-btn-ghost-icon p-btn-ghost-icon-linkedin"
              aria-hidden
            >
              <LinkedInIcon />
            </span>
            LinkedIn
          </a>
          <a
            className="p-btn-ghost"
            href="https://github.com/adrianpuescu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-btn-ghost-icon p-btn-ghost-icon-github" aria-hidden>
              <GitHubIcon />
            </span>
            GitHub
          </a>
        </div>
      </div>

      <div className="p-hero-bottom">
        <div className="p-hero-bottom-inner">
          <div className="p-hero-explore">
            <a
              href="#video-section"
              className="p-explore-btn"
              id="exploreBtn"
              onClick={onExploreClick}
            >
              <span className="p-explore-arrow">↓</span>
              Explore
            </a>
          </div>
          <div className="p-hero-stats">
            <div className="p-stat-item">
              <div className="p-stat-num">
                20<sup>+</sup>
              </div>
              <div className="p-stat-label">Years in Digital</div>
            </div>
            <div className="p-stat-item">
              <div className="p-stat-num">
                8<sup>+</sup>
              </div>
              <div className="p-stat-label">
                Years at{" "}
                <a
                  href="https://studio.nws.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-text-link"
                >
                  NWS Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
