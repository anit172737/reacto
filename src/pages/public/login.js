import React, { useEffect } from "react";
import img1 from "../../assets/images/1.png";
import "../../sass/pages/public/login.scss";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utility/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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

  const onSubmit = (data) => {
    if (data.email === "anit@gmail.com" && data.password === "anit@123") {
      localStorage.setItem("token", "aniii");
      navigate("/home");
    } else {
      toast.error(
        <div style={{ fontSize: "18px", fontFamily: "myFont" }}>
          Invalid userid or password
        </div>
      );
    }
  };

  const nav = () => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  };

  useEffect(nav, []);
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
                      // pattern: {
                      //   value: passwordRegex,
                      //   message: "Please enter valid password",
                      // },
                    })}
                    {...field}
                  />
                )}
              />
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
                  //   onClick={()=> history.push('/signup')}
                >
                  Register
                </button>
              </span>
            </div>
          </div>
          <ToastContainer theme="dark" />
        </div>
      </div>
    </div>
  );
};

export default Login;
