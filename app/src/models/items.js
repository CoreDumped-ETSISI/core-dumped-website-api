//  _id pk old *
//  name str *
// image uri *
//    quantity int32 * 
//    working bool *
const opts = { toJSON: { virtuals: true } };

const Loans = require('./loans');
const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
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
    {
        collection: "items",
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }

);


itemsSchema.virtual('loans', {
    ref: 'Loans',
    localField: '_id',
    foreignField: 'item',
    count: true, // Contar el número total de préstamos asociados a este artículo
    options: { match: { returned: false } }, // Contamos el número de elementos no devueltos

}).get(function (v) {
    return this.quantity - v;
});

itemsSchema.virtual('loans_id_item', {
    ref: 'Loans',
    localField: '_id',
    foreignField: 'item',
});



const Items = mongoose.model("Items", itemsSchema);

module.exports = mongoose.model("Items", itemsSchema);