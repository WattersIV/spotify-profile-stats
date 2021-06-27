import React from "react";
import { Switch, Route } from "react-router-dom";
const User = React.lazy(() => import("./user/User"));
const Artists = React.lazy(() => import("./artists/Artists"));
const Tracks = React.lazy(() => import("./tracks/Tracks"));
const Artist = React.lazy(() => import("./artist/Artist"));
const Track = React.lazy(() => import("./track/Track"));

export default function Routes() {
  return (
    <React.Suspense fallback={"Loading"}>
      <Switch>
        <Route path="/artist/:id" component={Artist} />
        <Route path="/artists" component={Artists} />
        <Route path="/track/:id" component={Track} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/" component={User} />
      </Switch>
    </React.Suspense>
  );
}
