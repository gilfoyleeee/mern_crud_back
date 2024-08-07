const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      age: {
        type: Number,
      }
    },
    { timestamps: true }
  );
  const User = mongoose.model("User", userSchema);
  module.exports = User;