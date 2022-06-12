import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "../../Request/Axios";
import "./DeployedCard.css"; 
import { NavLink } from "react-router-dom";
const DeplyedCard = (props) => {
  const [strategies, setstrategies] = useState([]);
  const uid = localStorage["USERID"];
  useEffect(() => {
    const getdata = async () => {
      let response = await Axios.get("/getdeployed/" + uid);
      setstrategies(response.data.deployed);
    };
    getdata();
  }, [uid]);
  if (!strategies.length) {
    return (
      <>
        <div className="deployed-card">
          <div className="deployed-card-header">
            <h4>No Active Algo</h4>
          </div>
          <div className="deployed-status"></div>
        </div>
      </>
    );
  }
  return (
    <>
      {strategies.map((strategy, i) => {
        return (
          <div className="deployed-card" key={i}>
            <div className="deployed-card-header">
              <h4>{strategy.name}</h4>
            </div>
            <div className="deployed-status"> 
            <Button variant="outlined" size="large">
            <NavLink to={`/getnotification/${strategy.strategyId}/${uid}`}>See Status</NavLink> 
            </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DeplyedCard;
