const express = require("express");
const router = express.Router();
const { admin_login } = require("../controllers/admin");

//Publicly accessible
router.post("/", admin_login);

module.exports = router;
