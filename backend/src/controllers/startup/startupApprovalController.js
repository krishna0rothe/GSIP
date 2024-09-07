// controllers/policyMakerController.js
const StartupApproval = require("../../models/StartupApproval");
const Startup = require("../../models/Startup"); // Import the Startup model
const mongoose = require("mongoose");

// Approve a startup
exports.approveStartup = async (req, res) => {
  const { startupId, feedback } = req.body;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(startupId)) {
    return res.status(400).json({ message: 'Invalid startup ID' });
  }

  try {
    // Check if the startup exists
    const startup = await Startup.findById(startupId);
    if (!startup) {
      return res.status(404).json({ message: 'Startup not found' });
    }

    // Create or update approval record
    const approval = await StartupApproval.findOneAndUpdate(
      { startupId, approvedBy: req.user.id },
      { status: 'Approved', feedback, dateApproved: new Date() },
      { new: true, upsert: true }
    );

    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Reject a startup
exports.rejectStartup = async (req, res) => {
  const { startupId, feedback } = req.body;

  try {
    // Check if the startup exists
    const startup = await Startup.findById(startupId);
    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    // Create or update approval record
    const approval = await StartupApproval.findOneAndUpdate(
      { startupId, approvedBy: req.user.id },
      { status: "Rejected", feedback, dateApproved: new Date() },
      { new: true, upsert: true }
    );

    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
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
