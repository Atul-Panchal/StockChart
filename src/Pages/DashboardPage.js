import React from "react";
import { Link } from "react-router-dom";

import "./DashboardPage.css";

function DashboardPage() {
  return (
    <>
      <div className="dashboard-main">
        <div className="container text-center">
          <div className="row mt-4">
            <div className="col-lg-1"></div>
            <div className="col-lg-3 col-md-12 mt-3">
              <div className="start-trade-style bg-white shadow border-0 p-3">
                <p className="lead">Star Trade 1</p>
                <Link to="/starttrade1" className="btn btn-primary">
                  Click
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 col-md-12 mt-3">
              <div className="start-trade-style bg-white shadow border-0 p-3">
                <p className="lead">Star Trade 2</p>
                <Link to="/starttrade2" className="btn btn-primary">
                  Click
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 col-md-12 mt-3">
              <div className="start-trade-style bg-white shadow border-0 p-3">
                <p className="lead">Star Trade 3</p>
                <Link to="/starttrade3" className="btn btn-primary">
                  Click
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
