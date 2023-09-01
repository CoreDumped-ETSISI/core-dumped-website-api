const mongoose = require("mongoose");
const Card = require("../models/cards");

/**
 * Gets all events in an array
 * @method GET
 * @route /eventos
 * @access Public
 *
 */
exports.events_get_all = (req, res, next) => {
  Card.find({ type: "Evento" })
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
 * Gets distinct categories from events
 * @method GET
 * @route /eventos/categorias
 * @access Public
 *
 */
exports.events_get_categories = (req, res, next) => {
  Card.find({ type: "Evento" })
    .distinct("category")
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
