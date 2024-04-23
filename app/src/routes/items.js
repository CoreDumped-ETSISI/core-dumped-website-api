const express = require("express");
const router = express.Router();
const ItemsController = require("../controllers/items");
const checkAuth = require("../middleware/check-auth");

//Publicly accessible
router.get("/", ItemsController.items_get_all);
router.get("/:id", ItemsController.items_get_item);

//Only accesible with authorization
router.post("/", checkAuth, ItemsController.items_create_item);
router.delete("/:id", checkAuth, ItemsController.items_delete_item);
router.patch("/:id", checkAuth, ItemsController.items_update_item);
router.put("/", checkAuth, ItemsController.items_update_item)
module.exports = router;
