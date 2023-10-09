import React from "react";
import GoogleLogin from "react-google-login";
import "../../sass/pages/public/login.scss";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const clientId =
    "1014433680425-9qjpd7cmkgtvhsdamvv762ploeb3baer.apps.googleusercontent.com";
  const onSuccess = (res) => {
    console.log("Login Success!", res.profileObj);
    // localStorage.setItem("token", "aniii");
    // navigate("/home");
  };

  const onFailure = (res) => {
    console.log("Login Failed!", res);
  };
  return (
    <div>
      <GoogleLogin
        className="googleLogin"
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginBtn;
