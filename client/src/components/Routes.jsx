import React from "react";
import { Switch, Route } from "react-router-dom";
import User from "./user/User";
import Artists from "./artists/Artists";
import Tracks from "./tracks/Tracks";
import Artist from "./artist/Artist";

export default function Routes() {
  return (
    <Switch>
      <Route path="/artist/:id">
        <Artist />
      </Route>
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
