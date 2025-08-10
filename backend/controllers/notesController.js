const { Note } = require('../models')

// @desc    Get all notes for user
// @route   GET /api/notes
// @access  Private
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id })
      .sort({ createdAt: -1 }) // Most recent first
      .populate('user', 'username email')

    res.json({
      success: true,
      count: notes.length,
      notes
    })
  } catch (error) {
    console.error('Get notes error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

// @desc    Create new note
// @route   POST /api/notes
// @access  Private
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body

    const note = new Note({
      title,
      content,
      user: req.user._id
    })

    await note.save()
    await note.populate('user', 'username email')

    res.status(201).json({
      success: true,
      message: 'Note created successfully',
      note
    })
  } catch (error) {
    console.error('Create note error:', error)
    
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

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body
    const noteId = req.params.id

    // Find note and ensure it belongs to the user
    const note = await Note.findOne({
      _id: noteId,
      user: req.user._id
    })

    if (!note) {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      })
    }

    // Update note
    note.title = title || note.title
    note.content = content || note.content

    await note.save()
    await note.populate('user', 'username email')

    res.json({
      success: true,
      message: 'Note updated successfully',
      note
    })
  } catch (error) {
    console.error('Update note error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id

    // Find and delete note (only if it belongs to the user)
    const note = await Note.findOneAndDelete({
      _id: noteId,
      user: req.user._id
    })

    if (!note) {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      })
    }

    res.json({
      success: true,
      message: 'Note deleted successfully'
    })
  } catch (error) {
    console.error('Delete note error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote
}