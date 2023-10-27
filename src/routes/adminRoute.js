import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { handleLogout } from "../utility/helperFunctions";

const AdminRoute = (props) => {
  const [token, setToken] = useState(true);
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  setTimeout(() => {
    setToken(false);
    handleLogout();
  }, 3600000);

  if (isAuthenticated && token && isAdmin === "true") {
    return props.children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AdminRoute;
