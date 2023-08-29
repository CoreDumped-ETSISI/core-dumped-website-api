const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
      maxLength: 20,
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Completado", "En progreso", "Cancelado", "Próximamente"],
    },
    //Url of the event inside the API, automatically generated at POST
    url: { type: String, required: true },
  },
  { collection: "events" }
);

module.exports = mongoose.model("Event", eventSchema);
