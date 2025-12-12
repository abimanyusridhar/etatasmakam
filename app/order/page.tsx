"use client"

import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle, Clock, Zap } from "lucide-react"

export default function OrderPage() {
  const phoneNumber = "7259322466"
  const alternatePhone = "8951603763"
  const whatsappLink = `https://wa.me/91${phoneNumber}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-brown via-stone-brown/97 to-stone-brown relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-divine-red/5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blessed-yellow/5 blur-[100px] rounded-full animate-pulse" />

      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-golden-beige/40 bg-stone-brown/60 hover:bg-stone-brown/80 text-golden-beige hover:text-blessed-yellow transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Main Message */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="inline-block mb-6 p-4 bg-blessed-yellow/20 rounded-2xl">
                  <Zap size={40} className="text-blessed-yellow animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold golden-text mb-6 leading-tight">
                  Online Ordering Coming Soon!
                </h1>
                <p className="text-xl text-sacred-white/90 leading-relaxed mb-4">
                  We&apos;re cooking up something amazing for you! Our seamless online ordering platform is almost ready.
                </p>
                <p className="text-lg text-blessed-yellow opacity-90">
                  But don&apos;t wait — order with us today!
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-brown/60 border border-golden-beige/20 hover:border-golden-beige/40 transition-all duration-300">
                  <Clock size={24} className="text-blessed-yellow flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-blessed-yellow text-lg">24/7 Service</p>
                    <p className="text-sacred-white/80 text-sm">Order anytime, day or night</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-brown/60 border border-golden-beige/20 hover:border-golden-beige/40 transition-all duration-300">
                  <Zap size={24} className="text-blessing-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-blessing-green text-lg">Fast Delivery</p>
                    <p className="text-sacred-white/80 text-sm">Quick preparation and delivery to your doorstep</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-brown/60 border border-golden-beige/20 hover:border-golden-beige/40 transition-all duration-300">
                  <MessageCircle size={24} className="text-divine-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-divine-red text-lg">Easy Communication</p>
                    <p className="text-sacred-white/80 text-sm">Direct contact with our team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Card */}
            <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
              <div className="royal-card p-8 rounded-2xl space-y-6 hover-lift">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-blessed-yellow mb-2">Order Now!</h2>
                  <p className="text-sacred-white/70">Contact us directly to place your order</p>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-4">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blessing-green/20 to-blessing-green/10 border-2 border-blessing-green/50 hover:border-blessing-green/80 hover:bg-gradient-to-r hover:from-blessing-green/30 hover:to-blessing-green/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone size={28} className="text-blessing-green group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="text-xs text-sacred-white/70 uppercase font-semibold">Primary Phone</p>
                        <p className="text-2xl font-bold text-blessing-green">{phoneNumber}</p>
                      </div>
                    </div>
                    <span className="text-3xl"></span>
                  </a>

                  <a
                    href={`tel:${alternatePhone}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-divine-red/20 to-divine-red/10 border-2 border-divine-red/50 hover:border-divine-red/80 hover:bg-gradient-to-r hover:from-divine-red/30 hover:to-divine-red/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone size={28} className="text-divine-red group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="text-xs text-sacred-white/70 uppercase font-semibold">Alternate Phone</p>
                        <p className="text-2xl font-bold text-divine-red">{alternatePhone}</p>
                      </div>
                    </div>
                    <span className="text-3xl"></span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="pt-4 border-t-2 border-golden-beige/20">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blessed-yellow/20 to-blessed-yellow/10 border-2 border-blessed-yellow/50 hover:border-blessed-yellow/80 hover:bg-gradient-to-r hover:from-blessed-yellow/30 hover:to-blessed-yellow/20 transition-all duration-300 group w-full"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle size={28} className="text-blessed-yellow group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="text-xs text-sacred-white/70 uppercase font-semibold">Chat with Us</p>
                        <p className="text-lg font-bold text-blessed-yellow">WhatsApp Message</p>
                      </div>
                    </div>
                    <span className="text-3xl"></span>
                  </a>
                </div>
              </div>

              {/* Service Hours */}
              <div className="royal-card p-6 rounded-xl text-center space-y-3">
                <div className="inline-block p-3 bg-blessed-yellow/20 rounded-lg mb-3">
                  <Clock size={24} className="text-blessed-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-blessed-yellow">Available 24/7</h3>
                <p className="text-sacred-white/80">
                  Our team is ready to serve you at any time of the day or night.
                </p>
                <div className="pt-3 border-t border-golden-beige/20">
                  <p className="text-sm text-sacred-white/70">
                    ✓ Pickup at Counter<br />
                    ✓ 24/7 Delivery<br />
                    ✓ Party Catering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="mt-16 text-center">
            <div className="royal-card p-8 rounded-2xl inline-block max-w-2xl">
              <h3 className="text-2xl font-bold text-blessed-yellow mb-4">
                Why Wait? Order Today!
              </h3>
              <p className="text-sacred-white/80 mb-6">
                Experience authentic Karnataka cuisine with exceptional taste and quality. Our dedicated team is ready to serve you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${phoneNumber}`}
                  className="luxury-gradient px-8 py-4 rounded-xl text-stone-brown font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={24} />
                  Call Now
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border-2 border-blessed-yellow text-blessed-yellow font-bold text-lg hover:bg-blessed-yellow/15 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
