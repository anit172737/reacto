import React from "react";
import { GoogleLogout } from "react-google-login";

const GoogleLogoutBtn = () => {
  const clientId =
    "1014433680425-9qjpd7cmkgtvhsdamvv762ploeb3baer.apps.googleusercontent.com";
  const onSuccess = (res) => {
    console.log("Logout Success!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default GoogleLogoutBtn;
