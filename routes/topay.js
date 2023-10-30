const express = require("express");
const router = express.Router();
const topayController = require("../controllers/topayController");

router.get("/", topayController.index);
router.get("/:id", topayController.getById);
router.post("/", topayController.insert);
router.put("/:id", topayController.update);
router.delete("/:id", topayController.destroy);

module.exports = router;
