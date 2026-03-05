/**
 * Prepends the "hi there" HTML comment before DOCTYPE in all built HTML files.
 * Run after `next build` (static export) so view-source shows the comment first.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'

const COMMENT_LINES = [
  "👋 Hi there.",
  "",
  "If you're reading the source, welcome.",
  "",
  "Cursor + Claude helped me build this — mostly with code and refining some of the text.",
  "",
  "Ideas, UX decisions and visuals are mine.",
  "",
  "Adrian Puescu",
]
const COMMENT = `<!--\n${COMMENT_LINES.join('\n')}\n-->\n`

const outDir = join(process.cwd(), 'out')
if (!existsSync(outDir)) {
  console.warn('scripts/inject-html-comment.mjs: out/ not found, skipping.')
  process.exit(0)
}

function getHtmlFiles(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) getHtmlFiles(path, files)
    else if (name.endsWith('.html')) files.push(path)
  }
  return files
}

const htmlFiles = getHtmlFiles(outDir)
for (const file of htmlFiles) {
  const content = readFileSync(file, 'utf8')
  if (content.startsWith('<!--')) continue // already has comment
  writeFileSync(file, COMMENT + content, 'utf8')
}
console.log(`Injected HTML comment into ${htmlFiles.length} file(s).`)
