"use client"

import React from "react"

function GoodreadsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.5 6.5c2-1 4-1 6 0v11c-2-1-4-1-6 0z" />
      <path d="M20.5 6.5c-2-1-4-1-6 0v11c2-1 4-1 6 0z" />
      <line x1="12" y1="6.5" x2="12" y2="17.5" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 5v10" />
      <circle cx="8" cy="16" r="2.2" />
      <path d="M10 5l7 2v3l-7-2" />
    </svg>
  );
}

function RunningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="15" cy="5.5" r="1.8" />
      <path d="M12 10l3-2 2 3" />
      <path d="M12 10l-3 2" />
      <path d="M14 13l-2 4" />
      <path d="M14 13l4 2" />
    </svg>
  );
}

const ABOUT_ICONS: Record<string, () => React.ReactElement> = {
  goodreads: GoodreadsIcon,
  music: MusicIcon,
  running: RunningIcon,
};

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
    icon: "goodreads",
  },
  {
    label: "Music",
    href: "https://music.youtube.com/playlist?list=PLBA8BE256831930E2&si=ERes2YGdBtfmYBSr",
    icon: "music",
  },
  {
    label: "Running",
    href: "https://youtu.be/P4N18REA6Wg",
    icon: "running",
  },
];

export function PortfolioAboutSection() {
  return (
    <section id="about" className="p-about">
      <div className="p-about-inner">
        <div className="p-eyebrow" data-n="06 •" style={{ marginBottom: 16 }}>
          About
        </div>
        <h2 className="p-about-h">
          Beyond
          <br />
          the screen
        </h2>
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
              {ABOUT_LINKS.map(({ label, href, icon }) => {
                const Icon = ABOUT_ICONS[icon];
                return (
                  <a
                    key={label}
                    className="p-about-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="p-about-link-icon" aria-hidden>
                      {Icon ? <Icon /> : null}
                    </span>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
