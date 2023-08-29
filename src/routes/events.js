const express = require("express");
const router = express.Router();
const EventControllers = require("../controllers/events");

router.get("/", EventControllers.events_get_all);
router.get("/:eventId", EventControllers.events_get_event);
router.post("/", EventControllers.events_create_event);
router.delete("/:eventId", EventControllers.events_delete_event);
router.patch("/:eventId", EventControllers.events_update_event);

module.exports = router;
