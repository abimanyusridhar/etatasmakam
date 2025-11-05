"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Services", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Feedback", href: "/#feedback" },
  ]

  return (
    <header className="fixed w-full z-50">
      <nav className="bg-stone-brown/95 backdrop-blur-md border-b border-golden-beige/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 divine-glow">
                <Image
                  src="/logo.jpg"
                  alt="ETAT ASMAKAM Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="text-golden-beige text-2xl font-bold group-hover:text-blessed-yellow transition-colors duration-300">
                ETAT ASMAKAM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sacred-white hover:text-blessed-yellow transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              {/* Order Online CTA */}
              <Link
                href="/order"
                className="luxury-gradient px-6 py-2 rounded-lg text-stone-brown font-semibold hover-lift sacred-glow"
              >
                Order Online
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-golden-beige hover:text-blessed-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-4 border-t border-golden-beige/20 mt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sacred-white hover:text-blessed-yellow transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/order"
                className="block w-full luxury-gradient text-stone-brown px-4 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition-all duration-200 mt-4 sacred-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
