"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Feedback", href: "#feedback" },
  ]

  const handleSmoothScroll = (href: string) => {
    setMobileMenuOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full z-50 top-0">
      <nav className="bg-gradient-to-b from-stone-brown/98 via-stone-brown/95 to-stone-brown/90 backdrop-blur-xl border-b border-golden-beige/20 shadow-lg">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            {/* Logo Section - Responsive */}
            <button
              onClick={() => handleSmoothScroll("#")}
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 divine-glow rounded-full overflow-hidden border-2 border-golden-beige/40 group-hover:border-blessed-yellow/60 transition-all duration-300">
                <Image
                  src="/logo.jpg"
                  alt="ETAT ASMAKAM Logo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-golden-beige text-lg sm:text-xl font-bold group-hover:text-blessed-yellow transition-colors duration-300 block">
                  ETAT ASMAKAM
                </span>
                <p className="text-blessed-yellow/70 text-xs font-medium tracking-wider hidden md:block">
                  Authentic Karnataka Cuisine
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleSmoothScroll(link.href)}
                  className="text-sacred-white/80 hover:text-blessed-yellow px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-golden-beige/10 font-medium text-sm lg:text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Order CTA */}
            <div className="hidden sm:flex items-center gap-2 md:gap-4 flex-shrink-0">
              <a
                href="tel:7259322466"
                className="text-blessed-yellow text-xs lg:text-sm font-semibold hover:text-divine-red transition-colors hidden lg:flex items-center gap-2"
              >
                📞 7259322466
              </a>
              <Link
                href="/order"
                className="luxury-gradient px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-stone-brown font-semibold hover-lift sacred-glow text-xs sm:text-sm transition-all duration-300"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-golden-beige hover:text-blessed-yellow transition-colors p-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-3 pb-4 border-t border-golden-beige/20 mt-3 space-y-1 animate-slide-up">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleSmoothScroll(link.href)}
                  className="block w-full text-left text-sacred-white/80 hover:text-blessed-yellow px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-golden-beige/10 font-medium text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 space-y-2 border-t border-golden-beige/20 mt-3">
                <a
                  href="tel:7259322466"
                  className="block w-full text-center text-blessed-yellow px-3 py-2.5 rounded-lg font-semibold text-sm border border-blessed-yellow/50 hover:bg-blessed-yellow/10 transition-all duration-300"
                >
                  📞 Call Us
                </a>
                <Link
                  href="/order"
                  className="block w-full luxury-gradient text-stone-brown px-3 py-2.5 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-all duration-300"
                >
                  Order Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
