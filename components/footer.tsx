"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const phoneNumber = "7259322466"
  const whatsappLink = `https://wa.me/91${phoneNumber}`

  return (
    <footer id="footer" className="relative py-16 bg-stone-brown/98">
      <div className="absolute inset-0 sacred-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold golden-text">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-blessed-yellow group">
                <Phone className="w-6 h-6 mt-1 group-hover:text-divine-red transition-colors" />
                <div>
                  <p className="font-semibold mb-1">Contact Us</p>
                  <a href={`tel:${phoneNumber}`} className="hover:text-divine-red transition-colors block">
                    +91 {phoneNumber}
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-divine-red transition-colors mt-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-blessed-yellow group">
                <MapPin className="w-6 h-6 mt-1 group-hover:text-divine-red transition-colors" />
                <div>
                  <p className="font-semibold mb-1">Visit Us</p>
                  <address className="not-italic text-sacred-white/90 leading-relaxed">
                    ETAT ASMAKAM,<br />
                    Near Mulbagal Bus Stand,<br />
                    Mulbagal, Karnataka 563131<br />
                    <a
                      href="https://maps.google.com/?q=ETAT+ASMAKAM+Mulbagal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blessed-yellow hover:text-divine-red transition-colors inline-flex items-center gap-2 mt-2"
                    >
                      Get Directions
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                      </svg>
                    </a>
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 text-blessed-yellow group">
                <Mail className="w-6 h-6 mt-1 group-hover:text-divine-red transition-colors" />
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a href="mailto:contact@etatasmakam.com" className="hover:text-divine-red transition-colors">
                    contact@etatasmakam.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="text-blessed-yellow hover:text-divine-red transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-blessed-yellow hover:text-divine-red transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-blessed-yellow hover:text-divine-red transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold golden-text">Hours</h3>
            <div className="space-y-2 text-sacred-white/90">
              <p className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="text-blessed-yellow">24/7</span>
              </p>
              <p className="text-sm text-blessed-yellow">
                * Orders & Pickups available round the clock
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold golden-text">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="/menu" className="text-blessed-yellow hover:text-divine-red transition-colors">
                Menu
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-blessed-yellow hover:text-divine-red transition-colors"
              >
                Services
              </button>
              <a href="tel:7259322466" className="text-blessed-yellow hover:text-divine-red transition-colors">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-golden-beige/20 text-center text-sacred-white/70">
          <p>© {new Date().getFullYear()} ETAT ASMAKAM. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-divine-red/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blessed-yellow/5 blur-[100px] rounded-full" />
    </footer>
  );
}
