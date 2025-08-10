const express = require('express')
const { signup, login, verify } = require('../controllers/authController')
const auth = require('../middleware/authMiddleware')

const router = express.Router()

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup)

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login)

// @route   GET /api/auth/verify
// @desc    Verify JWT token and get user data
// @access  Private
router.get('/verify', auth, verify)

module.exports = router