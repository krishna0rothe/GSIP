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

const dummyStartups = [
  {
    "_id": { "$oid": "66e08854929934905abba533" },
    "logo": "https://example.com/logo2.png",
    "stage": "Ideation",
    "startupName": "EduTech Innovators",
    "brief": "Transforming education through innovative technology.",
    "funded": "Not Funded",
    "email": "info@edutechinnovators.com",
    "mobile": "9123456790",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://edutechinnovators.com",
    "app": "https://app.edutechinnovators.com",
    "industry": "Education",
    "sector": "EdTech",
    "services": ["Online Courses", "Learning Management Systems"],
    "udyogAadhar": "UAN12345678",
    "natureOfEntity": "Partnership",
    "legalName": "EduTech Innovators LLP",
    "CINNumber": "L12345MH2024PLC123456",
    "interests": ["Partnerships", "Grants"],
    "user": { "$oid": "66d82c8d84c0c914b9b089ef" },
    "status": "Approved",
    "createdAt": { "$date": "2024-09-11T18:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-11T18:56:36.137Z" },
    "__v": 0
  },
  {
    "_id": { "$oid": "66e08854929934905abba534" },
    "logo": "https://example.com/logo3.png",
    "stage": "Early Traction",
    "startupName": "EcoWave",
    "brief": "Sustainable solutions for a greener planet.",
    "funded": "Partially Funded",
    "email": "contact@ecowave.com",
    "mobile": "9123456791",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://ecowave.com",
    "app": "https://app.ecowave.com",
    "industry": "Environment",
    "sector": "CleanTech",
    "services": ["Waste Management", "Renewable Energy"],
    "udyogAadhar": "UAN23456789",
    "natureOfEntity": "Limited Liability Partnership",
    "legalName": "EcoWave LLP",
    "CINNumber": "L23456KA2024PLC234567",
    "interests": ["Grants", "Sponsorships"],
    "user": { "$oid": "66d82c8d84c0c914b9b089f0" },
    "status": "Pending",
    "createdAt": { "$date": "2024-09-12T19:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-12T19:56:36.137Z" },
    "__v": 0
  },
  {
    "_id": { "$oid": "66e08854929934905abba535" },
    "logo": "https://example.com/logo4.png",
    "stage": "Scaling",
    "startupName": "FinTech Solutions",
    "brief": "Revolutionizing financial services with technology.",
    "funded": "Fully Funded",
    "email": "support@fintechsolutions.com",
    "mobile": "9123456792",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://fintechsolutions.com",
    "app": "https://app.fintechsolutions.com",
    "industry": "Finance",
    "sector": "FinTech",
    "services": ["Digital Payments", "Investment Platforms"],
    "udyogAadhar": "UAN34567890",
    "natureOfEntity": "Public Limited",
    "legalName": "FinTech Solutions Ltd.",
    "CINNumber": "L34567DL2024PLC345678",
    "interests": ["Investment", "Partnerships"],
    "user": { "$oid": "66d82c8d84c0c914b9b089f1" },
    "status": "Rejected",
    "createdAt": { "$date": "2024-09-13T20:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-13T20:56:36.137Z" },
    "__v": 0
  },
  {
    "_id": { "$oid": "66e08854929934905abba536" },
    "logo": "https://example.com/logo5.png",
    "stage": "Validation",
    "startupName": "AgriTech Innovates",
    "brief": "Innovating agriculture with cutting-edge technology.",
    "funded": "Not Funded",
    "email": "hello@agritechinnovates.com",
    "mobile": "9123456793",
    "state": "Punjab",
    "city": "Chandigarh",
    "website": "https://agritechinnovates.com",
    "app": "https://app.agritechinnovates.com",
    "industry": "Agriculture",
    "sector": "AgriTech",
    "services": ["Smart Farming", "Agricultural Drones"],
    "udyogAadhar": "UAN45678901",
    "natureOfEntity": "Private Limited",
    "legalName": "AgriTech Innovates Pvt Ltd",
    "CINNumber": "L45678PB2024PLC456789",
    "interests": ["Research", "Grants"],
    "user": { "$oid": "66d82c8d84c0c914b9b089f2" },
    "status": "Pending",
    "createdAt": { "$date": "2024-09-14T21:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-14T21:56:36.137Z" },
    "__v": 0
  },
  {
    "_id": { "$oid": "66e08854929934905abba537" },
    "logo": "https://example.com/logo6.png",
    "stage": "Early Traction",
    "startupName": "SmartHealth",
    "brief": "Leveraging AI to advance personal healthcare.",
    "funded": "Partially Funded",
    "email": "contact@smarthealth.com",
    "mobile": "9123456794",
    "state": "Rajasthan",
    "city": "Jaipur",
    "website": "https://smarthealth.com",
    "app": "https://app.smarthealth.com",
    "industry": "Healthcare",
    "sector": "HealthTech",
    "services": ["AI Diagnostics", "Wearable Health Tech"],
    "udyogAadhar": "UAN56789012",
    "natureOfEntity": "Partnership",
    "legalName": "SmartHealth LLP",
    "CINNumber": "L56789RJ2024PLC567890",
    "interests": ["Investment", "Mentorship"],
    "user": { "$oid": "66d82c8d84c0c914b9b089f3" },
    "status": "Approved",
    "createdAt": { "$date": "2024-09-15T22:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-15T22:56:36.137Z" },
    "__v": 0
  },
  {
    "_id": { "$oid": "66e08854929934905abba538" },
    "logo": "https://example.com/logo7.png",
    "stage": "Scaling",
    "startupName": "RetailTech Solutions",
    "brief": "Revolutionizing retail through technology.",
    "funded": "Fully Funded",
    "email": "contact@retailtechsolutions.com",
    "mobile": "9123456795",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "website": "https://retailtechsolutions.com",
    "app": "https://app.retailtechsolutions.com",
    "industry": "Retail",
    "sector": "RetailTech",
    "services": ["POS Systems", "Customer Analytics"],
    "udyogAadhar": "UAN67890123",
    "natureOfEntity": "Public Limited",
    "legalName": "RetailTech Solutions Ltd.",
    "CINNumber": "L67890GJ2024PLC678901",
    "interests": ["Partnerships", "Expansion"],
    "user": { "$oid": "66d82c8d84c0c914b9b089f4" },
    "status": "Pending",
    "createdAt": { "$date": "2024-09-16T23:56:36.137Z" },
    "updatedAt": { "$date": "2024-09-16T23:56:36.137Z" },
    "__v": 0
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
