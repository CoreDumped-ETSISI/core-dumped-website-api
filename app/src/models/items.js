//  _id pk old *
//  name str *
// image uri *
//    quantity int32 * 
//    working bool *


const mongoose = require("mongoose")

const itemsSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: True
        },
        image: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        },
        working: {
            type: Boolean,
            required: true,
        }
    },
    { collection: "items" }

);

module.exports = mongoose.model("Items", itemsSchema);