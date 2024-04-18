const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    type: {
      type: String,
      required: true,
      enum: ["Proyecto", "Evento"],
    },
    title: {
      type: String,
      required: true,
      maxLength: 20,
    },
    description: { type: String, required: true, minLength: 100 },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true, maxLength: 14 },
    status: {
      type: String,
      required: true,
      enum: ["Completado", "En progreso", "Cancelado", "Próximamente"],
    },
    clickable_link: String,
    clickable_link_text: String,
    //Url of the project inside the API, automatically generated at POST
    url: { type: String, required: true },
  },
  { collection: "cards" }
);


module.exports = mongoose.model("Card", cardSchema);
