import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import apiConfig from "../../config/apiConfig";

const Register = () => {
  // Page navigation
  const [page, setPage] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
    organization: "",
    bio: "",
    contactNumber: "",
    address: {
      state: "Gujarat", // default to Gujarat
      district: "",
      city: "",
      pincode: "",
    },
    dateOfBirth: "",
    uniqueIdType: "",
    uniqueIdNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiConfig.baseURL}/api/auth/register`,
        formData
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>

        {page === 1 && (
          <form onSubmit={handleNext}>
            {/* Page 1: Basic Details */}
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              label="Role"
              select
              fullWidth
              margin="normal"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              {[
                "Researcher",
                "Startup",
                "Investor",
                "Mentor",
                "Incubation Center",
                "IPR Professional",
                "Policy Maker",
              ].map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Profile Picture URL"
              variant="outlined"
              fullWidth
              margin="normal"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
            />
            <TextField
              label="Date of Birth"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              name="dateOfBirth"
              InputLabelProps={{ shrink: true }}
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Next
            </Button>
          </form>
        )}

        {page === 2 && (
          <form onSubmit={handleSubmit}>
            {/* Page 2: Additional Information */}
            <TextField
              label="Organization"
              variant="outlined"
              fullWidth
              margin="normal"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              margin="normal"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
            <TextField
              label="Contact Number"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <TextField
              label="State"
              select
              fullWidth
              margin="normal"
              name="state"
              value={formData.address.state}
              onChange={handleAddressChange}
              required
            >
              <MenuItem value="Gujarat">Gujarat</MenuItem>
            </TextField>
            <TextField
              label="District"
              select
              fullWidth
              margin="normal"
              name="district"
              value={formData.address.district}
              onChange={handleAddressChange}
              required
            >
              {["Ahmedabad", "Vadodara", "Surat"].map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="City"
              select
              fullWidth
              margin="normal"
              name="city"
              value={formData.address.city}
              onChange={handleAddressChange}
              required
            >
              {["Ahmedabad", "Vadodara", "Surat"].map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Pincode"
              variant="outlined"
              fullWidth
              margin="normal"
              name="pincode"
              value={formData.address.pincode}
              onChange={handleAddressChange}
              required
            />
            <TextField
              label="Unique ID Type"
              select
              fullWidth
              margin="normal"
              name="uniqueIdType"
              value={formData.uniqueIdType}
              onChange={handleChange}
              required
            >
              {["Aadhar Card", "PAN Card", "Passport"].map((idType) => (
                <MenuItem key={idType} value={idType}>
                  {idType}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Unique ID Number"
              variant="outlined"
              fullWidth
              margin="normal"
              name="uniqueIdNumber"
              value={formData.uniqueIdNumber}
              onChange={handleChange}
              required
            />
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button variant="outlined" color="secondary" onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default Register;
