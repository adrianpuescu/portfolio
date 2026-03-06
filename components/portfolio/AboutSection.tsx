"use client"

/* Replace BIO with your 2–3 sentences. Edit ABOUT_LINKS with your URLs. */
const BIO = (
  <>
    Outside of work I explore ideas through books, audiobooks and documentaries, discover new music, and stay active with running and regular workouts. I have a soft spot for sci-fi, history, and live music. Originally from Romania, now based in Spain.
  </>
);

const ABOUT_LINKS = [
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/adrian_puescu",
    icon: "📚",
  },
  {
    label: "Music",
    href: "https://music.youtube.com/playlist?list=PLBA8BE256831930E2&si=ERes2YGdBtfmYBSr",
    icon: "🎵",
  },
  {
    label: "Running",
    href: "https://youtu.be/P4N18REA6Wg",
    icon: "🏃",
  },
];

export function PortfolioAboutSection() {
  return (
    <section id="about" className="p-about">
      <div className="p-about-inner">
        <div className="p-eyebrow" data-n="06 •" style={{ marginBottom: 16 }}>
          About
        </div>
        <h2 className="p-about-h">Beyond the screen</h2>
        <div className="p-about-block">
          <div className="p-about-photo">
            <img
              src="/images/profile-pics-blueish-2-optimised.gif"
              alt="Adrian Puescu"
              width={200}
              height={200}
            />
          </div>
          <div className="p-about-body">
            <p className="p-about-bio">{BIO}</p>
            <div className="p-about-links">
              {ABOUT_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  className="p-about-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-about-link-icon" aria-hidden>
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
