import React, { useEffect } from "react";
import Axios from "../../Request/Axios";
import { useState } from "react";

import "./SubscribedStrategy.css";
import SingleStrategy from "./SingleStrategy/SingleStrategy";

const SubscribedStrategy = () => {
  const [strategies, setstrategies] = useState([]);
  const uid = localStorage["USERID"];

  useEffect(() => {
    const getdata = async () => {
      let response = await Axios.get("/getsubscribed/" + uid);
      setstrategies(response.data.subscribed); 
   
    };
    getdata();
  }, [uid]);

  return (
    <>
      {strategies.map((element) => (
        <SingleStrategy strategyDetails={element} />
      ))}
    </>
  );
};

export default SubscribedStrategy;
