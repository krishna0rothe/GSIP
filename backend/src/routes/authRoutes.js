// src/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Define routes
router.post("/login", (req, res) => {
  // Login logic here
  res.send("Login route");
});

router.post("/signup", (req, res) => {
  // Signup logic here
  res.send("Signup route");
});

// Export the router
module.exports = router;
