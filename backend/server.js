const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json({ limit: '10mb' })) // Parse JSON bodies

// Routes
const apiRoutes = require('./routes')
app.use('/api', apiRoutes)

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'NoteMaster API is running!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      notes: '/api/notes',
      health: '/api/health'
    }
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Database connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    process.exit(1)
  }
}

// Connect to database
connectDB()

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📚 API Documentation:`)
  console.log(`   Health: http://localhost:${PORT}/api/health`)
  console.log(`   Auth: http://localhost:${PORT}/api/auth`)
  console.log(`   Notes: http://localhost:${PORT}/api/notes`)
})
