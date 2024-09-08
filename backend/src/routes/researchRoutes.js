const express = require("express");
const router = express.Router();
const researchController = require("../controllers/researchController");
const authMiddleware = require("../middlewares/authMiddleware");
const policyMakerMiddleware = require("../middlewares/policyMakerMiddleware");
const approvalController = require("../controllers/research/approvalController");
// Route to register a research project
router.post("/register", authMiddleware, researchController.createResearch);

// Route to get all research projects
router.get("/", authMiddleware, researchController.getAllResearch);

// Route to get a research project by id
router.get("/:id", authMiddleware, researchController.getResearchById);


// Route to approve or reject a research project
router.put("/:id/approve", authMiddleware, policyMakerMiddleware, approvalController.approveResearch);


module.exports = router;
