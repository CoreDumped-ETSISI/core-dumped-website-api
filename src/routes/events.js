const express = require("express");
const router = express.Router();
const EventControllers = require("../controllers/events");

//Publicly accessible
router.get("/", EventControllers.events_get_all);
router.get("/evento-:eventId", EventControllers.events_get_event);
router.get("/categorias", EventControllers.events_get_categories);

//Only accesible with authorization
router.post("/", EventControllers.events_create_event);
router.delete("/evento-:eventId", EventControllers.events_delete_event);
router.patch("/evento-:eventId", EventControllers.events_update_event);
module.exports = router;
