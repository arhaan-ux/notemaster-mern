// const express = require('express')
// const authRoutes = require('./auth')
// const notesRoutes = require('./notes')

// const router = express.Router()

// // API Routes
// router.use('/auth', authRoutes)
// router.use('/notes', notesRoutes)

// // Health check route
// router.get('/health', (req, res) => {
//   res.json({
//     success: true,
//     message: 'API is healthy',
//     timestamp: new Date().toISOString()
//   })
// })

// module.exports = router









const express = require('express');
const authRoutes = require('./auth');
const noteRoutes = require('./noteRoutes'); // ✅ updated name to match file

const router = express.Router();

// API Routes
router.use('/auth', authRoutes);
router.use('/notes', noteRoutes); // ✅ updated to match import

// Health check route
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
