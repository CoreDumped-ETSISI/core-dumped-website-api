const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    appointment: {
      type: String,
      required: true,
      enum: [
        "Presidente",
        "Presidenta",
        "Vicepresidente",
        "Vicepresidenta",
        "Tesorero",
        "Tesorera",
        "Secretario",
        "Secretaria",
      ],
    },
    image: String,
    email: String,
    discord: String,
    github: String,
    telegram: String,
    instagram: String,
    linkedin: String,
  },
  { collection: "people" }
);

module.exports = mongoose.model("Person", personSchema);
