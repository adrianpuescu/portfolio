# Portfolio

Personal [portfolio.webz.ro](https://portfolio.webz.ro) — Product Engineer · UI & Interactive Systems. Built with Next.js and deployed as static export to portfolio.webz.ro.

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

To upload only a single file (e.g. one image) via FTP from the terminal: `pnpm run deploy:file -- <path-from-out>` (e.g. `pnpm run deploy:file -- photo.jpg`). Requires `.deploy.env` and `lftp`.
