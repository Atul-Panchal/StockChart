import { Box, Paper, Rating, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import "./strategy.css";
import Axios from "../../../Request/Axios";

const SingleStrategy = (props) => {
  const [deployed, setDeploy] = useState(props.strategyDetails.deployed);
  const [loading, setLoading] = useState(false);
  const [sloading, setsloading] = useState(false);
  const [isunsubscribe, setisunsubscribe] = useState(false);

  const userId = localStorage["USERID"];
  const email = localStorage["EMAIL"];
  const strategyId = props.strategyDetails._id;
  const deploy = async () => {
    setLoading(true);
    await Axios.post("/deploy/strategy", {
      userId,
      strategyId,
      deployflag: !deployed,
      email,
    });

    setDeploy((p) => !p);
    setLoading(false);
  };
  const unsubscribe = async () => {
    setsloading(true);
    await Axios.post("/unsubscribe", { userId, strategyId });
    setisunsubscribe(true);
    setsloading(false);
  };

  if (isunsubscribe) return <></>;
  return (
    <>
      <Paper
        sx={{
          mt: 2,
          px: 4,
          py: 1,
        }}
      >
        <Typography sx={{ fontWeight: 300 }} variant="body1" component="h5">
          Created 1 day ago
        </Typography>
        <div className="singlestrategy">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontWeight: 900, py: 2, textTransform: "uppercase" }}
              variant="h5"
              component="h5"
            >
              {props.strategyDetails.name}
            </Typography>
            <Box
              sx={{ pl: 30 }}
              style={{ position: "absolute", right: "50px" }} 
              className="ratings"
            >
              <Rating
                name="read-only"
                defaultValue={4.5}
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
          </Box>
        </div>
        <div className="my-card-body">
          <div className="my-card-stats">
            <p>Capital</p>
            <p>Return %</p>
            <p>Drowdown</p>
          </div>
        </div>
        <div className="footer-buttons">
          {" "}
          <LoadingButton
            variant="contained"
            style={{ minWidth: "120px" }}
            onClick={deploy}
            loadingPosition="center"
            loading={loading}
          >
            {deployed ? "Undeploy" : "Deploy"}
          </LoadingButton>
          <LoadingButton
            variant="outlined"
            sx={{ mx: 4 }}
            style={{ minWidth: "120px", minHeight: "40px" }}
            onClick={unsubscribe}
            className="unsubscribe-button"
            color="error"
            loading={sloading}
            loadingPosition="center"
          >
            Unsubscribe
          </LoadingButton>
        </div>
      </Paper>
    </>
  );
};

export default SingleStrategy;
