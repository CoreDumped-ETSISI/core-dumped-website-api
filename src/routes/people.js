const express = require("express");
const router = express.Router();
const PersonControllers = require("../controllers/people");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", PersonControllers.people_get_all);

//Only accesible with authorization
router.patch("/:personId", checkAuth, PersonControllers.people_update_person);

module.exports = router;
