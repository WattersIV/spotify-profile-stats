import React from "react";
import User from "./User";
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
