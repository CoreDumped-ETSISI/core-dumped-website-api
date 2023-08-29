const express = require("express");
const router = express.Router();
const ProjectControllers = require("../controllers/projects");

//Publicly accessible
router.get("/", ProjectControllers.projects_get_all);
router.get("/proyecto-:projectId", ProjectControllers.projects_get_project);
router.get("/categorias", ProjectControllers.projects_get_categories);

//Only accesible with authorization
router.post("/", ProjectControllers.projects_create_project);
router.delete(
  "/proyecto-:projectId",
  ProjectControllers.projects_delete_project
);
router.patch(
  "/proyecto-:projectId",
  ProjectControllers.projects_update_project
);
module.exports = router;
