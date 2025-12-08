"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MapPin, Check, AlertCircle } from "lucide-react"

export function Hero() {
  const [zipCode, setZipCode] = useState("")
  const [deliveryStatus, setDeliveryStatus] = useState<"idle" | "checking" | "available" | "unavailable">("idle")

  // Mock delivery zones - Replace with actual API call
  const deliveryZones = ["560001", "560002", "560003", "560004", "560005", "560034", "560037"]

  const handleCheckDelivery = () => {
    if (!zipCode.trim()) {
      setDeliveryStatus("idle")
      return
    }

    setDeliveryStatus("checking")
    
    // Simulate API call
    setTimeout(() => {
      const isAvailable = deliveryZones.includes(zipCode.trim())
      setDeliveryStatus(isAvailable ? "available" : "unavailable")
    }, 600)
  }

  return (
    <section className="relative w-full pt-20 overflow-hidden">
      {/* Background Image with Overlay - Optimized */}
      <div className="relative w-full h-80 sm:h-[450px] md:h-[550px] lg:h-[700px]">
        <Image
          src="/biryani-hero.jpg"
          alt="Signature Biryani - ETAT ASMAKAM"
          fill
          priority
          quality={80}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          loading="eager"
          decoding="async"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-brown/60 via-stone-brown/50 to-stone-brown/80"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl text-center space-y-4 sm:space-y-6 md:space-y-8 w-full">
            
            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blessed-yellow leading-tight">
                Authentic Karnataka Biryani
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-sacred-white/90 font-medium">
                Aromatic spices, slow-cooked perfection
              </p>
            </div>

            {/* Delivery Checker Widget - Mobile Optimized */}
            <div className="bg-stone-brown/90 backdrop-blur-md border border-golden-beige/30 rounded-lg sm:rounded-xl p-4 sm:p-6 max-w-md mx-auto w-full shadow-2xl">
              <label className="flex items-center gap-2 text-golden-beige font-semibold mb-3 text-xs sm:text-sm">
                <MapPin size={16} className="flex-shrink-0" />
                Check Delivery Availability
              </label>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter Pin Code"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value)
                    setDeliveryStatus("idle")
                  }}
                  maxLength={6}
                  className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300 text-sm"
                />
                <button
                  onClick={handleCheckDelivery}
                  disabled={deliveryStatus === "checking"}
                  className="luxury-gradient px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-stone-brown font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 disabled:opacity-75 flex items-center justify-center gap-2 w-full"
                >
                  {deliveryStatus === "checking" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-stone-brown border-t-transparent rounded-full animate-spin"></div>
                      <span>Checking</span>
                    </>
                  ) : (
                    <>
                      <MapPin size={16} />
                      <span>Check</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {deliveryStatus === "available" && (
                <div className="mt-3 flex items-start gap-3 bg-blessing-green/15 border border-blessing-green/40 rounded-lg p-3 animate-fade-in">
                  <Check size={18} className="text-blessing-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blessing-green font-semibold text-xs sm:text-sm">Great! We deliver here</p>
                    <p className="text-sacred-white/80 text-xs mt-1">Expected delivery in 45-60 minutes</p>
                  </div>
                </div>
              )}

              {deliveryStatus === "unavailable" && (
                <div className="mt-3 flex items-start gap-3 bg-divine-red/15 border border-divine-red/40 rounded-lg p-3 animate-fade-in">
                  <AlertCircle size={18} className="text-divine-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-divine-red font-semibold text-xs sm:text-sm">Outside delivery zone</p>
                    <p className="text-sacred-white/80 text-xs mt-1">Contact us for special arrangements</p>
                  </div>
                </div>
              )}

              <p className="text-sacred-white/60 text-xs mt-3 text-center">
                📍 Currently delivering in Bangalore central areas
              </p>
            </div>

            {/* Primary CTAs - Mobile Optimized */}
            <div className="space-y-2 sm:space-y-3 pt-2">
              {/* Primary CTA - Explore Menu (Full Width on Mobile) */}
              <Link
                href="#menu"
                className="group flex w-full px-6 py-3 sm:py-4 rounded-lg bg-golden-beige/25 border-2 border-golden-beige/60 text-golden-beige font-bold text-sm sm:text-base hover:bg-golden-beige/35 hover:border-golden-beige/80 transition-all duration-300 items-center justify-center gap-2"
              >
                📖 Explore Menu
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>

              {/* Secondary CTA - Order Now (Full Width on Mobile, Lower Priority Visual) */}
              <Link
                href="/order"
                className="group flex w-full px-6 py-3 sm:py-4 rounded-lg luxury-gradient text-stone-brown font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-blessed-yellow/40 transition-all duration-300 items-center justify-center gap-2 transform hover:scale-105"
              >
                🛒 Order Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>

              {/* Tertiary CTA - Call Us (Link Style, Minimal Visual Weight) */}
              <a
                href="tel:7259322466"
                className="block w-full text-center text-blessed-yellow text-xs sm:text-sm font-semibold hover:text-divine-red transition-colors py-2 sm:py-3"
              >
                or call us at 📞 7259322466
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-sacred-white/80 pt-2 sm:pt-4 border-t border-golden-beige/20">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg">⭐</span>
                <span className="font-medium">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg">🚚</span>
                <span className="font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg">🔒</span>
                <span className="font-medium">100% Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
