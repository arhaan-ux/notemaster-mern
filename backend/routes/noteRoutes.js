// const express = require("express");
// const router = express.Router();
// const Note = require("../models/noteModel"); // we'll create noteModel next
// const authMiddleware = require("../middleware/authMiddleware"); // ensures user is logged in

// // GET all notes for logged-in user
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
//     res.json({ notes });
//   } catch (error) {
//     console.error("Error fetching notes:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // CREATE a new note
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({ message: "Title and content are required" });
//     }

//     const note = new Note({
//       user: req.user.id,
//       title,
//       content,
//     });

//     const savedNote = await note.save();
//     res.status(201).json({ note: savedNote });
//   } catch (error) {
//     console.error("Error adding note:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // DELETE a note
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const note = await Note.findOneAndDelete({
//       _id: req.params.id,
//       user: req.user.id,
//     });

//     if (!note) {
//       return res.status(404).json({ message: "Note not found" });
//     }

//     res.json({ message: "Note deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting note:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;











const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel"); 
const authMiddleware = require("../middleware/authMiddleware"); 

// GET all notes for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// CREATE a new note
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required" });
    }

    const note = new Note({
      user: req.user.id,
      title,
      content,
    });

    const savedNote = await note.save();
    res.status(201).json({ success: true, note: savedNote });
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE a note
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    res.json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
