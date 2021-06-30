import React from "react";
import { Button } from "@material-ui/core";

export default function Login() {
  const loginURI =
    "https://spotify-profile-stats-server.herokuapp.com/login" ||
    "http://localhost:8080/login";
  return (
    <div className="login">
      <h1>Welcome To Spotify Profile Data</h1>
      <h2 className="login__subtitle">Log in to see your stats</h2>
      <Button className="login__button" href={loginURI}>
        Log In To Spotify
      </Button>
    </div>
  );
}
