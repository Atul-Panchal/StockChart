import React, { useState } from "react";
import { connect } from "react-redux";

import { forgetpassword } from "../action";
import Axios from "../Request/Axios";

function ForgetPasswordPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [condition, setCondition] = useState(false);

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (condition) {
      await props.forgetpassword({ email, password }, props.history);
    } else {
      const response = await Axios.post("/forgetpasswordCheckEmail", { email });
      if (response.data.condition) {
        setCondition(function () {
          return true;
        });
        setError(function () {
          return "";
        });
      } else {
        setError("Please Enter Correct Email");
      }
    }
  }

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div
          className="card mt-5 text-center shadow login-card"
          style={{ width: "20rem" }}
        >
          <div className="card-header lead">Forget Password</div>
          <div className="card-body">
            <form onSubmit={onFormSubmit}>
              {!condition && (
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="email"
                    onChange={onEmailChange}
                    value={email}
                    placeholder="Enter Registered Email"
                  />
                </div>
              )}
              {condition && (
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="password"
                    onChange={onPasswordChange}
                    value={password}
                    placeholder="Enter New Password"
                  />
                </div>
              )}
              {error}
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  {props.loading.loading ? (
                    <div className="spinner-grow" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : condition ? (
                    "Update"
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(mapStateToProps, { forgetpassword })(ForgetPasswordPage);
