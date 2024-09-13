import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import SidebarNavigation from "./SidebarNavigation";
import { useLocation, Outlet } from "react-router-dom"; // Outlet is used to render route-specific content
import img from "../assets/logo.png";

const TopHeaderBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black"}}  elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side: Logo and Platform Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Replace the box with the actual logo image */}
          <img
            src={img} // Add the path to your logo image
            alt="Platform Logo"
            style={{ width: 60, height: 60, marginRight: 16 }}
          />
          {/* Platform Name */}
          <Typography variant="h6" noWrap>
            Gujrat Startup & Innovation Portal
          </Typography>
        </Box>

        {/* Right Side: Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search…"
              sx={{
                backgroundColor: "#f1f1f1",
                borderRadius: "5px",
                paddingLeft: "10px",
                width: "200px",
                color: "black",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


const MainLayout = () => {
  const location = useLocation();

  // Determine user role based on URL prefix
  const userRole = location.pathname.includes("/gov")
    ? "government"
    : location.pathname.includes("/startup")
    ? "startup"
    : location.pathname.includes("/mentor")
    ? "mentor"
    : "other";

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240, // Sidebar width
          flexShrink: 0,
          position: "fixed", // Keep the sidebar fixed
          height: "100vh", // Full height
          backgroundColor: "white",
          zIndex: 1000, // Ensure sidebar stays behind the top bar
          borderRight: "1px solid #e0e0e0",
          paddingTop: "64px", // Space for the top header
        }}
      >
        <SidebarNavigation role={userRole} />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: "240px", // Offset by the width of the sidebar
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Header */}
        <Box
          sx={{
            zIndex: 1200, // Ensure the top bar stays above everything else
            position: "fixed",
            width: "100%",
            top: 0,
          }}
        >
          <TopHeaderBar />
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            paddingTop: "64px", // Space for the top header
            padding: "60px",
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};


export default MainLayout;
