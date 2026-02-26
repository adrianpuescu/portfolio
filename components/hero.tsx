"use client"

import { ArrowDown, Play } from "lucide-react"
import { useRef, useState } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

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

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#what-i-do"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to next section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Hero video - full width with contrast background */}
      <div className="mt-16 bg-secondary py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="group relative overflow-hidden">
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              onEnded={() => setIsPlaying(false)}
              className="w-full"
            >
              <source src="https://portfolio.webz.ro/videos/hero-test.mp4" type="video/mp4" />
            </video>
            
            {/* Play button overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-foreground/5 transition-colors hover:bg-foreground/10"
                aria-label="Play video"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
                  <Play size={24} className="ml-1" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
