const express = require("express");
const router = express.Router();
const researchController = require("../controllers/researchController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route to register a research project
router.post("/register", authMiddleware, researchController.createResearch);

// Route to get all research projects
router.get("/", authMiddleware, researchController.getAllResearch);

// Route to get a research project by id
router.get("/:id", authMiddleware, researchController.getResearchById);

module.exports = router;
