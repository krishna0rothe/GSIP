import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard"); // Replace with your desired route
  };

  return (
    <div>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
