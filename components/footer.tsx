import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* CTA */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Contact
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl text-balance">
              {"Let's"} discuss your next challenge
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Open to conversations about product engineering, UI architecture,
              creative tooling, and opportunities to build something meaningful.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col justify-center gap-6 md:items-end">
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-3 text-lg text-foreground transition-colors hover:text-primary"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              hello@example.com
            </a>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & TypeScript
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
