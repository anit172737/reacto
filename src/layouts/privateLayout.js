import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../sass/layouts/privateLayout.scss";
import Sidebar from "../components/sidebar";
import { Audio } from "react-loader-spinner";

const PrivateLayout = () => {
  return (
    <div className="privateLayout">
      <div className="privateLayout_container">
        <Sidebar />
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            boxShadow: "0 8px 25px -8px #82868b",
            borderRadius: "15px",
            backgroundColor: "white",
            overflow: "auto",
          }}
        >
          <Suspense
            fallback={
              <Audio
                height="70"
                width="70"
                radius="9"
                color="#7e77fd"
                ariaLabel="loading"
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
