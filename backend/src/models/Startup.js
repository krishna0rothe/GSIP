const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Startup Schema
const startupSchema = new Schema(
  {
    logo: {
      type: String, // URL or file path for the logo
    },
    stage: {
      type: String,
      enum: ["Ideation", "Validation", "Early Traction", "Scaling"],
      required: true,
    },
    startupName: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
      trim: true,
    },
    funded: {
      type: String,
      enum: ["Funded", "Bootstrapped"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      match: /^[0-9]{10}$/, // 10-digit mobile number validation
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    website: {
      type: String, // URL of the startup's website
    },
    app: {
      type: String, // URL of the startup's app
    },
    industry: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    services: {
      type: [String],
      required: true,
    },
    udyogAadhar: {
      type: String, // Udyog Aadhar number
    },
    natureOfEntity: {
      type: String,
      enum: ["Private Limited", "Registered Partnership"],
      required: true,
    },
    legalName: {
      type: String, // Only for Private Limited
    },
    CINNumber: {
      type: String, // Only for Private Limited
    },
    PANNumber: {
      type: String, // Only for Registered Partnership
    },
    interests: {
      type: [String],
      enum: ["Mentorship", "Funding", "Incubation Support", "Other startups"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
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
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User", // Policy maker or admin
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;
