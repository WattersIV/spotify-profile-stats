import React from "react";
import SpotifyLogo from "../images/SpotifyLogo";
import PersonIcon from "@material-ui/icons/Person";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MicIcon from "@material-ui/icons/Mic";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav--spotify-logo">
        <SpotifyLogo />
      </div>
      <div className="nav__middle-icons">
        <div className="nav__middle-icons--unit">
          <Link to="/">
            <PersonIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Profile</h4>
        </div>
        <div className="nav__middle-icons--unit">
          <Link to="/tracks">
            <MusicNoteIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Profile</h4>
        </div>
        <div className="nav__middle-icons--unit">
          <Link to="/artists">
            <MicIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Profile</h4>
        </div>
      </div>
    </div>
  );
}
