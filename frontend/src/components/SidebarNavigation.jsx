import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from "@mui/material";
import { Home as HomeIcon, Assignment as AssignmentIcon, BarChart as BarChartIcon, People as PeopleIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SidebarNavigation = ({ role }) => {
  let menuItems = [];

  if (role === "government") {
    menuItems = [
      { text: "Dashboard", icon: <HomeIcon />, path: "/gov/home" },
      { text: "Startup Approvals", icon: <AssignmentIcon />, path: "/gov/startups/approval" },
      { text: "Resource Management", icon: <BarChartIcon />, path: "/gov/resource-management" },
      { text: "Mentor Assignments", icon: <PeopleIcon />, path: "/gov/mentor-assignments" },
      { text: "Data Insights", icon: <BarChartIcon />, path: "/gov/data-insights" },
      { text: "Settings", icon: <SettingsIcon />, path: "/gov/settings" }
    ];
  } else if (role === "startup") {
    menuItems = [
      { text: "Dashboard", icon: <HomeIcon />, path: "/startup/home" },
      { text: "Funding Requests", icon: <AssignmentIcon />, path: "/startup/funding" },
      { text: "Mentorship", icon: <PeopleIcon />, path: "/startup/mentorship" },
      { text: "IPR Management", icon: <BarChartIcon />, path: "/startup/ipr" },
      { text: "Profile Settings", icon: <SettingsIcon />, path: "/startup/settings" }
    ];
  } else if (role === "mentor") {
    menuItems = [
      { text: "Dashboard", icon: <HomeIcon />, path: "/mentor/home" },
      { text: "Assigned Startups", icon: <PeopleIcon />, path: "/mentor/startups" },
      { text: "Profile Settings", icon: <SettingsIcon />, path: "/mentor/settings" }
    ];
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Fixed Sidebar */}
      <Box
        component="nav"
        sx={{
          width: 240,
          flexShrink: 0,
          height: "100vh",
          position: "fixed",
          backgroundColor: "white",
          borderRight: "1px solid #e0e0e0",
          overflowY: "auto", // In case of long menu
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
    </Box>
  );
};

export default SidebarNavigation;
