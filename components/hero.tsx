"use client"

import { ArrowDown, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      setHasStarted(true)
    }
  }

  const handlePauseClick = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  // Auto-play when scrolling to video via Explore link
  const hasAutoPlayed = useRef(false)
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#hero-video" && videoRef.current && !hasAutoPlayed.current) {
        hasAutoPlayed.current = true
        setTimeout(() => {
          videoRef.current?.play()
          setIsPlaying(true)
          setHasStarted(true)
        }, 300) // Small delay for smooth scroll to complete
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Pause video when 75% out of viewport
  useEffect(() => {
    const video = videoRef.current
    const container = videoContainerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If less than 25% visible and video is playing, pause it
          if (entry.intersectionRatio < 0.25 && !video.paused) {
            video.pause()
          }
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-32 pb-0">
      {/* Hero content */}
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
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

        {/* Scroll indicator - links to video */}
        <div className="mt-16 flex justify-center">
          <a
            href="#hero-video"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to video"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Hero video - full width with primary background */}
      <div id="hero-video" className="mt-16 w-full bg-primary py-8 scroll-mt-20">
        {/* Video label */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-4">
          <span className="font-mono text-xs tracking-widest text-primary-foreground/70 uppercase">
            10+ years of work in 60 seconds
          </span>
        </div>
        <div 
          ref={videoContainerRef}
          className="group relative mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden"
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full"
          >
            <source src="https://portfolio.webz.ro/videos/hero-test.mp4" type="video/mp4" />
          </video>
          
          {/* Initial play button overlay - before video has started */}
          {!hasStarted && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-foreground/5 transition-colors hover:bg-foreground/10"
              aria-label="Play video"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary shadow-lg transition-transform hover:scale-105">
                <Play size={24} className="ml-1" />
              </div>
            </button>
          )}

          {/* Hover controls - after video has started */}
          {hasStarted && (
            <div className="absolute bottom-4 left-10 right-10 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              {/* Play/Pause button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  isPlaying ? handlePauseClick() : handlePlayClick()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform hover:scale-105 pointer-events-auto"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>

              {/* Mute/Unmute button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform hover:scale-105 pointer-events-auto"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
