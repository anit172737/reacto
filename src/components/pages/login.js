import React from "react";
import img1 from "../../assets/images/1.png";
import "../sass/login.scss";
import { useForm, Controller } from "react-hook-form";
import { Navigate } from "react-router-dom";

const Login = () => {
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
      // Navigate('/home')
    }
  };
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
                    {...field}
                  />
                )}
              />
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
                    // onChange={(e) => setValue('loginMail', e.target.value)}
                    {...field}
                  />
                )}
              />
            </div>
            <input
              className="form__container__right-btn"
              type="submit"
              value="Login"
            />
            <div style={{ display: "grid", justifyContent: "center" }}>
              <div style={{ color: "#2f2e47" }}>
                Not a member?
                <span style={{ paddingLeft: "10px" }}>
                  <button
                    className="form__container__sign-btn"
                    //   onClick={()=> history.push('/signup')}
                  >
                    SignUp
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
