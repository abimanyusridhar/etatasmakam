"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Clock, CheckCircle, Smartphone } from "lucide-react"

export function VastraHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith("/")) {
      window.location.href = href
      return
    }
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
    <>
      <header className="fixed w-full z-50 top-0">
        <nav className="bg-gradient-to-b from-stone-brown/99 via-stone-brown/96 to-stone-brown/92 backdrop-blur-xl border-b border-golden-beige/25 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
              <button
                onClick={() => handleSmoothScroll("#")}
                className="flex items-center gap-3 sm:gap-4 group flex-shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 rounded-lg px-2"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-auto sm:h-16 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/vasthra-bg.jpeg" 
                      alt="Vasthra Logo" 
                      className="object-contain h-full w-auto drop-shadow-[0_0_8px_rgba(200,151,58,0.4)]"
                    />
                  </div>
                </div>
              </button>

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

              <div className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-lg bg-golden-beige/8 border border-golden-beige/20">
                <CheckCircle size={16} className="text-blessing-green animate-pulse" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-blessed-yellow text-xs font-semibold">Open Now</span>
                  <span className="text-sacred-white/70 text-xs flex items-center gap-1">
                    <Clock size={12} /> Fast Pickup
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
                <a
                  href="tel:7259322466"
                  className="text-blessed-yellow text-sm font-semibold hover:text-divine-red transition-all duration-300 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-golden-beige/10 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                >
                  📞 7259322466
                </a>

                <button
                  onClick={() => handleSmoothScroll("#order")}
                  className="luxury-gradient text-stone-brown font-bold py-2 px-4 sm:px-6 rounded-lg flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <span className="hidden sm:inline">Book Pickup</span>
                  <span className="sm:hidden">Book</span>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-golden-beige hover:text-blessed-yellow transition-colors p-2 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 rounded-lg"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

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
                
                <div className="pt-3 space-y-2 border-t border-golden-beige/20 mt-3">
                  <div className="px-4 py-3 rounded-lg bg-golden-beige/8 border border-golden-beige/20 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-blessing-green animate-pulse flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        <span className="text-blessed-yellow text-xs font-semibold">Ready for Pickup</span>
                        <span className="text-sacred-white/70 text-xs flex items-center gap-1">
                          <Clock size={12} /> Fast Service
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="tel:7259322466"
                    className="block w-full text-center text-blessed-yellow px-4 py-3 rounded-lg font-semibold text-sm border border-blessed-yellow/50 hover:bg-blessed-yellow/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50"
                  >
                    📞 Call: 7259322466
                  </a>

                  <button
                    onClick={() => handleSmoothScroll("#order")}
                    className="block w-full luxury-gradient text-stone-brown px-4 py-3 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessed-yellow/50 transform hover:scale-105"
                  >
                    📦 Book Pickup Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}
