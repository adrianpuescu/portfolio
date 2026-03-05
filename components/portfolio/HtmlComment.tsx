'use client'

import { useEffect } from 'react'

const COMMENT_LINES = [
  "┌─────────────────────────────────────────────────┐",
  "│ Hi there.                                       │",
  "│                                                 │",
  "│ If you're reading the source, welcome.          │",
  "│                                                 │",
  "│ Cursor + Claude helped me build this -          │",
  "│ mostly with code and refining some of the text. │",
  "│                                                 │",
  "│ Ideas, UX decisions and visuals are mine.       │",
  "│                                                 │",
  "│ Adrian Puescu                                   │",
  "└─────────────────────────────────────────────────┘",
];
const COMMENT_TEXT = COMMENT_LINES.join('\n')

const COMMENT_SIGNATURE = "Hi there"

export function PortfolioHtmlComment() {
  useEffect(() => {
    const consoleMsg = COMMENT_LINES.filter((l) => l.trim()).join('\n')
    console.log('%c' + consoleMsg, 'font-size: 11px; line-height: 1.4; color: #2563eb;')

    // In production the comment is already prepended before DOCTYPE by the postbuild script.
    // Avoid duplicating it inside <html>.
    const first = document.firstChild
    const alreadyInjected =
      first?.nodeType === Node.COMMENT_NODE && (first.textContent?.includes(COMMENT_SIGNATURE) ?? false)

    if (!alreadyInjected) {
      const comment = document.createComment('\n' + COMMENT_TEXT + '\n')
      document.documentElement.prepend(comment)
      return () => comment.remove()
    }
  }, [])
  return null
}
