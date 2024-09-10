const Research = require("../../models/Research");


exports.approveResearch = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // status: approved or rejected
  const userId = req.user.id; // Assuming you have the user ID from auth middleware

  try {
    const research = await Research.findById(id);
    if (!research) {
      return res.status(404).json({ message: "Research not found" });
    }
    // Update the approval status, approvedBy, and approvedAt fields
    research.approvalStatus = status;
    if (status === "approved") {
      research.approvedBy = userId;
      research.approvedAt = new Date();
    } else {
      research.approvedBy = null; // Reset if rejected
      research.approvedAt = null;
    }

    await research.save();
    res
      .status(200)
      .json({ message: `Research ${status} successfully`, research });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};