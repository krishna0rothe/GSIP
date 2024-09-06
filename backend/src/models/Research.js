const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
  title: {
    type: String,
    required: true, // Required field
  },
  description: {
    type: String,
    required: true, // Required field
  },
  researchArea: {
    type: String,
    required: true, // Required field
  },
  keywords: {
    type: [String],
    required: true, // Required field
  },
  leadResearcher: {
    name: {
      type: String,
      required: true, // Required field
    },
    institution: {
      type: String,
      required: true, // Required field
    },
  },
  teamMembers: [
    {
      name: {
        type: String,
        required: true, // Required field
      },
      role: {
        type: String,
        required: true, // Required field
      },
      institution: {
        type: String,
        required: true, // Required field
      },
    },
  ],
  collaborators: [String],
  startDate: {
    type: Date,
    required: true, // Required field
  },
  endDate: Date,
  milestones: [
    {
      milestone: String,
      date: Date,
      status: String,
    },
  ],
  funding: {
    status: {
      type: String,
      required: true, // Required field
    },
    sources: [String],
    amount: Number,
  },
  resources: {
    equipment: [String],
    facilities: [String],
    humanResources: [String],
  },
  currentStatus: {
    type: String,
    required: true, // Required field
  },
  publications: [String],
  findings: String,
  expectedOutcomes: String,
  ethics: {
    clearance: Boolean,
    IPRStatus: String,
  },
  researchType: String,
  fundingType: String,
  potentialImpact: String,
  societalBenefit: String,
  documents: [String],
  progressReports: [
    {
      reportTitle: String,
      reportDate: Date,
      status: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true, // Add reference to the user who created the research
  },
});

const Research = mongoose.model("Research", ResearchSchema);

module.exports = Research;