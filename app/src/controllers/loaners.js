const mongoose = require("mongoose");
const Loaner = require("../models/loaners");
const Loans = require("../models/loans");



/**
 * Gets loaner with matching ID
 * @method GET
 * @route /loaners/byid/:id
 * @access Public
 *
 */

// Return the corresponding loaner by id
exports.loaners_get_from_id = (req, res, next) => {
    const id = req.params.id;
    Loaner.findById(id)
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json(
                    doc
                );
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });


};


/**
 * Gets loaner with matching Mat
 * @method GET
 * @route /loaners/bymat/:mat
 * @access Public
 *
 */
// 	Return the corresponding loaner by matricula number
exports.loaners_get_from_mat = (req, res, next) => {
    const mat = req.params.mat;
    Loaner.find({ 'matricula': mat })
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json(
                    doc
                );
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });



};



/**
 * Creates a new card
 * @method POST
 * @route /loaners
 * @access Authorization required
 */
exports.loaners_create_loaner = (req, res, next) => {
    const id = new mongoose.Types.ObjectId();
    const loaner = new Loaner({
        _id: id,
        name: req.body.name,
        matricula: req.body.matricula,
        email: req.body.email,
        url: req.get("host") + "/loaners/" + id,
    });
    loaner
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Created Succesfully",
                document: result,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
};

/**
 * Deletes card with matching ID
 * @method DELETE
 * @route /loaners/:id
 * @access Authorization required
 *
 */
exports.loaners_delete_loaner = (req, res, next) => {
    const id = req.params.id;
    Loaner.findByIdAndDelete(id)
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    message: "Deleted Succesfully",
                    document: doc,
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

/**
 * Updates card with matching ID
 * @method PUT
 * @route /loaners/:id
 * @access Authorization required
 *
 */
exports.loaners_update_loaner = (req, res, next) => {
    const id = req.params.id;
    Loaner.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    message: "Updated Succesfully",
                    document: doc,
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

