const mongoose = require("mongoose");

// name, email, password, date_of_birth, created at date
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  createdAtDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
