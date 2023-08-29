const express = require("express");
const router = express.Router();
const ProjectControllers = require("../controllers/projects");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", ProjectControllers.projects_get_all);
router.get("/proyecto-:projectId", ProjectControllers.projects_get_project);
router.get("/categorias", ProjectControllers.projects_get_categories);

//Only accesible with authorization
router.post("/", checkAuth, ProjectControllers.projects_create_project);
router.delete(
  "/proyecto-:projectId",
  checkAuth,
  ProjectControllers.projects_delete_project
);
router.patch(
  "/proyecto-:projectId",
  checkAuth,
  ProjectControllers.projects_update_project
);
module.exports = router;
