const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    desc: {
      type: String,
      max: 6000,
    },
    title: {
      type: String,
      max: 500,
    },
    level: {
      type: String,
    },
    category: {
      type: String,
    },
    skils: [
      {
        type: String,
        max: 500,
      },
    ],
    skils: [
      {
        type: String,
        max: 500,
      },
    ],
    attachmentPath: {
      type: String,
    },
    budget: {
      type: Number,
      max: 8000,
    },
    comments: [
      {
        text: {
          type: String,
          required: true,
        },
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
