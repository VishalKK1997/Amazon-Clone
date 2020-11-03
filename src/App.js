import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
