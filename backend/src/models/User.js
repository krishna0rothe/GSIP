const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;



// Define the User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "Researcher",
        "Startup",
        "Investor",
        "Mentor",
        "Incubation Center",
        "IPR Professional",
        "Policy Maker",
      ],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://example.com/default-profile.png", // Example URL
    },
    organization: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    contactNumber: {
      type: String,
      trim: true,
      match: /^[0-9]{10}$/, // Example regex
    },
    address: {
      state: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
        match: /^[1-9][0-9]{5}$/, // Indian pincode format
      },
    },
    uniqueIdType: {
      type: String,
      enum: ["Aadhar Card", "PAN Card", "Passport"],
      required: true,
    },
    uniqueIdNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^\d{15}$/, // 15-digit number validation
    },
    dateOfBirth: {
      type: Date,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
