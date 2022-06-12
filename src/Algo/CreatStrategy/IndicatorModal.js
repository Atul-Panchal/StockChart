import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const IndicatorModal = (props) => {
  const { indicator, setOpen, onClick } = props;
  const [inputState, SetState] = useState(indicator.param);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const onChange = (e, key) => {
    const value = e.target.value;
    SetState({ ...inputState, [key]: value });
  };
  const handleClose = (event) => {
    const indicator_to_push = { label: indicator.label, param: inputState ,name:indicator.name};
    onClick(event, indicator_to_push);
    setOpen(false);
    SetState(12);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {indicator.label}
        </DialogTitle>
        <DialogContent>
          {Object.keys(inputState).map((key, i) => {
            return (
              <div key={i}>
                <label htmlFor={key}>{key}</label>
                <input
                  type="number"
                  onChange={(e) => {
                    onChange(e, key);
                  }}
                  value={inputState[key]}
                />
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              setOpen(false);
            }}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              handleClose(e);
            }}
            autoFocus
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IndicatorModal;
