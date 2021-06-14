import React from "react";

export default function TopArtists(props) {
  const { artists } = props;
  return (
    <ul className="top-artists">
      <h2>Top 5 Artists of All Time</h2>
      {artists.items.map((artist) => {
        return (
          <li className="top-artists__artist" key={artist.name}>
            <div className="top-artists__artist--image-container">
              <img
                src={artist.images[2].url}
                alt={`${artist.name} avatar`}
                className="top-artists__artist--image"
              />
            </div>
            <div className="top-artists__artist--name-container">
              <h3 className="top-artists__artist--name">{artist.name}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
