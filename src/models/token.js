"use strict";

const { mongoose } = require("../configs/dbConnection");

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "tokens", timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
