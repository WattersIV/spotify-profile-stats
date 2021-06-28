import React from "react";
import LoadMore from "./LoadMore";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

export default function TopSongs(props) {
  const { songs, setSongs } = props;
  const history = useHistory();
  return (
    <>
      <h2>Top 5 Songs of All Time</h2>
      <ul className="top-songs">
        {songs.items.map((song) => {
          if (song === undefined) return;
          return (
            <li className="top-songs__song" key={song.name}>
              <div
                className="top-songs__song--image-container"
                onClick={() => history.push(`/track/${song.id}`)}
              >
                <img
                  src={song.album.images[2].url}
                  alt={`${song.name} avatar`}
                  className="top-songs__song--image"
                />
                <div className="overlay">
                  <InfoIcon className="info-icon sm-icon" />
                </div>
              </div>
              <div className="top-songs__info">
                <h3 className="top-songs__info--name">{song.name}</h3>
                <h5 className="top-songs__info--album">
                  {song.artists[0].name} - {song.album.name}
                </h5>
              </div>
            </li>
          );
        })}
      </ul>
      <LoadMore fetchMoreUrl={songs.next} update={setSongs} current={songs} />
    </>
  );
}
