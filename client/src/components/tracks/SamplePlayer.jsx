import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function SamplePlayer(props) {
  const { url, name, setSongPlaying, songPlaying } = props;

  console.log(songPlaying === name, songPlaying, name);

  return (
    <div className="audio-player">
      {songPlaying === name ? (
        <button
          aria-label="play button"
          className={`rm-button-style audio-button`}
          onClick={() => setSongPlaying(null)}
        >
          <PauseIcon />
        </button>
      ) : (
        <button
          className={`rm-button-style audio-button`}
          onClick={() => setSongPlaying(name)}
        >
          <PlayArrowIcon />
        </button>
      )}
      <Sound
        url={url}
        autoLoad={true}
        playStatus={
          songPlaying === name ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        onFinishedPlaying={() => setSongPlaying(null)}
      />
    </div>
  );
}
