"use client"

import { useState } from "react"
import { X, Check, MessageSquare, Star, Zap } from "lucide-react"

interface FeedbackFormProps {
  isOpen: boolean
  onClose: () => void
}

export function FeedbackForm({ isOpen, onClose }: FeedbackFormProps) {
  const [step, setStep] = useState<"service" | "expectation" | "quality" | "speed" | "orderId" | "comment" | "success" | "error">("service")
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({
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
    
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...feedback,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit feedback")
      }

      const data = await response.json()
      console.log("Feedback stored:", data)
      
      setStep("success")
      setTimeout(() => {
        onClose()
        setStep("service")
        setFeedback({
          serviceType: "",
          expectation: "",
          qualityRating: 0,
          speedRating: 0,
          orderId: "",
          comment: "",
        })
        setLoading(false)
      }, 3000)
    } catch (error) {
      console.error("Feedback submission error:", error)
      setStep("error")
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-stone-brown border border-golden-beige/30 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-golden-beige/20 bg-stone-brown/95">
          <div className="flex items-center gap-2">
            <MessageSquare size={24} className="text-blessed-yellow" />
            <h3 className="text-lg sm:text-xl font-bold text-blessed-yellow">Quick Feedback</h3>
          </div>
          <button
            onClick={onClose}
            className="text-golden-beige hover:text-blessed-yellow transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Step 1: Service Type Selection */}
          {step === "service" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-base sm:text-lg">
                Which service did you use?
              </p>
              <div className="space-y-2">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="w-full p-4 rounded-lg border-2 border-golden-beige/30 bg-stone-brown/60 hover:bg-golden-beige/15 hover:border-blessed-yellow/60 transition-all duration-300 text-left font-semibold flex items-center gap-3 text-blessed-yellow"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Expectation */}
          {step === "expectation" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-base sm:text-lg">
                Did your order meet expectations?
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  onClick={() => handleExpectation("yes")}
                  className="p-3 sm:p-4 rounded-lg border-2 border-blessing-green/40 bg-blessing-green/10 hover:bg-blessing-green/20 hover:border-blessing-green/60 transition-all duration-300 text-blessing-green font-semibold text-sm sm:text-base"
                >
                  👍 Yes
                </button>
                <button
                  onClick={() => handleExpectation("neutral")}
                  className="p-3 sm:p-4 rounded-lg border-2 border-blessed-yellow/40 bg-blessed-yellow/10 hover:bg-blessed-yellow/20 hover:border-blessed-yellow/60 transition-all duration-300 text-blessed-yellow font-semibold text-sm sm:text-base"
                >
                  😐 Okay
                </button>
                <button
                  onClick={() => handleExpectation("no")}
                  className="p-3 sm:p-4 rounded-lg border-2 border-divine-red/40 bg-divine-red/10 hover:bg-divine-red/20 hover:border-divine-red/60 transition-all duration-300 text-divine-red font-semibold text-sm sm:text-base"
                >
                  👎 No
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Food Quality Rating */}
          {step === "quality" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-base sm:text-lg">
                Rate the Food Quality
              </p>
              <div className="flex justify-center gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleQualityRating(star)}
                    className="transition-all duration-300 hover:scale-125 focus:outline-none p-1"
                  >
                    <Star
                      size={40}
                      className={`${
                        star <= feedback.qualityRating
                          ? "fill-divine-red text-divine-red"
                          : "text-golden-beige/30 hover:text-golden-beige/60"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-sacred-white/80 text-sm">
                {feedback.qualityRating > 0 && `${feedback.qualityRating} / 5 stars`}
              </p>
            </div>
          )}

          {/* Step 4: Delivery/Pickup Speed Rating */}
          {step === "speed" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-base sm:text-lg">
                Rate Delivery Speed
              </p>
              <div className="flex justify-center gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleSpeedRating(star)}
                    className="transition-all duration-300 hover:scale-125 focus:outline-none p-1"
                  >
                    <Zap
                      size={40}
                      className={`${
                        star <= feedback.speedRating
                          ? "fill-blessing-green text-blessing-green"
                          : "text-golden-beige/30 hover:text-golden-beige/60"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-sacred-white/80 text-sm">
                {feedback.speedRating > 0 && `${feedback.speedRating} / 5 stars`}
              </p>
            </div>
          )}

          {/* Step 5: Order ID (Optional) */}
          {step === "orderId" && (
            <form onSubmit={(e) => { e.preventDefault(); setStep("comment") }} className="space-y-4 animate-fade-in">
              <div>
                <label className="block">
                  <p className="text-blessed-yellow font-semibold text-base sm:text-lg mb-2">
                    Order ID / Receipt Number
                  </p>
                  <p className="text-sacred-white/60 text-xs sm:text-sm mb-3">
                    (Optional - Helps us link feedback to your order)
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., ORD-2024-12345"
                    value={feedback.orderId}
                    onChange={(e) => setFeedback({ ...feedback, orderId: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-sacred-white text-stone-brown font-semibold placeholder-stone-brown/40 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown transition-all duration-300 text-base sm:text-lg"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 sm:py-4 rounded-lg bg-blessing-green/20 border-2 border-blessing-green/60 text-blessing-green font-bold text-sm sm:text-base hover:bg-blessing-green/30 hover:border-blessing-green/80 transition-all duration-300"
              >
                Continue →
              </button>
            </form>
          )}

          {/* Step 6: Comments */}
          {step === "comment" && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <label className="block">
                <p className="text-blessed-yellow font-semibold text-base sm:text-lg mb-2">
                  Additional Comments
                </p>
                <p className="text-sacred-white/60 text-xs sm:text-sm mb-3">
                  (Optional - Share your thoughts to help us improve)
                </p>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback({ ...feedback, comment: e.target.value.slice(0, 500) })}
                  placeholder="Tell us what we did well or what could be better..."
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-lg bg-sacred-white text-stone-brown font-medium placeholder-stone-brown/40 focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown transition-all duration-300 resize-none text-base"
                  rows={5}
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sacred-white/60 text-xs font-medium">
                    {feedback.comment.length}/500 characters
                  </p>
                  <span className={`text-xs font-bold ${
                    feedback.comment.length > 450 
                      ? "text-divine-red" 
                      : "text-blessing-green"
                  }`}>
                    {500 - feedback.comment.length} available
                  </span>
                </div>
              </label>

              {/* Submit Buttons */}
              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full luxury-gradient text-stone-brown font-bold py-3 sm:py-4 rounded-lg text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Feedback
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit({ preventDefault: () => {} } as React.FormEvent)
                  }}
                  className="w-full text-sacred-white/90 border-2 border-golden-beige/50 bg-stone-brown/40 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-golden-beige/15 hover:border-golden-beige/70 transition-all duration-300"
                >
                  Submit Without Comment
                </button>
              </div>
            </form>
          )}

          {/* Step 7: Success Message */}
          {step === "success" && (
            <div className="space-y-6 text-center animate-fade-in py-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-blessing-green/20 border-4 border-blessing-green flex items-center justify-center animate-pulse">
                <Check size={48} className="text-blessing-green" />
              </div>
              <div className="space-y-3">
                <p className="text-blessed-yellow font-bold text-xl sm:text-2xl">
                  Thank You!
                </p>
                <p className="text-sacred-white/80 text-sm sm:text-base">
                  Your feedback has been received and will help us serve you better.
                </p>
                <p className="text-blessing-green text-xs sm:text-sm font-semibold">
                  ✓ We appreciate your valuable input
                </p>
              </div>
              <div className="pt-4 border-t border-golden-beige/20">
                <p className="text-sacred-white/60 text-xs">
                  Closing in a moment...
                </p>
              </div>
            </div>
          )}

          {/* Error Step */}
          {step === "error" && (
            <div className="space-y-6 text-center animate-fade-in py-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-divine-red/20 border-4 border-divine-red flex items-center justify-center">
                <X size={48} className="text-divine-red" />
              </div>
              <div className="space-y-3">
                <p className="text-divine-red font-bold text-xl sm:text-2xl">
                  Oops!
                </p>
                <p className="text-sacred-white/80 text-sm sm:text-base">
                  We encountered an error while saving your feedback.
                </p>
                <p className="text-blessing-green text-xs sm:text-sm font-semibold">
                  Please try again later
                </p>
              </div>
              <button
                onClick={() => {
                  setStep("comment")
                  setLoading(false)
                }}
                className="w-full luxury-gradient text-stone-brown font-bold py-3 sm:py-4 rounded-lg text-base hover:shadow-lg transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        {step !== "success" && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="flex gap-1">
              {["service", "expectation", "quality", "speed", "orderId", "comment"].map((s) => {
                const steps = ["service", "expectation", "quality", "speed", "orderId", "comment"]
                const currentIndex = steps.indexOf(step)
                const stepIndex = steps.indexOf(s as any)
                
                return (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      stepIndex < currentIndex
                        ? "bg-blessing-green"
                        : stepIndex === currentIndex
                        ? "bg-blessed-yellow"
                        : "bg-golden-beige/20"
                    }`}
                  />
                )
              })}
            </div>
            <p className="text-center text-sacred-white/60 text-xs mt-3 sm:mt-4">
              Takes ~1 minute • Your feedback matters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
