"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-b from-card to-primary border-t border-border pt-16 pb-8 relative">
      <div className="sacred-overlay absolute inset-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold golden-text mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:text-golden-500 transition-colors" size={20} />
                <div>
                  <p className="font-semibold text-sacred-beige">Restaurant Address</p>
                  <p className="text-muted-foreground text-sm hover:text-sacred-beige transition-colors">[Placeholder Address]</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <a
                  href="mailto:etatasmakam@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  etatasmakam@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <div className="space-y-1">
                  <a href="tel:7259322466" className="block text-muted-foreground hover:text-accent transition-colors">
                    7259322466
                  </a>
                  <a href="tel:8951603763" className="block text-muted-foreground hover:text-accent transition-colors">
                    8951603763
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/menu" className="block text-muted-foreground hover:text-accent transition-colors">
                Menu
              </Link>
              <Link href="/#services" className="block text-muted-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <a href="#feedback" className="block text-muted-foreground hover:text-accent transition-colors">
                Feedback
              </a>
            </nav>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com/etat_asmakam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/Etat_Asmakam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com/Etat-Asmakam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            <a
              href="https://wa.me/7259322466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            © {currentYear} ETAT ASMAKAM. All rights reserved. | Satisfaction of Quality and Quantity
          </p>
        </div>
      </div>
    </footer>
  )
}
