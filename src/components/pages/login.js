import React from "react";
import img1 from "../../assets/images/1.png";
import "../sass/login.scss";

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
              <input
                className="form__container__right-input"
                type="email"
                name="loginMail"
                //   onChange={formik.handleChange}
                placeholder="Enter email"
                //   value={formik.values.loginMail}
                //   onBlur = {formik.handleBlur}
              />
              {/* {formik.touched.loginMail && formik.errors.loginMail ? <div className='form__right-label'>{formik.errors.loginMail}</div> : null} */}
            </div>
            <div>
              <input
                className="form__container__right-input"
                type="password"
                name="loginPass"
                //   onChange={formik.handleChange}
                placeholder="Enter password"
                //   value={formik.values.loginPass}
                //   onBlur = {formik.handleBlur}
              />
              {/* {formik.touched.loginPass && formik.errors.loginPass ? <div className='form__right-label'>{formik.errors.loginPass}</div> : null} */}
            </div>
            <input
              className="form__container__right-btn"
              type="submit"
              value="Login"
            />
            <div style={{ display: "grid", justifyContent: "center" }}>
              <div style={{ color: "#2f2e47" }}>
                Not a member?
                <span>
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
