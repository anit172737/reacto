import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../sass/layouts/privateLayout.scss";
import Sidebar from "../components/sidebar";

const PrivateLayout = () => {
  return (
    <div className="privateLayout">
      <div className="privateLayout_container">
        <Sidebar />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default PrivateLayout;
