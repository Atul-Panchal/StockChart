import React from "react";
import Navbar from "../uielements/Navbar";

function StartTradeTwo() {
  return (
    <div>
      <Navbar
        condition={true}
        targetLinkAlgo1="/starttrade2/algo1"
        targetLinkAlgo2="/starttrade2/algo2"
        targetLinkAlgo3="/starttrade2/algo3"
      />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="display-1">Coming Soon</h1>
      </div>
    </div>
  );
}

export default StartTradeTwo;
