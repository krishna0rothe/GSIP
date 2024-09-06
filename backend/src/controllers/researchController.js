const Research = require("../models/Research");

const mongoose = require("mongoose");

// Create new research project
exports.createResearch = async (req, res) => {
  const {
    title,
    description,
    researchArea,
    keywords,
    leadResearcher,
    teamMembers,
    collaborators,
    startDate,
    endDate,
    milestones,
    funding,
    resources,
    currentStatus,
    publications,
    findings,
    expectedOutcomes,
    ethics,
    researchType,
    fundingType,
    potentialImpact,
    societalBenefit,
    documents,
    progressReports,
  } = req.body;

  const userId = req.user.id; // Extract userId from req.user

  try {
    // Check if the research project with the same title and leadResearcher exists
    const existingResearch = await Research.findOne({
      title: title,
      'leadResearcher.name': leadResearcher.name
    });

    if (existingResearch) {
      return res.status(400).json({
        message: 'A research project with the same title and lead researcher already exists.'
      });
    }

    // Create new research project
    const research = new Research({
      title,
      description,
      researchArea,
      keywords,
      leadResearcher,
      teamMembers,
      collaborators,
      startDate,
      endDate,
      milestones,
      funding,
      resources,
      currentStatus,
      publications,
      findings,
      expectedOutcomes,
      ethics,
      researchType,
      fundingType,
      potentialImpact,
      societalBenefit,
      documents,
      progressReports,
      user: userId, // Add user reference
    });

    // Save the research project
    await research.save();

    // Respond with created research data
    res.status(201).json({
      researchId: research._id,
      title: research.title,
      createdBy: research.user, // Include creator's ID in the response
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
// Get all research projects
exports.getAllResearch = async (req, res) => {
  try {
    const researchProjects = await Research.find().populate(
      "user",
      "username email"
    );
    res.status(200).json(researchProjects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Get a research project by ID
exports.getResearchById = async (req, res) => {
  const { id } = req.params;

  try {
    const research = await Research.findById(id).populate(
      "createdBy",
      "username email"
    );
    if (!research) {
      return res.status(404).json({ message: "Research project not found" });
    }
    res.status(200).json(research);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
