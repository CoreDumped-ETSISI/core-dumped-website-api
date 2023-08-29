const mongoose = require("mongoose");
const Event = require("../models/events");

/**
 * Gets all events in an array
 * @method GET
 * @route /eventos
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

/**
 * Gets event with matching ID
 * @method GET
 * @route /eventos/:eventId
 * @access Public
 *
 */
exports.events_get_event = (req, res, next) => {
  const id = req.params.eventId;
  Event.findById(id)
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
 * @route /eventos
 * @access Authorization required
 */
exports.events_create_event = (req, res, next) => {
  const id = new mongoose.Types.ObjectId();
  const event = new Event({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
    category: req.body.category,
    status: req.body.status,
    url: req.get("host") + "/eventos/" + id,
  });
  event
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
 * Deletes event with matching ID
 * @method DELETE
 * @route /eventos/:eventId
 * @access Authorization required
 *
 */
exports.events_delete_event = (req, res, next) => {
  const id = req.params.eventId;
  Event.findByIdAndDelete(id)
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
 * Updates event with matching ID
 * @method PATCH
 * @route /eventos/:eventId
 * @access Authorization required
 *
 */
exports.events_update_event = (req, res, next) => {
  const id = req.params.eventId;
  Event.findByIdAndUpdate(id, req.body)
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
