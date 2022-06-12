import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "@mui/material/Slider";

export default function ScreenerFilter({
  setMaxPeRation,
  setMinPeRation,
  setDataToken,
  dataToken,
}) {
  //   const handleSubmit = () => {
  //     console.log(" This is Handle Submit ");
  //   };
  // const handleChange = (event) => {
  //   if (event.target.checked === true) {
  //     setPeRation("keyMetrics.0.keyValue=600");
  //     setDataToken(!dataToken);
  //   }
  // };

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleMax = (event) => {
    setMaxPeRation(`keyMetrics.0.keyValue=${event.target.value}`);
    setDataToken(!dataToken);
    console.log(typeof event.target.value, event.target.value);
  };
  const handleMin = (event) => {
    setMinPeRation(`keyMetrics.0.keyValue=${event.target.value}`);
    setDataToken(!dataToken);
    console.log(typeof event.target.value, event.target.value);
  };
  const [value, setValue] = React.useState([0, 50]);

  const handleChange = (event, newValue) => {
    // setMinPeRation(`keyMetrics.0.keyValue=${newValue[0]}`);

    setValue(newValue);
    console.log(typeof newValue[0], newValue[0]);
    // setDataToken(!dataToken);
  };

  return (
    <FormControl component="fieldset">
      <Box sx={{ width: 5 }}>
        <Typography varient="body2" component="h3">
          Screener Filter
        </Typography>
      </Box>
      <FormGroup aria-label="position" row>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: 1, pt: 3 }}>PE RATIO</Box>
          <TextField
            sx={{ m: 1 }}
            id="filled-basic"
            margin="dense"
            label="MIN"
            variant="filled"
            size="small"
            onBlur={handleMin}
            value={value[0]}
          />
          <TextField
            sx={{ m: 1 }}
            id="filled-basic"
            label="MAX"
            variant="filled"
            size="small"
            margin="dense"
            onBlur={handleMax}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChangeCommitted={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        {/* <FormControlLabel
          value="start"
          control={<Checkbox onChange={handleChange} />}
          label="PE RATIO Greater than 50"
          labelPlacement="start"
        /> */}
      </FormGroup>
    </FormControl>
  );
}
