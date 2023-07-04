import React from "react";
import img1 from "../../assets/images/1.png";
import "../sass/login.scss";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
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
            // onSubmit={form__containerik.handleSubmit}
          >
            <h1 className="form__container__right-heading">Login</h1>
            <div>
              <Controller
                id="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="form__container__right-input"
                    type="email"
                    name="loginMail"
                    placeholder="Enter Email"
                    // onChange={(e) => setValue('loginMail', e.target.value)}
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                id="email"
                control={control}
                render={({ field }) => (
                  <Input
                    className="form__container__right-input"
                    type="password"
                    name="loginPass"
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
