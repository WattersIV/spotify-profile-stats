import React from "react";
import { Button } from "@material-ui/core";

export default function PlayOnSpotify(props) {
  const { url } = props;

  return (
    <Button id="play-on-spotify" href={url}>
      Play on Spotify
    </Button>
  );
}
