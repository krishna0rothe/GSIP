const Startup = require("../models/Startup");

// Register a new Startup
exports.registerStartup = async (req, res) => {
  const {
    logo,
    stage,
    startupName,
    brief,
    funded,
    email,
    mobile,
    state,
    city,
    website,
    app,
    industry,
    sector,
    services,
    udyogAadhar,
    natureOfEntity,
    legalName,
    CINNumber,
    PANNumber,
    interests,
  } = req.body;

  // Check if startup name or email already exists
  try {
    const existingStartup = await Startup.findOne({ startupName });
    if (existingStartup) {
      return res.status(400).json({ message: "Startup name already exists" });
    }

    const existingEmail = await Startup.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Validate required fields based on the nature of the entity
    if (natureOfEntity === "Private Limited") {
      if (!legalName || !CINNumber) {
        return res
          .status(400)
          .json({
            message:
              "Legal Name and CIN Number are required for Private Limited companies",
          });
      }
    } else if (natureOfEntity === "Registered Partnership") {
      if (!PANNumber) {
        return res
          .status(400)
          .json({
            message: "PAN Number is required for Registered Partnerships",
          });
      }
    }

    // Create new startup
    const startup = new Startup({
      logo,
      stage,
      startupName,
      brief,
      funded,
      email,
      mobile,
      state,
      city,
      website,
      app,
      industry,
      sector,
      services,
      udyogAadhar,
      natureOfEntity,
      legalName: natureOfEntity === "Private Limited" ? legalName : undefined,
      CINNumber: natureOfEntity === "Private Limited" ? CINNumber : undefined,
      PANNumber:
        natureOfEntity === "Registered Partnership" ? PANNumber : undefined,
      interests,
    });

    // Save the startup
    await startup.save();

    // Respond with startup data
    res.status(201).json({
      startupId: startup._id,
      startupName: startup.startupName,
      email: startup.email,
      natureOfEntity: startup.natureOfEntity,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all Startups
exports.getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Startup by ID
exports.getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }
    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
