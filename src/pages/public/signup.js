import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import "../../sass/pages/public/login.scss";

const Signup = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post(baseUrl + "/signup", user);
      console.log("user", user);
      console.log("response", response.data);
      if (!response.data.error) {
        navigate("/");
        toast.success(response.data.message);
      } else {
        navigate("/signup");
        toast.error(response.data.error);
      }
    } catch (error) {
      //   toast.error(error.response.data.error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tok = Cookies.get("token");
    if (tok) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div
      className="signup"
      style={{
        display: "grid",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
        gap: "10px",
        height: "100vh",
      }}
    >
      Signup
      <div style={{ display: "grid" }}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          //   value={user.email}
          placeholder="enter email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div style={{ display: "grid" }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          //   value={user.password}
          placeholder="enter password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <input
        type="button"
        value={loading ? "Processing..." : "Submit"}
        onClick={handleSignup}
      />
      <input
        type="button"
        value="Go to login page"
        onClick={() => navigate("/")}
      />
      <ToastContainer
        theme="dark"
        className="toaster"
        style={{ fontSize: "17px" }}
      />
    </div>
  );
};

export default Signup;
