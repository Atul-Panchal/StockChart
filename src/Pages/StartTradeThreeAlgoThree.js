import React from "react";
import Navbar from "../uielements/Navbar";

function StartTradeThreeAlgoThree() {
  return (
    <div>
      <Navbar
        condition={true}
        targetLinkAlgo1="/starttrade3/algo1"
        targetLinkAlgo2="/starttrade3/algo2"
        targetLinkAlgo3="/starttrade3/algo3"
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

export default StartTradeThreeAlgoThree;
