"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Clock, CheckCircle, Star, ShoppingCart, Phone } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const googleMapsLink = "https://maps.app.goo.gl/yBQHCYbxNLdPzQXp6?g_st=aw"

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
  ]

  // Track scroll position for mobile sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const phoneNumber = "7259322466"

  return (
    <>
      {/* Main Header - Desktop & Initial Mobile */}
      <header className="fixed w-full z-50 top-0">
        <nav className="bg-gradient-to-b from-stone-brown/99 via-stone-brown/96 to-stone-brown/92 backdrop-blur-xl border-b border-golden-beige/25 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
              {/* Logo Section - Enhanced */}
              <button
                onClick={() => handleSmoothScroll("#")}
                className="flex items-center gap-3 sm:gap-4 group flex-shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 rounded-lg px-2"
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 divine-glow rounded-full overflow-hidden border-2 border-golden-beige/50 group-hover:border-blessed-yellow/70 transition-all duration-300">
                  <Image
                    src="/logo.jpg"
                    alt="ETAT ASMAKAM Logo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-golden-beige text-lg sm:text-xl font-bold group-hover:text-blessed-yellow transition-colors duration-300 block leading-tight">
                    ETAT ASMAKAM
                  </span>
                  <p className="text-blessed-yellow/70 text-xs sm:text-sm font-medium tracking-widest hidden md:block mt-0.5">
                    Authentic Karnataka Cuisine
                  </p>
                </div>
              </button>

              {/* Desktop Navigation - Streamlined */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-sacred-white/80 hover:text-blessed-yellow px-4 py-2 rounded-lg transition-all duration-300 hover:bg-golden-beige/15 font-medium text-sm relative group focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blessed-yellow to-divine-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  </button>
                ))}
              </div>

              {/* Live Status Widget - Desktop */}
              <div className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-lg bg-golden-beige/8 border border-golden-beige/20">
                <CheckCircle size={16} className="text-blessing-green animate-pulse" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-blessed-yellow text-xs font-semibold">Delivery Open</span>
                  <span className="text-sacred-white/70 text-xs flex items-center gap-1">
                    <Clock size={12} /> ~45 min
                  </span>
                </div>
                <div className="pl-3 border-l border-golden-beige/30 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-divine-red text-divine-red"
                    />
                  ))}
                  <span className="text-divine-red text-xs font-semibold ml-1">4.8</span>
                </div>
              </div>

              {/* Right Section - CTA & Menu */}
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
                {/* Phone Link - Hidden on Mobile */}
                <a
                  href="tel:7259322466"
                  className="text-blessed-yellow text-sm font-semibold hover:text-divine-red transition-all duration-300 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-golden-beige/10 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                >
                  📞 7259322466
                </a>

                {/* Order Now Button - Desktop & Tablet */}
                <Link
                  href="/order"
                  className="luxury-gradient text-stone-brown font-bold py-2 px-4 sm:px-6 rounded-lg flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <ShoppingCart size={18} />
                  <span className="hidden sm:inline">Order Now</span>
                  <span className="sm:hidden">Order</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-golden-beige hover:text-blessed-yellow transition-colors p-2 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 rounded-lg"
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation - Enhanced with Contact Section */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-golden-beige/20 space-y-1 animate-slide-up">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleSmoothScroll(link.href)}
                    className="block w-full text-left text-sacred-white/80 hover:text-blessed-yellow px-4 py-3 rounded-lg transition-all duration-300 hover:bg-golden-beige/15 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile Status & CTA Section */}
                <div className="pt-3 space-y-2 border-t border-golden-beige/20 mt-3">
                  {/* Live Status on Mobile */}
                  <div className="px-4 py-3 rounded-lg bg-golden-beige/8 border border-golden-beige/20 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-blessing-green animate-pulse flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        <span className="text-blessed-yellow text-xs font-semibold">Delivery Open 24/7</span>
                        <span className="text-sacred-white/70 text-xs flex items-center gap-1">
                          <Clock size={12} /> Est. delivery: 45 min
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pl-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-divine-red text-divine-red"
                        />
                      ))}
                      <span className="text-divine-red text-xs font-semibold">4.8 (125+ Reviews)</span>
                    </div>
                  </div>

                  {/* Contact & Feedback Links */}
                  <a
                    href="tel:7259322466"
                    className="block w-full text-center text-blessed-yellow px-4 py-3 rounded-lg font-semibold text-sm border border-blessed-yellow/50 hover:bg-blessed-yellow/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                  >
                    📞 Call: 7259322466
                  </a>
                  
                  <a
                    href="#feedback"
                    onClick={() => handleSmoothScroll("#feedback")}
                    className="block w-full text-center text-sacred-white/80 px-4 py-3 rounded-lg font-semibold text-sm border border-golden-beige/50 hover:bg-golden-beige/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                  >
                    ✉️ Feedback & Contact
                  </a>

                  <Link
                    href="/order"
                    className="block w-full luxury-gradient text-stone-brown px-4 py-3 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 transform hover:scale-105"
                  >
                    🛒 Order Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Sticky Footer CTA - Only visible on small screens when scrolled */}
      {isScrolled && (
        <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-gradient-to-t from-stone-brown/98 via-stone-brown/95 to-transparent backdrop-blur-lg border-t border-golden-beige/25 shadow-2xl shadow-stone-brown/50 p-3 animate-slide-up">
          <Link
            href="/order"
            className="block w-full luxury-gradient text-stone-brown font-bold py-4 rounded-xl text-center text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 focus:ring-offset-2 focus:ring-offset-stone-brown hover:shadow-lg hover:shadow-blessed-yellow/50 transform hover:scale-105 active:scale-95 select-none"
          >
            🛒 Order Online Now
          </Link>
          <p className="text-center text-blessed-yellow text-xs font-semibold mt-2">
            24/7 Delivery • ~45 min • Free Shipping
          </p>
        </div>
      )}

      {/* Spacer for sticky footer on mobile */}
      {isScrolled && <div className="sm:hidden h-24" />}
    </>
  )
}
