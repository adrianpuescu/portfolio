"use client"

import { useRef } from "react"
import { PortfolioNav } from "@/components/portfolio/Nav"
import { PortfolioHero } from "@/components/portfolio/Hero"
import { PortfolioVideoSection, type VideoSectionRef } from "@/components/portfolio/VideoSection"
import { PortfolioMarquee } from "@/components/portfolio/Marquee"
import { PortfolioWorkSection } from "@/components/portfolio/WorkSection"
import { PortfolioBeforeSection } from "@/components/portfolio/BeforeSection"
import { PortfolioSkillsSection } from "@/components/portfolio/SkillsSection"
import { PortfolioFocusSection } from "@/components/portfolio/FocusSection"
import { PortfolioContactSection } from "@/components/portfolio/ContactSection"
import { PortfolioFooter } from "@/components/portfolio/Footer"
import { PortfolioScrollReveal } from "@/components/portfolio/ScrollReveal"
import { PortfolioCursor } from "@/components/portfolio/Cursor"

export default function Page() {
  const videoSectionRef = useRef<VideoSectionRef>(null)

  const onExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Exact ca în HTML: scroll smooth, după 700ms currentTime=0 + startVideo(true) echivalent
    document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => {
      const heroVideo = document.getElementById("heroVideo") as HTMLVideoElement | null
      if (heroVideo) {
        heroVideo.currentTime = 0
        heroVideo.muted = false
        heroVideo.play().catch(() => {
          heroVideo.muted = true
        })
        window.dispatchEvent(new CustomEvent("portfolio-video-started"))
      }
    }, 700)
  }

  return (
    <div className="portfolio-page use-custom-cursor">
      <PortfolioCursor />
      <PortfolioScrollReveal />
      <PortfolioNav />
      <main>
        <PortfolioHero onExploreClick={onExploreClick} />
        <PortfolioVideoSection ref={videoSectionRef} />
        <PortfolioMarquee />
        <PortfolioWorkSection />
        <PortfolioBeforeSection />
        <PortfolioSkillsSection />
        <PortfolioFocusSection />
        <PortfolioContactSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}
