const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    password: String,
  },
  { collection: "admin" }
);

module.exports = mongoose.model("Admin", adminSchema);
