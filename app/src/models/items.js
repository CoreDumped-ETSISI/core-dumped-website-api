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
    options: { match: { returned: false } } // Filtrar solo préstamos con returned igual a false

}
);

itemsSchema.virtual('availableUnits', {

    ref: 'Loans',
    localField: '_id',
    foreignField: 'item',

}).get(function () {
    const totalLoans = this.loans || 0; // Número total de préstamos con returned igual a false
    return this.quantity - totalLoans; // Cantidad total disponible es igual a la cantidad inicial menos los préstamos
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = mongoose.model("Items", itemsSchema);