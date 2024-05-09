const mongoose = require("mongoose");
const Loan = require("../models/loans");
const Item = require("../models/items")
const Loaner = require("../models/loaners")



/**
 * Gets loan with matching ID
 * @method GET
 * @route /loans/:id
 * @access Public
 *
 */
exports.loans_get_from_id = (req, res, next) => {
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
 * Gets loan with matching ID
 * @method GET
 * @route /loans/item/:id
 * @access Public
 *
 */
// Return a list of all loans made to the item with the corresponding id
exports.loans_get_from_item = (req, res, next) => {
    const id = req.params.id;
    Item.findById(id)
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
 * Gets loan with matching ID
 * @method GET
 * @route /loans/loaner/:id
 * @access Public
 *
 */
// Return a list of all loans made to the loaner with the corresponding id
exports.loans_get_from_loaner = (req, res, next) => {
    const id = req.params.id;
    Loaner.findById(id)
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
 * @method PUT
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

