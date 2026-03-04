"use client"

/* Replace BIO_TEXT with your 2–3 sentences. Edit ABOUT_LINKS with your URLs. */
const BIO_TEXT = `
  Outside of work I enjoy exploring ideas through books, audiobooks and documentaries, discovering music, and staying active with running and regular workouts.
  Some of those interests are linked below.
`.trim()

const ABOUT_LINKS = [
  { label: "Goodreads", href: "https://www.goodreads.com/adrian_puescu", icon: "📚" },
  { label: "Music", href: "https://youtube.com/playlist?list=PLBA8BE256831930E2&si=tbGiRAymfuddqfui", icon: "▶" },
]

export function PortfolioAboutSection() {
  return (
    <section id="about" className="p-about">
      <div className="p-about-inner">
        <div className="p-eyebrow" data-n="06 —" style={{ color: "var(--p-text4)", marginBottom: 16 }}>
          About
        </div>
        <h2 className="p-about-h">Beyond the screen</h2>
        <div className="p-about-block">
          <div className="p-about-photo">
            <img src="/images/profile-pic.gif" alt="Adrian Puescu" width={200} height={200} />
          </div>
          <div className="p-about-body">
            <p className="p-about-bio">{BIO_TEXT}</p>
            <div className="p-about-links">
              {ABOUT_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  className="p-about-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-about-link-icon" aria-hidden>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
