const express = require("express");
const router = express.Router();
const PersonControllers = require("../controllers/people");

//Publicly accessible
router.get("/", PersonControllers.people_get_all);

//Only accesible with authorization
router.patch("/:personId", PersonControllers.people_update_person);

module.exports = router;
