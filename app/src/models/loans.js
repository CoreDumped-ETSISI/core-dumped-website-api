//     _id pk old *
//     item fk old *
//     loaner fk old *
//     quantity int32 *
//     returned bool *


const mongoose = require("mongoose");

const loansSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        item: [
            {
                type: mongoose.Schema.Types.ObjectId, ref: 'Items',
                required: true
            }
        ],
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        loaner: [
            {
                type: mongoose.Schema.Types.ObjectId, ref: 'Loaners',
                required: true
            }
        ],
        quantity: {
            type: Number,
            default: 1,
            required: true,
            min: 0
        },
        returned: {
            type: Boolean,
            required: true,
        }

    },
    {
        collection: "loans"
    }

);


module.exports = mongoose.model("Loans", loansSchema);