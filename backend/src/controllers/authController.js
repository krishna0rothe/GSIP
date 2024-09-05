const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role }, // Payload
    process.env.JWT_SECRET, // Secret key
    { expiresIn: "1h" } // Token expiration
  );
};



// User Registration
exports.registerUser = async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    firstName,
    lastName,
    profilePicture,
    organization,
    bio,
    contactNumber,
    address,
    dateOfBirth,
    uniqueIdType,
    uniqueIdNumber
  } = req.body;

  try {
    // Check if username or email already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Check if unique ID number already exists
    const existingUniqueIdNumber = await User.findOne({ uniqueIdNumber });
    if (existingUniqueIdNumber) {
      return res.status(400).json({ message: 'Unique ID number already exists' });
    }

    // Ensure all address fields are provided
    const { state, district, city, pincode } = address;
    if (!state || !district || !city || !pincode) {
      return res.status(400).json({ message: 'All address fields (state, district, city, pincode) are required' });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      role,
      firstName,
      lastName,
      profilePicture,
      organization,
      bio,
      contactNumber,
      address: {
        state,
        district,
        city,
        pincode,
      },
      dateOfBirth,
      uniqueIdType,
      uniqueIdNumber
    });

    // Save the user
    await user.save();

    // Generate token
    const token = generateToken(user);

    // Respond with user data and token
    res.status(201).json({
      userId: user.userId,
      username: user.username,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare passwords using the model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};


// Get user details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password from response
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};