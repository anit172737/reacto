import React, { Suspense, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { LoginContext } from "./utility/loginContext";
import { Audio } from "react-loader-spinner";

const App = () => {
  const [googleLogin, setGoogleLogin] = useState(false);
  const [user, setUser] = useState("");
  return (
    <LoginContext.Provider
      value={{ googleLogin, setGoogleLogin, user, setUser }}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </LoginContext.Provider>
  );
};

export default App;
