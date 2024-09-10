import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button, Chip } from "@mui/material";
import apiConfig from "../../config/apiConfig";
import axios from "axios";


// Status colors for tags
const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

const StartupApprovalPage = () => {
  const [startups, setStartups] = useState([]);
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);

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
        {startups.map((startup) => (
          <Box
            key={startup._id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            {/* Startup Information */}
            <Box>
              <Typography variant="h6">{startup.startupName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {startup.brief}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {startup.createdAt.substring(0, 10)}
              </Typography>
            </Box>

            {/* Stage and Status */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Chip
                label={startup.stage}
                size="small"
                sx={{ marginRight: "10px" }}
              />
              <Chip
                label={startup.status}
                color={statusColors[startup.status]}
                size="small"
                sx={{ marginRight: "20px" }}
              />
            </Box>

            {/* Action Buttons */}
            <Box>
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
    </Box>
  );
};

export default StartupApprovalPage;
