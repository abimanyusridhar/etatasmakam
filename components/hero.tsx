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
      {/* Background Image with Overlay */}
      <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="/biryani-hero.jpg"
          alt="Signature Biryani - ETAT ASMAKAM"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-brown/60 via-stone-brown/50 to-stone-brown/80"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center space-y-6 sm:space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blessed-yellow leading-tight">
                Authentic Karnataka Biryani
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-sacred-white/90 font-medium">
                Aromatic spices, slow-cooked perfection, delivered fresh to your door
              </p>
            </div>

            {/* Delivery Checker Widget */}
            <div className="bg-stone-brown/90 backdrop-blur-md border border-golden-beige/30 rounded-xl p-5 sm:p-6 lg:p-8 max-w-md mx-auto w-full shadow-2xl">
              <label className="flex items-center gap-2 text-golden-beige font-semibold mb-3 text-sm sm:text-base">
                <MapPin size={18} className="flex-shrink-0" />
                Check Delivery Availability
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter Pin Code"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value)
                    setDeliveryStatus("idle")
                  }}
                  maxLength="6"
                  className="flex-1 px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300 text-sm"
                />
                <button
                  onClick={handleCheckDelivery}
                  disabled={deliveryStatus === "checking"}
                  className="luxury-gradient px-6 py-3 rounded-lg text-stone-brown font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 disabled:opacity-75 flex items-center justify-center gap-2 min-w-fit"
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
                <div className="mt-4 flex items-start gap-3 bg-blessing-green/15 border border-blessing-green/40 rounded-lg p-3">
                  <Check size={20} className="text-blessing-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blessing-green font-semibold text-sm">Great! We deliver here</p>
                    <p className="text-sacred-white/80 text-xs mt-1">Expected delivery in 45-60 minutes</p>
                  </div>
                </div>
              )}

              {deliveryStatus === "unavailable" && (
                <div className="mt-4 flex items-start gap-3 bg-divine-red/15 border border-divine-red/40 rounded-lg p-3">
                  <AlertCircle size={20} className="text-divine-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-divine-red font-semibold text-sm">Outside delivery zone</p>
                    <p className="text-sacred-white/80 text-xs mt-1">Contact us for special arrangements</p>
                  </div>
                </div>
              )}

              <p className="text-sacred-white/60 text-xs mt-4 text-center">
                📍 Currently delivering in Bangalore central areas
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Link
                href="#menu"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-golden-beige/20 border-2 border-golden-beige/60 text-golden-beige font-semibold text-sm sm:text-base hover:bg-golden-beige/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                📖 Explore Menu
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/order"
                className="luxury-gradient px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-stone-brown font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blessed-yellow/40 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                🛒 Order Now
                <span>→</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-sacred-white/80 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🚚</span>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span>100% Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
