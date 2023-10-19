import React, { useEffect } from "react";
import "../../sass/pages/private/home.scss";

const Home = () => {
  useEffect(() => {
    console.log("localStorage.getItem()", localStorage.getItem("oauth2_ss"));
  }, []);
  return <div className="home">"Welcome To Reacto..."</div>;
};

export default Home;
