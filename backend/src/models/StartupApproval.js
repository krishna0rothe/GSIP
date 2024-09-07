const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const approvalSchema = new Schema(
  {
    startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // The policymaker who approved/rejected the startup
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    feedback: {
      type: String,
    },
    dateApproved: {
      type: Date,
    },
  },
  { timestamps: true }
);

const StartupApproval = mongoose.model("StartupApproval", approvalSchema);
module.exports = StartupApproval;
