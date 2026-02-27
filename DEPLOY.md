# Deploy to cPanel (portfolio.webz.ro)

Target: subdomain **portfolio.webz.ro**, document root `public_html/portfolio`.

## Steps

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Build static export**
   ```bash
   pnpm build
   ```
   (Or `pnpm run export` — both produce the same `out/` directory.)

3. **Upload to cPanel**
   - Open cPanel File Manager and go to `public_html/portfolio/`.
   - Upload the **contents** of `./out/` (all files and folders inside `out/`, not the `out` folder itself) into `public_html/portfolio/`.

4. **Verify**
   - Confirm `index.html` exists in `public_html/portfolio/`.
   - Visit the site (e.g. https://portfolio.webz.ro) to confirm it loads.

## Future updates

- Run `pnpm build` again.
- Re-upload the contents of `out/` to `public_html/portfolio/` (overwrite existing files as needed).
