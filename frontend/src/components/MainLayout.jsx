import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import SidebarNavigation from "./SidebarNavigation";
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
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Header Bar */}
      <TopHeaderBar />

      {/* Spacing to account for fixed AppBar */}
      <Box sx={{ paddingTop: "64px" }}>
        <SidebarNavigation />
      </Box>
    </Box>
  );
};

export default MainLayout;
