import React from "react";

export default function PlayingNow(props) {
  const { listening } = props;

  // If its an add dont render anything
  if (listening.item === null) return;

  return (
    <div className="playing-now">
      <h2 className="playing-now--title">Playing Now</h2>
      <div className="playing-now__art">
        <img
          src={listening.item.album.images[1].url}
          alt="current song cover art"
        />
      </div>
      <div className="playing-now__info">
        <h2 className="playing-now__info--song">{listening.item.name}</h2>
        <h3 className="playing-now__info--artist">
          {listening.item.artists[0].name} - {listening.item.album.name}
        </h3>
      </div>
    </div>
  );
}
