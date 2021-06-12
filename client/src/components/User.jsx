import React, { useEffect } from "react";
import { useState } from "react";
import { getUserData } from "../api/spotify";

export default function User() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getUserData().then((data) => {
      setProfile(data);
    });
  }, []);
  return <h1>USER</h1>;
}
