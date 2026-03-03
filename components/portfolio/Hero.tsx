export function PortfolioHero({
  onExploreClick,
}: {
  onExploreClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <section id="hero" className="p-hero">
      <div className="p-hero-inner">
        <div className="p-hero-badge">
          <span className="p-hero-badge-dot" />
          Available for new opportunities
        </div>

        <h1 className="p-hero-h1">
          UI / Product /<br />
          <span className="blue">Creative Technologist</span>
          <br />
          <span className="muted">from idea to live</span>
        </h1>

        <p className="p-hero-sub">
          20+ years building digital products, campaigns, and creative tools. 8
          of them architecting the UI of a platform used by global publishers
          and brands to create stories and ads at scale.
        </p>

        <div className="p-hero-actions">
          <a
            className="p-btn-ghost"
            href="https://www.linkedin.com/in/adrianpuescu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-btn-ghost-icon" aria-hidden>↗</span>
            LinkedIn
          </a>
          <a className="p-btn-ghost" href="mailto:web@webz.ro">
            <span className="p-btn-ghost-icon p-btn-ghost-icon-email" aria-hidden>✉</span>
            Email
          </a>
          <a
            className="p-btn-ghost"
            href="https://github.com/adrianpuescu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-btn-ghost-icon" aria-hidden>↗</span>
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
  )
}
