const mongoose = require("mongoose");
const Event = require("../models/events");

/**
 * Gets all events in an array
 * @method GET
 * @route /projects
 * @access Public
 *
 */
exports.events_get_all = (req, res, next) => {
  Event.find({})
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

exports.events_get_event = (req, res, next) => {
  const id = req.params.eventId;
  Product.findById(id)
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
 * Gets all information for the event with the corresponding ID
 * @method POST
 * @route /projects
 * @access Public
 */
exports.events_create_event = (req, res, next) => {
  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
    category: req.body.category,
    status: req.body.status,
  });
  event
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
