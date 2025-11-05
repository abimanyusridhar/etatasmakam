"use client"

import { Suspense } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { FeedbackForm } from "@/components/feedback-form"
import { Footer } from "@/components/footer"

function LoadingFallback() {
  return <div className="w-full h-screen loading-shimmer" />
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-brown relative">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-brown/95 to-stone-brown pointer-events-none" />

      <div className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FeedbackForm />
          <Footer />
        </Suspense>
      </div>
    </main>
  )
}
