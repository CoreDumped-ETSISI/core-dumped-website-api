const express = require("express");
const router = express.Router();
const EventControllers = require("../controllers/events");

router.get("/", EventControllers.events_get_all);
router.get("/:eventId", EventControllers.events_get_event);
router.post("/", EventControllers.events_create_event);

module.exports = router;
