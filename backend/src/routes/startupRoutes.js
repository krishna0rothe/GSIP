const express = require("express");
const router = express.Router();
const startupController = require("../controllers/startupController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route to register a startup
router.post("/register", authMiddleware , startupController.registerStartup);

// Route to get all startups
router.get("/", authMiddleware, startupController.getAllStartups);

// Route to get a startup by ID
router.get("/:id", authMiddleware, startupController.getStartupById);

module.exports = router;
