import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <>
      <div>sidebar...</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
