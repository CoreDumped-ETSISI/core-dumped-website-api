const express = require("express");
const router = express.Router();
const PersonControllers = require("../controllers/people");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", PersonControllers.people_get_all);
router.get("/:id", PersonControllers.people_get_person);
//Only accesible with authorization
router.put("/:personId", checkAuth, PersonControllers.people_update_person);

module.exports = router;
