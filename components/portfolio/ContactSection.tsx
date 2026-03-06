import { LinkedInIcon, EmailIcon, GitHubIcon } from "./SocialIcons"

export function PortfolioContactSection() {
  return (
    <section id="contact" className="p-contact">
      <div className="p-contact-inner">
        <div className="p-contact-left">
          <div
            className="p-eyebrow"
            style={{ color: "rgba(148,163,184,.5)", marginBottom: 24 }}
            data-n="06 •"
          >
            Let&apos;s Talk
          </div>
          <h2 className="p-contact-h">
            Got a project
            <br />
            <span>in mind?</span>
          </h2>
        </div>
        <div className="p-contact-right">
          <p className="p-contact-desc">
            Available for UI/UX roles, frontend architecture, and product design
            collaborations - especially in media, publishing, adtech, or any
            product that ships creative tools.
          </p>
          <div className="p-contact-links">
            <a className="p-clink" href="mailto:web@webz.ro">
              <span className="p-clink-icon p-clink-icon-email" aria-hidden><EmailIcon /></span>
              web@webz.ro
            </a>
            <a
              className="p-clink"
              href="https://www.linkedin.com/in/adrianpuescu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-clink-icon p-clink-icon-linkedin" aria-hidden><LinkedInIcon /></span>
              LinkedIn
            </a>
            <a
              className="p-clink"
              href="https://github.com/adrianpuescu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-clink-icon" aria-hidden><GitHubIcon /></span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
