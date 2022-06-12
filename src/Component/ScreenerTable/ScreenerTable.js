import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function ScreenerTable(props) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  console.log(props.keymatData.length);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'peRatio', headerName: 'PE Ratio', width: 70 },
    { field: 'eps', headerName: 'EPS', width: 70 },
    { field: 'mCap', headerName: 'MCap', width: 70 },
    { field: 'mCapRank', headerName: 'MCap Rank', width: 100 },
    { field: 'pbRatio', headerName: 'PB Ratio', width: 70 },
    { field: 'divYield', headerName: 'Div Yield', width: 70 },
    { field: 'faceValue', headerName: 'Face Value', width: 100 },
    { field: 'vwap', headerName: 'VWAP', width: 70 },
    //------------------------------FINANCIAL---------------------------
    { field: 'ttlInc', headerName: 'Total Income', width: 70 },
    {
      field: 'ttlIncGrowth',
      headerName: 'Total Income Growth (%)',
      width: 100,
    },
    { field: 'ttlExp', headerName: 'Total Expenses', width: 70 },
    {
      field: 'ttlExpGrowth',
      headerName: 'Total Expenses Growth (%)',
      width: 100,
    },
    { field: 'ebit', headerName: 'EBIT', width: 70 },
    { field: 'ebitGrowth', headerName: 'EBIT Growth (%)', width: 100 },
    { field: 'pat', headerName: 'Profit after Tax (PAT)', width: 70 },
    { field: 'patGrowth', headerName: 'PAT Growth (%)', width: 100 },
    { field: 'ebitMargin', headerName: 'EBIT Margin (%)', width: 100 },
    { field: 'npmMargin', headerName: 'Net Profit Margin (%)', width: 100 },
    //---------------------------SHARE HOLDING------------------
    { field: 'priniters', headerName: 'Promoters', width: 70 },
    { field: 'pledge', headerName: 'Pledge', width: 70 },
    { field: 'fii', headerName: 'FII', width: 70 },
    { field: 'dii', headerName: 'DII', width: 70 },
    { field: 'mf', headerName: 'Mutual Funds', width: 70 },
    { field: 'others', headerName: 'Others', width: 70 },
  ];
  let rows = [];
  const rows1 = props.keymatData.map((element) =>
    rows.push({
      id: props.keymatData.indexOf(element),
      name: element.name,
      peRatio: element.keyMetrics[0].keyValue,
      eps: element.keyMetrics[1].keyValue,
      mCap: element.keyMetrics[2].keyValue,
      mCapRank: element.keyMetrics[3].keyValue,
      pbRatio: element.keyMetrics[4].keyValue,
      divYield: element.keyMetrics[5].keyValue,
      faceValue: element.keyMetrics[6].keyValue,
      vwap: element.keyMetrics[7].keyValue,
      //------------------------------------------FINANCIAL -------------------
      ttlInc: element.financialsStatus[0].finStatus,
      ttlIncGrowth: element.financialsStatus[1].finStatus,
      ttlExp: element.financialsStatus[2].finStatus,
      ttlExpGrowth: element.financialsStatus[3].finStatus,
      ebit: element.financialsStatus[4].finStatus,
      ebitGrowth: element.financialsStatus[5].finStatus,
      pat: element.financialsStatus[6].finStatus,
      patGrowth: element.financialsStatus[7].finStatus,
      ebitMargin: element.financialsStatus[8].finStatus,
      npmMargin: element.financialsStatus[9].finStatus,
      //------------------------------------------------------SHAREHOLDER---------------
      priniters: element.shareHoldingData[0].shareStatus,
      pledge: element.shareHoldingData[1].shareStatus,
      fii: element.shareHoldingData[2].shareStatus,
      dii: element.shareHoldingData[3].shareStatus,
      mf: element.shareHoldingData[4].shareStatus,
      others: element.shareHoldingData[5].shareStatus,
    })
  );

  //   const rows = [
  //     {
  //       id: 1,
  //       lastName: 'Snow',
  //       firstName: 'Jon',
  //       age: 35,
  //       fullName: 'Jon Snow',
  //     },
  //   ];

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[30]}
        // {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
