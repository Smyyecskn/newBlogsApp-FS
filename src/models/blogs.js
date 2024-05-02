"use strict";

const { mongoose } = require("../configs/dbConnection");

const BlogsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    isPublish: {
      type: Boolean,
      default: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    countOfVisitors: {
      type: Number,
      default: 0,
    },
  },
  { collection: "blogs", timestamps: true }
);

mongoose.model("Blogs", BlogsSchema);
