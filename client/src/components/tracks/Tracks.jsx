import React, { useEffect, useState } from "react";
import { getTopListening } from "../../api/spotify";
import SamplePlayer from "./SamplePlayer";

export default function Tracks() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [tracks, setTracks] = useState(null);
  useEffect(() => {
    // fetch based on new time range
    async function getTracks() {
      const tracksData = await getTopListening(timeRange, "tracks", 50);
      setTracks(tracksData);
    }
    getTracks();
  }, [timeRange]);

  useEffect(() => {
    // First render needs to get the long term tracks on state change fetch a new length
    async function getTracks() {
      const tracksData = await getTopListening(timeRange, "tracks", 50);
      setTracks(tracksData);
    }
    getTracks();
  }, []);
  console.log(tracks);
  return (
    <div className="t-a">
      <div className="t-a__titles">
        <>
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
        </>
      </div>
      {tracks && (
        <ul className="tracks">
          {tracks.items.map((track) => {
            return (
              <li className="track">
                <div className="track__image-wrapper">
                  <img
                    src={track.album.images[1].url}
                    alt={`${track.album.name} cover`}
                  />
                </div>
                <div className="track__info">
                  <h3>{track.name}</h3>
                  <div className="track__info--artist">
                    <h5>
                      {" "}
                      {`${track.album.artists[0].name} - ${track.album.name}`}{" "}
                    </h5>
                  </div>
                </div>
                {track.preview_url && (
                  <SamplePlayer url={track.preview_url} name={track.name} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
