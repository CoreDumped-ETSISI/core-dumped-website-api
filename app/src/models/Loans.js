//     _id pk old *
//     item fk old *
//     loaner fk old *
//     quantity int32 *
//     returned bool *



const mongoose = require("mongoose")

const loansSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        item: [
            {
                type: Schema.Types.ObjectId, ref: 'Items'
            }
        ],
        loaner: [
            {
                type: Schema.Types.ObjectId, ref: 'Loaners'
            }
        ],
        quantity: {
            type: Number,
            required: true,
            min: 0
        },
        returned: {
            type: Boolean,
            required: true,
        }

    }


)

module.exports = mongoose.model("Loans", loansSchema)