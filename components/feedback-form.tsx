"use client"

import { useState } from "react"
import { X, Check, MessageSquare, Star, Zap, User, Mail, Phone, AlertCircle } from "lucide-react"

interface FeedbackFormProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function FeedbackForm({ isOpen, onClose, onSuccess }: FeedbackFormProps) {
  const [step, setStep] = useState<"user" | "service" | "expectation" | "quality" | "speed" | "orderId" | "comment" | "success" | "error">("user")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [feedback, setFeedback] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    serviceType: "",
    expectation: "",
    qualityRating: 0,
    speedRating: 0,
    orderId: "",
    comment: "",
  })

  const serviceTypes = [
    { id: "pickup", label: "Pickup at Counter", icon: "🏪" },
    { id: "delivery", label: "24/7 Delivery", icon: "🚚" },
    { id: "catering", label: "Party Catering", icon: "🍽️" },
  ]

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!feedback.userName.trim()) {
      setError("Please enter your name")
      return
    }

    if (feedback.userEmail && !isValidEmail(feedback.userEmail)) {
      setError("Please enter a valid email address")
      return
    }

    setStep("service")
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleServiceSelect = (serviceId: string) => {
    setFeedback({ ...feedback, serviceType: serviceId })
    setStep("expectation")
  }

  const handleExpectation = (value: string) => {
    setFeedback({ ...feedback, expectation: value })
    setStep("quality")
  }

  const handleQualityRating = (rating: number) => {
    setFeedback({ ...feedback, qualityRating: rating })
    // Skip speed rating for catering, go to orderId
    if (feedback.serviceType === "catering") {
      setStep("orderId")
    } else {
      setStep("speed")
    }
  }

  const handleSpeedRating = (rating: number) => {
    setFeedback({ ...feedback, speedRating: rating })
    setStep("orderId")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Validate all required fields
      if (!feedback.userName.trim()) {
        throw new Error("Name is required")
      }

      if (!feedback.serviceType) {
        throw new Error("Service type is required")
      }

      if (feedback.qualityRating < 1) {
        throw new Error("Quality rating is required")
      }

      // Prepare data
      const submitData = {
        userName: feedback.userName.trim(),
        userEmail: feedback.userEmail.trim(),
        userPhone: feedback.userPhone.trim(),
        serviceType: feedback.serviceType,
        expectation: feedback.expectation,
        qualityRating: feedback.qualityRating,
        speedRating: feedback.speedRating,
        orderId: feedback.orderId.trim(),
        comment: feedback.comment.trim(),
      }

      // Submit immediately without waiting for full response processing
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit feedback")
      }

      console.log("Feedback submitted successfully:", data)
      setStep("success")

      setTimeout(() => {
        onClose()
        onSuccess?.()
        
        // Reset form
        setStep("user")
        setFeedback({
          userName: "",
          userEmail: "",
          userPhone: "",
          serviceType: "",
          expectation: "",
          qualityRating: 0,
          speedRating: 0,
          orderId: "",
          comment: "",
        })
        setLoading(false)
        setError("")
      }, 2000)
    } catch (error) {
      console.error("Feedback submission error:", error)
      
      // Check if it's a timeout
      if (error instanceof Error && error.name === "AbortError") {
        setError("Request took too long. Please try again.")
      } else {
        setError(error instanceof Error ? error.message : "An error occurred")
      }
      
      setStep("error")
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
      <div className="bg-gradient-to-br from-stone-brown via-stone-brown to-stone-brown/95 border-2 border-golden-beige/40 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-golden-beige/30 bg-gradient-to-r from-stone-brown/90 via-stone-brown to-stone-brown/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blessed-yellow/20 rounded-lg">
              <MessageSquare size={24} className="text-blessed-yellow" />
            </div>
            <h3 className="text-xl font-bold text-blessed-yellow">Share Your Feedback</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close feedback form"
            className="text-golden-beige hover:text-blessed-yellow bg-stone-brown/60 hover:bg-stone-brown/80 p-2 rounded-lg transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[calc(75vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-golden-beige/40 scrollbar-track-stone-brown/20">
          
          {/* Error Alert */}
          {error && (
            <div className="bg-divine-red/20 border-l-4 border-divine-red rounded-lg p-4 flex gap-3 animate-fade-in">
              <AlertCircle size={20} className="text-divine-red flex-shrink-0 mt-0.5" />
              <p className="text-divine-red text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Step 0: User Info */}
          {step === "user" && (
            <form onSubmit={handleUserSubmit} className="space-y-5 animate-fade-in">
              <p className="text-blessed-yellow font-bold text-lg">
                Tell us who you are
              </p>

              <div>
                <label htmlFor="userName" className="block">
                  <div className="flex items-center gap-2 text-golden-beige font-semibold mb-3">
                    <User size={18} />
                    <span>Your Name *</span>
                  </div>
                  <input
                    id="userName"
                    type="text"
                    placeholder="John Doe"
                    value={feedback.userName}
                    onChange={(e) => {
                      setFeedback({ ...feedback, userName: e.target.value })
                      setError("")
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold placeholder-stone-brown/50 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 shadow-md hover:shadow-lg"
                    required
                    aria-required="true"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="userEmail" className="block">
                  <div className="flex items-center gap-2 text-golden-beige font-semibold mb-3">
                    <Mail size={18} />
                    <span>Email</span>
                    <span className="text-xs text-sacred-white/60">(Optional)</span>
                  </div>
                  <input
                    id="userEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={feedback.userEmail}
                    onChange={(e) => {
                      setFeedback({ ...feedback, userEmail: e.target.value })
                      setError("")
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold placeholder-stone-brown/50 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 shadow-md hover:shadow-lg"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="userPhone" className="block">
                  <div className="flex items-center gap-2 text-golden-beige font-semibold mb-3">
                    <Phone size={18} />
                    <span>Phone</span>
                    <span className="text-xs text-sacred-white/60">(Optional)</span>
                  </div>
                  <input
                    id="userPhone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={feedback.userPhone}
                    onChange={(e) => {
                      setFeedback({ ...feedback, userPhone: e.target.value })
                      setError("")
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold placeholder-stone-brown/50 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 shadow-md hover:shadow-lg"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!feedback.userName.trim()}
                className="w-full px-4 py-3 rounded-lg luxury-gradient text-stone-brown font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                Continue to Next →
              </button>
            </form>
          )}

          {/* Step 1: Service Type Selection */}
          {step === "service" && (
            <div className="space-y-5 animate-fade-in">
              <p className="text-blessed-yellow font-bold text-lg">
                Which service did you use?
              </p>
              <div className="space-y-3">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    aria-label={`Select ${service.label}`}
                    className="w-full p-4 rounded-xl border-2 border-golden-beige/40 bg-gradient-to-r from-stone-brown/70 to-stone-brown/40 hover:from-golden-beige/20 hover:to-golden-beige/10 hover:border-blessed-yellow/70 transition-all duration-300 text-left font-semibold flex items-center gap-4 text-blessed-yellow shadow-md hover:shadow-lg transform hover:translate-x-1"
                  >
                    <span className="text-3xl">{service.icon}</span>
                    <span className="flex-1">{service.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Expectation */}
          {step === "expectation" && (
            <div className="space-y-5 animate-fade-in">
              <p className="text-blessed-yellow font-bold text-lg">
                Did your order meet expectations?
              </p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleExpectation("yes")}
                  className="p-4 rounded-xl border-2 border-blessing-green/50 bg-blessing-green/15 hover:bg-blessing-green/30 hover:border-blessing-green/80 transition-all duration-300 text-blessing-green font-bold text-sm shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label="Yes"
                >
                  👍 Yes
                </button>
                <button
                  onClick={() => handleExpectation("neutral")}
                  className="p-4 rounded-xl border-2 border-blessed-yellow/50 bg-blessed-yellow/15 hover:bg-blessed-yellow/30 hover:border-blessed-yellow/80 transition-all duration-300 text-blessed-yellow font-bold text-sm shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label="Neutral"
                >
                  😐 Okay
                </button>
                <button
                  onClick={() => handleExpectation("no")}
                  className="p-4 rounded-xl border-2 border-divine-red/50 bg-divine-red/15 hover:bg-divine-red/30 hover:border-divine-red/80 transition-all duration-300 text-divine-red font-bold text-sm shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label="No"
                >
                  👎 No
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Food Quality Rating */}
          {step === "quality" && (
            <div className="space-y-5 animate-fade-in">
              <p className="text-blessed-yellow font-bold text-lg">
                Rate the Food Quality *
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleQualityRating(star)}
                    aria-label={`Rate ${star} stars`}
                    className="transition-all duration-300 hover:scale-135 focus:outline-none p-2 hover:drop-shadow-lg"
                  >
                    <Star
                      size={44}
                      className={`${
                        star <= feedback.qualityRating
                          ? "fill-divine-red text-divine-red drop-shadow-lg"
                          : "text-golden-beige/40 hover:text-golden-beige/70"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-blessed-yellow font-semibold text-base">
                {feedback.qualityRating > 0 ? `${feedback.qualityRating} / 5 stars` : "Select a rating"}
              </p>
            </div>
          )}

          {/* Step 4: Delivery/Pickup Speed Rating */}
          {step === "speed" && (
            <div className="space-y-5 animate-fade-in">
              <p className="text-blessed-yellow font-bold text-lg">
                Rate Delivery Speed
              </p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleSpeedRating(star)}
                    aria-label={`Rate speed ${star} stars`}
                    className="transition-all duration-300 hover:scale-135 focus:outline-none p-2 hover:drop-shadow-lg"
                  >
                    <Zap
                      size={44}
                      className={`${
                        star <= feedback.speedRating
                          ? "fill-blessing-green text-blessing-green drop-shadow-lg"
                          : "text-golden-beige/40 hover:text-golden-beige/70"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-blessed-yellow font-semibold text-base">
                {feedback.speedRating > 0 ? `${feedback.speedRating} / 5 stars` : "Select a rating"}
              </p>
            </div>
          )}

          {/* Step 5: Order ID (Optional) */}
          {step === "orderId" && (
            <form onSubmit={(e) => { e.preventDefault(); setStep("comment") }} className="space-y-5 animate-fade-in">
              <div>
                <label htmlFor="orderId" className="block">
                  <p className="text-blessed-yellow font-bold text-lg mb-2">
                    Order ID / Receipt Number
                  </p>
                  <p className="text-sacred-white/70 text-sm mb-3">
                    (Optional - Helps us link feedback to your order)
                  </p>
                  <input
                    id="orderId"
                    type="text"
                    placeholder="e.g., ORD-2024-12345"
                    value={feedback.orderId}
                    onChange={(e) => setFeedback({ ...feedback, orderId: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold placeholder-stone-brown/50 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 shadow-md hover:shadow-lg"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg luxury-gradient text-stone-brown font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Continue to Comments →
              </button>
            </form>
          )}

          {/* Step 6: Comments */}
          {step === "comment" && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
              <label htmlFor="comment" className="block">
                <p className="text-blessed-yellow font-bold text-lg mb-2">
                  Additional Comments
                </p>
                <p className="text-sacred-white/70 text-sm mb-3">
                  (Optional - Share your thoughts to help us improve)
                </p>
                <textarea
                  id="comment"
                  value={feedback.comment}
                  onChange={(e) => {
                    setFeedback({ ...feedback, comment: e.target.value.slice(0, 500) })
                    setError("")
                  }}
                  placeholder="Tell us what we did well or what could be better..."
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-lg bg-black/80 text-sacred-white font-medium placeholder-sacred-white/40 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 resize-none shadow-md hover:shadow-lg border border-blessed-yellow/30"
                  rows={5}
                />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sacred-white/70 text-sm font-medium">
                    {feedback.comment.length}/500 characters
                  </p>
                  <span className={`text-sm font-bold ${
                    feedback.comment.length > 450 
                      ? "text-divine-red" 
                      : "text-blessing-green"
                  }`}>
                    {500 - feedback.comment.length} left
                  </span>
                </div>
              </label>

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading || feedback.qualityRating < 1}
                  className="w-full luxury-gradient text-stone-brown font-bold py-3 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Feedback"}
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading || feedback.qualityRating < 1}
                  className="w-full text-blessed-yellow border-2 border-blessed-yellow/60 bg-stone-brown/60 px-4 py-3 rounded-lg font-semibold hover:bg-blessed-yellow/15 hover:border-blessed-yellow/80 transition-all duration-300 disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  Submit Without Comment
                </button>
              </div>
            </form>
          )}

          {/* Step: Success Message */}
          {step === "success" && (
            <div className="space-y-6 text-center animate-fade-in py-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-blessing-green/25 border-4 border-blessing-green flex items-center justify-center animate-pulse shadow-lg">
                <Check size={56} className="text-blessing-green" />
              </div>
              <div className="space-y-3">
                <p className="text-blessed-yellow font-bold text-2xl">
                  Thank You, {feedback.userName}!
                </p>
                <p className="text-sacred-white/80 text-base">
                  Your feedback has been received and will help us serve you better.
                </p>
                <p className="text-blessing-green text-sm font-semibold">
                  ✓ We appreciate your valuable input
                </p>
              </div>
              <div className="pt-4 border-t-2 border-golden-beige/30">
                <p className="text-sacred-white/60 text-sm">
                  Closing in a moment...
                </p>
              </div>
            </div>
          )}

          {/* Error Step */}
          {step === "error" && (
            <div className="space-y-6 text-center animate-fade-in py-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-divine-red/25 border-4 border-divine-red flex items-center justify-center shadow-lg">
                <X size={56} className="text-divine-red" />
              </div>
              <div className="space-y-3">
                <p className="text-divine-red font-bold text-2xl">
                  Oops!
                </p>
                <p className="text-sacred-white/80 text-base">
                  {error || "We encountered an error while saving your feedback."}
                </p>
                <p className="text-blessing-green text-sm font-semibold">
                  Please try again
                </p>
              </div>
              <button
                onClick={() => {
                  setStep("comment")
                  setLoading(false)
                  setError("")
                }}
                className="w-full luxury-gradient text-stone-brown font-bold py-3 rounded-lg text-base hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        {step !== "success" && (
          <div className="px-6 py-4 bg-gradient-to-t from-stone-brown/80 to-transparent border-t border-golden-beige/20 sticky bottom-0">
            <div className="flex gap-1.5">
              {["user", "service", "expectation", "quality", "speed", "orderId", "comment"].map((s) => {
                const steps = ["user", "service", "expectation", "quality", "speed", "orderId", "comment"]
                const currentIndex = steps.indexOf(step)
                const stepIndex = steps.indexOf(s as any)
                
                return (
                  <div
                    key={s}
                    className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                      stepIndex < currentIndex
                        ? "bg-gradient-to-r from-blessing-green to-blessing-green/60"
                        : stepIndex === currentIndex
                        ? "bg-gradient-to-r from-blessed-yellow to-golden-beige"
                        : "bg-golden-beige/20"
                    }`}
                  />
                )
              })}
            </div>
            <p className="text-center text-sacred-white/70 text-xs mt-4 font-medium">
              Step {["user", "service", "expectation", "quality", "speed", "orderId", "comment"].indexOf(step) + 1} of 7 • Takes ~2 minutes
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
