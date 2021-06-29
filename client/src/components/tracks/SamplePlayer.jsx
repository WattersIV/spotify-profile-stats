import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function SamplePlayer(props) {
  const { url, name } = props;
  const [playing, setPlaying] = useState(false);
  return (
    <div className="audio-player">
      {playing ? (
        <button
          aria-label="play button"
          className={`rm-button-style audio-button`}
          onClick={() => setPlaying(!playing)}
        >
          <PauseIcon />
        </button>
      ) : (
        <button
          className={`rm-button-style audio-button`}
          onClick={() => setPlaying(!playing)}
        >
          <PlayArrowIcon />
        </button>
      )}
      <Sound
        url={url}
        autoLoad={true}
        playStatus={playing ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlaying(false)}
      />
    </div>
  );
}
