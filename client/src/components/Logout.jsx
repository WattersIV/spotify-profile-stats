import React from "react";
import { Button } from "@material-ui/core";
import { logout } from "../api/spotify";

export default function Logout() {
  return (
    <Button id="logout" onClick={logout}>
      Log Out
    </Button>
  );
}
