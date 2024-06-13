import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//Importing whole file so that it would run in this program
import store from "./store";

store.dispatch({ type: "account/deposit", payload: 500 });


store.dispatch({
  type: "customer/createCustomer",
  payload: { fullName: "Ankit", nationalID: "112" },
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
