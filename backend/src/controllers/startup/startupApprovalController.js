// controllers/policyMakerController.js
const StartupApproval = require("../../models/StartupApproval");
const Startup = require("../../models/Startup"); // Import the Startup model
const mongoose = require("mongoose");

// Approve or Reject a Startup
exports.approveOrRejectStartup = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, feedback } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const startup = await Startup.findByIdAndUpdate(
      id,
      {
        status,
        feedback,
        dateApproved: status === "Approved" ? new Date() : null,
        approvedBy: req.user._id, // Assuming the logged-in user is the policymaker/admin
      },
      { new: true } // To return the updated document
    );

    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    res.status(200).json(startup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get List of Startups by Approval Status (Approved/Pending/Rejected)
exports.getStartupsByStatus = async (req, res) => {
  try {
    const { status } = req.params; // Status will be "Approved", "Pending", or "Rejected"
    const startups = await Startup.find({ status });
    res.status(200).json(startups);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all approvals for a startup
exports.getApprovalsForStartup = async (req, res) => {
  const { startupId } = req.params;

  try {
    // Check if the startup exists
    const startup = await Startup.findById(startupId);
    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    // Get all approvals for the startup
    const approvals = await StartupApproval.find({ startupId });

    res.status(200).json(approvals);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
