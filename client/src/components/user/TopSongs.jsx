import React from "react";
import LoadMore from "./LoadMore";

export default function TopSongs(props) {
  const { songs, setSongs } = props;
  return (
    <ul className="top-songs">
      <h2>Top 5 Songs of All Time</h2>
      {songs.items.map((song) => {
        console.log("rendering song", song);
        if (song === undefined) return;
        return (
          <li className="top-songs__song" key={song.name}>
            <div className="top-songs__song--image-container">
              <img
                src={song.album.images[2].url}
                alt={`${song.name} avatar`}
                className="top-songs__song--image"
              />
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
      <LoadMore fetchMoreUrl={songs.next} update={setSongs} current={songs} />
    </ul>
  );
}
