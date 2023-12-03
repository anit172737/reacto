import React, { Suspense, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../sass/layouts/privateLayout.scss";
import { Audio } from "react-loader-spinner";
import AdminSidebar from "../components/adminSidebar";

const AdminLayout = () => {
  return (
    <div className="privateLayout">
      <div className="privateLayout_container">
        <AdminSidebar />
        <div
          style={{
            display: "grid",
            padding: "0px 20px",
            // alignItems: "center",
            boxShadow: "0 8px 25px -8px #82868b",
            borderRadius: "15px",
            backgroundColor: "white",
            // backgroundColor: "#2f2e47",
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

export default AdminLayout;
