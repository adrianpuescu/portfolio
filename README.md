# Portfolio

Personal portfolio site — Product Engineer · UI & Interactive Systems. Built with Next.js and deployed as static export to portfolio.webz.ro.

## Tech

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS** (globals) + **portfolio.css** (portfolio design tokens and layout)
- **pnpm** for package management

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

- **`app/`** — `page.tsx` (portfolio page), `layout.tsx`, `globals.css`, `portfolio.css`
- **`components/portfolio/`** — Nav, Hero, VideoSection, WorkSection, BeforeSection, SkillsSection, FocusSection, ContactSection, Footer, Cursor, ScrollReveal

## Deploy

Static export: `pnpm build` → upload contents of `out/` to the host. See [DEPLOY.md](./DEPLOY.md) for cPanel steps.
