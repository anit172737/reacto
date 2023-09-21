import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PrivateLayout from "../layouts/privateLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyLogin = lazy(() => import("../pages/public/login"));
const LazyHome = lazy(() => import("../pages/private/home"));
const LazyIntro = lazy(() => import("../pages/private/intro"));
const LazyJsx = lazy(() => import("../pages/private/jsx"));
const LazyEs6 = lazy(() => import("../pages/private/es6"));
const LazyComponents = lazy(() => import("../pages/private/components"));
const LazyFunction = lazy(() => import("../pages/private/components/function"));
const LazyClass = lazy(() => import("../pages/private/components/class"));
const LazyInterviewReact = lazy(() =>
  import("../pages/private/interviewReact")
);
const LazyInterviewJavascript = lazy(() =>
  import("../pages/private/interviewJavascript")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLogin />,
  },
  {
    element: (
      <PrivateLayout>
        <PrivateRoute />
      </PrivateLayout>
    ),
    children: [
      { element: <LazyHome />, path: "/home" },
      { element: <LazyIntro />, path: "/intro" },
      { element: <LazyEs6 />, path: "/es6" },
      { element: <LazyJsx />, path: "/jsx" },
      { element: <LazyComponents />, path: "/components" },
      { element: <LazyFunction />, path: "/function-component" },
      { element: <LazyClass />, path: "/class-component" },
      { element: <LazyInterviewReact />, path: "/interview-react" },
      { element: <LazyInterviewJavascript />, path: "/interview-javascript" },
    ],
  },
]);
