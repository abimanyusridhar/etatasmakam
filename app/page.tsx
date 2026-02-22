"use client"

import { Suspense } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { FeedbackSection } from "@/components/feedback-section"

function LoadingFallback() {
  return <div className="w-full h-screen loading-shimmer" />
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone relative overflow-x-hidden">
      <div className="sacred-overlay pointer-events-none" aria-hidden="true" />

      <div className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <MenuSection />
          <FeedbackSection />
        </Suspense>
      </div>
    </main>
  )
}
