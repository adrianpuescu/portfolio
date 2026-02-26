import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            UI / Product / Creative Technologist
          </span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-4xl text-4xl leading-tight font-light tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Designing, building, and scaling{" "}
          <span className="font-medium text-primary">
            digital systems
          </span>{" "}
          — from idea to production.
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          20+ years across design, development, and creative direction.
          From interactive campaigns to complex platforms used at scale.
        </p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          {[
            { value: "20+", label: "Years in Digital" },
            { value: "10+", label: "Years at Newsroom AI" },
            { value: "UI/UX", label: "Design to Implementation" },
            { value: "AI", label: "Assisted Development" },
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

        {/* Hero video */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          >
            <source src="https://portfolio.webz.ro/videos/hero-test.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#what-i-do"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
