import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Slider from '@mui/material/Slider';

export default function ScreenerFIlterPopUP({
  peRation,
  setLessThnPeRation,
  setGreaterThnPeRation,
  setLessThnEps,
  setGreaterThnEps,
  setLessThnMcap,
  setGreaterThnMcap,
  setLessThnMcapRnk,
  setGreaterThnMcapRnk,
  setLessThnPbRatio,
  setGreaterThnPbRatio,
  setLessThnDivYield,
  setGreaterThnDivYield,
  setLessThnFaceValue,
  setGreaterThnFaceValue,
  setLessThnVwap,
  setGreaterThnVwap,
  setDataToken,
  //--------------Financial Status--------
  setGreaterTtlIncome,
  setLessTtlIncome,
  setGreaterTtlIneGrth,
  setLessTtlIneGrth,
  setGreaterTtlExpense,
  setLessTtlExpense,
  setGreaterTtlExGrwth,
  setLessTtlExGrwth,
  setGreaterEbit,
  setLessEbit,
  setGreaterEbitGrwth,
  setLessEbitGrwth,
  setGreaterPat,
  setLessPat,
  setGreaterPatGrwth,
  setLessPatGrwth,
  setGreaterEbitMargin,
  setLessEbitMargin,
  setGreaterNPM,
  setLessNPM,
  //-----------------ShareHolding -------------------------------------------------------

  setGreaterPromoters,
  setLessPromoters,
  setGreaterPledge,
  setLessPledge,
  setGreaterFII,
  setLessFII,
  setGreaterDII,
  setLessDII,
  setGreaterMutualFnd,
  setLessMutualFnd,
  setGreaterOthers,
  setLessOthers,

  //-------------------------------------------
  dataToken,
}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [filterMinMax, setFilterMinMax] = React.useState('paper');
  const [sliderValue, setSliderValue] = React.useState({
    peRatio: [0, 5203],
    eps: [0, 1971],
    mCap: [0, 1726444],
    mCapRank: [0, 505],
    pbRatio: [0, 3038],
    divYield: [0, 53],
    faceValue: [0, 10],
    vWap: [0, 72389],
    //--------
    ttlIncome: [-10, 195318],
    ttlIncomeGrowth: [-200, 989.04],
    ttlExpanse: [-2000, 166412],
    ttlExpanseGrowth: [-1000, 687],
    ebit: [0, 266.81],
    ebitGrwoth: [-500, 1500],
    pat: [-3000, 500],
    patGrowth: [-5000, 5000],
    ebitMargin: [-5000, 5000],
    npm: [-5000, 5000],
    //-----------------
    promoters: [0, 100],
    pledge: [0, 100],
    fii: [0, 100],
    dii: [0, 100],
    mutualFund: [0, 100],
  });
  React.useEffect(() => {
    fetch('https://backendtrading.herokuapp.com/screener-filter-min-max')
      .then((res) => res.json())
      .then((data) => setSliderValue(data[0]));
  }, [open]);

  const [isChecked, setIsChecked] = useState(null);
  //const [peRatio, SetPeRatio] = React.useState([20, 37]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setDataToken(!dataToken);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  function valuetext(value) {
    return `${value}°C`;
  }
  // const handleMax = (event) => {
  //   setMaxPeRation(`keyMetrics.0.keyValue=${event.target.value}`);
  //   setDataToken(!dataToken);
  //   console.log(typeof event.target.value, event.target.value);
  // };
  // const handleMin = (event) => {
  //   setMinPeRation(`keyMetrics.0.keyValue=${event.target.value}`);
  //   setDataToken(!dataToken);
  //   console.log(typeof event.target.value, event.target.value);
  // };

  const handleChange = (event) => {
    setSliderValue({ ...sliderValue, [event.target.name]: event.target.value });
    console.log({ ...sliderValue, [event.target.name]: event.target.value });
    setGreaterThnPeRation(`keyMetrics.0.keyValue=${sliderValue.peRatio[0]}`);
    setLessThnPeRation(`keyMetrics.0.keyValue=${sliderValue.peRatio[1]}`);

    setGreaterThnEps(`keyMetrics.1.keyValue=${sliderValue.eps[0]}`);
    setLessThnEps(`keyMetrics.1.keyValue=${sliderValue.eps[1]}`);

    setGreaterThnMcap(`keyMetrics.2.keyValue=${sliderValue.mCap[0]}`);
    setLessThnMcap(`keyMetrics.2.keyValue=${sliderValue.mCap[1]}`);

    setGreaterThnMcapRnk(`keyMetrics.3.keyValue=${sliderValue.mCapRank[0]}`);
    setLessThnMcapRnk(`keyMetrics.3.keyValue=${sliderValue.mCapRank[1]}`);

    setGreaterThnPbRatio(`keyMetrics.4.keyValue=${sliderValue.pbRatio[0]}`);
    setLessThnPbRatio(`keyMetrics.4.keyValue=${sliderValue.pbRatio[1]}`);

    setGreaterThnDivYield(`keyMetrics.5.keyValue=${sliderValue.divYield[0]}`);
    setLessThnDivYield(`keyMetrics.5.keyValue=${sliderValue.divYield[1]}`);

    setGreaterThnFaceValue(`keyMetrics.6.keyValue=${sliderValue.faceValue[0]}`);
    setLessThnFaceValue(`keyMetrics.6.keyValue=${sliderValue.faceValue[1]}`);

    setGreaterThnVwap(`keyMetrics.7.keyValue=${sliderValue.vWap[0]}`);
    setLessThnVwap(`keyMetrics.7.keyValue=${sliderValue.vWap[1]}`);
    //----------------------Financial Status--------
    setGreaterTtlIncome(
      `financialsStatus.0.finStatus=${sliderValue.ttlIncome[0]}`
    );
    setLessTtlIncome(
      `financialsStatus.0.finStatus=${sliderValue.ttlIncome[1]}`
    );
    setGreaterTtlIneGrth(
      `financialsStatus.1.finStatus=${sliderValue.ttlIncomeGrowth[0]}`
    );
    setLessTtlIneGrth(
      `financialsStatus.1.finStatus=${sliderValue.ttlIncomeGrowth[1]}`
    );
    setGreaterTtlExpense(
      `financialsStatus.2.finStatus=${sliderValue.ttlExpanse[0]}`
    );
    setLessTtlExpense(
      `financialsStatus.2.finStatus=${sliderValue.ttlExpanse[1]}`
    );
    setGreaterTtlExGrwth(
      `financialsStatus.3.finStatus=${sliderValue.ttlExpanseGrowth[0]}`
    );
    setLessTtlExGrwth(
      `financialsStatus.3.finStatus=${sliderValue.ttlExpanseGrowth[1]}`
    );
    setGreaterEbit(`financialsStatus.4.finStatus=${sliderValue.ebit[0]}`);
    setLessEbit(`financialsStatus.4.finStatus=${sliderValue.ebit[1]}`);
    setGreaterEbitGrwth(
      `financialsStatus.5.finStatus=${sliderValue.ebitGrwoth[0]}`
    );
    setLessEbitGrwth(
      `financialsStatus.5.finStatus=${sliderValue.ebitGrwoth[1]}`
    );
    setGreaterPat(`financialsStatus.6.finStatus=${sliderValue.pat[0]}`);
    setLessPat(`financialsStatus.6.finStatus=${sliderValue.pat[1]}`);
    setGreaterPatGrwth(
      `financialsStatus.7.finStatus=${sliderValue.patGrowth[0]}`
    );
    setLessPatGrwth(`financialsStatus.7.finStatus=${sliderValue.patGrowth[1]}`);
    setGreaterEbitMargin(
      `financialsStatus.8.finStatus=${sliderValue.ebitMargin[0]}`
    );
    setLessEbitMargin(
      `financialsStatus.8.finStatus=${sliderValue.ebitMargin[1]}`
    );
    setGreaterNPM(`financialsStatus.9.finStatus=${sliderValue.npm[0]}`);
    setLessNPM(`financialsStatus.9.finStatus=${sliderValue.npm[1]}`);
    //-----------------ShareHolding -------------------------------------------------------

    setGreaterPromoters(
      `shareHoldingData.0.shareStatus=${sliderValue.promoters[0]}`
    );
    setLessPromoters(
      `shareHoldingData.0.shareStatus=${sliderValue.promoters[1]}`
    );
    setGreaterPledge(`shareHoldingData.1.shareStatus=${sliderValue.pledge[0]}`);
    setLessPledge(`shareHoldingData.1.shareStatus=${sliderValue.pledge[1]}`);
    setGreaterFII(`shareHoldingData.2.shareStatus=${sliderValue.fii[0]}`);
    setLessFII(`shareHoldingData.2.shareStatus=${sliderValue.fii[1]}`);
    setGreaterDII(`shareHoldingData.3.shareStatus=${sliderValue.dii[0]}`);
    setLessDII(`shareHoldingData.3.shareStatus=${sliderValue.dii[1]}`);
    setGreaterMutualFnd(
      `shareHoldingData.4.shareStatus=${sliderValue.mutualFund[0]}`
    );
    setLessMutualFnd(
      `shareHoldingData.4.shareStatus=${sliderValue.mutualFund[1]}`
    );

    console.log('this is from handle change', sliderValue);
  };

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen('paper')}>
        SCREENER FILTER
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitle id='scroll-dialog-title'>Screener Filter </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Checkbox defaultChecked sx={{ mt: -1 }} />
          <Box
            sx={{ pt: 5, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox
              
              defaultChecked
              sx={{ mt: -1 }}
              name='peRatio'
            />
            <Box sx={{ width: 200, pr: 3 }}>PE RATIO</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='peRatio'
                min={0}
                max={10000}
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                value={sliderValue.peRatio}
                onChange={handleChange}
                // getAriaValueText={valuetext}
                // valueLabelFormat={valuetext}
                valueLabelDisplay='auto'

                // getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox
            
              defaultChecked
              sx={{ mt: -1 }}
              name='eps'
            />
            <Box sx={{ width: 200, pr: 3 }}>EPS</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='eps'
                getAriaLabel={() => 'PE RATIO'}
                min={0}
                max={10000}
                size='small'
                value={sliderValue.eps}
                onChange={handleChange}
                valueLabelDisplay='auto'
                // getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>MCap</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='mCap'
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                min={0}
                max={9999999}
                value={sliderValue.mCap}
                onChange={handleChange}
                valueLabelDisplay='auto'
                // getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>MCap Rank</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='mCapRank'
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                min={0}
                max={1000}
                value={sliderValue.mCapRank}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>PB RATIO</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='pbRatio'
                min={0}
                max={9000}
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                value={sliderValue.pbRatio}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Div Yield</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='divYield'
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                value={sliderValue.divYield}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Face Value</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='faceValue'
                min={0}
                max={100}
                getAriaLabel={() => 'PE RATIO'}
                size='small'
                value={sliderValue.faceValue}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>VWAP</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                min={0}
                max={100000}
                name='vWap'
                size='small'
                value={sliderValue.vWap}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          {/* Financial Status ----------------- */}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Total Income</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='ttlIncome'
                size='small'
                min={-50}
                max={900000}
                value={sliderValue.ttlIncome}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Total Income Growth</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='ttlIncomeGrowth'
                size='small'
                min={-200}
                max={9000}
                value={sliderValue.ttlIncomeGrowth}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Total Expense</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='ttlExpanse'
                size='small'
                min={-2000}
                max={900000}
                value={sliderValue.ttlExpanse}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Total Expense Growth</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='ttlExpanseGrowth'
                min={-1000}
                max={9000}
                size='small'
                value={sliderValue.ttlExpanseGrowth}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>EBIT</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                name='ebit'
                min={0}
                max={1000}
                size='small'
                value={sliderValue.ebit}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>EBIT GROWTH</Box>

            <Box sx={{ width: 300 }}>
              <Slider
                min={-500}
                max={9000}
                name='ebitGrwoth'
                size='small'
                value={sliderValue.ebitGrwoth}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>PAT</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                min={-3000}
                max={30000}
                name='pat'
                size='small'
                value={sliderValue.pat}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>PAT GROWTH</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='patGrowth'
                min={-5000}
                max={9000}
                size='small'
                value={sliderValue.patGrowth}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>EBIT MARGIN</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='ebitMargin'
                size='small'
                min={-5000}
                max={9000}
                value={sliderValue.ebitMargin}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>NPM</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='npm'
                size='small'
                min={-5000}
                max={9000}
                value={sliderValue.npm}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
          {/* ------------------------------------------------------- */}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Promoters</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='promoters'
                min={0}
                max={150}
                size='small'
                value={sliderValue.promoters}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>{' '}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Pledge</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='pledge'
                size='small'
                min={0}
                max={150}
                value={sliderValue.pledge}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>{' '}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>FII</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='fii'
                size='small'
                value={sliderValue.fii}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>{' '}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>DII</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='dii'
                size='small'
                value={sliderValue.dii}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>{' '}
          <Box
            sx={{ pt: 1, width: 400, display: 'flex', flexDirection: 'row' }}
          >
            {' '}
            <Checkbox defaultChecked sx={{ mt: -1 }} />
            <Box sx={{ width: 200, pr: 3 }}>Mutual Fund</Box>
            <Box sx={{ width: 300 }}>
              <Slider
                name='mutualFund'
                size='small'
                value={sliderValue.mutualFund}
                onChange={handleChange}
                valueLabelDisplay='auto'
                getAriaValueText={valuetext}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
