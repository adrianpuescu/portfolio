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

**Recommended:** run `./bin/deploy` from the repo root. It installs dependencies, builds the static export, writes `deploy/` and `deploy.zip`, and—if [`.deploy.env`](./DEPLOY.md) is configured—uploads via `lftp`. Without `.deploy.env`, it stops after creating `deploy.zip` with manual upload instructions.

For manual cPanel steps, single-file FTP uploads, and env variable reference, see [DEPLOY.md](./DEPLOY.md).

To upload only one built file (e.g. an image) via FTP: `pnpm run deploy:file -- <path-from-out>` (e.g. `pnpm run deploy:file -- photo.jpg`). Requires `.deploy.env` and `lftp`.
