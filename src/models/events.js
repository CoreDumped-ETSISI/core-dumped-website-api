import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
      maxLength: 20,
    },
    body: { type: String, required: true },
    eventImage: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Completado", "En progreso", "Cancelado", "Próximamente"],
    },
  },
  { collection: "events" }
);

module.exports = mongoose.model("Event", eventSchema);
