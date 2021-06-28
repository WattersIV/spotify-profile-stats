import React from "react";
import LoadMore from "./LoadMore";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

export default function TopArtists(props) {
  const { artists, setArtists } = props;
  const history = useHistory();
  return (
    <>
      <h2>Top 5 Artists of All Time</h2>
      <ul className="top-artists">
        {artists.items.map((artist) => {
          return (
            <li className="top-artists__artist" key={artist.name}>
              <div
                className="top-artists__artist--image-container"
                onClick={() => history.push(`/artist/${artist.id}`)}
              >
                <img
                  src={artist.images[2].url}
                  alt={`${artist.name} avatar`}
                  className="top-artists__artist--image"
                />
                <div className="overlay-round">
                  <InfoIcon className="info-icon sm-icon" />
                </div>
              </div>
              <div className="top-artists__artist--name-container">
                <h3 className="top-artists__artist--name">{artist.name}</h3>
              </div>
            </li>
          );
        })}
      </ul>
      <LoadMore
        fetchMoreUrl={artists.next}
        update={setArtists}
        current={artists}
      />
    </>
  );
}
