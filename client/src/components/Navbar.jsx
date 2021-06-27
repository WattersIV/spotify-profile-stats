import React from "react";
import SpotifyLogo from "../images/SpotifyLogo";
import PersonIcon from "@material-ui/icons/Person";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MicIcon from "@material-ui/icons/Mic";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

export default function Navbar() {
  //Could break when going to prod depending on the url
  const url = window.location.href.split("/")[3];

  return (
    <div className="nav">
      <div className="nav--spotify-logo">
        <Link to="/" className="nav__middle-icons--link">
          <SpotifyLogo />
        </Link>
      </div>
      <div className="nav__middle-icons">
        <div
          className={
            url === ""
              ? "nav__middle-icons--unit selected-item"
              : "nav__middle-icons--unit"
          }
        >
          <Link to="/" className="nav__middle-icons--link">
            <PersonIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Profile</h4>
        </div>
        <div
          className={
            url === "tracks"
              ? "nav__middle-icons--unit selected-item"
              : "nav__middle-icons--unit"
          }
        >
          <Link to="/tracks" className="nav__middle-icons--link">
            <MusicNoteIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Songs</h4>
        </div>
        <div
          className={
            url === "artists"
              ? "nav__middle-icons--unit selected-item"
              : "nav__middle-icons--unit"
          }
        >
          <Link to="/artists" className="nav__middle-icons--link">
            <MicIcon className="nav__middle-icons--icon" />
          </Link>
          <h4>Artists</h4>
        </div>
        <div className="nav--github-logo">
          <a
            href="https://github.com/WattersIV/spotify-profile-stats"
            className="nav__middle-icons--link"
          >
            <GitHubIcon className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
