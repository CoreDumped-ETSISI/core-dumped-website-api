const express = require("express");
const router = express.Router();
const LoansController = require("../controllers/loans");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/:id", LoansController.loans_get_from_id);
router.get("/item/:id", LoansController.loans_get_from_item);
router.get("/loaner/:id", LoansController.loans_get_from_loaner);


//Only accesible with authorization
router.post("/:id", checkAuth, LoansController.loans_create_loan);
router.delete("/:id", checkAuth, LoansController.loans_delete_loan);
router.put("/:id", checkAuth, LoansController.loans_update_loan);
module.exports = router;