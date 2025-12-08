"use client"

import { useState } from "react"
import { X, Check, MessageSquare, Star, Zap } from "lucide-react"
import { Footer } from "@/components/footer"

interface FeedbackFormProps {
  isOpen: boolean
  onClose: () => void
}

export function FeedbackForm({ isOpen, onClose }: FeedbackFormProps) {
  const [step, setStep] = useState<"expectation" | "quality" | "speed" | "comment" | "success">("expectation")
  const [feedback, setFeedback] = useState({
    expectation: "",
    quality: 0,
    speed: 0,
    comment: "",
  })

  const handleExpectation = (value: string) => {
    setFeedback({ ...feedback, expectation: value })
    setStep("quality")
  }

  const handleQuality = (value: number) => {
    setFeedback({ ...feedback, quality: value })
    setStep("speed")
  }

  const handleSpeed = (value: number) => {
    setFeedback({ ...feedback, speed: value })
    setStep("comment")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Submit feedback to backend
    try {
      // Replace with your actual API endpoint
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...feedback,
          timestamp: new Date().toISOString(),
        }),
      })
      
      setStep("success")
      setTimeout(() => {
        onClose()
        setStep("expectation")
        setFeedback({ expectation: "", quality: 0, speed: 0, comment: "" })
      }, 2000)
    } catch (error) {
      console.error("Feedback submission error:", error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-stone-brown border border-golden-beige/30 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-golden-beige/20 bg-stone-brown/95">
          <div className="flex items-center gap-2">
            <MessageSquare size={24} className="text-blessed-yellow" />
            <h3 className="text-xl font-bold text-blessed-yellow">Quick Feedback</h3>
          </div>
          <button
            onClick={onClose}
            className="text-golden-beige hover:text-blessed-yellow transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Step 1: Expectation */}
          {step === "expectation" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-lg">
                Did your order meet expectations?
              </p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleExpectation("yes")}
                  className="p-4 rounded-lg border-2 border-blessing-green/40 bg-blessing-green/10 hover:bg-blessing-green/20 hover:border-blessing-green/60 transition-all duration-300 text-blessing-green font-semibold text-sm"
                >
                  👍 Yes
                </button>
                <button
                  onClick={() => handleExpectation("neutral")}
                  className="p-4 rounded-lg border-2 border-blessed-yellow/40 bg-blessed-yellow/10 hover:bg-blessed-yellow/20 hover:border-blessed-yellow/60 transition-all duration-300 text-blessed-yellow font-semibold text-sm"
                >
                  😐 Okay
                </button>
                <button
                  onClick={() => handleExpectation("no")}
                  className="p-4 rounded-lg border-2 border-divine-red/40 bg-divine-red/10 hover:bg-divine-red/20 hover:border-divine-red/60 transition-all duration-300 text-divine-red font-semibold text-sm"
                >
                  👎 No
                </button>
              </div>
              <p className="text-sacred-white/60 text-xs pt-2">
                Takes 30 seconds • Your feedback helps us improve
              </p>
            </div>
          )}

          {/* Step 2: Food Quality */}
          {step === "quality" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-lg">
                Rate the Food Quality
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleQuality(star)}
                    className="transition-all duration-300 hover:scale-125 focus:outline-none"
                  >
                    <Star
                      size={40}
                      className={`${
                        star <= feedback.quality
                          ? "fill-divine-red text-divine-red"
                          : "text-golden-beige/30"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-sacred-white/80 text-sm">
                {feedback.quality > 0 && `${feedback.quality} / 5 stars`}
              </p>
            </div>
          )}

          {/* Step 3: Delivery Speed */}
          {step === "speed" && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-blessed-yellow font-semibold text-lg">
                Rate Delivery Speed
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleSpeed(star)}
                    className="transition-all duration-300 hover:scale-125 focus:outline-none"
                  >
                    <Zap
                      size={40}
                      className={`${
                        star <= feedback.speed
                          ? "fill-blessing-green text-blessing-green"
                          : "text-golden-beige/30"
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-sacred-white/80 text-sm">
                {feedback.speed > 0 && `${feedback.speed} / 5 stars`}
              </p>
            </div>
          )}

          {/* Step 4: Optional Comment */}
          {step === "comment" && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <label className="block">
                <p className="text-blessed-yellow font-semibold text-lg mb-3">
                  Anything else? (Optional)
                </p>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback({ ...feedback, comment: e.target.value.slice(0, 200) })}
                  placeholder="Tell us what could be better..."
                  maxLength={200}
                  className="w-full px-4 py-3 rounded-lg bg-sacred-white/95 text-stone-brown placeholder-stone-brown/50 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow/60 transition-all duration-300 resize-none"
                  rows={4}
                />
                <p className="text-sacred-white/60 text-xs mt-2">
                  {feedback.comment.length}/200 characters
                </p>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full luxury-gradient text-stone-brown font-semibold py-3 rounded-lg text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Feedback
              </button>

              {/* Skip Button */}
              <button
                type="button"
                onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
                className="w-full text-sacred-white/80 border border-golden-beige/30 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-golden-beige/10 transition-all duration-300"
              >
                Submit Without Comment
              </button>
            </form>
          )}

          {/* Step 5: Success */}
          {step === "success" && (
            <div className="space-y-4 text-center animate-fade-in py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blessing-green/20 border-2 border-blessing-green flex items-center justify-center">
                <Check size={32} className="text-blessing-green" />
              </div>
              <p className="text-blessed-yellow font-semibold text-lg">
                Thank You!
              </p>
              <p className="text-sacred-white/80 text-sm">
                Your feedback helps us serve you better
              </p>
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        {step !== "success" && (
          <div className="px-6 pb-6">
            <div className="flex gap-1">
              {["expectation", "quality", "speed", "comment"].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    s === step
                      ? "bg-blessed-yellow"
                      : ["expectation", "quality", "speed", "comment"].indexOf(s) <
                        ["expectation", "quality", "speed", "comment"].indexOf(step)
                      ? "bg-blessing-green"
                      : "bg-golden-beige/20"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
