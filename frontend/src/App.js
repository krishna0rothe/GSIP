import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/themes";
import MainLayout from "./components/MainLayout";
import StartupApprovalPage from "./pages/Dashboard/StartupApprovalPage";
import DashboardHomePage from "./pages/Dashboard/DashboardHomePage";
import ResourceManagementPage from "./pages/Dashboard/ResourceManagementPage";
import MentorAssignmentsPage from "./pages/Dashboard/MentorAssignmentsPage";
import DataInsightsPage from "./pages/Dashboard/DataInsightsPage";
import SettingsPage from "./pages/Dashboard/SettingsPage";
import StartupDashboard from "./pages/StartupDashboard/StartupDashboard";
import FundingRequestsPage from "./pages/StartupDashboard/FundingRequestsPage";
import IPRManagementPage from "./pages/StartupDashboard/IPRManagementPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Group all gov-related routes under MainLayout */}
          <Route path="/" element={<HomePage />} />
        </Routes>
          <Routes>
          {/* Group all gov-related routes under MainLayout */}
          <Route path="/gov" element={<MainLayout />}>
            {/* Nested Routes for gov */}
            <Route path="startups/approval" element={<StartupApprovalPage />} />
            <Route path="home" element={<DashboardHomePage />} />
            <Route
              path="resource-management"
              element={<ResourceManagementPage />}
            />
            <Route
              path="mentor-assignments"
              element={<MentorAssignmentsPage />}
            />
            <Route path="data-insights" element={<DataInsightsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Group all startup-related routes under MainLayout */}
          <Route path="/startup" element={<MainLayout />}>
            {/* Nested Routes for startup */}
            <Route path="home" element={<StartupDashboard />} />
            <Route path="funding" element={<FundingRequestsPage />} />
            <Route path="ipr" element={<IPRManagementPage />} />
            {/* Add your startup-specific pages here */}
          </Route>

          {/* Group all mentor-related routes under MainLayout */}
          <Route path="/mentor" element={<MainLayout />}>
            {/* Nested Routes for mentor */}
            {/* Add your mentor-specific pages here */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
