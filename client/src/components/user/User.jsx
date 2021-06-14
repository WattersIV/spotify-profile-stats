import React, { useEffect } from "react";
import { useState } from "react";
import { getUserData } from "../../api/spotify";
import PersonIcon from "@material-ui/icons/Person";
import CircularProgress from "@material-ui/core/CircularProgress";
import PlayingNow from "./PlayingNow";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";
const lookup = require("country-code-lookup");

export default function User() {
  const [profile, setProfile] = useState(null);
  const [listening, setListening] = useState(null);
  const [songs, setSongs] = useState(null);
  const [artists, setArtists] = useState(null);
  const [following, setFollowing] = useState(null);
  useEffect(() => {
    getUserData().then((data) => {
      const profileData = data[0];
      const listeningData = data[1];
      const songData = data[2];
      const artistData = data[3];
      const followingData = data[4];
      const userCountry = lookup.byInternet(profileData.country).country;
      profileData.country = userCountry;
      setProfile(profileData);
      setListening(listeningData);
      setSongs(songData);
      setArtists(artistData);
      setFollowing(followingData);
    });
  }, []);
  return (
    <>
      {/* Need to wait for profile data */}
      {profile ? (
        <div className="user">
          <div className="user__picture">
            {profile.images.length ? (
              <img src={profile.images[0].src} alt="profile icon" />
            ) : (
              <div className="user__picture--circle">
                <PersonIcon className="user__picture--default" />
              </div>
            )}
          </div>
          <div className="user__name">
            <h1 className="user__name--text">{profile.display_name}</h1>
          </div>
          <div className="user__stats">
            <div className="user__stats--section">
              <h2 className="user__stats--stat">{profile.country}</h2>
              <h4 className="user__stats--header">Country</h4>
            </div>

            <div className="user__stats--section">
              <h2 className="user__stats--stat">{profile.followers.total}</h2>
              <h4 className="user__stats--header">Followers</h4>
            </div>

            <div className="user__stats--section">
              {following && (
                <h2 className="user__stats--stat">
                  {following.artists.items.length}
                </h2>
              )}
              <h4 className="user__stats--header">Following</h4>
            </div>
          </div>
          {listening && <PlayingNow listening={listening} />}
          {songs && artists && (
            <ul className="user__top-played">
              <li className="user__top-played--section" key="songs">
                <TopSongs songs={songs} />
              </li>
              <li className="user__top-played--section">
                <TopArtists artists={artists} key="artists" />
              </li>
            </ul>
          )}
        </div>
      ) : (
        <CircularProgress className="loading" />
      )}
    </>
  );
}
