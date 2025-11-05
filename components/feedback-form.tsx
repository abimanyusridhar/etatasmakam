"use client"

import type React from "react"
import { useState } from "react"
import { Star } from "lucide-react"

type FormErrors = {
  name?: string;
  contact?: string;
  dining_date?: string;
  comments?: string;
}

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    rating: 5,
    comments: "",
    dining_date: "",
    order_type: "takeaway" // Changed default from dine-in to takeaway
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces"
    }

    // Contact validation
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact information is required"
    } else if (
      !/^\d{10}$/.test(formData.contact) && // Phone number
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact) // Email
    ) {
      newErrors.contact = "Enter a valid email or 10-digit phone number"
    }

    // Date validation
    if (!formData.dining_date) {
      newErrors.dining_date = "Visit date is required"
    } else {
      const selectedDate = new Date(formData.dining_date)
      const today = new Date()
      if (selectedDate > today) {
        newErrors.dining_date = "Visit date cannot be in the future"
      }
    }

    // Comments validation
    if (!formData.comments.trim()) {
      newErrors.comments = "Comments are required"
    } else if (formData.comments.length < 10) {
      newErrors.comments = "Please provide more detailed feedback (minimum 10 characters)"
    } else if (formData.comments.length > 500) {
      newErrors.comments = "Comments cannot exceed 500 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      // TODO: Replace with actual API call
      console.log("Feedback submitted:", formData)
      setSubmitted(true)

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          contact: "",
          rating: 5,
          comments: "",
          dining_date: "",
          order_type: "takeaway" // Changed default from dine-in to takeaway
        })
        setSubmitted(false)
        setErrors({})
      }, 3000)
    } catch (error) {
      console.error("Error submitting feedback:", error)
      // Handle submission error
    }
  }

  return (
    <section id="feedback" className="py-32 relative overflow-hidden">
      <div className="sacred-overlay absolute inset-0 opacity-80" />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-divine-red/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blessed-yellow/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/5 to-transparent opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blessed-yellow text-lg font-medium inline-block mb-3 bg-golden-beige/10 px-4 py-1 rounded-full">
            Your Voice Matters
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold golden-text mb-6 leading-tight">
            Share Your Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow mx-auto mb-6 rounded-full" />
          <p className="text-xl text-blessed-yellow opacity-90 max-w-2xl mx-auto">
            Your feedback helps us maintain our commitment to excellence and enhance your experience.
          </p>
        </div>

        {submitted ? (
          <div className="royal-card p-12 rounded-2xl text-center animate-fade-up backdrop-blur-lg">
            <div className="text-6xl mb-6">✨</div>
            <h3 className="text-3xl font-bold golden-text mb-4">Thank You!</h3>
            <p className="text-sacred-white/90 text-lg max-w-md mx-auto">
              We truly appreciate your valuable feedback. Your comments help us serve you better.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="royal-card p-8 rounded-2xl backdrop-blur-lg space-y-8 animate-fade-up">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium golden-text">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={50}
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 ${
                    errors.name
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-divine-red text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Contact Input */}
              <div className="space-y-2">
                <label htmlFor="contact" className="block text-sm font-medium golden-text">
                  Contact Information *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 ${
                    errors.contact
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                  placeholder="Email or phone number"
                />
                {errors.contact && (
                  <p className="text-divine-red text-sm mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Dining Date */}
              <div className="space-y-2">
                <label htmlFor="dining_date" className="block text-sm font-medium golden-text">
                  Visit Date *
                </label>
                <input
                  type="date"
                  id="dining_date"
                  name="dining_date"
                  value={formData.dining_date}
                  onChange={handleChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all ${
                    errors.dining_date
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                />
                {errors.dining_date && (
                  <p className="text-divine-red text-sm mt-1">{errors.dining_date}</p>
                )}
              </div>

              {/* Order Type */}
              <div className="space-y-2">
                <label htmlFor="order_type" className="block text-sm font-medium golden-text">
                  Service Type
                </label>
                <select
                  id="order_type"
                  name="order_type"
                  value={formData.order_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/80 border border-golden-beige/20 rounded-lg text-sacred-white focus:border-blessed-yellow focus:ring-2 focus:ring-blessed-yellow/20 transition-all"
                >
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Delivery</option>
                  <option value="catering">Catering</option>
                </select>
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <label className="block text-sm font-medium golden-text">
                Rate Your Experience
              </label>
              <div className="flex items-center gap-4 px-4 py-3 bg-stone-brown/30 rounded-lg">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: i + 1 }))}
                      className="focus:outline-none"
                    >
                      <Star
                        size={24}
                        className={`transition-all ${
                          i < formData.rating
                            ? "fill-blessed-yellow text-blessed-yellow"
                            : "text-golden-beige/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-sacred-white/80 text-sm">
                  {formData.rating} out of 5 stars
                </span>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="comments" className="block text-sm font-medium golden-text">
                Share Your Experience *
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
                rows={5}
                maxLength={500}
                className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 resize-none ${
                  errors.comments
                    ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                    : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                }`}
                placeholder="Tell us about your dining experience (minimum 10 characters)..."
              />
              {errors.comments && (
                <p className="text-divine-red text-sm mt-1">{errors.comments}</p>
              )}
              <div className="text-sacred-white/50 text-sm text-right">
                {formData.comments.length}/500 characters
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full luxury-gradient text-stone-brown font-semibold px-8 py-4 rounded-lg hover-lift sacred-glow text-lg mt-6"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
