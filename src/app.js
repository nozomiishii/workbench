import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
