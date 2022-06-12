import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAutocomplete from "./useAutoComplete";
import { styled } from "@mui/material/styles";
import "../AlgoPage.css";
import "./BuyCard.css";
import IndicatorModal from "./IndicatorModal";
import { evaluate } from "mathjs";
const dropdownOptions = [
  { name: "(", label: "(" },
  { name: ")", label: ")" },
  { name: "===", label: "=" },
  { name: ">", label: ">" },
  { name: "<", label: "<" },
  { name: "+", label: "+" },
  { name: "-", label: "-" },
  { name: "%", label: "%" },
  { name: "/", label: "/" },
  { name: "*", label: "x" },
  { name: "&&", label: "and" },
  { name: "||", label: "or" },
  { name: "Number", param: { value: 0 }, label: "Number" },
  { name: "EMA", param: { period: 20 }, label: "EMA" },
  { name: "ATR", param: { period: 14 }, label: "ATR" },
  { name: "ADX", param: { period: 14 }, label: "Average Directional Index" },
  { name: "BB", param: { period: 14, stdDev: 2 }, label: "Bollinger Band" },
  {
    name: "AO",
    param: { fastPeriod: 5, slowPeriod: 34 },
    label: "Awesome Oscillator",
  },
  {
    name: "CCI",
    param: { period: 20 },
    label: "Commodity Channel Index",
  },
  { name: "FI", param: { period: 1 }, label: "Force Index(FI)" },
  {
    name: "KST",
    param: {
      ROCPer1: 10,
      ROCPer2: 15,
      ROCPer3: 20,
      ROCPer4: 30,
      SMAROCPer1: 10,
      SMAROCPer2: 10,
      SMAROCPer3: 10,
      SMAROCPer4: 15,
      signalPeriod: 3,
    },
    label: "Know Sure Thing(KST)",
  },

  { name: "MFI", param: { period: 14 }, label: "Moneyflow Index (MFI)" },
  {
    name: "MACD",
    param: {
      fastPeriod: 5,
      slowPeriod: 8,
      signalPeriod: 3,
      SimpleMAOscillator: false,
      SimpleMASignal: false,
    },
    label: "MACD",
  },
  { name: "OBV", label: "On Balance Volume" },
  { name: "PSAR", label: "Parabolic Stop and Reverse" },
  { name: "ROC", param: { period: 12 }, label: "Rate of Change" },
  { name: "RSI", param: { period: 14 }, label: "Relative Strength Index" },
  { name: "SMA", param: { period: 8 }, label: "Simple Moving Average" },
  { name: "KD", param: { period: 4 }, label: "Stochastic Oscillator" },
  {
    name: "StochRSI",
    param: { period: 4, signalPeriod: 10 },
    label: "Stochastic RSI",
  },
  {
    name: "VWAP",
    param: { period: 4 },
    label: "Volume Weighted Average Price (VWAP)",
  },
  { name: "VP", param: { noOfBars: 14 }, label: "Volume Profile" },
  { name: "WEMA", param: { period: 5 }, label: "Wilders Smoothing" },
  { name: "WMA", param: { period: 8 }, label: "Weighted Moving Average" },
  { name: "WSR", param: { period: 14 }, label: "William SR" },
  { name: "IchimokuCloud", param: { period: 14 }, label: "Ichimoku Cloud" },
  { name: "ADL", label: "ADL" },
];
const isOperator = (x) => {
  if (
    x === "(" ||
    x === ")" ||
    x === "*" ||
    x === "+" ||
    x === "-" ||
    x === "/" ||
    x === "&&" ||
    x === "||" ||
    x === ">" ||
    x === "<" ||
    x === "%" ||
    x === "==="
  )
    return true;
  return false;
};
const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
    </div>
  );
}

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor; 

    }
  }
`
);

const SellCard = (props) => { 
  const { setSellCondition,initialvalue } = props;
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({});
  const [clickfun, setClickFun] = useState(null);
  const [err, setError] = useState("");
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: initialvalue,
    multiple: true,
    options: dropdownOptions,
    getOptionLabel: (option) => option.label,
  });

  const handleIndicatorClick = (option, index) => {
    setIndicator(option);
    setClickFun(() => {
      return getOptionProps({ option, index }).onClick;
    });
    setOpen((p) => !p);
  };
  const checkError = () => {
    let temp = "";
    let count = 0;

    for (const x of value) {
      if (isOperator(x.name)) temp += x.name;
      else temp += "(" + 4 + ")";
      if (x.name === "(") count++;
      else if (x.name === ")") count--;
      if (count < 0) {
        setError("Paranthesis not matched correctly");
        return;
      }
    }
    if (count !== 0) {
      setError("Paranthesis not matched correctly");
      return;
    }
    try {
      evaluate(temp);
    } catch (err) {
      setError("Conditon is not valid");
      return;
    }

    setError("");
  };
  useEffect(() => {
    setSellCondition(value);
  }, [value, setSellCondition]);
  return (
    <div className="buy-container">
      {open && (
        <IndicatorModal
          setOpen={setOpen}
          onClick={clickfun}
          indicator={indicator}
        />
      )}
      <Typography variant="h6" component="h2">
        Sell condition
      </Typography>

      <Divider />

      <Root>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()} style={{ padding: "0px" }}>
            Exit Condition
            <p style={{ color: "red", marginBottom: "-1px" }}>{"  " + err}</p>
          </Label>

          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            {value.map((option, index) => {
              if (option.label === "Number")
                return (
                  <StyledTag
                    label={option.param.value}
                    {...getTagProps({ index })}
                  />
                );

              return (
                <StyledTag label={option.label} {...getTagProps({ index })} />
              );
            })}
            <input {...getInputProps()} onBlur={checkError} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()} style={{zIndex:"5"}}>
            {groupedOptions.map((option, index) => {
              const { onClick } = getOptionProps({ option, index });
              return (
                <li
                  {...getOptionProps({ option, index })}
                  onClick={(e) => {
                    if (isOperator(option.label)) onClick(e, option);
                    else if (!option.param) onClick(e, option);
                    else handleIndicatorClick(option, index);
                  }}
                >
                  <span>{option.label}</span>
                </li>
              );
            })}
          </Listbox>
        ) : null}
      </Root>
    </div>
  );
};

export default SellCard;
