import React from "react";
import SpotifyLogo from "../images/SpotifyLogo";
import PersonIcon from "@material-ui/icons/Person";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MicIcon from "@material-ui/icons/Mic";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav--spotify-logo">
        <SpotifyLogo />
      </div>
      <div className="nav__middle-icons">
        <PersonIcon className="nav__middle-icons--icon" />
        <MusicNoteIcon className="nav__middle-icons--icon" />
        <MicIcon className="nav__middle-icons--icon" />
      </div>
    </div>
  );
}
