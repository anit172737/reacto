import React, { useEffect, useState } from "react";
import "../../../sass/pages/private/interviewQ.scss";
import Menu from "./menuJavascript";
import Header from "../../../components/header";
import { searchFunction } from "../../../utility/helperFunctions";

const InterviewJavascript = () => {
  const [search, setSearch] = useState("");
  const [searchMenu, setSearchMenu] = useState(Menu);
  useEffect(() => {
    searchFunction(search, Menu, setSearchMenu);
  }, [search]);

  console.log("searchMenu", Menu);
  return (
    <div className="interviewQ">
      <Header title="Javascript Interview Questions" setSearch={setSearch} />
      {searchMenu.length !== 0 ? (
        searchMenu.map((qtn) => {
          return (
            <div className="interviewQ_sec">
              <h3>{qtn?.question}</h3>
              <p style={{ lineHeight: "30px" }}>{qtn?.answer}</p>
            </div>
          );
        })
      ) : (
        <div
          className="interviewQ_sec"
          style={{ paddingBottom: "0px", textAlign: "center" }}
        >
          No data found
        </div>
      )}
    </div>
  );
};

export default InterviewJavascript;
