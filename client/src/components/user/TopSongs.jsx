import React from "react";

export default function TopSongs(props) {
  const { songs } = props;
  return (
    <ul className="top-songs">
      <h2>Top 5 Songs of All Time</h2>
      {songs.items.map((song) => {
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
              <h3 className="top-song__info--name">{song.name}</h3>
              <h5 className="top-songs__info--album">
                {song.artists[0].name} - {song.album.name}
              </h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
