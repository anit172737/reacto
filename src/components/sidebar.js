import React from "react";
import { NavLink } from "react-router-dom";
i;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/home"
        className={(isActive) => (isActive ? "active" : "sidebar_navlink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/jsx"
        className={(isActive) => (isActive ? "active" : "sidebar_navlink")}
      >
        JSX
      </NavLink>
    </div>
  );
};

export default Sidebar;
