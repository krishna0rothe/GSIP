import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { CheckCircle, Pending, Cancel } from "@mui/icons-material";
import StartupDetailsPopup from "../../components/StartupDetailsPopup.jsx"; // Ensure this is your Popup component path

const statusColors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

const statusIcons = {
  Approved: <CheckCircle />,
  Pending: <Pending />,
  Rejected: <Cancel />,
};

// Dummy startup data
const dummyStartups = [
  {
    _id: "66e08854929934905abba532",
    logo: "https://example.com/logo1.png",
    startupName: "HealthFirst",
    createdAt: "2024-09-10T17:56:36.137Z",
    industry: "Healthcare",
    stage: "Validation",
    status: "Pending",
  },
  {
    _id: "66e08854929934905abba533",
    logo: "https://example.com/logo2.png",
    startupName: "EcoDrive",
    createdAt: "2024-08-15T09:24:10.000Z",
    industry: "Automotive",
    stage: "Scaling",
    status: "Approved",
  },
  {
    _id: "66e08854929934905abba534",
    logo: "https://example.com/logo3.png",
    startupName: "AgroGrow",
    createdAt: "2024-09-01T11:30:45.200Z",
    industry: "Agriculture",
    stage: "Early Traction",
    status: "Rejected",
  },
  {
    _id: "66e08854929934905abba535",
    logo: "https://example.com/logo4.png",
    startupName: "TechWave",
    createdAt: "2024-07-20T15:18:00.000Z",
    industry: "Software",
    stage: "Validation",
    status: "Pending",
  },
  {
    _id: "66e08854929934905abba536",
    logo: "https://example.com/logo5.png",
    startupName: "FoodieFit",
    createdAt: "2024-08-05T10:45:00.000Z",
    industry: "FoodTech",
    stage: "Ideation",
    status: "Approved",
  },
  {
    _id: "66e08854929934905abba537",
    logo: "https://example.com/logo6.png",
    startupName: "GreenEnergy",
    createdAt: "2024-09-11T08:30:00.000Z",
    industry: "Energy",
    stage: "Scaling",
    status: "Rejected",
  },
  {
    _id: "66e08854929934905abba538",
    logo: "https://example.com/logo7.png",
    startupName: "MediQuick",
    createdAt: "2024-09-09T16:00:00.000Z",
    industry: "Healthcare",
    stage: "Early Traction",
    status: "Pending",
  },
];

export default function StartupApprovalPage() {
  const [startups, setStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [counts, setCounts] = useState({
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    // Instead of fetching from an API, we are using dummy data here
    setStartups(dummyStartups);
    updateCounts(dummyStartups);
  }, []);

  const updateCounts = (startupData) => {
    const newCounts = startupData.reduce(
      (acc, startup) => {
        acc[startup.status.toLowerCase()]++;
        return acc;
      },
      { approved: 0, pending: 0, rejected: 0 }
    );
    setCounts(newCounts);
  };

  const handleRowClick = (startup) => {
    setSelectedStartup(startup);
    setIsPopupOpen(true);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Startup Approval
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(counts).map(([status, count]) => (
          <Grid item xs={12} sm={4} key={status}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                    {status}
                  </Typography>
                  <Typography variant="h4">{count}</Typography>
                </Box>
                {statusIcons[status]}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="startup approval table">
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {startups.map((startup) => (
              <TableRow
                key={startup._id}
                onClick={() => handleRowClick(startup)}
                sx={{
                  "&:hover": {
                    backgroundColor: "action.hover",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell>
                  <Avatar src={startup.logo} alt={startup.startupName} />
                </TableCell>
                <TableCell>{startup.startupName}</TableCell>
                <TableCell>
                  {new Date(startup.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{startup.industry}</TableCell>
                <TableCell>{startup.stage}</TableCell>
                <TableCell>
                  <Chip
                    label={startup.status}
                    color={statusColors[startup.status]}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StartupDetailsPopup
        startup={selectedStartup}
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </Box>
  );
}
