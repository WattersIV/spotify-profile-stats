import React from "react";
import { Button } from "@material-ui/core";

export default function Login() {
  const loginURI = "http://localhost:8000/login";
  return (
    <div className="login">
      <h1>Welcome To Spotify Profile Data</h1>
      <h2 className="login__subtitle">Log in to see your stats</h2>
      <Button className="login__button" classhref={loginURI}>
        Log In To Spotify
      </Button>
    </div>
  );
}
