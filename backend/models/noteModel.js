// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Note", noteSchema);







const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError when Nodemon restarts
module.exports = mongoose.models.Note || mongoose.model("Note", noteSchema);
