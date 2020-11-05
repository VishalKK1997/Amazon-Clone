import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Payment from "./components/Payment/Payment";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";

const promise = loadStripe(
  "pk_test_51HjPsuE57SQoCXAVpVO7NOgbpq6jgpB6tlqilvEq7AF7KA5jTyQZsOV7EvCbK64MC6wUyzWvNqnFn6HyWVQxNcHr00gZ6mzqne"
);

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / user was logged in

        dispatch({ type: "SET_USER", user: authUser });
      } else {
        // the user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
