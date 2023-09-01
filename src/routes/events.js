const express = require("express");
const router = express.Router();
const EventControllers = require("../controllers/events");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", EventControllers.events_get_all);
router.get("/categorias", EventControllers.events_get_categories);

module.exports = router;
