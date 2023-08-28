const Event = require("../models/events");

/**
 * Gets all events in an array
 * @route /projects
 * @access Public
 *
 */
const events_get_all = (req, res, next) => {
  Event.find()
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
 * Gets all information for the event with the corresponding ID
 * @route /projects/:projectId
 * @access Public
 */
const events_create_event = (req, res, next) => {
  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    eventImage: req.body.image,
    date: req.body.date,
    category: req.body.category,
    status: req.body.status,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created event successfully",
        createdProduct: {
          name: result.title,
          description: result.decription,
          _id: result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
