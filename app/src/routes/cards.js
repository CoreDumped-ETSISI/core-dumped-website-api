const express = require("express");
const router = express.Router();
const CardsController = require("../controllers/cards");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", CardsController.cards_get_all);
router.get("/:id", CardsController.cards_get_card);

//Only accesible with authorization
router.post("/", checkAuth, CardsController.cards_create_card);
router.delete("/:id", checkAuth, CardsController.cards_delete_card);
router.patch("/:id", checkAuth, CardsController.cards_update_card);
module.exports = router;
