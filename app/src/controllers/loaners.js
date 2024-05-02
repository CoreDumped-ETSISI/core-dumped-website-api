const mongoose = require("mongoose");
const Loaner = require("../models/loaners");

/**
 * Gets all loaners in an array
 * @method GET
 * @route /loaners
 * @access Public
 *
 */
exports.loaners_get_all = (req, res, next) => {
    Loaner.find({})
        .sort({ name: "ascending" })
        .exec()

        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
};

/**
 * Gets card with matching ID
 * @method GET
 * @route /loaners/:id
 * @access Public
 *
 */
exports.loaners_get_loaner = (req, res, next) => {
    const id = req.params.id;
    Loaner.findById(id)
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    loaner: doc,
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
 * @method PATCH
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

