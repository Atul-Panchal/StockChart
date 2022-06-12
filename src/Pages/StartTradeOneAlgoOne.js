import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Axios from "../Request/Axios";
import Navbar from "../uielements/Navbar";
import url from "../urls/Url";

let socket;

function StartTradeOneAlgoOne() {
  const [list, setList] = useState([]);
  const [enterTrade, setEnterTrade] = useState([]);
  const [exitTrade, setExitTrade] = useState([]);

  useEffect(function () {
    socket = io(url.SERVER_URL);
    socket.on("trading_data", function ({ list, enter_trade, exit_trade }) {
      setEnterTrade(function () {
        return enter_trade;
      });
      setExitTrade(function () {
        return exit_trade;
      });
      setList(function () {
        return list;
      });
    });
    return function () {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const init = async () => {
      const response = await Axios.post("/tradingData");
      if (response.data.condition) {
        setEnterTrade(function () {
          return response.data.enter_trade;
        });
        setExitTrade(function () {
          return response.data.exit_trade;
        });
        setList(function () {
          return response.data.list;
        });
      }
    };
    init();
  }, []);

  async function onNiftyClick() {
    const password = prompt("Please Enter password");
    if (password !== null) {
      if (password.toString() === "1845") {
        await Axios.post("/main_nifty");
      }
    }
  }

  async function onBankNiftyClick() {
    const password = prompt("Please Enter password");
    if (password !== null) {
      if (password.toString() === "1845") {
        await Axios.post("/main_bnf");
      }
    }
  }

  async function onStopNiftyClick() {
    await Axios.post("/stop_nifty");
  }

  async function onStopBankNiftyClick() {
    await Axios.post("/stop_bnf");
  }

  return (
    <div>
      <Navbar
        condition={true}
        targetLinkAlgo1="/starttrade1/algo1"
        targetLinkAlgo2="/starttrade1/algo2"
        targetLinkAlgo3="/starttrade1/algo3"
      />
      <div className="container d-flex justify-content-center my-4">
        <button onClick={onNiftyClick} className="btn btn-primary mx-2">
          Start NIFTY trading
        </button>
        <button className="btn btn-primary mx-2" onClick={onBankNiftyClick}>
          Start BNF trading
        </button>
      </div>
      <div className="container d-flex justify-content-center my-4">
        <button onClick={onStopNiftyClick} className="btn btn-primary mx-2">
          Stop NIFTY trading
        </button>
        <button className="btn btn-primary mx-2" onClick={onStopBankNiftyClick}>
          Stop BNF trading
        </button>
      </div>
      <div className="my-3 text-center">
        <h1>Potential options to trade</h1>
      </div>

      <div className="container" style={{ height: "400px", overflow: "auto" }}>
        <table className="table table-striped">
          <tr className="">
            <th className="">Symbol</th>
            <th className="">Time</th>
            <th className="">current_p</th>
            <th className="">action</th>
            <th className="">entry_p</th>
            <th className="">target</th>
            <th className="">stoploss</th>
          </tr>
          {list &&
            list.length > 0 &&
            list.map(function (item) {
              return (
                <tr className="">
                  <td className="">{item.symbol}</td>
                  <td className="">{item.time}</td>
                  <td className="">{item.current_p}</td>
                  <td className="">{item.action}</td>
                  <td className="">{item.entry_p}</td>
                  <td className="">{item.target}</td>
                  <td className="">{item.stoploss}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <div className="my-3 text-center">
        <h1>Active trades</h1>
      </div>

      <div className="container" style={{ height: "400px", overflow: "auto" }}>
        <table className="table table-striped">
          <tr className="">
            <th className="">Symbol</th>
            <th className="">Time</th>
            <th className="">action</th>
            <th className="">entry_p</th>
            <th className="">target</th>
            <th className="">stoploss</th>
            <th className="">lot</th>
          </tr>
          {enterTrade &&
            enterTrade.length > 0 &&
            enterTrade.map(function (item) {
              return (
                <tr className="">
                  <td className="">{item.symbol}</td>
                  <td className="">{item.time}</td>
                  <td className="">{item.action}</td>
                  <td className="">{item.entry_p}</td>
                  <td className="">{item.target}</td>
                  <td className="">{item.stoploss}</td>
                  <td className="">{item.lot}</td>
                </tr>
              );
            })}
        </table>
      </div>

      <div className="my-3 text-center">
        <h1>Recently exited trades</h1>
      </div>

      <div className="container" style={{ height: "400px", overflow: "auto" }}>
        <table className="table table-striped">
          <tr className="">
            <th className="">Symbol</th>
            <th className="">Time</th>
            <th className="">action</th>
            <th className="">exit_p</th>
            <th className="">target</th>
            <th className="">stoploss</th>
            <th className="">lot</th>
            <th className="">PnL</th>
          </tr>
          {exitTrade &&
            exitTrade.length > 0 &&
            exitTrade.map(function (item) {
              return (
                <tr className="">
                  <td className="">{item.symbol}</td>
                  <td className="">{item.time}</td>
                  <td className="">{item.action}</td>
                  <td className="">{item.exit_p}</td>
                  <td className="">{item.target}</td>
                  <td className="">{item.stoploss}</td>
                  <td className="">{item.lot}</td>
                  <td className="">{item.PnL}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default StartTradeOneAlgoOne;
