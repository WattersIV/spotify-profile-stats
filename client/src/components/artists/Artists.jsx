import React, { useEffect, useState } from "react";
import { getTopListening } from "../../api/spotify";

export default function Artists() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    // fetch based on new time range
    console.log(timeRange);
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
    <div className="t-a">
      <h1>Top Artists</h1>
      <ul className="t-a__selectors">
        <li className="t-a__selectors--item">
          <button
            onClick={() => {
              setTimeRange("long_term");
            }}
            className="rm-button-style"
          >
            All Time
          </button>
        </li>
        <li className="t-a__selectors--item">
          <button
            onClick={() => {
              setTimeRange("medium_term");
            }}
            className="rm-button-style"
          >
            6 Months
          </button>
        </li>
        <li className="t-a__selectors--item">
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
    </div>
  );
}
