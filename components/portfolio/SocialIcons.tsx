const DEFAULT_SIZE = 18

const svgProps = {
  viewBox: "0 0 24 24" as const,
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}

export function LinkedInIcon({ size = DEFAULT_SIZE }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

export function EmailIcon({ size = DEFAULT_SIZE }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M5.5 8l6.5 5 6.5-5" />
    </svg>
  )
}

export function GitHubIcon({ size = DEFAULT_SIZE }: { size?: number }) {
  return (
    <svg width={size} height={size} {...svgProps}>
      <path d="M9 18c-3 1-5-1.5-5-5.5A6 6 0 0 1 10 6c.7 0 1.3.1 2 .3.7-.2 1.3-.3 2-.3a6 6 0 0 1 6 6.5c0 4-2 6.5-5 5.5" />
      <path d="M9 8.5L7.5 6.5" />
      <path d="M15 8.5l1.5-2" />
      <path d="M10 18v-3" />
      <path d="M14 18v-3" />
    </svg>
  )
}
