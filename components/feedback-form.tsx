"use client"

import type React from "react"
import { useState } from "react"
import { Star, CheckCircle, AlertCircle } from "lucide-react"

type FormErrors = {
  name?: string;
  contact?: string;
  dining_date?: string;
  rating?: string;
  comments?: string;
}

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    rating: 0,
    comments: "",
    dining_date: "",
    order_type: "takeaway"
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      !/^\d{10}$/.test(formData.contact) &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact)
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

    // Rating validation
    if (formData.rating === 0) {
      newErrors.rating = "Please rate your experience"
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
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleRatingChange = (newRating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: newRating,
    }))
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Feedback submitted:", formData)
      setSubmitted(true)

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          contact: "",
          rating: 0,
          comments: "",
          dining_date: "",
          order_type: "takeaway"
        })
        setSubmitted(false)
        setErrors({})
        setIsLoading(false)
      }, 4000)
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setIsLoading(false)
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
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-blessed-yellow text-sm font-bold inline-block mb-4 bg-golden-beige/15 px-4 py-2 rounded-full uppercase tracking-widest">
            💬 Your Voice Matters
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold golden-text mb-6 leading-tight">
            Share Your Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow mx-auto mb-8 rounded-full" />
          <p className="text-lg text-blessed-yellow/90 max-w-2xl mx-auto">
            Your valuable feedback helps us maintain our commitment to excellence and continuously improve your experience.
          </p>
        </div>

        {submitted ? (
          <div className="royal-card p-12 rounded-2xl text-center animate-fade-up backdrop-blur-lg border border-blessed-yellow/40">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blessed-yellow/20 rounded-full blur-lg animate-pulse" />
                <CheckCircle className="w-20 h-20 text-blessed-yellow relative animate-bounce" />
              </div>
            </div>
            <h3 className="text-3xl font-bold golden-text mb-4">Thank You! 🎉</h3>
            <p className="text-sacred-white/90 text-lg mb-6">
              We truly appreciate your valuable feedback. Your comments help us serve you better and maintain our commitment to excellence.
            </p>
            <div className="space-y-2 text-sm text-blessed-yellow/80">
              <p>✓ Feedback recorded successfully</p>
              <p>✓ Our team will review your experience</p>
              <p>✓ We'll use your insights to improve</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="royal-card p-8 sm:p-10 rounded-2xl backdrop-blur-lg space-y-8 animate-fade-up border border-golden-beige/40">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold golden-text">
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
                  disabled={isLoading}
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-divine-red text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Contact Input */}
              <div className="space-y-2">
                <label htmlFor="contact" className="block text-sm font-semibold golden-text">
                  Contact Information *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.contact
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                  placeholder="Email or 10-digit phone"
                />
                {errors.contact && (
                  <p className="text-divine-red text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.contact}
                  </p>
                )}
              </div>

              {/* Dining Date */}
              <div className="space-y-2">
                <label htmlFor="dining_date" className="block text-sm font-semibold golden-text">
                  Visit Date *
                </label>
                <input
                  type="date"
                  id="dining_date"
                  name="dining_date"
                  value={formData.dining_date}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  max={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.dining_date
                      ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                      : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                  }`}
                />
                {errors.dining_date && (
                  <p className="text-divine-red text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.dining_date}
                  </p>
                )}
              </div>

              {/* Order Type */}
              <div className="space-y-2">
                <label htmlFor="order_type" className="block text-sm font-semibold golden-text">
                  Service Type
                </label>
                <select
                  id="order_type"
                  name="order_type"
                  value={formData.order_type}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-black/80 border border-golden-beige/20 rounded-lg text-sacred-white focus:border-blessed-yellow focus:ring-2 focus:ring-blessed-yellow/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="takeaway">Takeaway / Pickup</option>
                  <option value="delivery">Delivery</option>
                  <option value="catering">Catering</option>
                </select>
              </div>
            </div>

            {/* Rating Section */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold golden-text">
                Rate Your Experience *
              </label>
              <div className="flex items-center gap-4 px-6 py-5 bg-gradient-to-br from-stone-brown/40 to-black/40 rounded-lg border border-golden-beige/20 hover:border-blessed-yellow/30 transition-all duration-300">
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleRatingChange(star)
                        }
                      }}
                      disabled={isLoading}
                      className="focus:outline-none transition-all transform hover:scale-125 duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        size={36}
                        className={`transition-all duration-200 cursor-pointer ${
                          star <= formData.rating
                            ? "fill-blessed-yellow text-blessed-yellow drop-shadow-lg scale-110"
                            : "text-golden-beige/30 hover:text-blessed-yellow hover:scale-110"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-sacred-white/80 text-sm ml-4 font-medium whitespace-nowrap">
                  {formData.rating > 0 ? (
                    <span className="text-blessed-yellow font-semibold">{formData.rating} / 5 Stars</span>
                  ) : (
                    <span className="text-sacred-white/60">Select rating</span>
                  )}
                </span>
              </div>
              {errors.rating && (
                <p className="text-divine-red text-sm flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.rating}
                </p>
              )}
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <label htmlFor="comments" className="block text-sm font-semibold golden-text">
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
                disabled={isLoading}
                className={`w-full px-4 py-3 bg-black/80 border rounded-lg text-sacred-white focus:ring-2 transition-all placeholder:text-sacred-white/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.comments
                    ? 'border-divine-red focus:border-divine-red focus:ring-divine-red/20'
                    : 'border-golden-beige/20 focus:border-blessed-yellow focus:ring-blessed-yellow/20'
                }`}
                placeholder="Tell us about your dining experience, food quality, service, and what we can improve..."
              />
              <div className="flex justify-between items-center">
                {errors.comments && (
                  <p className="text-divine-red text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.comments}
                  </p>
                )}
                <div className={`text-sm ml-auto ${
                  formData.comments.length > 400 
                    ? 'text-divine-red font-semibold' 
                    : 'text-sacred-white/50'
                }`}>
                  {formData.comments.length}/500 characters
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full luxury-gradient text-stone-brown font-bold px-8 py-4 rounded-lg text-lg mt-6 transition-all duration-300 ${
                isLoading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover-lift sacred-glow hover:opacity-95'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-stone-brown border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                '✓ Submit Feedback'
              )}
            </button>

            {/* Help Text */}
            <p className="text-center text-sacred-white/60 text-xs">
              Your feedback is valuable and helps us improve our service quality and customer experience.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
