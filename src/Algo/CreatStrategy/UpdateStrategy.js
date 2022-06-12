import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "../AlgoPage.css";
import SymbolSelector from "./SymbolSelector";
import BuyCard from "./BuyCard";
import SellCard from "./SellCard";
import Axios from "../../Request/Axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { useHistory,useParams } from "react-router-dom"; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const UpdateStrategy = (props) => {
  const [strategyName, setStrategyName] = useState("");
  const [strategyDesp, setStrategyDesp] = useState("");
  const [buyCondition, setBuyCondition] = useState(null);
  const [sellCondition, setSellCondition] = useState(null);  
  const [isbuyfirst,setisbuyfirst]=useState(true);
  const [quantity,setquantity]=useState();
  const [stoploss,setstoploss]=useState();
  const [loading, setLoading] = useState(false);
  const [Symbols, setSymbols] = useState(null);
  let history = useHistory();  
  const strategyId = useParams().id; 
  useEffect(()=>{
    const getdata = async () => {
        let response = await Axios.get("/getstrategy/"+strategyId);
        const { name,description,buycondition,sellcondition,symbols,stoploss,quantity,isbuyfirst}=response.data.algo;  
        setStrategyName(name); 
        setStrategyDesp(description);
        setBuyCondition(buycondition);
        setSellCondition(sellcondition);
        setSymbols(symbols); 
        setstoploss(stoploss);
        setquantity(quantity);
        setisbuyfirst(isbuyfirst);
    }
        getdata();
  },[strategyId])
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
    setLoading(true);
    try {
      await Axios.patch("/update/algo/"+strategyId, {
        name: strategyName,
        description: strategyDesp,
        buycondition: buyCondition,
        sellcondition: sellCondition,
        symbols:Symbols,
        stoploss: stoploss,
        quantity: quantity,
        isbuyfirst
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      return;
    } 
    console.log(buyCondition)
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
          placeholder="Strategy Name"  

          value={strategyName}
          autoComplete="off"
          onChange={(event) => {
            handleChageStraName(event);
          }} 
          
          InputLabelProps={{ shrink: strategyName.length?true:false }}  
        />
        {/* -------------------------------------------------------------Symbols Selection------------------- */}
        {Symbols&&<SymbolSelector setSymbols={setSymbols} initialvalue={Symbols} />}
      </div>
      <TextField
        sx={{ mt: 5, mb: 4 }}
        className="padding-top"
        id="outlined-textarea"
        label="Strategy Description"
        placeholder="Strategy Description" 
        defaultValue={strategyDesp}
        rows={4}  
        InputLabelProps={{ shrink:strategyDesp.length?true:false }}  
        onChange={(event) => {
          handleChageStraDes(event);
        }} 
        autoComplete="off"
        multiline
      />
      {buyCondition&&<BuyCard setBuyCondition={setBuyCondition} initialvalue={buyCondition}  />}
      {sellCondition&&<SellCard setSellCondition={setSellCondition}  initialvalue={sellCondition}/>  }
      <FormControl  sx={{ mt: 5, mb: 4 }}>
      <FormLabel id="demo-row-radio-buttons-group-label" >Strategy Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" 
        onChange={(e)=>{handleAlgoType(e)}} 
        value={isbuyfirst?"Buy First":"Sell First"}
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
        value={stoploss}
        InputLabelProps={{ shrink: stoploss?true:false }}  
        autoComplete="off"
      /> 
      <TextField
        id="outlined-basic"  
        variant="outlined" 
        sx={{ mt: 3, mb: 2,width:400 }}
        InputLabelProps={{ shrink: quantity?true:false }}  
        label="Quantity"
        placeholder="Quantity" 
        type="number"
        onChange={(event) => {
          handlequantity(event);
        }} 
        value={quantity}
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

export default UpdateStrategy;
