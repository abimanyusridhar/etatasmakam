"use client"

import { useState, useEffect } from "react"
import { Download, Trash2, Eye, Filter, Search, TrendingUp, Star, MessageSquare, AlertCircle, BarChart3, ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

interface Feedback {
  id: string
  userName: string
  userEmail: string
  userPhone: string
  serviceType: string
  expectation: string
  qualityRating: number
  speedRating: number
  orderId: string
  comment: string
  timestamp: string
}

export default function FeedbackDashboard() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [filteredFeedback, setFilteredFeedback] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null)
  const [filterService, setFilterService] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [searchTerm, setSearchTerm] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)
  const [loginError, setLoginError] = useState("")

  const serviceLabels: Record<string, string> = {
    pickup: "🏪 Pickup at Counter",
    delivery: "🚚 24/7 Delivery",
    catering: "🍽️ Party Catering",
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")

    if (!password.trim()) {
      setLoginError("Please enter a password")
      return
    }

    try {
      const response = await fetch("/api/feedback", {
        headers: {
          "Authorization": `Bearer ${password}`,
        },
      })

      if (response.ok) {
        setIsAuthenticated(true)
        fetchFeedback()
      } else if (response.status === 401) {
        setLoginError("Invalid password. Please try again.")
      } else {
        setLoginError("Authentication failed. Please try again.")
      }
    } catch (error) {
      setLoginError("Connection error. Please check your internet.")
      console.error("Auth error:", error)
    }
  }

  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/feedback", {
        headers: {
          "Authorization": `Bearer ${password}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setFeedback(data.data || [])
        applyFilters(data.data || [])
      }
    } catch (error) {
      console.error("Failed to fetch feedback:", error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = (feedbackData: Feedback[]) => {
    let filtered = feedbackData

    if (filterService !== "all") {
      filtered = filtered.filter(f => f.serviceType === filterService)
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(f =>
        f.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.comment?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.qualityRating - a.qualityRating)
    }

    setFilteredFeedback(filtered)
  }

  useEffect(() => {
    if (isAuthenticated) {
      applyFilters(feedback)
    }
  }, [filterService, sortBy, searchTerm, feedback])

  const handleDeleteFeedback = async (id: string) => {
    if (confirm("Are you sure you want to delete this feedback? This action cannot be undone.")) {
      setDeleting(id)
      const updatedFeedback = feedback.filter(f => f.id !== id)
      setFeedback(updatedFeedback)
      setFilteredFeedback(updatedFeedback.filter(f => f.id !== id))
      setDeleting(null)
    }
  }

  const calculateStats = () => {
    return {
      total: feedback.length,
      avgQuality: feedback.length > 0 ? (feedback.reduce((sum, f) => sum + f.qualityRating, 0) / feedback.length).toFixed(1) : "0",
      positive: feedback.filter(f => f.expectation === "yes").length,
      thisMonth: feedback.filter(f => {
        const date = new Date(f.timestamp)
        const now = new Date()
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
      }).length,
    }
  }

  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Service", "Expectation", "Quality Rating", "Speed Rating", "Order ID", "Comment", "Date"]
    const csv = [
      headers.join(","),
      ...filteredFeedback.map(f =>
        [
          f.id,
          f.userName || "N/A",
          f.userEmail || "N/A",
          f.userPhone || "N/A",
          serviceLabels[f.serviceType] || f.serviceType,
          f.expectation,
          f.qualityRating,
          f.speedRating || "N/A",
          f.orderId || "N/A",
          `"${f.comment.replace(/"/g, '""')}"`,
          new Date(f.timestamp).toLocaleString(),
        ].join(",")
      ),
    ].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `feedback-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-brown via-stone-brown/95 to-stone-brown flex items-center justify-center p-4">
        {/* Back to Home Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-golden-beige/40 bg-stone-brown/60 hover:bg-stone-brown/80 text-golden-beige hover:text-blessed-yellow transition-all duration-300"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back to Home</span>
        </Link>

        <div className="bg-gradient-to-br from-stone-brown/80 to-stone-brown/60 border-2 border-golden-beige/40 rounded-3xl p-8 max-w-md w-full shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-blessed-yellow/20 rounded-xl mb-4">
              <BarChart3 size={32} className="text-blessed-yellow" />
            </div>
            <h1 className="text-3xl font-bold text-blessed-yellow mb-2">Admin Dashboard</h1>
            <p className="text-sacred-white/70 text-sm">Feedback Management System</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="password" className="block text-golden-beige font-bold mb-3">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setLoginError("")
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-lg bg-golden-beige text-stone-brown placeholder-stone-brown/50 font-semibold focus:outline-none focus:ring-2 focus:ring-blessed-yellow focus:ring-offset-2 focus:ring-offset-stone-brown/50 transition-all duration-300 shadow-md"
                aria-required="true"
              />
            </div>

            {loginError && (
              <div className="bg-divine-red/20 border-l-4 border-divine-red rounded-lg p-4 flex gap-3">
                <AlertCircle size={20} className="text-divine-red flex-shrink-0 mt-0.5" />
                <p className="text-divine-red text-sm font-medium">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full luxury-gradient text-stone-brown font-bold py-3 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  const stats = calculateStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-brown via-stone-brown/97 to-stone-brown p-6 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Header */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-golden-beige/40 hover:border-golden-beige/70 bg-stone-brown/60 hover:bg-stone-brown/80 text-golden-beige hover:text-blessed-yellow transition-all duration-300"
              >
                <ArrowLeft size={20} />
                <span className="font-semibold">Back to Home</span>
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold golden-text mb-2">Feedback Dashboard</h1>
            <p className="text-sacred-white/70 text-base">Monitor and manage customer feedback in real-time</p>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false)
              setPassword("")
              setLoginError("")
            }}
            className="px-6 py-2 rounded-lg border-2 border-divine-red/60 text-divine-red hover:bg-divine-red/20 font-bold transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="royal-card hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-semibold mb-2">Total Feedback</p>
                <p className="text-4xl font-bold golden-text">{stats.total}</p>
              </div>
              <div className="p-3 bg-golden-beige/20 rounded-lg">
                <MessageSquare size={32} className="text-golden-beige" />
              </div>
            </div>
          </div>

          <div className="royal-card hover-lift bg-gradient-to-br from-divine-red/20 to-divine-red/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-semibold mb-2">Avg Quality</p>
                <p className="text-4xl font-bold text-divine-red">{stats.avgQuality}/5</p>
              </div>
              <div className="p-3 bg-divine-red/20 rounded-lg">
                <Star size={32} className="text-divine-red" />
              </div>
            </div>
          </div>

          <div className="royal-card hover-lift bg-gradient-to-br from-blessing-green/20 to-blessing-green/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-semibold mb-2">Positive Reviews</p>
                <p className="text-4xl font-bold text-blessing-green">{stats.positive}</p>
              </div>
              <div className="p-3 bg-blessing-green/20 rounded-lg">
                <TrendingUp size={32} className="text-blessing-green" />
              </div>
            </div>
          </div>

          <div className="royal-card hover-lift bg-gradient-to-br from-blessed-yellow/20 to-blessed-yellow/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-semibold mb-2">This Month</p>
                <p className="text-4xl font-bold text-blessed-yellow">{stats.thisMonth}</p>
              </div>
              <div className="p-3 bg-blessed-yellow/20 rounded-lg">
                <Filter size={32} className="text-blessed-yellow" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="royal-card mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-3.5 text-sacred-white/50" />
                <input
                  type="text"
                  placeholder="Search by name, email, order ID, or comment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold placeholder-stone-brown/50 focus:outline-none focus:ring-2 focus:ring-blessed-yellow transition-all duration-300 shadow-md"
                  aria-label="Search feedback"
                />
              </div>
            </div>

            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold focus:outline-none focus:ring-2 focus:ring-blessed-yellow transition-all duration-300 shadow-md"
              aria-label="Filter by service"
            >
              <option value="all">All Services</option>
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
              <option value="catering">Catering</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-lg bg-golden-beige text-stone-brown font-semibold focus:outline-none focus:ring-2 focus:ring-blessed-yellow transition-all duration-300 shadow-md"
              aria-label="Sort feedback"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="rating">Highest Rating</option>
            </select>

            <button
              onClick={exportCSV}
              className="px-6 py-3 bg-gradient-to-r from-blessing-green/30 to-blessing-green/20 border-2 border-blessing-green/60 text-blessing-green rounded-lg font-bold hover:from-blessing-green/40 hover:to-blessing-green/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Download size={20} />
              Export CSV
            </button>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sacred-white/70 text-sm font-medium">
              Showing <span className="text-blessed-yellow font-bold">{filteredFeedback.length}</span> of <span className="text-blessed-yellow font-bold">{feedback.length}</span> feedback items
            </p>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-5">
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((item) => (
              <div
                key={item.id}
                className="royal-card hover-lift hover:border-blessed-yellow/60"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex-1">
                    <p className="text-blessed-yellow font-bold text-lg">{serviceLabels[item.serviceType]}</p>
                    <p className="text-sacred-white/90 font-semibold text-base mt-1">👤 {item.userName}</p>
                    <p className="text-sacred-white/60 text-sm mt-1">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedFeedback(item)}
                      aria-label="View feedback details"
                      className="p-2.5 bg-golden-beige/20 border border-golden-beige/50 text-golden-beige rounded-lg hover:bg-golden-beige/30 hover:border-golden-beige/70 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteFeedback(item.id)}
                      disabled={deleting === item.id}
                      aria-label="Delete feedback"
                      className="p-2.5 bg-divine-red/20 border border-divine-red/50 text-divine-red rounded-lg hover:bg-divine-red/30 hover:border-divine-red/70 transition-all duration-300 disabled:opacity-50 shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="bg-stone-brown/60 rounded-lg p-3 border border-golden-beige/20">
                    <p className="text-sacred-white/70 text-xs font-bold mb-1 uppercase">Expectation</p>
                    <p className="text-blessed-yellow font-bold capitalize">{item.expectation}</p>
                  </div>
                  <div className="bg-stone-brown/60 rounded-lg p-3 border border-divine-red/20">
                    <p className="text-sacred-white/70 text-xs font-bold mb-1 uppercase">Quality</p>
                    <p className="text-divine-red font-bold">⭐ {item.qualityRating}/5</p>
                  </div>
                  <div className="bg-stone-brown/60 rounded-lg p-3 border border-blessing-green/20">
                    <p className="text-sacred-white/70 text-xs font-bold mb-1 uppercase">Speed</p>
                    <p className="text-blessing-green font-bold">{item.speedRating ? `⚡ ${item.speedRating}/5` : "N/A"}</p>
                  </div>
                  <div className="bg-stone-brown/60 rounded-lg p-3 border border-blessed-yellow/20">
                    <p className="text-sacred-white/70 text-xs font-bold mb-1 uppercase">Order ID</p>
                    <p className="text-blessed-yellow font-bold text-sm font-mono">{item.orderId || "—"}</p>
                  </div>
                </div>

                {item.comment && (
                  <div className="bg-stone-brown/40 rounded-lg p-4 border-l-4 border-blessed-yellow">
                    <p className="text-sacred-white/90 text-sm leading-relaxed italic">"{item.comment}"</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 royal-card">
              <MessageSquare size={48} className="text-sacred-white/30 mx-auto mb-4" />
              <p className="text-sacred-white/70 text-lg">No feedback found</p>
              <p className="text-sacred-white/50 text-sm mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="royal-card rounded-3xl max-w-lg w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold text-blessed-yellow">Feedback Details</h2>
                <p className="text-sacred-white/60 text-sm mt-2">ID: {selectedFeedback.id}</p>
              </div>
              <button
                onClick={() => setSelectedFeedback(null)}
                aria-label="Close modal"
                className="text-golden-beige hover:text-blessed-yellow bg-stone-brown/60 hover:bg-stone-brown/80 p-2 rounded-lg transition-all text-3xl font-light"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div className="bg-golden-beige/15 border-2 border-golden-beige/30 rounded-xl p-4">
                <p className="text-golden-beige font-bold text-sm uppercase mb-2">Customer Name</p>
                <p className="text-blessed-yellow text-lg font-semibold">{selectedFeedback.userName}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-golden-beige/15 border-2 border-golden-beige/30 rounded-xl p-4">
                  <p className="text-golden-beige font-bold text-sm uppercase mb-2">Email</p>
                  <p className="text-sacred-white/80 text-sm truncate font-mono">{selectedFeedback.userEmail || "N/A"}</p>
                </div>
                <div className="bg-golden-beige/15 border-2 border-golden-beige/30 rounded-xl p-4">
                  <p className="text-golden-beige font-bold text-sm uppercase mb-2">Phone</p>
                  <p className="text-sacred-white/80 text-sm font-mono">{selectedFeedback.userPhone || "N/A"}</p>
                </div>
              </div>

              <div className="bg-golden-beige/15 border-2 border-golden-beige/30 rounded-xl p-4">
                <p className="text-golden-beige font-bold text-sm uppercase mb-2">Service Type</p>
                <p className="text-blessed-yellow text-base font-semibold">{serviceLabels[selectedFeedback.serviceType]}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-divine-red/15 border-2 border-divine-red/30 rounded-xl p-4">
                  <p className="text-sacred-white/80 font-bold text-sm uppercase mb-2">Quality Rating</p>
                  <p className="text-divine-red text-3xl font-bold">⭐ {selectedFeedback.qualityRating}/5</p>
                </div>
                <div className="bg-blessing-green/15 border-2 border-blessing-green/30 rounded-xl p-4">
                  <p className="text-sacred-white/80 font-bold text-sm uppercase mb-2">Speed Rating</p>
                  <p className="text-blessing-green text-3xl font-bold">⚡ {selectedFeedback.speedRating || "N/A"}/5</p>
                </div>
              </div>

              <div className="bg-blessed-yellow/15 border-2 border-blessed-yellow/30 rounded-xl p-4">
                <p className="text-blessed-yellow font-bold text-sm uppercase mb-2">Expectation</p>
                <p className="text-sacred-white/80 text-base font-semibold capitalize">{selectedFeedback.expectation}</p>
              </div>

              {selectedFeedback.orderId && (
                <div className="bg-golden-beige/15 border-2 border-golden-beige/30 rounded-xl p-4">
                  <p className="text-golden-beige font-bold text-sm uppercase mb-2">Order ID</p>
                  <p className="text-sacred-white/80 text-base font-mono">{selectedFeedback.orderId}</p>
                </div>
              )}

              {selectedFeedback.comment && (
                <div className="bg-stone-brown/60 border-2 border-golden-beige/20 rounded-xl p-4">
                  <p className="text-golden-beige font-bold text-sm uppercase mb-3">Comment</p>
                  <p className="text-sacred-white/80 text-base leading-relaxed">{selectedFeedback.comment}</p>
                </div>
              )}

              <div className="bg-stone-brown/60 border-2 border-golden-beige/20 rounded-xl p-4">
                <p className="text-golden-beige font-bold text-sm uppercase mb-2">Submitted On</p>
                <p className="text-sacred-white/80 text-base">{new Date(selectedFeedback.timestamp).toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setSelectedFeedback(null)}
                className="flex-1 px-4 py-3 rounded-lg bg-golden-beige/20 border-2 border-golden-beige/50 text-golden-beige font-bold hover:bg-golden-beige/30 hover:border-golden-beige/70 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDeleteFeedback(selectedFeedback.id)
                  setSelectedFeedback(null)
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-divine-red/20 border-2 border-divine-red/50 text-divine-red font-bold hover:bg-divine-red/30 hover:border-divine-red/70 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
