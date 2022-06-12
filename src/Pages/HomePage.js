import React from "react";
import ContactUs from "../Component/ContactUs";

import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center home-headline">
          PROFITABLE TRADERS MAKING MONEY FOR YOU. 9 TIMES MORE CHANCES OF
          MAKING PROFITS
        </h2>
        <p className="text-center mb-4 lead">
          No charts, no Indicators, no price-action, no complicated
          calculations, no astrology…. Nothing…..Just 1 click!
        </p>
        <div className="row text-center row-style">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-3 col-md-12 my-4">
            <div className="card title-div shadow border-0 justify-content-center lead">
              Profitable Trader – 10%
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-3 col-md-12 my-4">
            <div className="card title-div shadow border-0 justify-content-center lead">
              Loss-making Traders – 90%
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
        </div>
        <h2 className="text-center mt-4">How does it work?</h2>
        <hr className="how-it-work-line" />
        <div className="row mt-4 text-center row-style">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">1</h5>
            <p className=" lead">
              Choose the Star Trader you want to take the trade of.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">2</h5>
            <p className=" lead">Star Traders take their trade.</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">3</h5>
            <p className=" lead">
              You take exact same Trades (your own quantity) using cutting-edge
              technology
            </p>
          </div>
        </div>
        <h2 className="text-center mt-4">What is needed ?</h2>
        <hr className="what-is-need-line" />
        <div className="row mt-4 text-center row-style">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">1</h5>
            <p className=" lead">
              Online Indian Bank account with single holder
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">2</h5>
            <p className=" lead">Open an Account with any of the Brokers</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5 className="">3</h5>
            <p className=" lead">Register and start trading!</p>
          </div>
        </div>
        <h2 className="text-center mt-4">About Us</h2>
        <hr className="about-us-line" />
        <p className="text-center lead my-4">
          LetsMaalamaal.com is a platform for honest retail trading for people
          who have a full-time job and want to create an alternate source of
          income from trading on the stock markets. We are at the ideal
          intersection of trading expertise and cutting-edge trading technology.
          On the one hand we have a group of Traders on our platform who have
          been in trading for many years, have a successful track-record in the
          market and are profitable. These Traders bring in a rich heritage of
          honest and profitable trading across asset classes. On the other hand,
          we have developed proprietary technology which will make trading
          possibly easiest across the world. Blend of these two factors – wealth
          of years of rich domain knowledge of the Stock market and
          state-of-the-art of trading technology is a lethal combination
          assuring our customers of a profitable experience. Our mission is to
          connect the world with latest and greatest in trading with ease of
          trade-execution that makes the path to financial prosperity easier for
          everyone. From breakouts to unusual volume, analyst ratings, futures
          and options, LetsMaalamaal.com is the leading full-service, one-stop
          shop for Retail traders who have full-time jobs. The investments in
          new technology continues as we want to be at the forefront of enabling
          Retail traders to profitable trades and keeping the losses to minimum.
          We are committed to create 100 Million profitable Retail Traders
          within the next 5 years. If you are interested in doing business with
          LetsMaalamaal.com, then please contact us – trading@letsmaalamaal.com
        </p>
        <h2 className="text-center mt-4">Contact Us</h2>
        <hr className="contact-us-line" />
      </div>
      <ContactUs />
    </div>
  );
}

export default HomePage;
