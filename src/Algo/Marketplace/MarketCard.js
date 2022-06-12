import "./MarketCard.css";
import { Button } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Box, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "../../Request/Axios";
const MarketCard = (props) => {
  const [strategies, setstrategies] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let response = await Axios.get("/allstrategy");
      setstrategies(response.data.algos);
    };
    getdata();
  }, []);
  const userId = localStorage["USERID"]; 
  
  const subscribe = async (strategyId, i) => {
    await Axios.post("/subscribe/strategy", { userId, strategyId });
  };
  return (
    <>
      {strategies.map((strategy, i) => {
        return (
          <div className="market-card" key={i}>
            <div className="body-content">
              <p>Created 1 day ago</p>
              <div className="market-card-header">
                {" "}
                <h3>{strategy.name}</h3>
                <Box
                  sx={{ pl: 30 }}
                  style={{
                    paddingLeft: "0px",
                    position: "absolute",
                    right: "50px",
                  }} 
                  className="ratings"
                >
                  <Rating
                    name="read-only"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    sx={{ fontWeight: 300, textAlign: "center" }}
                    variant="body1"
                    component="h6"
                  >
                    51 Ratings
                  </Typography>
                </Box>
              </div>

              <div className="market-card-body">
                <div className="market-card-by">by:Rahul</div>
                <pre>symbols:{strategy.symbols}</pre>
                <p>{strategy.description}</p>
              </div>

              <div className="body-subscribe">
                {" "}
                <Button
                  variant="contained"
                  size="large"
                  style={{}}
                  onClick={() => {
                    subscribe(strategy._id);
                  }}
                  color="success"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="market-card-footer"></div>
            <div className="bookmark">
              <BookmarkAddIcon
                style={{ height: "30px", width: "30px", fill: "green" }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MarketCard;
