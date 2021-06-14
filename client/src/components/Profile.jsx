import React from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <Routes />
      </div>
    </>
  );
}
