const mongoose = require("mongoose");
const Card = require("../models/cards");

/**
 * Gets all cards in an array
 * @method GET
 * @route /cartas
 * @access Public
 *
 */
exports.cards_get_all = (req, res, next) => {
  Card.find({})
    .sort({ date: "descending" })
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
 * @route /cartas/:id
 * @access Public
 *
 */
exports.cards_get_card = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
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
 * @route /cartas
 * @access Authorization required
 */
exports.cards_create_card = (req, res, next) => {
  const id = new mongoose.Types.ObjectId();
  const card = new Card({
    _id: id,
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
    category: req.body.category,
    status: req.body.status,
    url: req.get("host") + "/cartas/" + id,
  });
  card
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
 * @route /cards/:id
 * @access Authorization required
 *
 */
exports.cards_delete_card = (req, res, next) => {
  const id = req.params.id;
  Card.findByIdAndDelete(id)
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
 * @route /cards/:id
 * @access Authorization required
 *
 */
exports.cards_update_card = (req, res, next) => {
  const id = req.params.id;
  Card.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
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
