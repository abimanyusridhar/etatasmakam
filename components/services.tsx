"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MapPin, Clock, Truck, ChefHat, Users, DollarSign, X } from "lucide-react"

export function Services() {
  const [selectedPickupTime, setSelectedPickupTime] = useState<string>("")
  const [showCateringModal, setShowCateringModal] = useState(false)
  const [cateringForm, setCateringForm] = useState({
    eventDate: "",
    headcount: "",
    budgetRange: "5000-10000",
    eventType: "wedding",
    name: "",
    phone: "",
  })

  const pickupTimeEstimate = () => {
    const now = new Date()
    const readyTime = new Date(now.getTime() + 15 * 60000)
    return `${readyTime.getHours().toString().padStart(2, "0")}:${readyTime.getMinutes().toString().padStart(2, "0")}`
  }

  const handleCateringSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send to backend/email service
    console.log("Catering inquiry:", cateringForm)
    alert("Quote request submitted! We'll contact you within 2 hours.")
    setShowCateringModal(false)
    setCateringForm({
      eventDate: "",
      headcount: "",
      budgetRange: "5000-10000",
      eventType: "wedding",
      name: "",
      phone: "",
    })
  }

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-stone-brown/50 to-stone-brown/30 border-y border-golden-beige/20">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blessed-yellow mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sacred-white/80 text-sm sm:text-base md:text-lg">
            Choose the perfect way to enjoy authentic Karnataka cuisine
          </p>
        </div>

        {/* Services Grid - Mobile Optimized Vertical Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Service 1: Offline Cart Pickup */}
          <div className="group relative bg-gradient-to-br from-golden-beige/15 to-stone-brown/50 border border-golden-beige/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blessed-yellow/50 transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blessed-yellow/5 to-divine-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-5 sm:p-6 md:p-8 flex flex-col h-full">
              {/* Icon - Mobile Prominent */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blessing-green/20 border border-blessing-green/40 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} className="text-blessing-green sm:w-8 sm:h-8" />
              </div>

              {/* Title - Mobile Optimized */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-golden-beige mb-2 sm:mb-3 leading-tight">
                Pickup at Counter
              </h3>
              
              <p className="text-sacred-white/70 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Fresh, hot biryani prepared to order. Quick pickups with guaranteed freshness.
              </p>

              {/* Benefits - Clear List */}
              <ul className="space-y-2 mb-5 sm:mb-6">
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Easy & Quick Pickup</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Fresh Preparation</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Priority Seating</span>
                </li>
              </ul>

              {/* Pickup Time Estimator */}
              <div className="bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-blessed-yellow flex-shrink-0" />
                  <span className="text-sacred-white/80 text-xs font-semibold">Ready in</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-blessed-yellow">15-20 min</p>
                <p className="text-sacred-white/60 text-xs mt-1">Estimated pickup time</p>
              </div>

              {/* Location Info */}
              <div className="bg-stone-brown/80 rounded-lg overflow-hidden mb-5 sm:mb-6 border border-golden-beige/20 h-32 sm:h-40">
                <div className="relative w-full h-full">
                  <Image
                    src="/location-pickup.jpg"
                    alt="ETAT ASMAKAM Pickup Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4">
                    <div>
                      <p className="text-blessed-yellow font-semibold text-xs sm:text-sm">ETAT ASMAKAM</p>
                      <p className="text-sacred-white/80 text-xs">123 Brigade Rd, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA - Full Width */}
              <Link
                href="/order"
                className="block w-full luxury-gradient text-stone-brown font-bold py-3 sm:py-4 rounded-lg text-center text-xs sm:text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Order for Pickup
              </Link>
            </div>
          </div>

          {/* Service 2: 24/7 Online Delivery */}
          <div className="group relative bg-gradient-to-br from-golden-beige/15 to-stone-brown/50 border border-golden-beige/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blessed-yellow/50 transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blessed-yellow/5 to-divine-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-5 sm:p-6 md:p-8 flex flex-col h-full">
              {/* Icon - Mobile Prominent */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-divine-red/20 border border-divine-red/40 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck size={28} className="text-divine-red sm:w-8 sm:h-8" />
              </div>

              {/* Title - Mobile Optimized */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-golden-beige mb-2 sm:mb-3 leading-tight">
                24/7 Delivery
              </h3>
              
              <p className="text-sacred-white/70 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Hot, fresh biryani delivered to your doorstep anytime, anywhere in the city.
              </p>

              {/* Benefits - Clear List */}
              <ul className="space-y-2 mb-5 sm:mb-6">
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Round-the-Clock Service</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Real-Time Tracking</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Safe & Hygienic</span>
                </li>
              </ul>

              {/* Delivery Info Dashboard */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-center justify-between bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-3 text-xs sm:text-sm">
                  <span className="text-sacred-white/80 font-medium">Avg. Delivery</span>
                  <span className="text-blessed-yellow font-bold">45-60 min</span>
                </div>
                <div className="flex items-center justify-between bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-3 text-xs sm:text-sm">
                  <span className="text-sacred-white/80 font-medium">Free Delivery</span>
                  <span className="text-blessing-green font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-3 text-xs sm:text-sm">
                  <span className="text-sacred-white/80 font-medium">Live Tracking</span>
                  <span className="text-blessing-green font-bold">✓</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2">
                <Link
                  href="/order"
                  className="block w-full luxury-gradient text-stone-brown font-bold py-3 sm:py-4 rounded-lg text-center text-xs sm:text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Order Now
                </Link>
                <Link
                  href="/track"
                  className="block w-full border-2 border-blessed-yellow text-blessed-yellow font-bold py-3 sm:py-4 rounded-lg text-center text-xs sm:text-sm hover:bg-blessed-yellow/10 transition-all duration-300"
                >
                  Track Order
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Private Party Catering */}
          <div className="group relative bg-gradient-to-br from-golden-beige/15 to-stone-brown/50 border border-golden-beige/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blessed-yellow/50 transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blessed-yellow/5 to-divine-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-5 sm:p-6 md:p-8 flex flex-col h-full">
              {/* Icon - Mobile Prominent */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blessed-yellow/20 border border-blessed-yellow/40 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChefHat size={28} className="text-blessed-yellow sm:w-8 sm:h-8" />
              </div>

              {/* Title - Mobile Optimized */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-golden-beige mb-2 sm:mb-3 leading-tight">
                Private Party Catering
              </h3>
              
              <p className="text-sacred-white/70 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                Customize your menu with our expert chefs for unforgettable celebrations.
              </p>

              {/* Benefits - Clear List */}
              <ul className="space-y-2 mb-5 sm:mb-6">
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Custom Menu Design</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Professional Staff</span>
                </li>
                <li className="flex items-center gap-2 text-sacred-white/80 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-blessed-yellow rounded-full flex-shrink-0"></span>
                  <span>Flexible Pricing</span>
                </li>
              </ul>

              {/* Catering Info */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-center gap-3 bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-3">
                  <Users size={16} className="text-blessed-yellow flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="text-sacred-white/80">Groups & Parties</p>
                    <p className="text-blessed-yellow font-semibold">20-500+ guests</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-3">
                  <DollarSign size={16} className="text-blessing-green flex-shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="text-sacred-white/80">Custom Quotes</p>
                    <p className="text-blessing-green font-semibold">Based on budget</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowCateringModal(true)}
                className="block w-full luxury-gradient text-stone-brown font-bold py-3 sm:py-4 rounded-lg text-center text-xs sm:text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get a Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Catering Quote Modal */}
      {showCateringModal && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-stone-brown border border-golden-beige/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 sm:p-8 border-b border-golden-beige/20 bg-stone-brown/95 backdrop-blur">
              <h3 className="text-2xl font-bold text-blessed-yellow">Get Your Custom Catering Quote</h3>
              <button
                onClick={() => setShowCateringModal(false)}
                className="text-golden-beige hover:text-blessed-yellow transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleCateringSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* Personal Info */}
              <div className="space-y-4">
                <h4 className="text-golden-beige font-semibold">Your Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={cateringForm.name}
                    onChange={(e) => setCateringForm({ ...cateringForm, name: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={cateringForm.phone}
                    onChange={(e) => setCateringForm({ ...cateringForm, phone: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h4 className="text-golden-beige font-semibold">Event Details</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    required
                    value={cateringForm.eventDate}
                    onChange={(e) => setCateringForm({ ...cateringForm, eventDate: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  />
                  <select
                    required
                    value={cateringForm.eventType}
                    onChange={(e) => setCateringForm({ ...cateringForm, eventType: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other Event</option>
                  </select>
                </div>
              </div>

              {/* Guest & Budget */}
              <div className="space-y-4">
                <h4 className="text-golden-beige font-semibold">Guests & Budget</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Number of Guests *"
                    required
                    min="20"
                    value={cateringForm.headcount}
                    onChange={(e) => setCateringForm({ ...cateringForm, headcount: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  />
                  <select
                    required
                    value={cateringForm.budgetRange}
                    onChange={(e) => setCateringForm({ ...cateringForm, budgetRange: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300"
                  >
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="10000-25000">₹10,000 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full luxury-gradient text-stone-brown font-semibold py-4 rounded-lg text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </button>

              <p className="text-sacred-white/60 text-xs text-center">
                We'll contact you within 2 hours with a personalized quote
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
