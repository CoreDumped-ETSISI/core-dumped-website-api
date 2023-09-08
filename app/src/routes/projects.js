const express = require("express");
const router = express.Router();
const ProjectControllers = require("../controllers/projects");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", ProjectControllers.projects_get_all);
router.get("/categorias", ProjectControllers.projects_get_categories);

module.exports = router;
