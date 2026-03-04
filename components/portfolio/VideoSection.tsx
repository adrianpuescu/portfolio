"use client"

import { useRef, useState, useEffect, useImperativeHandle, forwardRef, useCallback } from "react"

const VIDEO_SRC = "/video/hero-video-4-optimised.mp4"

export type VideoSectionRef = { startWithSound: () => void }

export const PortfolioVideoSection = forwardRef<VideoSectionRef>(function PortfolioVideoSection(_, ref) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [overlayHidden, setOverlayHidden] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)

  const startVideo = useCallback((withSound: boolean) => {
    setStarted(true)
    setPlaying(true)
    const v = videoRef.current
    if (v) {
      v.muted = !withSound
      v.play().catch(() => {
        v.muted = true
      })
    }
    setMuted(!withSound)
    setOverlayHidden(true)
    setEnded(false)
  }, [])

  const startWithSound = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    setOverlayHidden(true)
    setStarted(true)
    setPlaying(true)
    v.muted = false
    setMuted(false)
    v.play().catch(() => {
      v.muted = true
      setMuted(true)
    })
    setEnded(false)
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setOverlayHidden(false)
    } else {
      setOverlayHidden(true)
      v.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  // Pause when >50% outside viewport; resume muted only if we had paused (don't override Explore unmute)
  const pausedBecauseOutOfViewRef = useRef(false)
  useEffect(() => {
    const el = document.getElementById("video-section")
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!started) return
          if (e.intersectionRatio < 0.5) {
            if (playing) {
              videoRef.current?.pause()
              pausedBecauseOutOfViewRef.current = true
            }
          } else {
            // Revenit în view: repornim de unde a rămas, dar muted
            if (pausedBecauseOutOfViewRef.current) {
              videoRef.current!.muted = true
              videoRef.current?.play().catch(() => {})
              setMuted(true)
              setPlaying(true)
              setOverlayHidden(true)
              pausedBecauseOutOfViewRef.current = false
            }
          }
        })
      },
      { threshold: [0, 0.5] }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started, playing])

  useImperativeHandle(ref, () => ({ startWithSound }), [startWithSound])

  useEffect(() => {
    const onStarted = () => {
      setOverlayHidden(true)
      setStarted(true)
      setPlaying(true)
      setMuted(false)
    }
    window.addEventListener("portfolio-video-started", onStarted)
    return () => window.removeEventListener("portfolio-video-started", onStarted)
  }, [])

  return (
    <section id="video-section" className="p-video-section">
      <div className="p-video-eyebrow">
        The last 8 years of product work in 60 seconds
      </div>
      <div className="p-video-frame">
        <div className="p-video-wrap">
          <video
            ref={videoRef}
            id="heroVideo"
            muted={muted}
            loop={muted}
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => {
              setPlaying(false)
              setOverlayHidden(false)
            }}
            onEnded={() => {
              setPlaying(false)
              setOverlayHidden(false)
              setEnded(true)
            }}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          <div
            className={`p-video-overlay ${overlayHidden ? "hidden" : ""}`}
            style={overlayHidden ? { pointerEvents: "none" } : undefined}
          >
            {ended ? (
              <div className="p-replay-wrap">
                <button
                  type="button"
                  className="p-replay-btn"
                  onClick={() => {
                    setEnded(false)
                    const v = videoRef.current
                    if (v) {
                      v.currentTime = 0
                      v.muted = false
                      setMuted(false)
                      setOverlayHidden(true)
                      setPlaying(true)
                      v.play().catch(() => {
                        v.muted = true
                        setMuted(true)
                      })
                    }
                  }}
                  title="Replay"
                  aria-label="Replay video"
                >
                  <svg viewBox="0 0 24 24" width={20} height={20}>
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                  </svg>
                  REPLAY
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="p-play-btn"
                onClick={() => {
                  document
                    .getElementById("video-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                  if (started) {
                    setOverlayHidden(true)
                    setPlaying(true)
                    videoRef.current?.play().catch(() => {})
                  } else {
                    startVideo(true)
                  }
                }}
                title="Play"
                aria-label="Play video"
              >
                <svg viewBox="0 0 24 24" width={28} height={28}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>
          {playing && (
          <div className="p-video-controls-bar">
            <button
              type="button"
              className="p-vc-btn"
              onClick={togglePlay}
              title={playing ? "Pause" : "Play"}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="p-vc-btn"
              onClick={toggleMute}
              title={muted ? "Unmute" : "Mute"}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18.27L19.73 20 21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              )}
            </button>
          </div>
          )}
        </div>
      </div>
    </section>
  )
})
