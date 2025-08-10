const express = require('express')
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notesController')
const auth = require('../middleware/auth')

const router = express.Router()

// All routes are protected - user must be authenticated
router.use(auth)

// @route   GET /api/notes
// @desc    Get all notes for authenticated user
// @access  Private
router.get('/', getNotes)

// @route   POST /api/notes
// @desc    Create a new note
// @access  Private
router.post('/', createNote)

// @route   PUT /api/notes/:id
// @desc    Update a note
// @access  Private
router.put('/:id', updateNote)

// @route   DELETE /api/notes/:id
// @desc    Delete a note
// @access  Private
router.delete('/:id', deleteNote)

module.exports = router