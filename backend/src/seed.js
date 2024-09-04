// src/seed.js
const mongoose = require("mongoose");
const User = require("./models/User"); // Adjust path as needed
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    await connectDB();

    // Create a dummy user
    const dummyUser = new User({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123", // Ensure you hash passwords in production
      role: "Researcher",
      firstName: "Test",
      lastName: "User",
      profilePicture: "https://example.com/default-profile.png",
      organization: "Test Organization",
      bio: "This is a dummy user.",
      contactNumber: "1234567890",
      address: "123 Test Street",
      dateOfBirth: new Date("1990-01-01"),
      registrationDate: new Date(),
      lastLogin: new Date(),
    });

    await dummyUser.save();
    console.log("Dummy user created successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
