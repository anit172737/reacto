import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PrivateLayout from "../layouts/privateLayout";
const LazyLogin = lazy(() => import("../pages/login"));
const LazyHome = lazy(() => import("../pages/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLogin />,
  },
  {
    element: (
      <PrivateRoute>
        <PrivateLayout />
      </PrivateRoute>
    ),
    children: [{ element: <LazyHome />, path: "/home" }],
  },
]);
