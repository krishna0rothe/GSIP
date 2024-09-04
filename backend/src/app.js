// src/app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/database");
const { port } = require("./config/env");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Logging HTTP requests
app.use(cors()); // Enable CORS

// Import routes
const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");


// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
