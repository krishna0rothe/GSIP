import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Chip, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import axios from "axios";
import apiConfig from "../../config/apiConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Status colors for tags
const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

const DashboardHomePage = () => {
  const [startups, setStartups] = useState([]);
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);

  // Dummy data for the cards
  const startupCount = 10;
  const researchCount = 7;
  const mentorCount = 15;
  const fundingRaised = "₹2 Cr";

  // Dummy data for the graph
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Startups Approved",
        data: [2, 3, 1, 4, 6, 5],
        borderColor: "#3f51b5",
        fill: false,
      },
    ],
  };

  // Fetch startups from the API
  useEffect(() => {
    axios.get(`${apiConfig.baseURL}/api/startups/`)
      .then((response) => {
        const fetchedStartups = response.data;
        setStartups(fetchedStartups.slice(0, 5)); // Show latest 5 startups
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
    <Box sx={{ padding: "10px", maxWidth: "100%", overflow: "hidden" }}>
      {/* Top Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Startups</Typography>
              <Typography variant="h3">{startupCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Research Projects</Typography>
              <Typography variant="h3">{researchCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Mentors</Typography>
              <Typography variant="h3">{mentorCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Funding Raised</Typography>
              <Typography variant="h3">{fundingRaised}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Line Graph */}
      <Box sx={{ marginBottom: "20px", height: "200px" }}>
        <Line data={lineChartData} />
      </Box>

      {/* Latest Startups List */}  
      <Box sx={{ borderRadius: "5px", padding: "15px", backgroundColor: "#fff", boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Latest Startup Approvals
        </Typography>
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
              <Typography variant="caption" color="textSecondary">
                {startup.createdAt.substring(0, 10)}
              </Typography>
            </Box>

            {/* Stage and Status */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Chip label={startup.stage} size="small" sx={{ marginRight: "10px" }} />
              <Chip
                label={startup.status}
                color={statusColors[startup.status]}
                size="small"
                sx={{ marginRight: "20px" }}
              />
            </Box>

            {/* Action Buttons */}
            <Box>
              <Button variant="outlined" size="small" color="success" sx={{ marginRight: "10px" }}>
                Approve
              </Button>
              <Button variant="outlined" size="small" color="error">
                Reject
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardHomePage;
