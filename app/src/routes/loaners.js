const express = require("express");
const router = express.Router();
const LoanersController = require("../controllers/loaners");
const checkAuth = require("../middleware/check-auth");


//Only accesible with authorization
router.get("/byid/:id", checkAuth, LoanersController.loaners_get_from_id);
router.get("/bymat/:mat", checkAuth, LoanersController.loaners_get_from_mat);
router.post("/:id", checkAuth, LoanersController.loaners_create_loaner);
router.delete("/:id", checkAuth, LoanersController.loaners_delete_loaner);
router.put("/:id", checkAuth, LoanersController.loaners_update_loaner);
module.exports = router;
