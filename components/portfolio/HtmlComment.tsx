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

export function PortfolioHtmlComment() {
  useEffect(() => {
    const comment = document.createComment('\n' + COMMENT_TEXT + '\n')
    document.documentElement.prepend(comment)
    const consoleMsg = COMMENT_LINES.filter(Boolean).join('\n')
    console.log('%c' + consoleMsg, 'font-size: 14px; line-height: 1.6; color: #2563eb;')
    return () => comment.remove()
  }, [])
  return null
}
