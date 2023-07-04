import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ path, ...props }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
