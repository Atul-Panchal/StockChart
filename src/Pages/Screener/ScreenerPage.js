import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScreenerFilter from "../../Component/ScreenerFilter/ScreenerFilter";
import ScreenerTable from "../../Component/ScreenerTable/ScreenerTable";
import ScreenerFIlterPopUP from "../FilterPopUP/ScreenerFIlterPopUP";
import "../../App.css";

const Screenerpage = () => {
  const [keymatData, setKeymatData] = useState([]);

  const [greaterThnPeRation, setGreaterThnPeRation] = useState(
    "keyMetrics.0.keyValue=0"
  );
  const [lessThnPeRation, setLessThnPeRation] = useState(
    "keyMetrics.0.keyValue=5503"
  );

  const [greaterThnEps, setGreaterThnEps] = useState("keyMetrics.1.keyValue=0");
  const [lessThnEps, setLessThnEps] = useState("keyMetrics.1.keyValue=2000");

  const [greaterThnMcap, setGreaterThnMcap] = useState(
    "keyMetrics.2.keyValue=0"
  );
  const [lessThnMcap, setLessThnMcap] = useState(
    "keyMetrics.2.keyValue=1726444"
  );

  const [greaterThnMcapRnk, setGreaterThnMcapRnk] = useState(
    "keyMetrics.3.keyValue=0"
  );
  const [lessThnMcapRnk, setLessThnMcapRnk] = useState(
    "keyMetrics.3.keyValue=550"
  );

  const [greaterThnPbRatio, setGreaterThnPbRatio] = useState(
    "keyMetrics.4.keyValue=0"
  );
  const [lessThnPbRatio, setLessThnPbRatio] = useState(
    "keyMetrics.4.keyValue=2200"
  );

  const [greaterThnDivYield, setGreaterThnDivYield] = useState(
    "keyMetrics.5.keyValue=0"
  );
  const [lessThnDivYield, setLessThnDivYield] = useState(
    "keyMetrics.5.keyValue=100"
  );

  const [greaterThnFaceValue, setGreaterThnFaceValue] = useState(
    "keyMetrics.6.keyValue=0"
  );
  const [lessThnFaceValue, setLessThnFaceValue] = useState(
    "keyMetrics.6.keyValue=100"
  );

  const [greaterThnVwap, setGreaterThnVwap] = useState(
    "keyMetrics.8.keyValue=0"
  );
  const [lessThnVwap, setLessThnVwap] = useState("keyMetrics.8.keyValue=68000");
  //----------------------------------------FINANCIAL STATUS FILTER VALUES -----------
  const [greaterTtlIncome, setGreaterTtlIncome] = useState(
    "financialsStatus.0.finStatus=-10"
  );
  const [lessTtlIncome, setLessTtlIncome] = useState(
    "financialsStatus.0.finStatus=3000000"
  );

  const [greaterTtlIneGrth, setGreaterTtlIneGrth] = useState(
    "financialsStatus.1.finStatus=-200"
  );
  const [lessTtlIneGrth, setLessTtlIneGrth] = useState(
    "financialsStatus.1.finStatus=45000"
  );

  const [greaterTtlExpense, setGreaterTtlExpense] = useState(
    "financialsStatus.2.finStatus=-2000"
  );
  const [lessTtlExpense, setLessTtlExpense] = useState(
    "financialsStatus.2.finStatus=2000000"
  );

  const [greaterTtlExGrwth, setGreaterTtlExGrwth] = useState(
    "financialsStatus.3.finStatus=-1000"
  );
  const [lessTtlExGrwth, setLessTtlExGrwth] = useState(
    "financialsStatus.3.finStatus=28000"
  );

  const [greaterEbit, setGreaterEbit] = useState(
    "financialsStatus.4.finStatus=0"
  );
  const [lessEbit, setLessEbit] = useState(
    "financialsStatus.4.finStatus=200000"
  );

  const [greaterEbitGrwth, setGreaterEbitGrwth] = useState(
    "financialsStatus.5.finStatus=-500"
  );
  const [lessEbitGrwth, setLessEbitGrwth] = useState(
    "financialsStatus.5.finStatus=35000"
  );

  const [greaterPat, setGreaterPat] = useState(
    "financialsStatus.6.finStatus=-300"
  );
  const [lessPat, setLessPat] = useState("financialsStatus.6.finStatus=20500");

  const [greaterPatGrwth, setGreaterPatGrwth] = useState(
    "financialsStatus.7.finStatus=-5000"
  );
  const [lessPatGrwth, setLessPatGrwth] = useState(
    "financialsStatus.7.finStatus=1000000"
  );

  const [greaterEbitMargin, setGreaterEbitMargin] = useState(
    "financialsStatus.8.finStatus=-5000"
  );
  const [lessEbitMargin, setLessEbitMargin] = useState(
    "financialsStatus.8.finStatus=25000"
  );

  const [greaterNPM, setGreaterNPM] = useState(
    "financialsStatus.9.finStatus=-5000"
  );
  const [lessNPM, setLessNPM] = useState("financialsStatus.9.finStatus=25000");
  //----------------------------------------SHARE HOLDING ---------------------------
  const [greaterPromoters, setGreaterPromoters] = useState(
    "shareHoldingData.0.shareStatus=0"
  );
  const [lessPromoters, setLessPromoters] = useState(
    "shareHoldingData.0.shareStatus=1000"
  );

  const [greaterPledge, setGreaterPledge] = useState(
    "shareHoldingData.1.shareStatus=0"
  );
  const [lessPledge, setLessPledge] = useState(
    "shareHoldingData.1.shareStatus=10000"
  );

  const [greaterFII, setGreaterFII] = useState(
    "shareHoldingData.2.shareStatus=0"
  );
  const [lessFII, setLessFII] = useState("shareHoldingData.2.shareStatus=1000");

  const [greaterDII, setGreaterDII] = useState(
    "shareHoldingData.3.shareStatus=0"
  );
  const [lessDII, setLessDII] = useState("shareHoldingData.3.shareStatus=1000");

  const [greaterMutualFnd, setGreaterMutualFnd] = useState(
    "shareHoldingData.4.shareStatus=0"
  );
  const [lessMutualFnd, setLessMutualFnd] = useState(
    "shareHoldingData.4.shareStatus=10000"
  );

  const [greaterOthers, setGreaterOthers] = useState(
    "shareHoldingData.5.shareStatus=0"
  );
  const [lessOthers, setLessOthers] = useState(
    "shareHoldingData.5.shareStatus=1000"
  );

  //--------------------------------------------------------------------
  const [dataToken, setDataToken] = useState(false);

  const finUrl = `&${greaterTtlIncome}&${lessTtlIncome}&${greaterTtlIneGrth}&${lessTtlIneGrth}&${greaterTtlExpense}&${lessTtlExpense}&${greaterTtlExGrwth}&${lessTtlExGrwth}&${greaterEbit}&${lessEbit}&${greaterEbitGrwth}&${lessEbitGrwth}&${greaterPatGrwth}&${lessPatGrwth}&${greaterEbitMargin}&${lessEbitMargin}&${greaterNPM}&${lessNPM}&${greaterPat}&${lessPat}`;

  const shareUrl = `&${greaterPromoters}&${lessPromoters}&${greaterPledge}&${lessPledge}&${greaterFII}&${lessFII}&${greaterDII}&${lessDII}&${greaterMutualFnd}`;

  const shareUrl1 = `&${greaterPromoters}&${lessPromoters}&${greaterPledge}&${lessPledge}&${greaterFII}&${lessFII}&${greaterDII}&${lessDII} &${greaterMutualFnd} &${lessMutualFnd}`;

  /*
  
 
  
  */

  const keyMetUrl = `${greaterThnPeRation}&${lessThnPeRation}&${greaterThnEps}&${lessThnEps}&${greaterThnMcap}&${lessThnMcap}&${greaterThnMcapRnk}&${lessThnMcapRnk}&${greaterThnPbRatio}&${lessThnPbRatio}&${greaterThnDivYield}&${lessThnDivYield}&${greaterThnFaceValue}&${lessThnFaceValue}&${greaterThnVwap}&${lessThnVwap}`;

  //const url = `https://backendtrading.herokuapp.com/screenerData?${keyMetUrl}${finUrl}${shareUrl1}`;

  const url = `https://backendtrading.herokuapp.com/screenerData?${keyMetUrl}${finUrl}${shareUrl1}`;

  console.log(url);
  // const url = `http://localhost:5000/screenerData?${minPeRation}&${maxPeRation}&${maxEps}&${minEps}&${maxMcap}&${minMcap}&${maxMcapRnk}&${minMcapRnk}&${maxPbRatio}&${minPbRatio}&${maxDivYield}&${minDivYield}&${maxFaceValue}&${minFaceValue}&${maxVwap}&${minVwap}`;
  //const url = `http://localhost:5000/screenerData?keyMetrics.0.keyValue=200&keyMetrics.0.keyValue=300`;
  console.log("Greater Than", greaterThnPeRation);
  console.log("Less than", lessThnPeRation);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.type);
        if (data.type.length == 0) {
          setDataToken(true);
        }
        setKeymatData(data.type);
      });
  }, [dataToken]);
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ pb: 1, display: "flex", justifyContent: "flex-end" }}>
        <ScreenerFIlterPopUP
          peRation
          setLessThnPeRation={setLessThnPeRation}
          setGreaterThnPeRation={setGreaterThnPeRation}
          setLessThnEps={setLessThnEps}
          setGreaterThnEps={setGreaterThnEps}
          setLessThnMcap={setLessThnMcap}
          setGreaterThnMcap={setGreaterThnMcap}
          setLessThnMcapRnk={setLessThnMcapRnk}
          setGreaterThnMcapRnk={setGreaterThnMcapRnk}
          setLessThnPbRatio={setLessThnPbRatio}
          setGreaterThnPbRatio={setGreaterThnPbRatio}
          setLessThnDivYield={setLessThnDivYield}
          setGreaterThnDivYield={setGreaterThnDivYield}
          setLessThnFaceValue={setLessThnFaceValue}
          setGreaterThnFaceValue={setGreaterThnFaceValue}
          setLessThnVwap={setLessThnVwap}
          setGreaterThnVwap={setGreaterThnVwap}
          setDataToken={setDataToken}
          //-----------------------Fiancial Status --------------------
          setGreaterTtlIncome={setGreaterTtlIncome}
          setLessTtlIncome={setLessTtlIncome}
          setGreaterTtlIneGrth={setGreaterTtlIneGrth}
          setLessTtlIneGrth={setLessTtlIneGrth}
          setGreaterTtlExpense={setGreaterTtlExpense}
          setLessTtlExpense={setLessTtlExpense}
          setGreaterTtlExGrwth={setGreaterTtlExGrwth}
          setLessTtlExGrwth={setLessTtlExGrwth}
          setGreaterEbit={setGreaterEbit}
          setLessEbit={setLessEbit}
          setGreaterEbitGrwth={setGreaterEbitGrwth}
          setLessEbitGrwth={setLessEbitGrwth}
          setGreaterPat={setGreaterPat}
          setLessPat={setLessPat}
          setGreaterPatGrwth={setGreaterPatGrwth}
          setLessPatGrwth={setLessPatGrwth}
          setGreaterEbitMargin={setGreaterEbitMargin}
          setLessEbitMargin={setLessEbitMargin}
          setGreaterNPM={setGreaterNPM}
          setLessNPM={setLessNPM}
          //----------------------Share Holding Status --------------------------
          setGreaterPromoters={setGreaterPromoters}
          setLessPromoters={setLessPromoters}
          setGreaterPledge={setGreaterPledge}
          setLessPledge={setLessPledge}
          setGreaterFII={setGreaterFII}
          setLessFII={setLessFII}
          setGreaterDII={setGreaterDII}
          setLessDII={setLessDII}
          setGreaterMutualFnd={setGreaterMutualFnd}
          setLessMutualFnd={setLessMutualFnd}
          setGreaterOthers={setGreaterOthers}
          setLessOthers={setLessOthers}
          //----------------------------------------------------

          dataToken={dataToken}
        ></ScreenerFIlterPopUP>
      </Box>

      <Box sx={{ width: 1 }}>
        <ScreenerTable keymatData={keymatData}></ScreenerTable>
      </Box>
    </Box>
  );
};

export default Screenerpage;
//-------------------------------------
