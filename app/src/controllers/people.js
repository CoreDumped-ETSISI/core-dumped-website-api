const mongoose = require("mongoose");
const Person = require("../models/people");

/**
 * Gets all people in an array
 * @method GET
 * @route /personas
 * @access Public
 *
 */
exports.people_get_all = (req, res, next) => {
  Person.find({})
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
 * Gets person with matching ID
 * @method GET
 * @route /personas/:id
 * @access Public
 *
 */
exports.people_get_person = (req, res, next) => {
  const id = req.params.id;
  Person.findById(id)
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
 * Updates person with matching ID
 * @method PUT
 * @route /personas/:personId
 * @access Authorization required
 *
 */
exports.people_update_person = (req, res, next) => {
  const id = req.params.personId;
  Person.replaceOne({ _id: id }, req.body)
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
