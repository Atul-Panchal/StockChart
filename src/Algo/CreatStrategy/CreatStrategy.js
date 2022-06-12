import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "../AlgoPage.css";
import SymbolSelector from "./SymbolSelector";
import BuyCard from "./BuyCard";
import SellCard from "./SellCard";
import Axios from "../../Request/Axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { useHistory } from "react-router-dom"; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const CreatStrategy = () => {
  const [strategyName, setStrategyName] = useState("This is new Starategy");
  const [strategyDesp, setStrategyDesp] = useState("This is strategy");
  const [buyCondistion, setBuyCondition] = useState([]);
  const [sellCondition, setSellCondition] = useState([]);  
  const [isbuyfirst,setisbuyfirst]=useState(true);
  const [quantity,setquantity]=useState();
  const [stoploss,setstoploss]=useState();
  const [loading, setLoading] = useState(false);
  const [symbols, setSymbols] = useState([]);
  let history = useHistory(); 
  useEffect(()=>{

  },[])
  const handleChageStraName = (e) => {
    setStrategyName(e.target.value);
  };
  const handleChageStraDes = (e) => {
    setStrategyDesp(e.target.value);
  };
 const handlestoploss=(e)=>{
    setstoploss(e.target.value)
 }   
 const handleAlgoType=(e)=>{
   if(e.target.value==="Buy First")
   setisbuyfirst(true);
   else 
   setisbuyfirst(false);
 }
 const handlequantity=(e)=>{ 
  setquantity(e.target.value)
 }
  const handleSaveStrategy = async () => {
    const userEmail = localStorage["EMAIL"];
    setLoading(true);
    try {
      await Axios.post("/create/algo", {
        name: strategyName,
        description: strategyDesp,
        buycondition: buyCondistion,
        sellcondition: sellCondition,
        symbols,
        stoploss: stoploss,
        quantity: quantity,
        ownerEmail: userEmail, 
        isbuyfirst
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      return;
    }
    history.push("/algos"); 
  };
  return (
    <div className="starategy-creat container padding-top">
      <div style={{ display: "flex" }}>
        <TextField
          sx={{ mt: 5, width: "40%", mr: 5 }}
          className="padding-top "
          id="outlined-password-input"
          label="Strategy Name"
          type="Name" 
          autoComplete="off"
          onChange={(event) => {
            handleChageStraName(event);
          }}
        />
        {/* -------------------------------------------------------------Symbols Selection------------------- */}
        <SymbolSelector setSymbols={setSymbols} initialvalue={[]}/>
      </div>
      <TextField
        sx={{ mt: 5, mb: 4 }}
        className="padding-top"
        id="outlined-textarea"
        label="Strategy Description"
        placeholder="Strategy Description"
        rows={4}
        onChange={(event) => {
          handleChageStraDes(event);
        }} 
        
        autoComplete="off"
        multiline
      />
      <BuyCard setBuyCondition={setBuyCondition} initialvalue={[]}/>
      <SellCard setSellCondition={setSellCondition}  initialvalue={[]} />  
      <FormControl  sx={{ mt: 5, mb: 4 }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Strategy Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" 
        onChange={(e)=>{handleAlgoType(e)}} 
      
      >
        <FormControlLabel value="Buy First" control={<Radio />} label="Buy First" />
        <FormControlLabel value="Sell First" control={<Radio />} label="Sell First" />
      </RadioGroup>
    </FormControl>
      <TextField
        id="outlined-basic"   
        sx={{ mt: 5, mb: 2,width:400 }}
        variant="outlined"
        label="Stop loss"
        placeholder="Stop loss" 
        type="number"
        onChange={(event) => {
          handlestoploss(event);
        }} 
      
        autoComplete="off"
      /> 
      <TextField
        id="outlined-basic"  
        variant="outlined" 
        sx={{ mt: 3, mb: 2,width:400 }}
  
        label="Quantity"
        placeholder="Quantity" 
        type="number"
        onChange={(event) => {
          handlequantity(event);
        }} 
      
        autoComplete="off"
      />
      <LoadingButton
        variant="contained"
        onClick={handleSaveStrategy}
        loadingPosition="center"
        loading={loading}
      >
        SAVE STRATEGY
      </LoadingButton>
    </div>
  );
};

export default CreatStrategy;
