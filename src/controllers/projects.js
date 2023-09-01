const mongoose = require("mongoose");
const Card = require("../models/cards");

/**
 * Gets all events in an array
 * @method GET
 * @route /proyectos
 * @access Public
 *
 */
exports.projects_get_all = (req, res, next) => {
  Card.find({ type: "Proyecto" })
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
 * Gets distinct categories from projects
 * @method GET
 * @route /proyectos/categorias
 * @access Public
 *
 */
exports.projects_get_categories = (req, res, next) => {
  Card.find({ type: "Proyecto" })
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
