import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const FEEDBACK_FILE = path.join(process.cwd(), "data", "feedback.json")

// Ensure data directory exists
async function ensureDataDir() {
  const dir = path.dirname(FEEDBACK_FILE)
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (error) {
    console.error("Error creating data directory:", error)
  }
}

// Read feedback from file
async function readFeedback(): Promise<any[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(FEEDBACK_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    // File doesn't exist yet, return empty array
    return []
  }
}

// Write feedback to file
async function writeFeedback(data: any[]) {
  try {
    await ensureDataDir()
    await fs.writeFile(FEEDBACK_FILE, JSON.stringify(data, null, 2), "utf-8")
  } catch (error) {
    console.error("Error writing feedback:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.userName || !body.userName.trim()) {
      return NextResponse.json(
        { success: false, message: "Customer name is required" },
        { status: 400 }
      )
    }

    if (!body.serviceType) {
      return NextResponse.json(
        { success: false, message: "Service type is required" },
        { status: 400 }
      )
    }

    if (body.qualityRating < 1 || body.qualityRating > 5) {
      return NextResponse.json(
        { success: false, message: "Invalid quality rating" },
        { status: 400 }
      )
    }

    // Create feedback entry
    const feedbackEntry = {
      id: `FB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      userName: body.userName.trim(),
      userEmail: body.userEmail?.trim() || "",
      userPhone: body.userPhone?.trim() || "",
      serviceType: body.serviceType,
      expectation: body.expectation || "not-specified",
      qualityRating: parseInt(body.qualityRating) || 0,
      speedRating: parseInt(body.speedRating) || 0,
      orderId: body.orderId?.trim() || "",
      comment: body.comment?.trim().slice(0, 500) || "",
      timestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "active",
    }

    // Read existing feedback
    const feedbackStore = await readFeedback()

    // Add new feedback
    feedbackStore.push(feedbackEntry)

    // Sort by newest first
    feedbackStore.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )

    // Write back to file
    await writeFeedback(feedbackStore)

    console.log(`Feedback submitted: ${feedbackEntry.id}`)

    return NextResponse.json(
      {
        success: true,
        message: "Feedback submitted successfully",
        data: feedbackEntry,
        totalFeedback: feedbackStore.length,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Feedback submission error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit feedback",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized - Missing authentication token" },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD environment variable not set")
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      )
    }

    if (token !== adminPassword) {
      return NextResponse.json(
        { success: false, message: "Unauthorized - Invalid credentials" },
        { status: 401 }
      )
    }

    // Read feedback from file
    const feedbackStore = await readFeedback()

    // Calculate stats
    const stats = {
      total: feedbackStore.length,
      avgQuality:
        feedbackStore.length > 0
          ? (feedbackStore.reduce((sum, f) => sum + f.qualityRating, 0) /
              feedbackStore.length
            ).toFixed(1)
          : 0,
      avgSpeed:
        feedbackStore.length > 0
          ? (
              feedbackStore.filter((f) => f.speedRating > 0).reduce(
                (sum, f) => sum + f.speedRating,
                0
              ) /
              feedbackStore.filter((f) => f.speedRating > 0).length
            ).toFixed(1)
          : 0,
      positive: feedbackStore.filter((f) => f.expectation === "yes").length,
      neutral: feedbackStore.filter((f) => f.expectation === "neutral").length,
      negative: feedbackStore.filter((f) => f.expectation === "no").length,
    }

    return NextResponse.json({
      success: true,
      data: feedbackStore,
      stats: stats,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Feedback retrieval error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch feedback",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)

    if (token !== adminPassword) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      )
    }

    const { id } = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Feedback ID is required" },
        { status: 400 }
      )
    }

    // Read feedback
    let feedbackStore = await readFeedback()
    const initialLength = feedbackStore.length

    // Filter out the feedback to delete
    feedbackStore = feedbackStore.filter((f) => f.id !== id)

    if (feedbackStore.length === initialLength) {
      return NextResponse.json(
        { success: false, message: "Feedback not found" },
        { status: 404 }
      )
    }

    // Write back to file
    await writeFeedback(feedbackStore)

    console.log(`Feedback deleted: ${id}`)

    return NextResponse.json({
      success: true,
      message: "Feedback deleted successfully",
      remaining: feedbackStore.length,
    })
  } catch (error) {
    console.error("Feedback deletion error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete feedback",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)

    if (token !== adminPassword) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      )
    }

    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "ID and status are required" },
        { status: 400 }
      )
    }

    // Read feedback
    const feedbackStore = await readFeedback()
    const feedback = feedbackStore.find((f) => f.id === id)

    if (!feedback) {
      return NextResponse.json(
        { success: false, message: "Feedback not found" },
        { status: 404 }
      )
    }

    feedback.status = status
    feedback.updatedAt = new Date().toISOString()

    // Write back to file
    await writeFeedback(feedbackStore)

    return NextResponse.json({
      success: true,
      message: "Feedback updated successfully",
      data: feedback,
    })
  } catch (error) {
    console.error("Feedback update error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update feedback",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
