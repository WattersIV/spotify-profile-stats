import React, { useEffect, useState } from "react";

export default function Tracks() {
  const [timeRange, setTimeRange] = useState("");
  const [tracks, setTracks] = useState(null);
  useEffect(() => {
    // fetch based on new time range
    console.log(timeRange);
  }, [timeRange]);
  useEffect(() => {
    // First render needs to get the long term tracks on state change fetch a new length
  }, []);
  return (
    <div className="t-a">
      <h1>Top Tracks</h1>
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
