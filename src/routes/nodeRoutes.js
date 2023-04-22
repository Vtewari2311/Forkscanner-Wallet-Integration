const express = require("express");
const router = express.Router();

const nodeController = require("../controllers/nodeController");

// Define routes
router.get("/", nodeController.getIndex);

module.exports = router;
