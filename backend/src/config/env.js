// src/config/env.js
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Exporting the necessary environment variables
module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/GSIP",
  jwtSecret: process.env.JWT_SECRET || "syntax sumurai",
  nodeEnv: process.env.NODE_ENV || "development",
};
