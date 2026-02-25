import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Senior UI / Product Engineer
          </span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-4xl text-4xl leading-tight font-light tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Building{" "}
          <span className="font-medium text-primary">
            large-scale creative platforms
          </span>{" "}
          used by brands and publishers worldwide.
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          10+ years crafting UI systems, WYSIWYG editors, and scalable design
          architecture. Combining design thinking with frontend implementation
          to ship products that empower non-technical users.
        </p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "1", label: "Complex Product, Deeply" },
            { value: "UI", label: "Systems & Architecture" },
            { value: "AI", label: "Expanding Into" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-2xl font-semibold text-primary md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#systems"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to systems section"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
