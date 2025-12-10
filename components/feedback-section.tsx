"use client"

import { useState } from "react"
import { MessageSquare, Star, Users, ThumbsUp, ShoppingCart, Zap } from "lucide-react"
import { FeedbackForm } from "./feedback-form"
import Link from "next/link"

export function FeedbackSection() {
  const [showForm, setShowForm] = useState(false)

  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+", color: "blessing-green" },
    { icon: Star, label: "Avg Rating", value: "4.8/5", color: "divine-red" },
    { icon: ThumbsUp, label: "Positive Reviews", value: "95%", color: "blessed-yellow" },
    { icon: MessageSquare, label: "Feedback Count", value: "1000+", color: "golden-beige" },
  ]

  const phoneNumber = "7259322466"

  const handleScroll = (target: string) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section id="feedback" className="relative py-20 sm:py-28 bg-stone-brown/60 overflow-hidden">
        <div className="absolute inset-0 sacred-overlay" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-blessed-yellow/50 bg-blessed-yellow/10">
                <MessageSquare size={18} className="text-blessed-yellow" />
                <span className="text-blessed-yellow font-semibold text-sm">Customer Voice</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold golden-text mb-4 sm:mb-6">
              We Value Your Feedback
            </h2>
            <p className="text-sacred-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Your opinions help us improve and serve you better. Share your experience with us today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blessed-yellow/20 to-blessed-yellow/10 border border-blessed-yellow/30 rounded-2xl p-6 sm:p-8 text-center hover:border-blessed-yellow/60 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-blessed-yellow/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-blessed-yellow" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-blessed-yellow mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sacred-white/80 font-medium text-sm sm:text-base">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-blessed-yellow/20 via-golden-beige/15 to-divine-red/20 border-2 border-blessed-yellow/30 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-blessed-yellow mb-3 sm:mb-4">
                Share Your Experience
              </h3>
              <p className="text-sacred-white/80 text-sm sm:text-base mb-8">
                We'd love to hear about your dining experience. Whether it's praise, suggestions, or feedback, every comment helps us grow and serve you better. It takes just 2 minutes!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="luxury-gradient text-stone-brown font-bold py-4 px-8 rounded-xl text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Share Your Feedback Now
              </button>
            </div>
          </div>

          {/* Why Feedback Matters */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg sm:text-xl font-bold text-blessed-yellow mb-2">Improve Quality</h4>
              <p className="text-sacred-white/70 text-sm sm:text-base">
                Your feedback helps us enhance our food quality and service standards.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg sm:text-xl font-bold text-blessed-yellow mb-2">Innovate Better</h4>
              <p className="text-sacred-white/70 text-sm sm:text-base">
                We develop new dishes and services based on customer preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="text-lg sm:text-xl font-bold text-blessed-yellow mb-2">Build Community</h4>
              <p className="text-sacred-white/70 text-sm sm:text-base">
                Your voice matters and helps us create a better experience for everyone.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Services Button */}
            <button
              onClick={() => handleScroll("#services")}
              className="royal-card hover-lift group flex items-center justify-between p-6"
            >
              <div className="text-left">
                <p className="text-blessed-yellow font-bold text-lg mb-1">Explore Services</p>
                <p className="text-sacred-white/70 text-sm">Pickup, Delivery & Catering</p>
              </div>
              <Zap size={28} className="text-blessed-yellow group-hover:scale-110 transition-transform" />
            </button>

            {/* Order Now Button - Updated to Link */}
            <Link
              href="/order"
              className="royal-card hover-lift group flex items-center justify-between p-6 border-blessing-green/50 bg-gradient-to-br from-blessing-green/20 to-blessing-green/5"
            >
              <div className="text-left">
                <p className="text-blessing-green font-bold text-lg mb-1">Order Now</p>
                <p className="text-sacred-white/70 text-sm">24/7 Available • ~45 min</p>
              </div>
              <ShoppingCart size={28} className="text-blessing-green group-hover:scale-110 transition-transform" />
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => handleScroll("#menu")}
              className="royal-card hover-lift group flex items-center justify-between p-6"
            >
              <div className="text-left">
                <p className="text-divine-red font-bold text-lg mb-1">View Menu</p>
                <p className="text-sacred-white/70 text-sm">All dishes & specialties</p>
              </div>
              <MessageSquare size={28} className="text-divine-red group-hover:scale-110 transition-transform" />
            </button>

            {/* Contact Button */}
            <button
              onClick={() => handleScroll("#footer")}
              className="royal-card hover-lift group flex items-center justify-between p-6"
            >
              <div className="text-left">
                <p className="text-golden-beige font-bold text-lg mb-1">Contact Us</p>
                <p className="text-sacred-white/70 text-sm">Get in touch with us</p>
              </div>
              <Users size={28} className="text-golden-beige group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blessed-yellow/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-divine-red/5 blur-[80px] rounded-full" />
      </section>

      {/* Feedback Form Modal */}
      <FeedbackForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
}
