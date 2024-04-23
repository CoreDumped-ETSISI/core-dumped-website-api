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
    { collection: "items" }

);



itemsSchema.virtual('Available').get(function () {

    loans = Loans.find({});
    console.log(loans);
    return loans;
});





module.exports = mongoose.model("Items", itemsSchema);