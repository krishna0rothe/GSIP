// src/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/register",
  authController.registerUser
);


// Route for user login
router.post('/login', authController.loginUser);

// Get user details route (Protected)
router.get('/me', authMiddleware, authController.getUserDetails);

// Export the router
module.exports = router;
