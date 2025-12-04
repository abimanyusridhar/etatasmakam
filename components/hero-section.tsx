"use client"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen pt-16 sm:pt-20">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picsart_25-11-03_21-18-19-009-TIGCpvPWJVZ0ErixT7y1GHTsQH0Wk5.jpg"
        alt="ETAT ASMAKAM Signature Biryani"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay with refined gradients */}
      <div className="absolute inset-0 hero-strong-overlay sacred-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-3 sm:px-4 py-16 sm:py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="royal-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl w-full max-w-4xl mx-auto backdrop-blur-lg border border-golden-beige/40 animate-slide-up">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block text-blessed-yellow text-xs sm:text-sm font-bold bg-golden-beige/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest">
                🏆 Premium Authentic Cuisine
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 golden-text animate-fade-in leading-tight">
                ETAT ASMAKAM
              </h1>
              <div className="h-1 sm:h-1.5 w-16 sm:w-20 bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow mx-auto rounded-full" />
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl text-blessed-yellow font-semibold animate-fade-in [animation-delay:200ms]">
              Satisfaction of Quality and Quantity
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-sacred-white/85 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
              Experience the finest authentic Karnataka cuisine with our signature rice baths, traditional dosas, and
              masterfully crafted biryanis.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 animate-fade-in [animation-delay:600ms]">
              <button
                onClick={() => handleScroll("#menu")}
                className="luxury-gradient text-stone-brown font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift sacred-glow text-sm sm:text-lg w-full sm:w-auto transition-all duration-300 shadow-lg"
              >
                🍲 Explore Menu
              </button>
              <Link
                href="/order"
                className="royal-gradient text-sacred-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover-lift divine-glow text-sm sm:text-lg border-2 border-golden-beige/40 w-full sm:w-auto transition-all duration-300 shadow-lg text-center"
              >
                📞 Order Now (24/7)
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-golden-beige/20 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { icon: "🕐", label: "24/7 Delivery", desc: "Round the clock" },
                { icon: "👨‍🍳", label: "Expert Chefs", desc: "Premium quality" },
                { icon: "🌱", label: "100% Veg", desc: "Pure & fresh" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-3xl">{stat.icon}</div>
                  <p className="text-blessed-yellow font-semibold text-xs sm:text-sm">{stat.label}</p>
                  <p className="text-sacred-white/70 text-xs">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-brown/80 to-transparent" />
      </div>
    </section>
  )
}
