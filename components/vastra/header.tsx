"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Clock, CheckCircle, Smartphone } from "lucide-react"

export function VastraHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Order Now", href: "#order" },
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
                  <div className="relative h-12 w-auto sm:h-16 group-hover:scale-105 transition-transform duration-500 hover:drop-shadow-[0_0_25px_rgba(200,151,58,0.6)]">
                    <img 
                      src="/vasthra-bg.jpeg" 
                      alt="Vasthra Logo" 
                      className="object-contain h-full w-auto drop-shadow-[0_0_15px_rgba(200,151,58,0.3)] rounded-2xl"
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
                  href="https://wa.me/917204758766?text=Hi%20Vasthra,%20I'd%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blessing-green text-sm font-semibold hover:text-blessed-yellow transition-all duration-300 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blessing-green/10 focus:outline-none focus:ring-2 focus:ring-blessing-green/50"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> 
                  Chat
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
                    href="https://wa.me/917204758766?text=Hi%20Vasthra,%20I'd%20like%20to%20know%20more."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center text-blessing-green px-4 py-3 rounded-lg font-semibold text-sm border border-blessing-green/50 hover:bg-blessing-green/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blessing-green/50"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> 
                    WhatsApp Us
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
