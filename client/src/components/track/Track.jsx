import React, { useEffect, useState } from "react";
import { getTrack } from "../../api/spotify";
import Navbar from "../Navbar";
import { useWindowWidth } from "@react-hook/window-size";
import { useParams } from "react-router";
import PlayOnSpotify from "./PlayOnSpotify";

export default function Artist() {
  const [trackInfo, setTrackInfo] = useState(null);
  const { id } = useParams();
  const width = useWindowWidth();

  useEffect(() => {
    async function fetchData() {
      const data = await getTrack(id);
      setTrackInfo(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        {trackInfo && (
          <div className="track-page">
            <div className="track-page__album-art">
              <img
                src={
                  width > 770
                    ? trackInfo.album.images[0].url
                    : trackInfo.album.images[1].url
                }
                alt={`${trackInfo.name} picture`}
                className="track-page__album-art--picture"
              />
            </div>
            <div className="track-page__basic-info">
              <h1>{trackInfo.name}</h1>
              <h3 className="track-page__basic-info--subtext">
                {trackInfo.artists[0].name}
              </h3>
              <h3 className="track-page__basic-info--subtext">
                {trackInfo.album.name}
              </h3>
            </div>
            <div className="track-page__advanced-info">
              <div className="track-page__advanced-info--section">
                <h2 className="stat">{trackInfo.popularity}%</h2>
                <h3 className="stat-title">Popularity</h3>
              </div>
              <div className="track-page__advanced-info--section">
                <h2 className="stat">
                  {trackInfo.album.release_date.slice(0, 4)}
                </h2>
                <h3 className="stat-title">Year</h3>
              </div>
            </div>
            <PlayOnSpotify url={trackInfo.external_urls.spotify} />
          </div>
        )}
      </div>
    </>
  );
}
