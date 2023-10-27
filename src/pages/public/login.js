import React, { useEffect, useState, useContext } from "react";
import img1 from "../../assets/images/1.png";
import "../../sass/pages/public/login.scss";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utility/utils";
import { toast, Toaster } from "react-hot-toast";
import GoogleLoginBtn from "../../components/googleLoginBtn";
import { gapi } from "gapi-script";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [networkAvailable, setNetworkAvailable] = useState();
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    reset,
    control,
    setError,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    if (networkAvailable) {
      try {
        const res = await axios.post(baseUrl + "/user/login", data);
        if (!res.data.error) {
          toast.success(res.data.message);
          setTimeout(() => {
            if (res.data.userData?.isAdmin == true) {
              navigate("/dashboard");
            } else {
              navigate("/home");
            }
          }, 1000);
          // Cookies.set("token", res.data.token);
          // setInterval(() => {
          // await setUser(res?.data?.userData);
          localStorage.setItem("isAdmin", res.data.userData?.isAdmin);
          localStorage.setItem("token", res.data.token);
          // }, 1000);
        } else {
          toast.error(res.data.error);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Network issue!");
    }
  };

  const nav = () => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  };

  const clientId =
    "1014433680425-9qjpd7cmkgtvhsdamvv762ploeb3baer.apps.googleusercontent.com";
  const start = () => {
    gapi.client.init({
      clientId: clientId,
      scope: "",
    });
  };

  useEffect(nav, []);

  useEffect(() => {
    if (networkAvailable) {
      gapi.load("client:auth2", start);
    }
  }, []);

  useEffect(() => {
    setNetworkAvailable(navigator.onLine);
  }, []);
  return (
    <div className="form">
      <div className="form__container">
        <div className="form__container__left">
          <img
            className="form__container__left-img"
            src={img1}
            alt="login-img"
          ></img>
        </div>

        <div className="form__container__right">
          <form
            className="form__container__right-sec"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="form__container__right-heading">
              <span>Welcome to</span> Reacto
            </h1>
            <div>
              <Controller
                id="email"
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    className="form__container__right-input"
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Please enter email address",
                      pattern: {
                        value: emailRegex,
                        message: "Please enter valid email address",
                      },
                    })}
                    {...field}
                  />
                )}
              />
              {errors && errors.email && (
                <div style={{ fontSize: "18px", color: "orangered" }}>
                  {errors.email.message}
                </div>
              )}
            </div>
            <div>
              <Controller
                id="password"
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    className="form__container__right-input"
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                      required: "Please enter password",
                      pattern: {
                        value: passwordRegex,
                        message: "Please enter valid password",
                      },
                    })}
                    {...field}
                  />
                )}
              />
              {errors && errors.password && (
                <div className="form__container__error">
                  {errors.password.message}
                </div>
              )}
            </div>
            <input
              className="form__container__right-btn"
              type="submit"
              value="Login"
            />
          </form>
          <div className="form__container__or">
            <hr className="form__container__or-hr" />
            <h5 className="form__container__or-h5">OR</h5>
            <hr className="form__container__or-hr" />
          </div>

          <GoogleLoginBtn />
          <div className="form__container__sign">
            Not a member?
            <button
              className="form__container__sign-btn"
              onClick={() => navigate("/signup")}
            >
              Register
            </button>
          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Login;
