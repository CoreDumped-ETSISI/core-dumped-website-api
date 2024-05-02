const mongoose = require("mongoose");
const Item = require("../models/items");
const Loans = require("../models/loans")

/**
 * Gets all items in an array
 * @method GET
 * @route /items
 * @access Public
 *
 */
exports.items_get_all = (req, res, next) => {
    Item.find({})
        .sort({ name: "ascending" })
        .populate('loans')
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
 * @route /items/:id
 * @access Public
 *
 */
exports.items_get_item = (req, res, next) => {
    const id = req.params.id;
    Item.findById(id)
        .populate('loans')
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    item: doc,
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
 * @route /items
 * @access Authorization required
 */
exports.items_create_item = (req, res, next) => {
    const id = new mongoose.Types.ObjectId();
    const item = new Item({
        _id: id,
        name: req.body.name,
        image: req.body.image,
        quantity: req.body.quantity,
        working: req.body.working,
        url: req.get("host") + "/items/" + id,
    });
    item
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
 * @route /items/:id
 * @access Authorization required
 *
 */
exports.items_delete_item = (req, res, next) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id)
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
 * @route /items/:id
 * @access Authorization required
 *
 */
exports.items_update_item = (req, res, next) => {
    const id = req.params.id;
    Item.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

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

