# Deploy to cPanel (portfolio.webz.ro)

Target: subdomain **portfolio.webz.ro**, document root `public_html/portfolio`.

## Automated deploy (recommended)

From the repository root:

```bash
./bin/deploy
```

This script:

1. Runs `pnpm install` and `pnpm build` (static export into `out/`).
2. Copies `out/` to `deploy/` and creates **`deploy.zip`** at the repo root (zip of the deploy folder contents).

**Optional FTP upload:** if a **`.deploy.env`** file exists in the project root, the script sources it and uploads with **`lftp`** using `mirror -R` into `DEPLOY_REMOTE_DIR` (see variables below). Install `lftp` first (e.g. `brew install lftp` on macOS). If `.deploy.env` is missing or `lftp` is not installed, the script still finishes after `deploy.zip` and prints manual upload steps.

### `.deploy.env` variables

| Variable | Description |
|----------|-------------|
| `DEPLOY_FTP_HOST` | FTP host |
| `DEPLOY_FTP_USER` | FTP username |
| `DEPLOY_FTP_PASS` | FTP password |
| `DEPLOY_REMOTE_DIR` | Remote path (e.g. where `index.html` should live) |
| `DEPLOY_FTP_TLS` | Optional; default `1` (FTPS). Set to `0` to disable TLS commands. |

## Manual deploy (without the script)

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Build static export**
   ```bash
   pnpm build
   ```
   (`pnpm run export` is equivalent; both produce `./out/`.)

3. **Upload to cPanel**
   - **Option A:** Run `./bin/deploy`, then upload **`deploy.zip`** from the repo root (or zip `out/` yourself), then extract in File Manager so `index.html` sits under `public_html/portfolio/`.
   - **Option B:** Open cPanel File Manager → `public_html/portfolio/` and upload the **contents** of `./out/` (files inside `out/`, not the `out` folder itself).

4. **Verify**
   - Confirm `index.html` exists in `public_html/portfolio/`.
   - Visit https://portfolio.webz.ro.

## Future updates

- Run `./bin/deploy` again, or run `pnpm build` and re-upload `out/` (or `deploy.zip`) as above.
