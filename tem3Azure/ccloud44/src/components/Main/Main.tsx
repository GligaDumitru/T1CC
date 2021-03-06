import React from "react";
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "firebase/auth";

import NotFound from "../../pages/NotFound/NotFound";
import Home from "../../pages/Home/Home";
import Login from "./../Auth/Login";
import Register from "./../Auth/Register";
import Nav from "../Nav/Nav";
import Account from "./../../pages/Account/Account";
import ViewMap from "../../pages/Account/ViewMap";

const Main: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <>
            <Nav />
            <Login />
          </>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/map">
          <Nav />
          <ViewMap />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
