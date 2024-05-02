const mongoose = require("mongoose");
const Loan = require("../models/loans");

/**
 * Gets all loans in an array
 * @method GET
 * @route /loans
 * @access Public
 *
 */
exports.loans_get_all = (req, res, next) => {
    Loan.find({})
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
 * @route /loans/:id
 * @access Public
 *
 */
exports.loans_get_loan = (req, res, next) => {
    const id = req.params.id;
    Loan.findById(id)
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    loan: doc,
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
 * @route /loans
 * @access Authorization required
 */
exports.loans_create_loan = (req, res, next) => {
    const id = new mongoose.Types.ObjectId();
    const loan = new Loan({
        _id: id,
        item: req.body.item,
        date: req.body.date,
        quantity: req.body.quantity,
        loaner: req.body.loaner,
        returned: req.body.returned,
        url: req.get("host") + "/loans/" + id,
    });
    loan
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
 * @route /loans/:id
 * @access Authorization required
 *
 */
exports.loans_delete_loan = (req, res, next) => {
    const id = req.params.id;
    Loan.findByIdAndDelete(id)
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
 * @route /loans/:id
 * @access Authorization required
 *
 */
exports.loans_update_loan = (req, res, next) => {
    const id = req.params.id;
    Loan.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
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

