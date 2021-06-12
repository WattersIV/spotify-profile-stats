import React, { useEffect } from "react";
import { useState } from "react";
import { getUserData } from "../api/spotify";
import PersonIcon from "@material-ui/icons/Person";
import CircularProgress from "@material-ui/core/CircularProgress";
const lookup = require("country-code-lookup");

export default function User() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getUserData().then((data) => {
      const userCountry = lookup.byInternet(data.country).country;
      data.country = userCountry;
      setProfile(data);
    });
  }, []);
  return (
    <>
      {/* Need to wait for profile data */}
      {profile ? (
        <div className="user">
          <div className="user__picture">
            {profile.images.length ? null : (
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
              <h2 className="user__stats--stat">EDM</h2>
              <h4 className="user__stats--header">Top Genre</h4>
            </div>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
