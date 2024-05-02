"use strict";

const { mongoose } = require("../configs/dbConnection");

const CommentsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
  },
  {collection: "comments", timestamps: true}
);


mongoose.model("Comments", CommentsSchema);