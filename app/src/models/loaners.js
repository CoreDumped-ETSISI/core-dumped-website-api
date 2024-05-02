//     _id pk dk old *
//     name str *
//     matricula str *
//     email email *


const mongoose = require("mongoose");

const loanersSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        },
        matricula: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            match: /^[\D\d]+@(alumnos.)?upm.es$/,
            unique: true
        }
    },
    { collection: "loaners" }

);

module.exports = mongoose.model("Loaners", loanersSchema);