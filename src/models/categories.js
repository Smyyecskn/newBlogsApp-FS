"use strict";

const { mongoose } = require("../configs/dbConnection");

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
  },
  { collection: "categories", timestamps: true }
);

mongoose.model("Categories", CategoriesSchema);
