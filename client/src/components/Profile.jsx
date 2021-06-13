import React from "react";
import User from "./user/User";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <User />
      </div>
    </>
  );
}
