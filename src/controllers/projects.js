const mongoose = require("mongoose");
const Project = require("../models/projects");

/**
 * Gets all projects in an array
 * @method GET
 * @route /proyectos
 * @access Public
 *
 */
exports.projects_get_all = (req, res, next) => {
  Project.find({})
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
 * Gets project with matching ID
 * @method GET
 * @route /proyectos/proyecto-:projectId
 * @access Public
 *
 */
exports.projects_get_project = (req, res, next) => {
  const id = req.params.projectId;
  Project.findById(id)
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
 * Gets distinct categories from projects
 * @method GET
 * @route /proyectos/categorias
 * @access Public
 *
 */
exports.projects_get_categories = (req, res, next) => {
  const id = req.params.projectId;
  Project.find({})
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

/**
 * Gets all information for the project with the corresponding ID
 * @method POST
 * @route /proyectos
 * @access Authorization required
 */
exports.projects_create_project = (req, res, next) => {
  const id = new mongoose.Types.ObjectId();
  const project = new Project({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
    category: req.body.category,
    status: req.body.status,
    url: req.get("host") + "/proyectos/proyecto-" + id,
  });
  project
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
 * Deletes project with matching ID
 * @method DELETE
 * @route /proyectos/proyecto-:projectId
 * @access Authorization required
 *
 */
exports.projects_delete_project = (req, res, next) => {
  const id = req.params.projectId;
  Project.findByIdAndDelete(id)
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
 * Updates project with matching ID
 * @method PATCH
 * @route /proyectos/proyecto-:projectId
 * @access Authorization required
 *
 */
exports.projects_update_project = (req, res, next) => {
  const id = req.params.projectId;
  Project.findByIdAndUpdate(id, req.body, { new: true })
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
