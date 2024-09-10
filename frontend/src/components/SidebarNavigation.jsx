import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from "@mui/material";
import { Home as HomeIcon, Assignment as AssignmentIcon, BarChart as BarChartIcon, People as PeopleIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartupApprovalPage from "../pages/Dashboard/StartupApprovalPage.jsx"  // Your startup approval page component

const SidebarNavigation = () => {
  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/" },
    { text: "Startup Approvals", icon: <AssignmentIcon />, path: "/startups/approval" },
    { text: "Resource Management", icon: <BarChartIcon />, path: "/resource-management" },
    { text: "Mentor Assignments", icon: <PeopleIcon />, path: "/mentor-assignments" },
    { text: "Data Insights", icon: <BarChartIcon />, path: "/data-insights" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Sidebar */}
        <Box
          component="nav"
          sx={{
            width: 240,
            flexShrink: 0,
            height: "100vh",
            backgroundColor: "white",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.path}>
                <ListItemIcon sx={{ color: "grey" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "grey" }} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#f9f9f9",
            minHeight: "100vh",
            paddingTop: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Typography>Welcome to the Dashboard</Typography>} />
            <Route path="/startups/approval" element={<StartupApprovalPage />} />
            {/* Add more routes here */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default SidebarNavigation;
