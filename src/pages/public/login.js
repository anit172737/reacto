import React, { useEffect } from "react";
import img1 from "../../assets/images/1.png";
import "../../sass/pages/public/login.scss";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utility/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleLoginBtn from "../../components/googleLoginBtn";
import GoogleLogoutBtn from "../../components/googleLogoutBtn";
import { gapi } from "gapi-script";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
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
    try {
      const res = await axios.post(baseUrl + "/login", data);
      console.log("res", res);
      if (!res.data.error) {
        navigate("/home");
        Cookies.set("token", res.data.token);
        localStorage.setItem("token", res.data.token);
      } else {
        toast.error(res.data.error);
      }
    } catch (error) {
      toast.error(error.message);
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
    gapi.load("client:auth2", start);
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
            <h1 className="form__container__right-heading">Login</h1>
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
              <p
                style={{
                  fontSize: "14px",
                  paddingTop: "8px",
                  lineHeight: "14px",
                  width: "30rem",
                }}
              >
                ( Password between 8 to 15 characters which contain alteast one
                uppercase letter, one lowercase letter, one special character
                and one numeric digit.)
              </p>
              {errors && errors.password && (
                <div style={{ fontSize: "18px", color: "orangered" }}>
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
          <div style={{ display: "grid", justifyContent: "center" }}>
            <div style={{ color: "#2f2e47" }}>
              Not a member?
              <span style={{ paddingLeft: "10px" }}>
                <button
                  className="form__container__sign-btn"
                  onClick={() => navigate("/signup")}
                >
                  Register
                </button>
              </span>
            </div>
          </div>
          <GoogleLoginBtn />
          <ToastContainer theme="dark" />
        </div>
      </div>
    </div>
  );
};

export default Login;
