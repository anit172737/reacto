import React, { useState, useEffect } from "react";
import "../../../sass/pages/private/interviewQ.scss";
import menu from "./interview.json";
import Header from "../../../components/header";
import { searchFunction } from "../../../utility/helperFunctions";

const InterviewQ = () => {
  const [search, setSearch] = useState("");
  const [searchMenu, setSearchMenu] = useState(menu);
  useEffect(() => {
    searchFunction(search, menu, setSearchMenu);
  }, [search]);
  return (
    <div className="interviewQ">
      {/* <input
        className="interviewQ_search"
        type="input"
        placeholder="Search..."
      /> */}
      <Header title="React Interview Questions" setSearch={setSearch} />
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

export default InterviewQ;
