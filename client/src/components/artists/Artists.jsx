import React, { useEffect, useState } from "react";
import { getTopListening } from "../../api/spotify";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";

export default function Artists() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [artists, setArtists] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // fetch based on new time range
    async function getArtists() {
      const artistsData = await getTopListening(timeRange, "artists", 50);
      setArtists(artistsData);
    }
    getArtists();
  }, [timeRange]);

  useEffect(() => {
    // First render needs to get the long term tracks on state change fetch a new length
    async function getArtists() {
      const artistsData = await getTopListening(timeRange, "artists", 50);
      setArtists(artistsData);
    }
    getArtists();
  }, []);

  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <div className="t-a">
          <div className="t-a__titles">
            <>
              <h1>Top Artists</h1>
              <ul className="t-a__selectors">
                <li
                  className={
                    timeRange === "long_term"
                      ? "t-a__selectors--item button-underline"
                      : "t-a__selectors--item"
                  }
                >
                  <button
                    onClick={() => {
                      setTimeRange("long_term");
                    }}
                    className="rm-button-style"
                  >
                    All Time
                  </button>
                </li>
                <li
                  className={
                    timeRange === "medium_term"
                      ? "t-a__selectors--item button-underline"
                      : "t-a__selectors--item"
                  }
                >
                  <button
                    onClick={() => {
                      setTimeRange("medium_term");
                    }}
                    className="rm-button-style"
                  >
                    6 Months
                  </button>
                </li>
                <li
                  className={
                    timeRange === "short_term"
                      ? "t-a__selectors--item button-underline"
                      : "t-a__selectors--item"
                  }
                >
                  <button
                    onClick={() => {
                      setTimeRange("short_term");
                    }}
                    className="rm-button-style"
                  >
                    4 Weeks
                  </button>
                </li>
              </ul>
            </>
          </div>
          {artists && (
            <ul className="artists-list">
              {artists.items.map((artist) => {
                return (
                  <li
                    key={artist.name}
                    className="artist"
                    onClick={() => history.push(`/artist/${artist.id}`)}
                  >
                    <div className="artist__img-container">
                      <img
                        src={artist.images[2].url}
                        alt={`${artist.name} picture`}
                        className="artist__img-container--picture"
                      />
                      <div className="overlay-round">
                        <InfoIcon className="info-icon lg-icon" />
                      </div>
                    </div>
                    <h5 className="artist--name">{artist.name}</h5>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
