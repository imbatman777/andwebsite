import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Store inquiries in memory (replace with a database in production)
const inquiries = []

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    })
  }

  const inquiry = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    message,
    createdAt: new Date().toISOString(),
  }

  inquiries.push(inquiry)

  console.log(`📩 New inquiry from ${name} (${email})`)
  console.log(`   Message: ${message}`)
  console.log(`   Phone: ${phone || 'N/A'}`)
  console.log('---')

  res.status(200).json({
    success: true,
    message: 'Inquiry received successfully. We will get back to you shortly.',
    id: inquiry.id,
  })
})

// Get all inquiries (admin endpoint)
app.get('/api/inquiries', (req, res) => {
  res.json({ inquiries, total: inquiries.length })
})

app.listen(PORT, () => {
  console.log(`\n🚀 AND Events API server running on http://localhost:${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health`)
  console.log(`   Contact: POST http://localhost:${PORT}/api/contact\n`)
})
