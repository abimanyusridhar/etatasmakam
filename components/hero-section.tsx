"use client"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
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
      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="royal-card p-8 rounded-2xl w-full max-w-4xl mx-auto backdrop-blur-lg">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 golden-text text-center animate-fade-in">
            ETAT ASMAKAM
          </h1>
          <p className="text-2xl sm:text-3xl text-blessed-yellow text-center mb-8 animate-fade-in [animation-delay:200ms]">
            Satisfaction of Quality and Quantity
          </p>
          <p className="text-lg sm:text-xl text-sacred-white opacity-90 mb-12 max-w-2xl mx-auto text-balance text-center animate-fade-in [animation-delay:400ms]">
            Experience the finest Indian cuisine with our signature rice baths and biryanis prepared with passion and
            tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/menu"
              className="luxury-gradient text-stone-brown font-semibold px-8 py-4 rounded-lg hover-lift sacred-glow text-lg"
            >
              Explore Menu
            </Link>
            <Link
              href="tel:7259322466"
              className="royal-gradient text-sacred-white px-8 py-4 rounded-lg font-semibold hover-lift divine-glow text-lg border border-golden-beige/20"
            >
              Call Us Now
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-brown/80 to-transparent" />
      </div>
    </section>
  )
}
