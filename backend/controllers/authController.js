const jwt = require('jsonwebtoken')
const { User } = require('../models')

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d' // Token expires in 7 days
  })
}

// @desc    Register user
// @route   POST /api/auth/signup
// @access  Public
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    })

    if (existingUser) {
      const field = existingUser.email === email ? 'email' : 'username'
      return res.status(400).json({
        success: false,
        message: `User with this ${field} already exists`
      })
    }

    // Create new user
    const user = new User({
      username,
      email,
      password
    })

    await user.save()

    // Generate token
    const token = generateToken(user._id)

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Signup error:', error)
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message)
      return res.status(400).json({
        success: false,
        message: messages[0]
      })
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await User.findOne({ email })
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      })
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password)
    
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      })
    }

    // Generate token
    const token = generateToken(user._id)

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

// @desc    Verify token
// @route   GET /api/auth/verify
// @access  Private
const verify = async (req, res) => {
  try {
    // User is already attached to req by auth middleware
    res.json({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email
      }
    })
  } catch (error) {
    console.error('Verify error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

module.exports = {
  signup,
  login,
  verify
}