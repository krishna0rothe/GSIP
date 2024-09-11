import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/HomePage";
import NotFound from "./pages/notfound/NotFound";
import StartupApprovalPage from "./pages/Dashboard/StartupApprovalPage.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/startups/approval" element={<StartupApprovalPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
