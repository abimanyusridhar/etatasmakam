import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const feedbackFilePath = path.join(process.cwd(), 'data', 'feedback.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Get all feedback
function getAllFeedback() {
  ensureDataDir()
  try {
    if (fs.existsSync(feedbackFilePath)) {
      const data = fs.readFileSync(feedbackFilePath, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading feedback:', error)
  }
  return []
}

// Save feedback
function saveFeedback(feedbackArray: any[]) {
  ensureDataDir()
  try {
    fs.writeFileSync(feedbackFilePath, JSON.stringify(feedbackArray, null, 2))
  } catch (error) {
    console.error('Error saving feedback:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newFeedback = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString(),
    }

    const allFeedback = getAllFeedback()
    allFeedback.push(newFeedback)
    saveFeedback(allFeedback)

    return NextResponse.json(
      { success: true, message: 'Feedback saved successfully', id: newFeedback.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Feedback submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save feedback' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple auth check - in production, use proper authentication
    const authHeader = request.headers.get('authorization')
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
    
    if (authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const allFeedback = getAllFeedback()
    return NextResponse.json({ success: true, data: allFeedback }, { status: 200 })
  } catch (error) {
    console.error('Feedback retrieval error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to retrieve feedback' },
      { status: 500 }
    )
  }
}
