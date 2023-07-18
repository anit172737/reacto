import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated) {
    return props.children;
  }
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
