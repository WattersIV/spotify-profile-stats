import React, { useEffect, useState } from "react";
import { getArtist } from "../../api/spotify";
import Navbar from "../Navbar";
import { useParams } from "react-router";

export default function Artist() {
  const [artistInfo, setArtistInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await getArtist(id);
      setArtistInfo(data);
    }
    fetchData();
  }, []);

  const humanReadableNum = (num) => {
    let newNum = "";
    num = String(num);
    console.log("post str", num);
    for (let idx = 0; idx < num.length; idx++) {
      if (idx % 3 === 0 && idx !== 0) newNum += ",";
      newNum += num[idx];
    }
    return newNum;
  };

  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        {artistInfo && (
          <div className="artist-info">
            <div className="artist-info__img-container">
              <img
                src={artistInfo.images[2].url}
                alt={`${artistInfo.name} picture`}
                className="artist-info__img-container--picture"
              />
            </div>
            <h1 className="center">{artistInfo.name}</h1>
            <div className="artist-info__stats">
              <div className="artist-info__section">
                <h2>{artistInfo.popularity}%</h2>
                <h3 className="title-text">Popularity</h3>
              </div>
              <div className="artist-info__section">
                <h2>{humanReadableNum(artistInfo.followers.total)}</h2>
                <h3 className="title-text">Followers</h3>
              </div>
            </div>
            <div className="artist-info__genres">
              <ul>
                {artistInfo.genres.map((genre) => {
                  return <li key={`${genre}`}>{genre}</li>;
                })}
              </ul>
              <h3>Genres</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
