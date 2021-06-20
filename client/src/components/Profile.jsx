import React from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Profile() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
