import { ArrowUpRight } from "lucide-react"

const highlights = [
  "Online advertising campaigns for major Romanian brands",
  "Rich media and interactive ad formats",
  "Flash animation and motion design",
  "HTML/CSS implementation and graphics",
]

export function EarlierWorkSection() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-muted-foreground" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Before NWS Studio
              </span>
            </div>
            <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground md:text-2xl">
              Years of digital work before the platform
            </h3>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Before transitioning to product work, I spent years in online advertising and 
              interactive campaigns — creating graphics, animations, and rich media for agencies 
              and brands. That foundation in visual design and technical constraints shaped how 
              I approach product UI today.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowUpRight size={12} className="mt-1.5 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
