"use client"

import { useState, useEffect } from "react"
import { Download, Trash2, Eye, Filter, Search, TrendingUp, Star, MessageSquare } from "lucide-react"

interface Feedback {
  id: string
  serviceType: string
  expectation: string
  qualityRating: number
  speedRating: number
  orderId: string
  comment: string
  submittedAt: string
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

  const serviceLabels: Record<string, string> = {
    pickup: "🏪 Pickup at Counter",
    delivery: "🚚 24/7 Delivery",
    catering: "🍽️ Party Catering",
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/feedback", {
        headers: {
          "Authorization": `Bearer ${password}`,
        },
      })

      if (response.ok) {
        setIsAuthenticated(true)
        fetchFeedback()
      } else {
        alert("Invalid password")
      }
    } catch (error) {
      alert("Authentication failed")
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
        setFeedback(data.data)
        applyFilters(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch feedback:", error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = (feedbackData: Feedback[]) => {
    let filtered = feedbackData

    // Filter by service type
    if (filterService !== "all") {
      filtered = filtered.filter(f => f.serviceType === filterService)
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(f =>
        f.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.comment?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
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
    if (confirm("Are you sure you want to delete this feedback?")) {
      setDeleting(id)
      // In production, send DELETE request to API
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
        const date = new Date(f.submittedAt)
        const now = new Date()
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
      }).length,
    }
  }

  const exportCSV = () => {
    const headers = ["ID", "Service", "Expectation", "Quality Rating", "Speed Rating", "Order ID", "Comment", "Date"]
    const csv = [
      headers.join(","),
      ...filteredFeedback.map(f =>
        [
          f.id,
          serviceLabels[f.serviceType] || f.serviceType,
          f.expectation,
          f.qualityRating,
          f.speedRating || "N/A",
          f.orderId || "N/A",
          `"${f.comment.replace(/"/g, '""')}"`,
          new Date(f.submittedAt).toLocaleString(),
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
      <div className="min-h-screen bg-gradient-to-b from-stone-brown to-stone-brown/80 flex items-center justify-center p-4">
        <div className="bg-stone-brown border border-golden-beige/30 rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <h1 className="text-3xl font-bold text-blessed-yellow mb-2 text-center">Feedback Admin</h1>
          <p className="text-sacred-white/60 text-center text-sm mb-6">Secure Dashboard</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-golden-beige font-semibold mb-2">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-lg bg-sacred-white text-stone-brown placeholder-stone-brown/40 font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow"
              />
            </div>
            <button
              type="submit"
              className="w-full luxury-gradient text-stone-brown font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-sacred-white/60 text-xs text-center mt-4">
            Check .env.local for default password
          </p>
        </div>
      </div>
    )
  }

  const stats = calculateStats()

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-brown to-stone-brown/80 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blessed-yellow">Feedback Dashboard</h1>
            <p className="text-sacred-white/60 text-sm mt-1">Manage and analyze customer feedback</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sacred-white/80 hover:text-divine-red transition-colors text-sm font-semibold"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-golden-beige/20 to-golden-beige/10 border border-golden-beige/30 rounded-lg p-6 hover:border-blessed-yellow/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-medium">Total Feedback</p>
                <p className="text-3xl font-bold text-blessed-yellow mt-2">{stats.total}</p>
              </div>
              <MessageSquare size={32} className="text-golden-beige/50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-divine-red/20 to-divine-red/10 border border-divine-red/30 rounded-lg p-6 hover:border-divine-red/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-medium">Avg Quality</p>
                <p className="text-3xl font-bold text-divine-red mt-2">{stats.avgQuality}/5</p>
              </div>
              <Star size={32} className="text-divine-red/50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blessing-green/20 to-blessing-green/10 border border-blessing-green/30 rounded-lg p-6 hover:border-blessing-green/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-medium">Positive</p>
                <p className="text-3xl font-bold text-blessing-green mt-2">{stats.positive}</p>
              </div>
              <TrendingUp size={32} className="text-blessing-green/50" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blessed-yellow/20 to-blessed-yellow/10 border border-blessed-yellow/30 rounded-lg p-6 hover:border-blessed-yellow/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sacred-white/80 text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-blessed-yellow mt-2">{stats.thisMonth}</p>
              </div>
              <Filter size={32} className="text-blessed-yellow/50" />
            </div>
          </div>
        </div>

        {/* Filters & Search - Enhanced */}
        <div className="bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-4 sm:p-6 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-3 text-sacred-white/40" />
                <input
                  type="text"
                  placeholder="Search by Order ID or comment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-sacred-white text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow text-sm"
                />
              </div>
            </div>

            {/* Filter */}
            <div>
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-sacred-white text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow text-sm"
              >
                <option value="all">All Services</option>
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
                <option value="catering">Catering</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-sacred-white text-stone-brown font-medium focus:outline-none focus:ring-2 focus:ring-blessed-yellow text-sm"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>

            {/* Export */}
            <button
              onClick={exportCSV}
              className="px-4 py-2 bg-blessing-green/20 border border-blessing-green/50 text-blessing-green rounded-lg font-semibold hover:bg-blessing-green/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <Download size={18} />
              Export
            </button>
          </div>

          {/* Results info */}
          <p className="text-sacred-white/70 text-xs">
            Showing <span className="font-bold text-blessed-yellow">{filteredFeedback.length}</span> of <span className="font-bold text-blessed-yellow">{feedback.length}</span> feedback items
          </p>
        </div>

        {/* Feedback List - Enhanced Cards */}
        <div className="space-y-4">
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-stone-brown/60 to-stone-brown/40 border border-golden-beige/20 rounded-lg p-4 sm:p-6 hover:border-blessed-yellow/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{serviceLabels[item.serviceType].split(" ")[0]}</span>
                      <p className="text-blessed-yellow font-semibold">{serviceLabels[item.serviceType].split(" ").slice(1).join(" ")}</p>
                    </div>
                    <p className="text-sacred-white/60 text-xs">
                      {new Date(item.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedFeedback(item)}
                      className="p-2 bg-golden-beige/20 border border-golden-beige/40 text-golden-beige rounded-lg hover:bg-golden-beige/30 transition-all duration-300"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteFeedback(item.id)}
                      disabled={deleting === item.id}
                      className="p-2 bg-divine-red/20 border border-divine-red/40 text-divine-red rounded-lg hover:bg-divine-red/30 transition-all duration-300 disabled:opacity-50"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
                  <div className="bg-stone-brown/40 rounded p-3 border border-golden-beige/10">
                    <p className="text-sacred-white/70 text-xs font-medium mb-1">Expectation</p>
                    <p className="text-blessed-yellow font-bold text-sm capitalize">{item.expectation}</p>
                  </div>
                  <div className="bg-stone-brown/40 rounded p-3 border border-divine-red/10">
                    <p className="text-sacred-white/70 text-xs font-medium mb-1">Quality</p>
                    <p className="text-divine-red font-bold text-sm">⭐ {item.qualityRating}/5</p>
                  </div>
                  <div className="bg-stone-brown/40 rounded p-3 border border-blessing-green/10">
                    <p className="text-sacred-white/70 text-xs font-medium mb-1">Speed</p>
                    <p className="text-blessing-green font-bold text-sm">{item.speedRating ? `⚡ ${item.speedRating}/5` : "N/A"}</p>
                  </div>
                  <div className="bg-stone-brown/40 rounded p-3 border border-blessed-yellow/10">
                    <p className="text-sacred-white/70 text-xs font-medium mb-1">Order ID</p>
                    <p className="text-blessed-yellow font-bold text-sm font-mono">{item.orderId || "—"}</p>
                  </div>
                </div>

                {/* Comment */}
                {item.comment && (
                  <div className="bg-stone-brown/20 rounded p-3 border-l-2 border-blessed-yellow">
                    <p className="text-sacred-white/80 text-sm italic">"{item.comment}"</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-stone-brown/60 border border-golden-beige/20 rounded-lg">
              <MessageSquare size={48} className="text-sacred-white/20 mx-auto mb-4" />
              <p className="text-sacred-white/60">No feedback found</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal - Enhanced */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-stone-brown border border-golden-beige/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-blessed-yellow">Feedback Details</h2>
                <p className="text-sacred-white/60 text-sm mt-1">ID: {selectedFeedback.id}</p>
              </div>
              <button
                onClick={() => setSelectedFeedback(null)}
                className="text-golden-beige hover:text-blessed-yellow text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div className="bg-golden-beige/15 border border-golden-beige/30 rounded-lg p-4">
                <p className="text-golden-beige font-semibold text-sm">Service Type</p>
                <p className="text-blessed-yellow text-base mt-2">{serviceLabels[selectedFeedback.serviceType]}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-divine-red/15 border border-divine-red/30 rounded-lg p-4">
                  <p className="text-sacred-white/80 font-semibold text-sm">Quality Rating</p>
                  <p className="text-divine-red text-2xl font-bold mt-2">⭐ {selectedFeedback.qualityRating}/5</p>
                </div>
                <div className="bg-blessing-green/15 border border-blessing-green/30 rounded-lg p-4">
                  <p className="text-sacred-white/80 font-semibold text-sm">Speed Rating</p>
                  <p className="text-blessing-green text-2xl font-bold mt-2">⚡ {selectedFeedback.speedRating || "N/A"}/5</p>
                </div>
              </div>

              <div className="bg-blessed-yellow/15 border border-blessed-yellow/30 rounded-lg p-4">
                <p className="text-blessed-yellow font-semibold text-sm">Expectation</p>
                <p className="text-sacred-white/80 text-base mt-2 capitalize font-medium">{selectedFeedback.expectation}</p>
              </div>

              {selectedFeedback.orderId && (
                <div className="bg-golden-beige/15 border border-golden-beige/30 rounded-lg p-4">
                  <p className="text-golden-beige font-semibold text-sm">Order ID</p>
                  <p className="text-sacred-white/80 text-base mt-2 font-mono">{selectedFeedback.orderId}</p>
                </div>
              )}

              {selectedFeedback.comment && (
                <div className="bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-4">
                  <p className="text-golden-beige font-semibold text-sm">Comment</p>
                  <p className="text-sacred-white/80 text-base mt-2 leading-relaxed">{selectedFeedback.comment}</p>
                </div>
              )}

              <div className="bg-stone-brown/60 border border-golden-beige/20 rounded-lg p-4">
                <p className="text-golden-beige font-semibold text-sm">Submitted</p>
                <p className="text-sacred-white/80 text-base mt-2">{new Date(selectedFeedback.submittedAt).toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedFeedback(null)}
                className="flex-1 px-4 py-3 rounded-lg bg-golden-beige/20 border border-golden-beige/40 text-golden-beige font-semibold hover:bg-golden-beige/30 transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDeleteFeedback(selectedFeedback.id)
                  setSelectedFeedback(null)
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-divine-red/20 border border-divine-red/40 text-divine-red font-semibold hover:bg-divine-red/30 transition-all duration-300"
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
