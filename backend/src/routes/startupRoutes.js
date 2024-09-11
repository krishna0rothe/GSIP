const express = require("express");
const router = express.Router();
const startupController = require("../controllers/startupController");
const authMiddleware = require("../middlewares/authMiddleware");
const policyMakerMiddleware = require('../middlewares/policyMakerMiddleware'); // Custom middleware to check role
const startupApprovalController = require("../controllers/startup/startupApprovalController");

// Route to register a startup
router.post("/register", authMiddleware , startupController.registerStartup);

// Route to get all startups
router.get("/", startupController.getAllStartups);

// Route to get a startup by ID
router.get("/:id", authMiddleware, startupController.getStartupById);



// Management routes 

// Route to approve or reject a startup (Admin/Policymaker)
router.patch("/startups/approve/:id", startupApprovalController.approveOrRejectStartup);

// Reject a startup
//router.post('/reject', authMiddleware, policyMakerMiddleware, startupApprovalController.rejectStartup);

// Get all approvals for a startup
router.get('/:startupId/approvals', authMiddleware, policyMakerMiddleware, startupApprovalController.getApprovalsForStartup);



module.exports = router;
