import Axios from "../Request/Axios";

export const signup = function ({ email, password, name, phone }) {
  return async function (dispatch) {
    await dispatch({
      type: "LOADING",
      payload: { loading: true, error: "" },
    });
    const response = await Axios.post("/signup", {
      email,
      password,
      phone,
      name,
    });
    if (response.data.condition) {
      localStorage.setItem("TRADINGTOKEN", response.data.token);

      // await dispatch({type: 'LOGIN', payload: response.data.id});
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "" },
      });
      window.location.reload();
    } else {
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "Please Try Again Later!" },
      });
    }
  };
};

export const login = function ({ email, password }) {
  return async function (dispatch) {
    await dispatch({
      type: "LOADING",
      payload: { loading: true, error: "" },
    });

    const response = await Axios.post("/login", { email, password });
    if (response.data.condition) { 
      localStorage.setItem("TRADINGTOKEN", response.data.token);
      localStorage.setItem("EMAIL", email);
      localStorage.setItem("USERID", response.data.id);
      // await dispatch({type: 'LOGIN', payload: response.data.id});
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "" },
      });
      window.location.reload();
    } else {
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "Please Try Again Later!" },
      });
    }
  };
};

export const logout = function () {
  return async function (dispatch) {
    localStorage.removeItem("TRADINGTOKEN"); 
    localStorage.removeItem("EMAIL"); 
    localStorage.removeItem("USERID")
    // window.sessionStorage.removeItem();
    // await dispatch({type: 'LOGOUT', payload: false});
    window.location.reload();
  };
};

export const forgetpassword = function ({ email, password }, history) {
  return async function (dispatch) {
    await dispatch({
      type: "LOADING",
      payload: { loading: true, error: "" },
    });
    const response = await Axios.post("/forgetpassword", { email, password });
    if (response.data.condition) {
      alert("Successfully Chenged");
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "" },
      });
      history.push("/");
    } else {
      alert("Please try again later");
      await dispatch({
        type: "LOADING",
        payload: { loading: false, error: "" },
      });
      history.push("/");
    }
  };
};

export const checkAuth = function () {
  return async function (dispatch) {
    const response = await Axios.post("/checkAuth");
    if (response.data.condition) {
      await dispatch({ type: "LOGIN", payload: response.data.id });
    } else {
      await dispatch({ type: "LOGOUT", payload: false });
    }
  };
};
