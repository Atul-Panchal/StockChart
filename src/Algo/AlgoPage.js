import React from "react";
import "./AlgoPage.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Fab } from "@mui/material";
import MarketCard from "./Marketplace/MarketCard";
import DeplyedCard from "./Deployed/DeplyedCard";
import SubscribedStrategy from "./subscribed/SubscribedStrategy";
import Mystrategy from "./mystrategy/Mystrategy";  
import { Button } from "@mui/material"; 



const AlgoPage = () => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]); 
  const [file,setFile]=useState(null);
  const [selectedTab, setSelectedTab] = useState("Subscribed"); 
  const [uplooadOpen,setUploadOpen]=useState(false);
  const searchRecords = async () => {
    if (search.trim().length === 0) {
      setRecord([]);
      return;
    }
  }; 
  const handefile=(file)=>{
    setFile(file);
    console.log(file) 
    setUploadOpen(false)
  }  
  const left_jsx=<>
            <div className="search-stategy">
            <p className="strategy-title">Search Strategy {record}</p> 
            <div className="strategy-search">
            {" "}
            <input
              className="form-control me-2"
              type="search"
              onKeyUp={searchRecords}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              autoComplete="off"
              aria-label="Search"
            />
            <div className="team-list"></div>
          </div>
          </div>
          
          <NavLink to="/algos/creatstrategy">
            <Fab
              sx={{ marginTop: 2, paddingLeft: 5, paddingRight: 5 ,zIndex:1}}
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
            >
              New Strategy
            </Fab> 
            
          </NavLink> 
          
         </>;
  return (
    <> 
      <div className="viewport-algo-left">
           {left_jsx}
          </div>
      <div className="algo_wrapper">
        <div className="algo-left">
          {left_jsx}  
        </div>
        <div className="algo-right"> 
        
          <div className="starategy-tabs"> 
          <div className="tab-container">
          <div className="strategy-link">
            <Link
              className={`startegy-tab ${
                selectedTab === "deployed" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedTab("deployed");
              }}
            >
              Deployed
            </Link>   
            </div>
            {selectedTab === "deployed"&&<div className="bottom-marker"></div>}
            </div> 
            <div className="tab-container">
            <div className="strategy-link">
            <Link
              className={`startegy-tab ${
                selectedTab === "Subscribed" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedTab("Subscribed");
              }}
            >
              Subscribed
            </Link>    
            </div>
            {selectedTab === "Subscribed"&&<div className="bottom-marker"></div>}
            </div> 
            <div className="tab-container"> 
            <div className="strategy-link">
            <Link
              className={`startegy-tab ${
                selectedTab === "mystrategies" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedTab("mystrategies");
              }}
            >
              My Starategies
            </Link>  
            </div>
            {selectedTab === "mystrategies"&&<div className="bottom-marker"></div>}
            </div> 
            <div className="tab-container"> 
            <div className="strategy-link">
            <div className="strategy-link">
            <Link
              className={`startegy-tab ${
                selectedTab === "marketplace" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedTab("marketplace");
              }}
            >
              Marketplace{" "}
            </Link>   
            </div>
            </div>
            {selectedTab === "marketplace"&& <div className="bottom-marker"></div> }
            </div> 
          </div> 
          <div className="algo-cards">
            {selectedTab === "marketplace" && <MarketCard />}
            {selectedTab === "deployed" && <DeplyedCard />}
            {selectedTab === "Subscribed" && <SubscribedStrategy />} 
            {selectedTab==="mystrategies"&&<Mystrategy />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgoPage;

