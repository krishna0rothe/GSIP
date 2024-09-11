import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button, Chip, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import AppIcon from "@mui/icons-material/Apps";
import DefaultLogo from "./user.svg"; // Placeholder icon
import apiConfig from "../../config/apiConfig";
import axios from "axios";

// Status colors for tags
const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

// Popup Component
const StartupDetailsPopup = ({ open, onClose, startup }) => {
  if (!startup) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {startup.startupName}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={startup.logo || DefaultLogo}
            alt={startup.startupName}
            style={{ width: "100px", height: "100px", borderRadius: "10px" }}
          />
          <Typography variant="h6" sx={{ marginLeft: "20px" }}>{startup.startupName}</Typography>
        </Box>

        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <BusinessIcon sx={{ marginRight: "5px" }} /> Industry: {startup.industry}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <BusinessIcon sx={{ marginRight: "5px" }} /> Sector: {startup.sector}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <EmailIcon sx={{ marginRight: "5px" }} /> Email: {startup.email}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <PhoneIcon sx={{ marginRight: "5px" }} /> Mobile: {startup.mobile}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <WebIcon sx={{ marginRight: "5px" }} /> Website: <a href={startup.website} target="_blank" rel="noopener noreferrer">{startup.website}</a>
        </Typography>
        <Typography variant="body1">
          <AppIcon sx={{ marginRight: "5px" }} /> App: <a href={startup.app} target="_blank" rel="noopener noreferrer">{startup.app}</a>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

// Main Page Component
const StartupApprovalPage = () => {
  const [startups, setStartups] = useState([]);
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  // Fetch startups from the API
  useEffect(() => {
    axios.get(`${apiConfig.baseURL}/api/startups/`)
      .then((response) => {
        const fetchedStartups = response.data;
        setStartups(fetchedStartups);
        calculateStatusCounts(fetchedStartups);
      })
      .catch((error) => {
        console.error("Error fetching startup data:", error);
      });
  }, []);

  // Calculate the counts for each status
  const calculateStatusCounts = (startups) => {
    const approved = startups.filter((s) => s.status === "Approved").length;
    const pending = startups.filter((s) => s.status === "Pending").length;
    const rejected = startups.filter((s) => s.status === "Rejected").length;

    setApprovedCount(approved);
    setPendingCount(pending);
    setRejectedCount(rejected);
  };

  const handleViewDetails = (startup) => {
    setSelectedStartup(startup);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedStartup(null);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Status Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#e0f7fa", color: "#00695c" }}>
            <CardContent>
              <Typography variant="h5">Approved</Typography>
              <Typography variant="h3">{approvedCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#fff3e0", color: "#ef6c00" }}>
            <CardContent>
              <Typography variant="h5">Pending</Typography>
              <Typography variant="h3">{pendingCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#ffebee", color: "#c62828" }}>
            <CardContent>
              <Typography variant="h5">Rejected</Typography>
              <Typography variant="h3">{rejectedCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Startup List */}
      <Box sx={{ borderRadius: "5px", padding: "20px", backgroundColor: "#fff", boxShadow: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>Startups</Typography>
        {startups.map((startup) => (
          <Box
            key={startup._id}
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            {/* Logo & Name */}
            <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
              <img
                src={startup.logo || DefaultLogo}
                alt={startup.startupName}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Typography variant="h6" sx={{ marginLeft: "10px" }}>{startup.startupName}</Typography>
            </Box>

            {/* Date Created */}
            <Typography variant="body2" color="textSecondary" sx={{ width: "20%" }}>
              {startup.createdAt.substring(0, 10)}
            </Typography>

            {/* Industry */}
            <Typography variant="body2" color="textSecondary" sx={{ width: "20%" }}>
              {startup.industry}
            </Typography>

            {/* Stage */}
            <Chip
              label={startup.stage}
              size="small"
              sx={{ marginRight: "10px", width: "20%" }}
            />

            {/* Status */}
            <Chip
              label={startup.status}
              color={statusColors[startup.status]}
              size="small"
              sx={{ marginRight: "20px" }}
            />

            {/* Action Buttons */}
            <Box sx={{ width: "10%" }}>
              <Button
                variant="outlined"
                size="small"
                color="info"
                sx={{ marginRight: "10px" }}
                onClick={() => handleViewDetails(startup)}
              >
                View Details
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="success"
                sx={{ marginRight: "10px" }}
              >
                Approve
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="error"
              >
                Reject
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Detailed Popup */}
      <StartupDetailsPopup open={popupOpen} onClose={handleClosePopup} startup={selectedStartup} />
    </Box>
  );
};

export default StartupApprovalPage;
