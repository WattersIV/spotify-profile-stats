import React, { useState, useEffect } from "react";
import "./sass/main.scss";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { token } from "./utils/tokens";

function App() {
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    //On page load get tokens
    setAccessToken(token);
  }, []);
  console.log(token, accessToken);
  return <div className="app">{accessToken ? <Profile /> : <Login />}</div>;
}

export default App;
