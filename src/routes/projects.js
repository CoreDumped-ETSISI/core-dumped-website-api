const express = require("express");
const router = express.Router();
const EventControllers = require("../controllers/projects");

//Publicly accessible
router.get("/", EventControllers.projects_get_all);
router.get("/proyecto-:projectId", EventControllers.projects_get_project);
router.get("/categorias", EventControllers.projects_get_categories);

//Only accesible with authorization
router.post("/", EventControllers.projects_create_project);
router.delete("/proyecto-:projectId", EventControllers.projects_delete_project);
router.patch("/proyecto-:projectId", EventControllers.projects_update_project);
module.exports = router;
