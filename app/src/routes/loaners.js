const express = require("express");
const router = express.Router();
const LoanersController = require("../controllers/loaners");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", LoanersController.loaners_get_all);
router.get("/:id", LoanersController.loaners_get_loaner);

//Only accesible with authorization
router.post("/", checkAuth, LoanersController.loaners_create_loaner);
router.delete("/:id", checkAuth, LoanersController.loaners_delete_loaner);
router.put("/:id", checkAuth, LoanersController.loaners_update_loaner)
module.exports = router;
