import React from "react";
import {Switch, Route } from "react-router-dom";
import User from "./user/User";
import Artists from "./Artists";
import Tracks from "./Tracks";

export default function Routes() {
  return (
    <Switch>
      <Route path="/artists">
        <Artists />
      </Route>
      <Route path="/tracks">
        <Tracks />
      </Route>
      <Route path="/">
        <User />
      </Route>
    </Switch>
  );
}
